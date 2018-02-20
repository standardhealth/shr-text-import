const bunyan = require('bunyan');
const path = require('path');
const fs = require('fs');
const { FileStream, CommonTokenStream } = require('antlr4/index');
const {Specifications, Version, Namespace, DataElement, ValueSet, Concept, Cardinality, Identifier, IdentifiableValue, RefValue, PrimitiveIdentifier, ChoiceValue, IncompleteValue, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, TypeConstraint, IncludesTypeConstraint, CardConstraint, ValueSetIncludesCodeRule, ValueSetIncludesDescendentsRule, ValueSetExcludesDescendentsRule, ValueSetIncludesFromCodeSystemRule, ValueSetIncludesFromCodeRule, ElementMapping, FieldMappingRule, CardinalityMappingRule, FixedValueMappingRule, TBD, PRIMITIVES, REQUIRED, EXTENSIBLE, PREFERRED, EXAMPLE} = require('shr-models');

const VERSION = new Version(5, 2, 3);
const GRAMMAR_VERSION = new Version(5, 0, 1);

var rootLogger = bunyan.createLogger({ name: 'shr-text-import' });

var logger = rootLogger;

function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

function idFromFQN(fqn) {
  const parts = fqn.split('.')
  if (parts.length == 1) {
    return new PrimitiveIdentifier(fqn);
  }

  const name = parts.pop();
  let namespace = parts.join('.');

  return new Identifier(namespace, name);
}

function shorthandFromCodesystem(cs) {
  const shorthands = {
    "https://sdt.cap.org": "CAP",
    "http://www.dsm5.org/": "DSM",
    "https://evs.nci.nih.gov/ftp1/CDISC/SDTM/": "NCI",
    "http://www.genenames.org": "HGNC",
    "http://hl7.org/fhir/quantity-comparator": "UGLY",
    "http://hl7.org/fhir/sid/cvx": "CVX",
    "http://hl7.org/fhir/allergy-verification-status": "AVS",
    "http://hl7.org/fhir/observation-status": "OBS",
    "http://hl7.org/fhir/ValueSet/allergy-intolerance-category": "AIC",
    "http://hl7.org/fhir/ValueSet/allergy-intolerance-type": "AIT",
    "http://hl7.org/fhir/observation-category": "OBSCAT",
    "http://hl7.org/fhir/v3/ActReason": "V3",
    "http://loinc.org": "LNC",
    "http://www.meddra.org": "MDR",
    "http://www.nationsonline.org/oneworld/country_code_list": "CC",
    "https://www.ncbi.nlm.nih.gov/refseq": "REFSEQ",
    "http://ncimeta.nci.nih.gov": "MTH",
    "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus": "NCIT",
    "http://www.nlm.nih.gov/research/umls/rxnorm": "RXN",
    "http://snomed.info/sct": "SCT",
    "http://unitsofmeasure.org": "UCUM",
    "http://uts.nlm.nih.gov/metathesaurus": "MTS",
    "urn:iso:std:iso:4217": "CURRENCY",
    "urn:tbd": "TBD"
  }

  if (shorthands[cs]) {
    return shorthands[cs];
  } else {
    return cs;
  }
}

function constructCode(code, system, display) {
  const codeObj = new Concept(system, code, display);
  return codeObj;
}

class CimcoreImporter {

  constructor(configuration = [], files) {    
    this._deConstructor = new DataElementConstructor();
    this._vsConstructor = new ValueSetConstructor();
    this._mapConstructor = new MappingsConstructor();
    this._nsConstructor = new NamespaceConstructor();
  }

  get deConstructor() { return this._deConstructor; }
  get vsConstructor() { return this._vsConstructor; }
  get mapConstructor() { return this._mapConstructor; }
  get nsConstructor() { return this._nsConstructor; }


  readFiles(src, expSpecs) {
    fs.readdirSync(src).forEach((subdir) => {
      const filePath = path.join(src, subdir);
      if (!fs.lstatSync(filePath).isDirectory()) {
        if (!filePath.endsWith('json')) return;
 
        const fileData = fs.readFileSync(filePath, 'utf-8');
        let content = JSON.parse(fileData);
        
        this.processFileByType(content)
      } else {
        //Process directories
        this.readFiles(filePath, expSpecs)
      }
    });
  }

