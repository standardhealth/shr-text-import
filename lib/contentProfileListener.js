const bunyan = require('bunyan');
const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {SHRContentProfileLexer} = require('./parsers/SHRContentProfileLexer');
const {SHRContentProfileParser} = require('./parsers/SHRContentProfileParser');
const {SHRContentProfileParserListener} = require('./parsers/SHRContentProfileParserListener');
const {SHRErrorListener} = require('./errorListener.js');
const {Specifications, Version, ContentProfile, ContentProfileRule, Identifier, IdentifiableValue, ChoiceValue, PrimitiveIdentifier, PRIMITIVES} = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-text-import'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

class ContentProfileImporter extends SHRContentProfileParserListener {
  constructor(specifications = new Specifications()) {
    super();
    // The specifications it collects
    this._specs = specifications;
    // The currently active namespace
    this._currentNs = '';
    // The currently active grammar version
    this._currentGrammarVersion = '';
    // The currently active content profile definition
    this._currentDef = null;
    // The currently active content profile rule
    this._currentRule = null;
  }

  get specifications() { return this._specs; }

  importFile(file) {
    // Setup a child logger to associate logs with the current file
    const lastLogger = logger;
    logger = rootLogger.child({ file: file });
    logger.debug('Start importing content profile file');
    try {
      const errListener = new SHRErrorListener(logger);
      const chars = new FileStream(file);
      const lexer = new SHRContentProfileLexer(chars);
      lexer.removeErrorListeners();
      lexer.addErrorListener(errListener);
      const tokens  = new CommonTokenStream(lexer);
      const parser = new SHRContentProfileParser(tokens);
      parser.removeErrorListeners();
      parser.addErrorListener(errListener);
      parser.buildParseTrees = true;
      const tree = parser.doc();
      const walker = new ParseTreeWalker();
      walker.walk(this, tree);
    } finally {
      logger.debug('Done importing content profile file');
      this.logger = lastLogger;
    }
  }

  enterDoc(ctx) {
    // set grammar version
    const version = ctx.docHeader().version();
    const major = parseInt(version.WHOLE_NUMBER()[0], 10);
    const minor = parseInt(version.WHOLE_NUMBER()[1], 10);
    this._currentGrammarVersion = new Version(major, minor);

    logger.debug({version: this._currentGrammarVersion.toString()}, 'Entered content profile file');
  }

  exitDoc(ctx) {
    // clear current namespace, current content, current rule, and grammar version
    logger.debug('Exiting content profile file');
    this._currentNs = null;
    this._currentDef = null;
    this._currentRule = null;
    this._currentGrammarVersion = null;
  }

  enterNamespaceHeader(ctx) {
    // set current namespace
    this._currentNs = ctx.namespace().getText();
  }

  enterContentHeader(ctx) {
    // set current content
    const name = ctx.simpleName().getText();
    const identifier = new Identifier(this._currentNs, name);
    this._currentDef = new ContentProfile(identifier);
    this._currentDef.grammarVersion = this._currentGrammarVersion;
  }

  enterCpRule(ctx) {
    // find identifier for each data element in path,
    // then create and set current rule with that path

    const pathStr = ctx.simpleOrPathName().getText();
    const names = pathStr.split('.');
    let path = [];
    let currentElement = this._specs.dataElements.findByIdentifier(this._currentDef.identifier);

    if (currentElement) {
      for (const name of names) {
        let parentElements = this.getRecursiveBasedOns(currentElement.identifier);
        if (PRIMITIVES.includes(name)) {
          path.push(new PrimitiveIdentifier(name));
          break;
        } else if (name === 'Value' || name === '_Value') {
          path.push(new Identifier('', '_Value'));

          // find value from self or most recent ancestor
          let value = null;
          for (const id of parentElements) {
            const el = this._specs.dataElements.findByIdentifier(id);
            value = el ? el.value : null;

            if (value) {
              break;
            }
          }

          if (value && !(value instanceof ChoiceValue)) {
            currentElement = this._specs.dataElements.findByIdentifier(value.effectiveIdentifier);
          } else {
            break; // Exit loop to reach error condition below
          }
        } else {
          // Collect fields from current elements and all parents
          let fields = new Map();
          for (const id of parentElements) {
            const el = this._specs.dataElements.findByIdentifier(id);
            [el.value, ...el.fields].forEach(field => {
              const key = (field && field.identifier) ? field.identifier : 'value';
              if (field && !fields.get(key)) fields.set(key, field);
            });
          }
          
          let value = Array.from(fields.values()).find(field => {
            let identifier;

            if (field instanceof IdentifiableValue) {
              identifier = field.possibleIdentifiers.find(id => name === id.name);
            } else if (field instanceof ChoiceValue) {
              identifier = field.aggregateOptions.find(id => name === id.name);
            }

            return (identifier != null);
          });

          let element;
          if (value && value.identifier) {
            element = this._specs.dataElements.findByIdentifier(value.identifier);
          }

          if (element) {
            path.push(element.identifier);
            currentElement = element;
          } else {
            break; // Exit loop to reach error condition below
          }
        }
      }
    } else {
      logger.error(
        'Data element not found: %s. ERROR_CODE:?????',
        this._currentDef.identifier.fqn
      );
    }

    if (path.length === names.length) {
      this._currentRule = new ContentProfileRule(path);
    } else {
      logger.error('Path not found for %s: %s. ERROR_CODE:?????', this._currentDef.identifier.fqn, pathStr);
    }
  }

  enterFlag(ctx) {
    if (this._currentRule) {
      this._currentRule.mustSupport = (ctx.KW_MUST_SUPPORT() != null);
      this._currentDef.addRule(this._currentRule);
    }
  }

  exitCpRule(ctx) {
    this._currentRule = null;
  }

  exitContentDef(ctx) {
    this._specs.contentProfiles.add(this._currentDef);
    this._currentDef = null;
  }
  
  // NOTE: This function "borrowed" from shr-expand
  getRecursiveBasedOns(identifier, alreadyProcessed = []) {
    // If it's primitive or we've already processed this one, don't go further (avoid circular dependencies)
    if (identifier.isPrimitive || alreadyProcessed.some(id => id.equals(identifier))) {
      return alreadyProcessed;
    }

    // We haven't processed it, so look it up
    const element = this._specs.dataElements.findByIdentifier(identifier);
    if (typeof element === 'undefined') {
      logger.error('Cannot resolve element definition for %s. ERROR_CODE:13023', identifier.fqn);
      return alreadyProcessed;
    }
    // Add it to the already processed list (again, to avoid circular dependencies)
    alreadyProcessed.push(identifier);
    // Now recursively get the BasedOns for each of the BasedOns
    for (const basedOn of element.basedOn) {
      alreadyProcessed = this.getRecursiveBasedOns(basedOn, alreadyProcessed);
    }

    return alreadyProcessed;
  }
}

module.exports = {ContentProfileImporter, setLogger};
