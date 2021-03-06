const bunyan = require('bunyan');
const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {SHRValueSetLexer} = require('./parsers/SHRValueSetLexer');
const {SHRValueSetParser} = require('./parsers/SHRValueSetParser');
const {SHRValueSetParserListener} = require('./parsers/SHRValueSetParserListener');
const {SHRErrorListener} = require('./errorListener.js');
const {Specifications, Version, ValueSet, CodeSystem, Concept, Identifier} = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-text-import'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

class ValueSetImporter extends SHRValueSetParserListener {
  constructor(specifications = new Specifications, configuration) {
    super();
    // The specifications container to put the mappings into
    this._specs = specifications;
    // The configuration for this specification
    this._config = configuration;
    // The currently active namespace
    this._currentNs = '';
    // The currently active grammar version
    this._currentGrammarVersion = '';
    // The currently active default path -- based on namespace unless specifically defined in file
    this._currentPath = '';
    // The currently active definition (ValueSet)
    this._currentDef = null;
    // The currently active CodeSystem definition (if applicable)
    this._currentCodeSystemDef = null;
    // The external code systems used in this file
    this._csMap = new Map();
  }

  importFile(file) {
    // Setup a child logger to associate logs with the current file
    const lastLogger = logger;
    logger = rootLogger.child({ file: file });
    // 01022, 'Start importing value set file',,
    logger.debug('01022');
    try {
      const errListener = new SHRErrorListener(logger);
      const chars = new FileStream(file);
      const lexer = new SHRValueSetLexer(chars);
      lexer.removeErrorListeners();
      lexer.addErrorListener(errListener);
      const tokens  = new CommonTokenStream(lexer);
      const parser = new SHRValueSetParser(tokens);
      parser.removeErrorListeners();
      parser.addErrorListener(errListener);
      parser.buildParseTrees = true;
      const tree = parser.doc();
      const walker = new ParseTreeWalker();
      walker.walk(this, tree);
    } finally {
      // 01023, 'Done importing value set file',,
      logger.debug('01023');
      this.logger = lastLogger;
    }
  }

  enterDoc(ctx) {
    // Process the namespace
    this._currentNs = ctx.docHeader().namespace().getText();

    // Create the default path.  If the project URL is the same as FHIR url, use FHIR-friendly path
    if (this._config.projectURL === this._config.fhirURL) {
      this._currentPath = `${this._config.projectURL}/ValueSet/${this._currentNs.replace(/\./g, '-')}-`;
    } else {
      this._currentPath = `${this._config.projectURL}/${this._currentNs.replace('.', '/')}/vs/`;
    }

    // Process the version
    const version = ctx.docHeader().version();
    const major = parseInt(version.WHOLE_NUMBER()[0], 10);
    const minor = parseInt(version.WHOLE_NUMBER()[1], 10);
    this._currentGrammarVersion = new Version(major, minor);

    // 01028, 'Start importing value set namespace',,
    logger.debug({shrId: this._currentNs, version: this._currentGrammarVersion.toString()}, '01028');
  }

  exitDoc(ctx) {
    // 01029, 'Done importing value set namespace',,
    logger.debug({shrId: this._currentNs}, '01029');
    // clear current namespace, target spec, and grammar version
    this._currentNs = '';
    this._currentGrammarVersion = null;
  }

  enterVocabularyDef(ctx) {
    const key = ctx.ALL_CAPS().getText();
    let value;
    if (ctx.URL()) {
      value = ctx.URL().getText();
    } else if (ctx.URN_OID()) {
      value = ctx.URN_OID().getText();
    } else if (ctx.URN()) {
      value = ctx.URN().getText();
    }
    this._csMap.set(key, value);
  }