  processFileByType(file) {
    if ('fileType' in file) {
      switch (file.fileType) {
        case 'DataElement':
          this.deConstructor.add(file);
          break;
        case 'ValueSet':
          this.vsConstructor.add(file);
          break;
        case 'Mapping':
          this.mapConstructor.add(file);
          break;
        case 'ProjectInfo':
          this.configuration = file;
          break;
        case 'Namespace':
          this.nsConstructor.add(file);
          break;
        default:
          console.log('Unknown Filetype: ', file.fileType);
          break;
      }
    } else {
      console.log('Invalid file: %s', file)
    }      
  }

}

class NamespaceConstructor {

  constructor(namespace) {
    this._namespaces = [];
  }
  
  get namespaces() { return this._namespaces };
  set namespaces(namespaces) { 
    this._namespaces = namespaces;
  }

  add(ns) {
    const constructedNS = this.constructBasicNamespaceFile(ns);
    this.namespaces.push(constructedNS);
  }

  constructBasicNamespaceFile(ns) {
    let constructedNS = new Namespace(ns.name, ns.description);
    return constructedNS;
  }

}

class DataElementConstructor {

  constructor() {
    this._elements = [];
  }

  get elements() { return this._elements };
  set elements(elements) { 
    this._elements = elements;
  }

  add(deJSON) {
    const constructedDE = this.constructBasicElement(deJSON);

    if ('basedOn' in deJSON) {
      this.constructBasedOn(deJSON).forEach(b => constructedDE.addBasedOn(b));
    }
    if ('concepts' in deJSON) {
      this.constructConcepts(deJSON).forEach(c => constructedDE.addConcept(c));
    }
    if ('value' in deJSON) {
      constructedDE.value = this.constructValue(deJSON.value, deJSON);
    }
    if ('fields' in deJSON) {
      constructedDE.fields = this.constructFields(deJSON);
    }

    this.elements.push(constructedDE); 
  }

  constructBasicElement(de) {
    const constructedDE = new DataElement(new Identifier(de.namespace, de.name), de.isEntry, de.isAbstract);
    constructedDE.description = de.description;
    constructedDE.hierarchy = de.hierarchy;
    constructedDE.grammarVersion = GRAMMAR_VERSION;
    return constructedDE
  }

  constructBasedOn(de) {
    const basedOns = [];
    for (let basedOn of de.basedOn) {
      basedOns.push(idFromFQN(basedOn));
    }

    return basedOns;
  }

  constructConcepts(de) {
    const constructedConcepts = [];
    for (let cpt of de.concepts) {
      constructedConcepts.push(new Concept(cpt.system, cpt.code, cpt.display));
    }
    return constructedConcepts;
  }

  constructValue(value, de) {
    let constructedValue;

    switch (value.valueType) {
      case 'IdentifiableValue':
        constructedValue = new IdentifiableValue(idFromFQN(value.fqn));
        break;
      case 'RefValue':
        constructedValue = new RefValue(idFromFQN(value.fqn));
        break;
      case 'ChoiceValue':
        let cValue = new ChoiceValue();
        for (const opt of value.options) {
          let constructedOption = this.constructValue(opt, de)
          if ('card' in value) {
            constructedOption.setMinMax(value.card.min, value.card.max);
          }
          cValue.addOption(constructedOption);
        }
        constructedValue = cValue;
        break;
      case 'TBD':
        let tbdText = value.fqn.match(/^TBD\((.*?)\)$/)[1]; 
        constructedValue = new TBD(tbdText);
        break;
      default:
        console.log('Unknown ValueType: %s', value.valueType);
        return;
        break;
    }

    if (!constructedValue) return;

    if ('card' in value) {
      constructedValue.setMinMax(value.card.min, value.card.max);

      if ('history' in value.card) {
        constructedValue.card.history = this.constructCardHistory(value.card.history);
        const currentCardConstraint = value.card.history[value.card.history.length - 1];
        if (currentCardConstraint) {
          constructedValue.addConstraint(this.constructCardHistoryConstraints(currentCardConstraint));
        }
      }
    }

    if ('constraints' in value) {
      this.constructConstraints(value.constraints).forEach(c => constructedValue.addConstraint(c))
    }

    if ('inheritance' in value) {
      constructedValue.inheritance = value.inheritance.status;
      constructedValue.inheritedFrom = idFromFQN(value.inheritance.from);
    }

    return constructedValue;
  }