  enterValuesetDef(ctx) {
    const h = ctx.valuesetHeader();
    if (h.URL()) {
      //11008 , 'Defining value sets by URL has been deprecated in ValueSet files. ValueSet ${valueSet1} ignored.' , 'Define the value set with a name using proper syntax.', 'errorNumber'
      logger.error( {valueSet1 : h.URL().getText() }, '11008');
      // Set a dummy unsupported def so the rest of the parsing can occur -- but it won't be added to the definitions
      this._currentDef = new ValueSet(new Identifier('unsupported', 'Unsupported'), 'urn:unsupported');
      return;
    } else if (h.URN_OID()) {
      //11009 , 'Defining value sets by URN has been deprecated in ValueSet files. ValueSet ${valueSet1} ignored.' , 'Define the value set with a name using proper syntax.', 'errorNumber'
      logger.error({valueSet1 : h.URN_OID().getText() }, '11009' );
      // Set a dummy unsupported def so the rest of the parsing can occur -- but it won't be added to the definitions
      this._currentDef = new ValueSet(new Identifier('unsupported', 'Unsupported'), 'urn:unsupported');
      return;
    }
    const identifier = new Identifier(this._currentNs, h.simpleName().getText());
    const url = `${this._currentPath}${identifier.name}`;
    this._currentDef = new ValueSet(identifier, url);
    this._currentDef.grammarVersion = this._currentGrammarVersion;
  }

  enterDescriptionProp(ctx) {
    this._currentDef.description = trimLines(stripDelimitersFromToken(ctx.STRING()));
  }

  enterConcepts(ctx) {
    for (const fqc of ctx.fullyQualifiedCode()) {
      const code = this.processFullyQualifiedCode(fqc);
      if (typeof code !== 'undefined') {
        this._currentDef.addConcept(code);
      }
    }
  }

  enterFullyQualifiedCode(ctx) {
    if (ctx.parentCtx instanceof SHRValueSetParser.ValuesetValueContext) {
      const concept = this.processFullyQualifiedCode(ctx);
      if (typeof concept === 'undefined') {
        return;
      }
      this._currentDef.addValueSetIncludesCodeRule(concept);
    }
    // Other cases are handled elsewhere
  }

  enterValuesetInlineValue(ctx) {
    this.ensureCodeSystemDef();
    const code = ctx.code().CODE().getText().substr(1); // substr to skip the '#'
    const concept = new Concept(this._currentCodeSystemDef.url, code);
    if (ctx.code().STRING()) {
      concept.display = stripDelimitersFromToken(ctx.code().STRING());
    }
    this._currentCodeSystemDef.addCode(concept);
    this._currentDef.addValueSetIncludesCodeRule(concept.clone());
  }

  enterValuesetDescendingFrom(ctx) {
    const fqcCtxs = ctx.fullyQualifiedCode();

    // First fully qualified code is the one to *include* descendents of
    const concept = this.processFullyQualifiedCode(fqcCtxs[0]);
    if (typeof concept === 'undefined') {
      // It doesn't make sense to even try to process the ones to exclude, so just return
      return;
    }
    this._currentDef.addValueSetIncludesDescendentsRule(concept);

    // Remaining fully qualified codes are the ones to *exclude* descendents of
    for (let i=1; i < fqcCtxs.length; i++) {
      const concept = this.processFullyQualifiedCode(fqcCtxs[i]);
      if (typeof concept === 'undefined') {
        // If we can't process an exclude rule, that invalidates the include rule too, so just return
        return;
      }
      this._currentDef.withValueSetExcludesDescendentsRule(concept);
    }
  }

  enterValuesetFromCodeSystem(ctx) {
    const alias = ctx.ALL_CAPS().getText();
    const system = this._csMap.get(alias);
    if (typeof system === 'undefined') {
      //11010 , 'Could not resolve code system for alias: ${alias1}', 'Invalid Codesystem  double check spelling' , 'errorNumber'
      logger.error({alias1 : alias}, '11010');
      return;
    }
    this._currentDef.addValueSetIncludesFromCodeSystemRule(system);
  }

  enterValuesetFromCode(ctx) {
    const concept = this.processFullyQualifiedCode(ctx.fullyQualifiedCode());
    if (typeof concept !== 'undefined') {
      this._currentDef.addValueSetIncludesFromCodeRule(concept);
    }
  }

  exitValuesetDef(ctx) {
    this.pushCurrentDefinition();
  }