  constructCardHistory(history) {
    const constructedHistory = [];
    for (const h of history) {
      const histCard = new Cardinality(h.min, h.max);
      histCard.source = idFromFQN(h.source);
      constructedHistory.push(histCard);
    }
    return constructedHistory;
  }

  constructCardHistoryConstraints(history) {
    const cardConstraint = new CardConstraint(new Cardinality(history.min, history.max));
    cardConstraint.lastModifiedBy = idFromFQN(history.source);
    return cardConstraint;
  }

  constructFields(de) {
    let constructedFields = [];
    for (var field of de.fields) {
      constructedFields.push(this.constructValue(field, de));
    }
    return constructedFields;
  }

  constructConstraints(constraints) {
    let constructedConstraints = [];

    for (let cType of Object.keys(constraints)) {
      const constraint = constraints[cType];
      constructByType(constraint, cType, [])
    }

    return constructedConstraints;

    function constructByType(constraint, cType, path) {
      switch (cType) {
        case 'type':
          constructTypeConstraint(constraint, path);
          break;
        case 'valueSet':
          constructValueSetConstraint(constraint, path);
          break;
        case 'card':
          constructCardConstraint(constraint, path);
          break;
        case 'fixedValue':
          constructFixedValueConstraint(constraint, path);
          break;
        case 'includesType':
          constructIncludesTypeConstraints(constraint, path);
          break;
        case 'includesCode':
          constructIncludesCodeConstraints(constraint, path);
          break;
        case 'subpaths':
          constructSubpaths(constraint, path);
          break;
        default:
          console.log('Unknown constraint type: %s', cType);
          break;
      }
    }

    function constructTypeConstraint(constraint, path) {
      const typeConstraint = new TypeConstraint(idFromFQN(constraint.fqn), path, constraint.onValue);
      typeConstraint.lastModifiedBy = idFromFQN(constraint.lastModifiedBy);
      constructedConstraints.push(typeConstraint);
    }

    function constructValueSetConstraint(constraint, path) {
      const vsConstraint = new ValueSetConstraint(constraint.uri, path, constraint.bindingStrength);
      vsConstraint.lastModifiedBy = idFromFQN(constraint.lastModifiedBy);
      constructedConstraints.push(vsConstraint);
    }

    function constructCardConstraint(constraint, path) {
      const cardConstraint = new CardConstraint(new Cardinality(constraint.min, constraint.max), path);
      cardConstraint.lastModifiedBy = idFromFQN(constraint.lastModifiedBy);
      constructedConstraints.push(cardConstraint);
    }

    function constructFixedValueConstraint(constraint, path) {
      if (constraint.type == 'code') {
        const code = constructCode(constraint.value.code, constraint.value.system, constraint.value.display);
        const fixedValueConstraint = new CodeConstraint(code, path);
        fixedValueConstraint.lastModifiedBy = idFromFQN(constraint.lastModifiedBy);
        constructedConstraints.push(fixedValueConstraint);
      } else if (constraint.type == 'boolean') {
        const fixedValueConstraint = new BooleanConstraint(constraint.value, path);
        fixedValueConstraint.lastModifiedBy = idFromFQN(constraint.lastModifiedBy);
        constructedConstraints.push(fixedValueConstraint);
      } else {
        console.log('Unknown Fixed Value Type: %s', constraint.type)
      }
    }

    function constructIncludesTypeConstraints(constraint, path) {
      for (var cst of constraint) {
        let isA = idFromFQN(cst.fqn);
        let card = new Cardinality(cst.card.min, cst.card.max);
        var includesTypeConstraint = new IncludesTypeConstraint(isA, card, path);
        includesTypeConstraint.lastModifiedBy = idFromFQN(cst.lastModifiedBy);
        constructedConstraints.push(includesTypeConstraint);
      }
    }

    function constructIncludesCodeConstraints(constraint, path) {
      for (var cst of constraint) {
        let code = constructCode(cst.code, cst.system, cst.description);

        var includesCodeConstraint = new IncludesCodeConstraint(code, path);
        includesCodeConstraint.lastModifiedBy = idFromFQN(cst.lastModifiedBy);

        constructedConstraints.push(includesCodeConstraint);
      }
    }

    function constructSubpaths(constraint, path) {
      let subpaths = Object.keys(constraint);
      for (var subpath of subpaths) {
        for (var cType of Object.keys(constraint[subpath])) {
          constructByType(constraint[subpath][cType], cType, [...path, idFromFQN(subpath)]);
        }
      }
    }
  }
}

class ValueSetConstructor {

  constructor() {
    this._valuesets = [];
  }

  get valuesets() { return this._valuesets; }
  set valuesets(valuesets) {
    this._valuesets = valuesets;
  }

  add(vsJSON) {
    const constructedVS = this.constructBasicValueSet(vsJSON);

    if ('concepts' in vsJSON) {
      constructedVS.concepts = this.constructConcepts(vsJSON);
    }

    if ('values' in vsJSON) {
      this.constructValues(vsJSON.values).forEach(v => constructedVS.addRule(v));
    }
  
    if ('rules' in vsJSON) {
      this.constructRules(vsJSON.rules).forEach(r => constructedVS.addRule(r));
    }

    this.valuesets.push(constructedVS);
  }

  constructBasicValueSet(vs) {
    const constructedVS = new ValueSet(idFromFQN(vs.fqn), vs.url);
    constructedVS.description = vs.description;
    constructedVS.grammarVersion = GRAMMAR_VERSION;

    return constructedVS;
  }

  constructConcepts(vs) {
    const constructedConcepts = [];
    for (let cpt of vs.concepts) {
      constructedConcepts.push(new Concept(cpt.system, cpt.code, cpt.display));
    }
    return constructedConcepts;
  }


  constructValues(values) {
    let constructedValues = [];
    for (const value of values) {
      let code = constructCode(value.code, value.system, value.description);
      
      let includesCodeRule = new ValueSetIncludesCodeRule(code);
      constructedValues.push(includesCodeRule);
    }
    return constructedValues;
  }

  constructRules(rules) {
    let constructedRules = [];

    for (let rType of Object.keys(rules)) {
      const rulesOfType = rules[rType];
      constructByType(rulesOfType, rType)
    }

    return constructedRules;

    function constructByType(rules, rType) {
      switch (rType) {
        case 'includesDescendants':
          constructIncludesDescendantsRules(rules);
          break;
        case 'includesFromCode':
          constructIncludesFromCodeRules(rules);
          break;
        case 'includesFromCodeSystem':
          constructIncludesFromCodeSystemRules(rules);
          break;
        case 'excludesDescendants':
          constructExcludesDescendantsRules(rules);
          break;
        default:
          console.log('Unknown rule type: %s', rType);
          break;
      }
    }


    function constructIncludesDescendantsRules(rules) {
      for (const rule of rules) {
        let code = constructCode(rule.code, rule.system, rule.description)
        
        let includesDescendantsRule = new ValueSetIncludesDescendentsRule(code);
        constructedRules.push(includesDescendantsRule);
      }
    }

    function constructIncludesFromCodeRules(rules) {
      for (const rule of rules) {
        let code = constructCode(rule.code, rule.system, rule.description);

        let includesFromCodeRule = new ValueSetIncludesFromCodeRule(code);
        constructedRules.push(includesFromCodeRule);
      }
    }

    function constructIncludesFromCodeSystemRules(rules) {
      for (const rule of rules) {
        let includesFromCodeSystemRule = new ValueSetIncludesFromCodeSystemRule(rule.system);
        constructedRules.push(includesFromCodeSystemRule);
      }
    }

    function constructExcludesDescendantsRules(rules) {
      for (const rule of rules) {
        let code = constructCode(rule.code, rule.system, rule.description);

        let excludesDescendantsRule = new ValueSetExcludesDescendantsRule(code);
        constructedRules.push(excludesDescendantsRule);
      }
    }
  }
}

class MappingsConstructor {

  constructor() {
    this._mappings = [];
  }

  get mappings() { return this._mappings; }
  set mappings(mappings) {
    this._mappings = mappings;
  }

  add(mapJSON) {
    const constructedMap = this.constructBasicMapping(mapJSON);
    
    if ('mappings' in mapJSON) {
      constructedMap.rules = this.constructRules(mapJSON.mappings)
    }

    this.mappings.push(constructedMap);
  }

  constructBasicMapping(map) {
    const constructedMap = new ElementMapping(idFromFQN(map.fqn), map.targetSpec, map.targetItem);
    constructedMap.grammarVersion = GRAMMAR_VERSION;
    return constructedMap;
  }