  enterUsesStatement(ctx) {
    //11011 , 'Uses statements have been deprecated in ValueSet files. Uses statement ignored.' , 'Uses statement is unnecessary. Refer to documentation for proper syntax', 'errorNumber'
    logger.error('11011');
  }

  enterPathDef(ctx) {
    //11012 , 'Only default path definitions are allowed in ValueSet files. Path definition ignored.' , 'Use one of the preset path definitions defined in the documentation.', 'errorNumber'
    logger.error('11012');
  }

  processFullyQualifiedCode(ctx) {
    if (ctx.ALL_CAPS()) {
      const alias = ctx.ALL_CAPS().getText();
      const system = this._csMap.get(alias);
      if (typeof system === 'undefined') {
        //11010 , 'Could not resolve code system for alias: ${alias1}', 'Invalid Codesystem  double check spelling' , 'errorNumber'
        logger.error({alias1 : alias}, '11010');
        return;
      }
      const code = ctx.code().CODE().getText().substr(1); // substr to skip the '#'
      const concept = new Concept(system, code);
      if (ctx.code().STRING()) {
        concept.display = stripDelimitersFromToken(ctx.code().STRING());
      }
      return concept;
    } else if (ctx.tbdCode()) {
      const concept = new Concept('urn:tbd', 'TBD');
      if (ctx.tbdCode().STRING()) {
        concept.display = stripDelimitersFromToken(ctx.tbdCode().STRING());
      }
      return concept;
    }
  }

  ensureCodeSystemDef() {
    if (typeof this._currentCodeSystemDef === 'undefined' || this._currentCodeSystemDef == null) {
      let csPath;
      if (this._currentPath.indexOf('/vs/') >= 0) {
        csPath = this._currentPath.replace('/vs/', '/cs/');
      } else if (this._currentPath.indexOf('/ValueSet/') >= 0) {
        csPath = this._currentPath.replace('/ValueSet/', '/CodeSystem/');
      } else {
        csPath = `${this._currentPath}cs/`;
      }
      // To eliminate confusion, if the name ends with VS, replace it with CS
      const vsID = this._currentDef.identifier;
      const identifier = new Identifier(vsID.namespace, vsID.name.replace(/VS$/, 'CS'));
      const csURL = `${csPath}${identifier.name}`;
      this._currentCodeSystemDef = new CodeSystem(identifier, csURL);
      if (typeof this._currentDef.description !== 'undefined') {
        this._currentCodeSystemDef.description = this._currentDef.description;
      }
      this._currentCodeSystemDef.grammarVersion = this._currentGrammarVersion;
    }
  }

  pushCurrentDefinition() {
    if (this._currentDef.url == 'urn:unsupported') {
      // This was an unsupport value set definition, so don't add it.
      this._currentDef = null;
      this._currentCodeSystemDef = null;
      return;
    }

    if (this._specs.valueSets.findByIdentifier(this._currentDef.identifier) != null) {
      //11034 , 'ValueSet name ${vsName} already exists.' , 'The value set name already exists within the namespace.', 'errorNumber'
      logger.error({vsName : this._currentDef.identifier.name }, '11034' );
    }

    this._specs.valueSets.add(this._currentDef);
    this._currentDef = null;
    if (typeof this._currentCodeSystemDef !== 'undefined' && this._currentCodeSystemDef != null) {
      this._specs.codeSystems.add(this._currentCodeSystemDef);
      this._currentCodeSystemDef = null;
    }
  }

  specifications() {
    return this._specs;
  }
}

function stripDelimitersFromToken(tkn) {
  const str = tkn.getText();
  // TODO: Also fix escaped double-quotes, but right now, the parser seems to be screwing those up.
  return str.substr(1,str.length -2);
}

function trimLines(str) {
  // The way CIMPL authors often indent their definitions, multi-line descriptions may have indented white space on
  // each new line.  We really don't want that, so we need to trim every line.
  if (typeof str === 'string') {
    return str.split('\n').map(s => s.trim()).join('\n');
  }
  return str;
}

module.exports = {ValueSetImporter, setLogger};