  constructRules(rules) {
    let constructedRules = [];

    for (let rType of Object.keys(rules)) {
      const rulesOfType = rules[rType];
      constructByType(rulesOfType, rType, [])
    }

    return constructedRules;

    function constructByType(rules, rType, path) {
      switch (rType) {
        case 'fieldMapping':
          constructFieldMappingRules(rules);
          break;
        case 'cardMapping':
          constructCardMappingRules(rules);
          break;
        case 'fixedValueMapping':
          constructFixedValueMappingRules(rules);
          break;
        default:
          console.log('Unknown rule type: %s', rType);
          break;
      }
    }

    function constructFieldMappingRules(rules) {
      for (const rule of rules) {
        let path = [];
        if ('sourcePath' in rule) {
          path = rule.sourcePath.map(p => idFromFQN(p));
        }

        let fieldMappingRule = new FieldMappingRule(path, rule.target);
        constructedRules.push(fieldMappingRule);
      }
    } 

    function constructCardMappingRules(rules) {
      for (const rule of rules) {
        let card = new Cardinality(rule.cardinality.min, rule.cardinality.max);
        let cardMappingRule = new CardinalityMappingRule(rule.target, card);
        constructedRules.push(cardMappingRule);
      }
    }

    function constructFixedValueMappingRules(rules) {
      for (const rule of rules) {
        let fixedValueMappingRule = new FixedValueMappingRule(rule.target, rule.fixedValue);
        constructedRules.push(fixedValueMappingRule);
      }
    }
  }
}

class CimplExporter {

  constructor() {

    this.deFormatter = new DataElementFormatter();
  }

}
class DataElementFormatter {
  constructor() {
    this._elements;
    this._usedShorthands;
  }

  get elements() { return this._elements };
  set elements(elements) { 
    this._elements = elements;
  }

  get _usedShorthands() { return this.__usedShorthands };
  set _usedShorthands(_usedShorthands) { 
    this.__usedShorthands = _usedShorthands;
  }

  formatDataElementOutput(de) {
    var declaration, concepts, basedOns, description, value, fields
    let outputs = [];

    declaration = this.formatDeclaration(de);
    outputs.push(declaration)

    if ('basedOn' in de && de.basedOn.length > 0) {
      basedOns = this.formatBasedOns(de);
      outputs.push(basedOns);
    }

    if ('concepts' in de && de.concepts.length > 0) {
      concepts = this.formatConcepts(de);
      outputs.push(...concepts);
    }

    if (de.description) {
      description = this.formatDescription(de);
      outputs.push(description);
    }

    if (de.value && de.value.inheritance != 'inherited') {
      value = this.formatValue(de.value, de, false);
      outputs.push(value);
    }

    if ('fields' in de && de.fields.length > 0) {
      const fields = this.formatFields(de);
      if (fields.length > 0) outputs.push(...fields);
    }

    return outputs//.join('\n')
  }

  formatDeclaration(de) {
    let formattedModifier = '';
    if (de.isEntry) {
      formattedModifier = 'Entry';
    } else if (de.isAbstract) {
      formattedModifier = 'Abstract ';
    }

    let formattedWhitespace = (de.isAbstract || de.isEntry) ? '\t' : '\t\t';

    const formattedTitle = `${formattedModifier}Element:${formattedWhitespace}${de.identifier.name}`
    return formattedTitle;
  }

  formatBasedOns(de) {
    const formattedBasedOns = [];
    for (const basedOn of de.basedOn) {
      const formattedBasedOn = basedOn.name;
      formattedBasedOns.push(formattedBasedOn);
    }
    return `Based on:\t\t${formattedBasedOns.join(', ')}`;
  }

  formatConcepts(de) {
    const formattedConcepts = [];
    for (const concept of de.concepts) {
      const formattedConceptCode = `${shorthandFromCodesystem(concept.system)}#${concept.code}`
      var formattedConceptDisplay = '';
      if (concept.display) {
        formattedConceptDisplay = ` "${concept.display}"`;
      }
      const formattedConcept = `Concept:\t\t${formattedConceptCode}${formattedConceptDisplay}`;
      formattedConcepts.push(formattedConcept);
    }
    return formattedConcepts;
  }

  formatDescription(de) {
    const formattedDesc = `Description:\t"${de.description}"`
    return formattedDesc;
  }

  arrangeValuesByConstraintPaths(value, de) {
    const constraintsByPaths = value.constraints.reduce((out, constraint, i) => {
      if (constraint.lastModifiedBy.fqn != de.identifier.fqn) {
        return out;
      }
      
      let combinedPaths = [];
      
      if (constraint.path.length > 0) {
        let pathsClone = [...constraint.path];

        while (pathsClone.length > 0) {
          const p = pathsClone.shift();
          if (p.name == 'Units' && pathsClone.length > 1 && pathsClone[1].name == 'Coding') {
            pathsClone.shift();
            continue;
          }

          if (['code', 'CodeableConcept', 'Coding'].includes(p.name)) {
            continue;
          }

          combinedPaths.push(p.name);
        }
      }

      let combinedPath = (combinedPaths.length > 0) ? combinedPaths.join('.') : 'root';

      if (!out[combinedPath]) out[combinedPath] = [];
      out[combinedPath].push(constraint);

      return out;
    }, {});

    return constraintsByPaths;
  }

  formatFields(de) {
    const formattedFields = [];
    for (const f of de.fields) {
      if (f.inheritance != 'inherited') {

        const constraintsByPaths = this.arrangeValuesByConstraintPaths(f, de);
        
        if (Object.keys(constraintsByPaths).length > 0) {
          for (const path in constraintsByPaths) {
            const fClone = f.clone();
            fClone.constraints = constraintsByPaths[path];
      
            formattedFields.push(this.formatValue(fClone, de, true, path));
          }
        } else {
          formattedFields.push(this.formatValue(f, de, true));
        }
      }
    }

    return formattedFields;
  }

  formatValue(value, de, formatAsField, path) {
    let formattedValue = this.formatValueByType(value, de);

    //first do card
    if ('card' in value) {
      if (value.effectiveCard.max == 0) {
        if (!formatAsField) {
          formatAsField = true;
          return `0..0 Value`
        } else {
          return `0..0 ${formattedValue}`
        }
      }

      formattedValue = this.formatValueWithCard(formattedValue, value, formatAsField);
    }

    //then do path
    if (path && path !== 'root') {
        formattedValue = `${formattedValue}.${path}`
    }
    
    // then try the mess that is constraints
    if ('constraints' in value && value.constraints.length > 0) {
      formattedValue = this.formatValueWithConstraints(formattedValue, value, de, formatAsField);
    }

    if (!formatAsField) return `Value:\t\t\t${formattedValue}`;

    return formattedValue;

  }

   formatValueByType(value, de) {
      switch (value.constructor.name) {
        case 'IdentifiableValue':
          return value.identifier.name;
          break;
        case 'RefValue':
          return `ref(${value.identifier.name})`;
          break;
        case 'ChoiceValue':
          let choiceStrings = [];
          for (const opt of value.options) {
            var choiceStr = this.formatValueByType(opt, de, true);
            // choiceStr = this.formatValueWithConstraints(choiceStr, opt, de, true)
            choiceStrings.push(choiceStr);
          }
          return choiceStrings.join(' or ')         
          // return 'learn how to format choices'
          break;
        case 'TBD':
          return `TBD "${value.text}"`;
          break;
        default:
          return;  
          break;
      }
    }

    formatValueWithPath(formattedValue, paths) {
      let pathsClone = [...paths];

      while (pathsClone.length > 0) {
        const p = pathsClone.shift();
        if (p.name == 'Units' && pathsClone.length > 1 && pathsClone[1].name == 'Coding') {
          pathsClone.shift();
          continue;
        }
        
        if (['code', 'CodeableConcept', 'Coding'].includes(p.name)) {
          continue;
        }

        formattedValue = `${formattedValue}.${p.name}`
      }

      return formattedValue
    }

    formatValueWithCard(formattedValue, value, formatAsField) {
      if (!formatAsField && value.effectiveCard.min == 1 && value.effectiveCard.max == 1) {
        return formattedValue;
      }

      if (formatAsField && value.inheritedFrom) { //handled in formatbyConstrainttype
        return formattedValue;
      }

      if (value.constructor.name == 'ChoiceValue') {
        formattedValue = `(${formattedValue})`
      }

      return `${value.effectiveCard.toString()} ${formattedValue}`
    }

    formatValueWithConstraints(formattedByPath, value, de, formatAsField) {
      let formattedWithConstraint = formattedByPath;
      for (const con of value.constraints) {
        if (con.lastModifiedBy.fqn == de.identifier.fqn) {
          if (con.path.length > 0) {
            // formattedWithConstraint = formatWithPath(formattedWithConstraint, con.path);
          }
          formattedWithConstraint = this.formatValueByConstraintType(formattedWithConstraint, con, formatAsField);
        }
      }
      return formattedWithConstraint;
    }

    formatValueByConstraintType(formattedValue, constraint, formatAsField) {
      switch (constraint.constructor.name) {
        case 'TypeConstraint':
          return this.formatValueWithTypeConstraint(formattedValue, constraint);
          break;
        case 'ValueSetConstraint':
          return this.formatValueWithValueSetConstraint(formattedValue, constraint);
          break;
        case 'CardConstraint':
          if (formatAsField) {
            return this.formatValueWithCardConstraint(formattedValue, constraint);
          } else {
            return formattedValue;  
          }
          break;
        case 'IncludesTypeConstraint':
          return this.formatValueWithIncludesTypeConstraint(formattedValue, constraint);
          break;
        case 'IncludesCodeConstraint':
          return this.formatValueWithIncludesCodeConstraint(formattedValue, constraint);
          break;
        case 'BooleanConstraint':
          return this.formatValueWithBooleanConstraint(formattedValue, constraint);
          break;
        case 'CodeConstraint':
          return this.formatValueWithCodeConstraint(formattedValue, constraint);
          break;
        default:
          console.log('learn to deal with this %s', constraint.constructor.name)
          return formattedValue;
          break;
      }
    }

    formatValueWithTypeConstraint(formattedValue, constraint) {
      if (constraint.onValue) {
        return `${formattedValue} value is type ${constraint.isA.name}`;
      } else {
        return `${formattedValue} is type ${constraint.isA.name}`;
      }
    }

    formatValueWithValueSetConstraint(formattedValue, constraint) {
      let vs = constraint.valueSet;
      if (vs.startsWith('http://standardhealthrecord.org')) {
        vs = vs.split('/').pop().replace('#', '');
      }

      switch (constraint.bindingStrength) {
        case 'REQUIRED':
          return `${formattedValue} from ${vs}`
          break;
        case 'EXTENSIBLE':
          return `${formattedValue} from ${vs} if covered`
          break;
        case 'PREFERRED':
          return `${formattedValue} should be from ${vs}`
          break;
        case 'EXAMPLE':
          return `${formattedValue} could be from ${vs}`
          break;
        default:
        return formattedValue  
          break;
      }
    }

    formatValueWithCardConstraint(formattedValue, constraint) {
      let formattedConstraint = `${constraint.card.toString()} ${formattedValue}`;
      return formattedConstraint;
      // return value;
    }

    formatValueWithBooleanConstraint(formattedValue, constraint) {
      return `${formattedValue} is ${constraint.value}`;
    }

    formatValueWithCodeConstraint(formattedValue, constraint) {
      let shorthand = shorthandFromCodesystem(constraint.code.system)
      if (!shorthand) {
        let shorthand = '';
      }

      var formattedDisplay = ''
      if (constraint.code.display) {
        formattedDisplay = ` "${constraint.code.display}"`;
      }

      var formattedCode = `${shorthand}#${constraint.code.code}${formattedDisplay}`

      if (constraint.path.length >= 2 && constraint.path[0].name == 'Units' && constraint.path[1].name == 'Coding') {
        return `${formattedValue} with units ${formattedCode}`
      }

      return `${formattedValue} is ${formattedCode}`;
    }

    formatValueWithIncludesTypeConstraint(formattedValue, constraint) {
      let formattedConstraint = `\tincludes ${constraint.card.toString()} ${constraint.isA.name}`;
      return [formattedValue, formattedConstraint].join('\n');
    }

    formatValueWithIncludesCodeConstraint(formattedValue, constraint) {
      let shorthand = shorthandFromCodesystem(constraint.code.system)
      if (!shorthand) {
        shorthand = '';
      }
      var formattedCode = `${shorthand}#${constraint.code.code}`
      var formattedDisplay = ''
      if (constraint.code.display) {
        formattedDisplay = ` "${constraint.code.display}"`;
      }

      let formattedConstraint = `\tincludes ${formattedCode}${formattedDisplay}`;
      return [formattedValue, formattedConstraint].join('\n');
    }


  formatDataElementFields(de) {

  }
} 


module.exports = {CimcoreImporter, CimplExporter}