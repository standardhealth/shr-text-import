const bunyan = require('bunyan');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const { Specifications, Version, Namespace, DataElement, ValueSet, Concept, Cardinality, Identifier, IdentifiableValue, RefValue, PrimitiveIdentifier, ChoiceValue, IncompleteValue, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, TypeConstraint, IncludesTypeConstraint, CardConstraint, ValueSetIncludesCodeRule, ValueSetIncludesDescendentsRule, ValueSetExcludesDescendentsRule, ValueSetIncludesFromCodeSystemRule, ValueSetIncludesFromCodeRule, ElementMapping, FieldMappingRule, CardinalityMappingRule, FixedValueMappingRule, TBD, PRIMITIVES, REQUIRED, EXTENSIBLE, PREFERRED, EXAMPLE } = require('shr-models');

const VERSION = new Version(5, 2, 3);
const GRAMMAR_VERSION = new Version(5, 0, 1);

var rootLogger = bunyan.createLogger({ name: 'shr-text-import' });

var logger = rootLogger;

function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

function rightPad(text, max = 6) {
  const numTabs = Math.max(1, max - Math.floor(text.length / 4));
  return `${text}${'\t'.repeat(numTabs)}`;
}

function idFromFQN(fqn) {
  const parts = fqn.split('.');
  if (parts.length == 1) {
    if (fqn.match(/^TBD\(.*\)$/)) {
      return new TBD(fqn.replace(/^TBD\((.*)\)$/, '$1'));
    }
    return new PrimitiveIdentifier(fqn);
  }

  const name = parts.pop();
  let namespace = parts.join('.');

  return new Identifier(namespace, name);
}

Array.prototype.pushNew = function (obj) {
  if (!this.find(o => o == obj)) {
    this.push(obj);
  }
};

function constructCode(code, system, display) {
  const codeObj = new Concept(system, code, display);
  return codeObj;
}

function shorthandFromCodesystem(cs) {
  if (!cs) {
    return '';
  }

  const shorthands = {
    'https://sdt.cap.org': 'CAP',
    'http://www.dsm5.org/': 'DSM',
    'https://evs.nci.nih.gov/ftp1/CDISC/SDTM/': 'NCI',
    'http://www.genenames.org': 'HGNC',
    'http://hl7.org/fhir/quantity-comparator': 'UGLY',
    'http://hl7.org/fhir/sid/cvx': 'CVX',
    'http://hl7.org/fhir/allergy-verification-status': 'AVS',
    'http://hl7.org/fhir/observation-status': 'OBS',
    'http://hl7.org/fhir/ValueSet/allergy-intolerance-category': 'AIC',
    'http://hl7.org/fhir/ValueSet/allergy-intolerance-type': 'AIT',
    'http://hl7.org/fhir/observation-category': 'OBSCAT',
    'http://hl7.org/fhir/v3/ActReason': 'V3',
    'http://loinc.org': 'LNC',
    'http://www.meddra.org': 'MDR',
    'http://www.nationsonline.org/oneworld/country_code_list': 'CC',
    'https://www.ncbi.nlm.nih.gov/refseq': 'REFSEQ',
    'http://ncimeta.nci.nih.gov': 'MTH',
    'https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus': 'NCIT',
    'http://www.nlm.nih.gov/research/umls/rxnorm': 'RXN',
    'http://snomed.info/sct': 'SCT',
    'http://unitsofmeasure.org': 'UCUM',
    'http://uts.nlm.nih.gov/metathesaurus': 'MTS',
    'urn:iso:std:iso:4217': 'CURRENCY',
    'urn:tbd:': 'TBD',
    'urn:tbd': 'TBD'
  };

  if (shorthands[cs]) {
    return shorthands[cs];
  } else if (cs.match(/http:\/\/standardhealthrecord.org\/shr\/[A-Za-z]*\/cs\/(#[A-Za-z]*CS)/)) {
    return '';
  } else {
    return cs;
  }
}

function formattedCodeFromConcept(concept) {
  var formattedConceptCode = `${shorthandFromCodesystem(concept.system)}#${concept.code}`;
  if (concept.display) {
    formattedConceptCode = `${formattedConceptCode} "${concept.display}"`;
  } else if (concept.description) {
    formattedConceptCode = `${formattedConceptCode} "${concept.description}"`;
  }

  return formattedConceptCode;
}

class CimcoreImporter {

  constructor(configuration = [], files) {
    this._deConstructor = new DataElementConstructor();
    this._vsConstructor = new ValueSetConstructor();
    this._mapConstructor = new ElementMappingConstructor();
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

        this.processFileByType(content);
      } else {
        //Process directories
        this.readFiles(filePath, expSpecs);
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
      console.log('Invalid file: %s', file);
    }
  }

  convertToSpecifications() {
    const specs = new Specifications();

    for (const ns of this.nsConstructor.namespaces) {
      specs.namespaces.add(ns);
    }

    for (const de of this.deConstructor.elements) {
      specs.dataElements.add(de);
    }

    for (const vs of this.vsConstructor.valuesets) {
      specs.valueSets.add(vs);
    }

    for (const map of this.mapConstructor.mappings) {
      specs.maps.add(map);
    }

    return specs;
  }
}

//  /$$   /$$
// | $$$ | $$
// | $$$$| $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$
// | $$ $$ $$ |____  $$| $$_  $$_  $$ /$$__  $$ /$$_____/ /$$__  $$ |____  $$ /$$_____/ /$$__  $$
// | $$  $$$$  /$$$$$$$| $$ \ $$ \ $$| $$$$$$$$|  $$$$$$ | $$  \ $$  /$$$$$$$| $$      | $$$$$$$$
// | $$\  $$$ /$$__  $$| $$ | $$ | $$| $$_____/ \____  $$| $$  | $$ /$$__  $$| $$      | $$_____/
// | $$ \  $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$ /$$$$$$$/| $$$$$$$/|  $$$$$$$|  $$$$$$$|  $$$$$$$
// |__/  \__/ \_______/|__/ |__/ |__/ \_______/|_______/ | $$____/  \_______/ \_______/ \_______/
//                                                       | $$
//                                                       | $$
//                                                       |__/


class NamespaceConstructor {

  constructor(namespace) {
    this._namespaces = [];
  }

  get namespaces() { return this._namespaces; }
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

//  /$$$$$$$              /$$               /$$$$$$$$ /$$                                               /$$
// | $$__  $$            | $$              | $$_____/| $$                                              | $$
// | $$  \ $$  /$$$$$$  /$$$$$$    /$$$$$$ | $$      | $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
// | $$  | $$ |____  $$|_  $$_/   |____  $$| $$$$$   | $$ /$$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
// | $$  | $$  /$$$$$$$  | $$      /$$$$$$$| $$__/   | $$| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$
// | $$  | $$ /$$__  $$  | $$ /$$ /$$__  $$| $$      | $$| $$_____/| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
// | $$$$$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$| $$$$$$$$| $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
// |_______/  \_______/   \___/   \_______/|________/|__/ \_______/|__/ |__/ |__/ \_______/|__/  |__/   \___/ |_______/


class DataElementConstructor {

  constructor() {
    this._elements = [];
  }

  get elements() { return this._elements; }
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
    return constructedDE;
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
      case 'ChoiceValue': {
        let cValue = new ChoiceValue();
        for (const opt of value.options) {
          let constructedOption = this.constructValue(opt, de);
          if ('card' in value) {
            constructedOption.setMinMax(value.card.min, value.card.max);
          }
          cValue.addOption(constructedOption);
        }
        constructedValue = cValue;
        break;
      }
      case 'TBD': {
        let tbdText = value.fqn.match(/^TBD\((.*?)\)$/)[1];
        constructedValue = new TBD(tbdText);
        break;
      }
      default:
        console.log('Unknown ValueType: %s', value.valueType);
        return;
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
      this.constructConstraints(value.constraints).forEach(c => constructedValue.addConstraint(c));
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
      constructByType(constraint, cType, []);
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
        console.log('Unknown Fixed Value Type: %s', constraint.type);
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

//  /$$    /$$          /$$                      /$$$$$$              /$$
// | $$   | $$         | $$                     /$$__  $$            | $$
// | $$   | $$ /$$$$$$ | $$ /$$   /$$  /$$$$$$ | $$  \__/  /$$$$$$  /$$$$$$   /$$$$$$$
// |  $$ / $$/|____  $$| $$| $$  | $$ /$$__  $$|  $$$$$$  /$$__  $$|_  $$_/  /$$_____/
//  \  $$ $$/  /$$$$$$$| $$| $$  | $$| $$$$$$$$ \____  $$| $$$$$$$$  | $$   |  $$$$$$
//   \  $$$/  /$$__  $$| $$| $$  | $$| $$_____/ /$$  \ $$| $$_____/  | $$ /$$\____  $$
//    \  $/  |  $$$$$$$| $$|  $$$$$$/|  $$$$$$$|  $$$$$$/|  $$$$$$$  |  $$$$//$$$$$$$/
//     \_/    \_______/|__/ \______/  \_______/ \______/  \_______/   \___/ |_______/


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
      constructByType(rulesOfType, rType);
    }

    return constructedRules;

    function constructByType(rules, rType) {
      switch (rType) {
        case 'includesDescendants':
          constructIncludesDescendentsRules(rules);
          break;
        case 'includesFromCode':
          constructIncludesFromCodeRules(rules);
          break;
        case 'includesFromCodeSystem':
          constructIncludesFromCodeSystemRules(rules);
          break;
        case 'excludesDescendants':
          constructExcludesDescendentsRules(rules);
          break;
        default:
          console.log('Unknown rule type: %s', rType);
          break;
      }
    }


    function constructIncludesDescendentsRules(rules) {
      for (const rule of rules) {
        let code = constructCode(rule.code, rule.system, rule.description);

        let includesDescendentsRule = new ValueSetIncludesDescendentsRule(code);
        constructedRules.push(includesDescendentsRule);
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

    function constructExcludesDescendentsRules(rules) {
      for (const rule of rules) {
        let code = constructCode(rule.code, rule.system, rule.description);

        let excludesDescendentsRule = new ValueSetExcludesDescendentsRule(code);
        constructedRules.push(excludesDescendentsRule);
      }
    }
  }
}

//  /$$      /$$                               /$$
// | $$$    /$$$                              |__/
// | $$$$  /$$$$  /$$$$$$   /$$$$$$   /$$$$$$  /$$ /$$$$$$$   /$$$$$$   /$$$$$$$
// | $$ $$/$$ $$ |____  $$ /$$__  $$ /$$__  $$| $$| $$__  $$ /$$__  $$ /$$_____/
// | $$  $$$| $$  /$$$$$$$| $$  \ $$| $$  \ $$| $$| $$  \ $$| $$  \ $$|  $$$$$$
// | $$\  $ | $$ /$$__  $$| $$  | $$| $$  | $$| $$| $$  | $$| $$  | $$ \____  $$
// | $$ \/  | $$|  $$$$$$$| $$$$$$$/| $$$$$$$/| $$| $$  | $$|  $$$$$$$ /$$$$$$$/
// |__/     |__/ \_______/| $$____/ | $$____/ |__/|__/  |__/ \____  $$|_______/
//                        | $$      | $$                     /$$  \ $$
//                        | $$      | $$                    |  $$$$$$/
//                        |__/      |__/                     \______/

class ElementMappingConstructor {

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
      constructedMap.rules = this.constructRules(mapJSON.mappings);
    }

    this.mappings.push(constructedMap);
  }

  constructBasicMapping(map) {
    const constructedMap = new ElementMapping(idFromFQN(map.fqn), map.targetSpec, map.targetItem);
    constructedMap.grammarVersion = GRAMMAR_VERSION;
    if ('inheritance' in map) {
      constructedMap.inheritance = map.inheritance.status;
      constructedMap.inheritedFrom = idFromFQN(map.inheritance.from);
    }
    return constructedMap;
  }

  constructRules(rules) {
    let constructedRules = [];

    for (let rType of Object.keys(rules)) {
      const rulesOfType = rules[rType];
      constructByType(rulesOfType, rType, []);
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

        const fieldMappingRule = new FieldMappingRule(path, rule.target);
        if (rule.lastModifiedBy) {
          fieldMappingRule.lastModifiedBy = idFromFQN(rule.lastModifiedBy);
        }
        constructedRules.push(fieldMappingRule);
      }
    }

    function constructCardMappingRules(rules) {
      for (const rule of rules) {
        const card = new Cardinality(rule.cardinality.min, rule.cardinality.max);
        const cardMappingRule = new CardinalityMappingRule(rule.target, card);
        if (rule.lastModifiedBy) {
          cardMappingRule.lastModifiedBy = idFromFQN(rule.lastModifiedBy);
        }
        constructedRules.push(cardMappingRule);
      }
    }

    function constructFixedValueMappingRules(rules) {
      for (const rule of rules) {
        const fixedValueMappingRule = new FixedValueMappingRule(rule.target, rule.fixedValue);
        if (rule.lastModifiedBy) {
          fixedValueMappingRule.lastModifiedBy = idFromFQN(rule.lastModifiedBy);
        }
        constructedRules.push(fixedValueMappingRule);
      }
    }
  }
}












// /$$$$$$$$                                            /$$     /$$
// | $$_____/                                           | $$    | $$
// | $$     /$$$$$$   /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$ /$$$$$$    /$$$$$$   /$$$$$$   /$$$$$$$
// | $$$$$ /$$__  $$ /$$__  $$| $$_  $$_  $$ |____  $$|_  $$_/|_  $$_/   /$$__  $$ /$$__  $$ /$$_____/
// | $$__/| $$  \ $$| $$  \__/| $$ \ $$ \ $$  /$$$$$$$  | $$    | $$    | $$$$$$$$| $$  \__/|  $$$$$$
// | $$   | $$  | $$| $$      | $$ | $$ | $$ /$$__  $$  | $$ /$$| $$ /$$| $$_____/| $$       \____  $$
// | $$   |  $$$$$$/| $$      | $$ | $$ | $$|  $$$$$$$  |  $$$$/|  $$$$/|  $$$$$$$| $$       /$$$$$$$/
// |__/    \______/ |__/      |__/ |__/ |__/ \_______/   \___/   \___/   \_______/|__/      |_______/



class CimplExporter {
  constructor(specs) {
    this._specs = specs;
    this._namespaces = specs.namespaces.all;
    this._elements = specs.dataElements.all;
    this._valuesets = specs.valueSets.all;
    this._mappings = specs.maps.targets.reduce((out, target) => { out[target] = specs.maps.byTarget(target); return out; }, {});
  }

  get namespaces() { return this._namespaces; }
  get elements() { return this._elements; }
  get valuesets() { return this._valuesets; }
  get mappings() { return this._mappings; }


  findOrigDef(el, filePath) {
    // const ns = el.identifier.namespace.split('.').join('_');
    // const file = fs.readFileSync(filePath + '/' + ns + '.txt', 'utf8').split('\n');
    // let abstract = el.isAbstract;
    // let entry = el.isEntry;
    // for (let line of file) {
    //   if (line.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*/, '').match(new RegExp(`\\s*${(abstract) ? 'Abstract' : (entry) ? 'Entry' : ''}\\s*Element:\\s*${el.identifier.name}\\s*$`))) {

    //     let i = file.indexOf(line);
    //     let j = i;
    //     while (j < file.length) {
    //       let stripped = file[j].replace(/\s/g, '').replace(/^\/\*.*/, '');
    //       if (stripped.length == 0) {
    //         return file.slice(i, j);
    //       } else if (j == file.length - 1) {
    //         return file.slice(i, j + 1);
    //       }

    //       j++;
    //     }
    //   } else {
    //     continue;
    //   }
    // }
  }

  compareSimilarity(orig, out) {
    // let similarLines = 0;
    // let strippedOrig = orig.map(ln =>
    //   ln.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*/, '')
    //     .replace(/^\/\*.*/, '')
    //     .replace('FHIR/', 'http://hl7.org/fhir/ValueSet/')
    //     .replace(/\s/g, '')
    //     .replace(/ref\(([^\(\)]*)\)/, `$1`)
    //     .replace(/valueistype/, 'istype')
    //     .replace(/Valueistype/, 'istype')
    //     .replace(/Value:([A-Za-z]*)istype/, 'istype')
    // );
    // strippedOrig = strippedOrig.filter(ln =>
    //   ln !== 'Concept:TBD'
    //   && ln !== 'Description:""'
    //   && ln !== ''
    //   && !ln.startsWith('/*')
    // );

    // let strippedOut = [];
    // out.map(ln => ln.split('\n')).forEach(a => strippedOut.push(...a));
    // strippedOut = strippedOut.map(ln =>
    //   ln.replace(/\s/g, '')
    //     .replace(/http:\/\/standardhealthrecord.org\/shr\/[A-Za-z]*\/cs\/#[A-Za-z]*CS/g, '')
    //     .replace(/ref\(([^\(\)]*)\)/, `$1`)
    //     .replace(/\.([A-Za-z]*)istype/, 'istype')
    //     .replace(/valueistype/, 'istype')
    //     .replace(/Value:([A-Za-z]*)istype/, 'istype')
    // );

    // let totalLines = Math.max(strippedOrig.length, strippedOut.length);
    // let strippedOutClone = strippedOut.map(a => a);

    // for (const line of strippedOut) {
    //   if (strippedOrig.indexOf(line) > -1) {
    //     similarLines += 1;
    //     strippedOrig = strippedOrig.filter(a => a != line);
    //     strippedOutClone = strippedOutClone.filter(a => a != line);
    //   }
    // }

    // //linting formatting filters
    // for (const line of strippedOut) {
    //   let match = strippedOrig.find(ln => ln.indexOf(line) > -1);
    //   if (strippedOutClone.indexOf(line) > -1 && match && match.replace(/^[0-9]..[0-9]/,'') == line) {
    //     similarLines += 1;
    //     strippedOrig = strippedOrig.filter(a => a != match);
    //     strippedOutClone = strippedOutClone.filter(a => a != line);
    //   }
    // }

    // for (const line of strippedOut) {
    //   let match = strippedOrig.find(ln => ln.indexOf(line) > -1 && ln.indexOf('includes'));
    //   let index = strippedOutClone.indexOf(line);
    //   if (index < strippedOutClone.length - 1 && [line, strippedOutClone[index + 1]].join('') == match) {
    //     similarLines += 2;
    //     strippedOrig = strippedOrig.filter(a => a != match);
    //     strippedOutClone = strippedOutClone.filter(a => a != line && a != strippedOutClone[index + 1]);
    //   }
    // }



    // let per = Math.floor(similarLines / totalLines * 100);
    // return [`${per}% similar, ${totalLines - similarLines} dissimilar lines`, per, strippedOrig, strippedOutClone];
  }

  checkEfficacy(e, v, m, expSpecs) {
    // if (e) {
    //   e.forEach(element => {
    //     if (!namespaces[element.identifier.namespace]) {
    //       namespaces[element.identifier.namespace] = [];
    //     }

    //     let breakname;
    //     breakname = 'ContraceptiveMethodRequestedAgainst';
    //     if (element.identifier.name == breakname) {
    //       let stop = 'here';
    //     }

    //     let origDef = findOrigDef(expSpecs.dataElements.all.find(el => el.identifier.name == element.identifier.name)) || [];
    //     let outDef = exporter.deFormatter.formatDataElementOutput(element) || [];

    //     namespaces[element.identifier.namespace].push(outDef);

    //     let sim = compareSimilarity(origDef, outDef);
    //     if (sim[1] != 100) {
    //       // console.log('------------------------------------------------------')
    //       // console.log('\n(original)\n')
    //       // console.log(origDef.join('\n'));
    //       // console.log('\ndifferent lines:')
    //       // console.log(sim[2].join('\n'));

    //       // console.log('\n(exported) %s\n', sim[0]);
    //       // console.log(outDef.join('\n'));
    //       // console.log('\ndifferent lines:')
    //       // console.log(sim[3].join('\n'));
    //       // console.log();
    //     }
    //     totalPer = [totalPer[0] + (sim[1] == 100 ? 1 : 0), totalPer[1] + 1];
    //   });
    // }

    // if (v) {
    //   let totalPercent = 0;
    // v.forEach(valueset => {
    //   let origDef = this.findOrigDef(expSpecs.valuesets.all.find(vs => vs.identifier.name == valueset.identifier.name)) || [];
    //   let outDef = this.vsFormatter.formatDataElementOutput(element) || [];

    //   namespaces[element.identifier.namespace].push(outDef);

    //   let sim = compareSimilarity(origDef, outDef);
    //   if (sim[1] != 100) {
    //     // console.log('------------------------------------------------------')
    //     // console.log('\n(original)\n')
    //     // console.log(origDef.join('\n'));
    //     // console.log('\ndifferent lines:')
    //     // console.log(sim[2].join('\n'));

    //     // console.log('\n(exported) %s\n', sim[0]);
    //     // console.log(outDef.join('\n'));
    //     // console.log('\ndifferent lines:')
    //     // console.log(sim[3].join('\n'));
    //     // console.log();
    //   }
    //   totalPer = [totalPer[0] + (sim[1] == 100 ? 1 : 0), totalPer[1] + 1];
    // });
    // }

    // if (m) {

    // }


    // for (const name in namespaces) {

    // }

    // console.log(`${totalPer[0]}/${totalPer[1]} cases equilavent`);

  }


  exportNamespaceToPath(ns, path) {
    const nsDataElements = this.elements.filter(de => de.identifier.namespace == ns); // this.specs.dataElements.byNamespace(ns);
    const nsValueSets = this.valuesets.filter(vs => vs.identifier.namespace == ns); // this.specs.dataElements.byNamespace(ns);
    const nsMappings = Object.keys(this.mappings).reduce((out, target) => {
      out[target] = this.mappings[target].filter(m => m.identifier.namespace == ns);
      return out;
    }, {}); // alternative too complex

    const currentNS = this.namespaces.find(n => n.namespace == ns);

    const nsFormatter = new NamespaceFormatter(currentNS, this.specs, nsDataElements, nsValueSets, nsMappings);

    if (nsDataElements.length > 0) {
      const formattedDataElementFile = nsFormatter.formatDataElementFile();
      this.exportDataElementFileToNamespace(formattedDataElementFile, ns, path);
    }

    if (nsValueSets.length > 0) {
      const formattedValueSetFile = nsFormatter.formatValueSetFile();
      this.exportValueSetFileToNamespace(formattedValueSetFile, ns, path);
    }

    const totalNSMappingsCount = Object.keys(nsMappings).reduce((count, target) => count + nsMappings[target].length, 0);
    if (totalNSMappingsCount > 0) {
      for (const target in nsMappings) {
        if (nsMappings[target].length > 0) {
          const formattedMappingsFile = nsFormatter.formatMappingsFile(target);
          this.exportMappingsFileToNamespace(formattedMappingsFile, ns, path);
        }
      }
    }
  }

  exportDataElementFileToNamespace(file, namespace, filePath) {
    let ns = namespace.replace(/\./, '_');

    const hierarchyPath = `${filePath}/${ns}.txt`;
    mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
    fs.writeFileSync(hierarchyPath, file);
  }

  exportValueSetFileToNamespace(file, namespace, filePath) {
    let ns = namespace.replace(/\./, '_');

    const hierarchyPath = `${filePath}/${ns}_vs.txt`;
    mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
    fs.writeFileSync(hierarchyPath, file);
  }

  exportMappingsFileToNamespace(file, namespace, filePath) {
    let ns = namespace.replace(/\./, '-');
    const hierarchyPath = `${filePath}/${ns}_map.txt`;
    mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
    fs.writeFileSync(hierarchyPath, file);
  }
}

//  /$$   /$$
// | $$$ | $$
// | $$$$| $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$
// | $$ $$ $$ |____  $$| $$_  $$_  $$ /$$__  $$ /$$_____/ /$$__  $$ |____  $$ /$$_____/ /$$__  $$
// | $$  $$$$  /$$$$$$$| $$ \ $$ \ $$| $$$$$$$$|  $$$$$$ | $$  \ $$  /$$$$$$$| $$      | $$$$$$$$
// | $$\  $$$ /$$__  $$| $$ | $$ | $$| $$_____/ \____  $$| $$  | $$ /$$__  $$| $$      | $$_____/
// | $$ \  $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$ /$$$$$$$/| $$$$$$$/|  $$$$$$$|  $$$$$$$|  $$$$$$$
// |__/  \__/ \_______/|__/ |__/ |__/ \_______/|_______/ | $$____/  \_______/ \_______/ \_______/
//                                                       | $$
//                                                       | $$
//                                                       |__/

class NamespaceFormatter {
  constructor(ns, specs, nsDataElements, nsValueSets, nsMappings) {

    this.ns = ns;

    this.specs = specs;

    this.nsDataElements = nsDataElements;
    this.nsValueSets = nsValueSets;
    this.nsMappings = nsMappings;

    this.headerFormatter = new FileHeaderFormatter(specs);
    this.dataElementFormatter = new DataElementFormatter(specs);
    this.valueSetFormatter = new ValueSetFormatter(specs);
    this.mappingFormatter = new ElementMappingFormatter(specs);
  }

  formatHeader(fileType) {
    switch (fileType) {
      case 'DataElement': {
        return this.headerFormatter.formatDataElementFileHeader(this.ns, this.dataElementFormatter.uses, this.dataElementFormatter._codesystems);
      }
      case 'ValueSet': {
        return this.headerFormatter.formatValueSetFileHeader(this.ns, this.valueSetFormatter.codesystems);
      }
      case 'Map': {
        return this.headerFormatter.formatMappingFileHeader(this.ns, this.mappingFormatter.target);
      }
      default:
        return;
    }
  }

  formatDataElementFile() {
    this.dataElementFormatter.reset();

    const formattedDataElements = [];
    for (const de of this.nsDataElements) {
      const formattedDE = this.dataElementFormatter.formatDataElement(de);
      formattedDataElements.push(formattedDE);
    }

    const fileHeader = this.formatHeader('DataElement');

    return [fileHeader, ...formattedDataElements].join('\n\n');
  }

  formatValueSetFile() {
    this.valueSetFormatter.reset();

    const formattedValueSets = [];
    for (const vs of this.nsValueSets) {
      const formattedVS = this.valueSetFormatter.formatValueSet(vs);
      formattedValueSets.push(formattedVS);
    }

    const fileHeader = this.formatHeader('ValueSet');

    return [fileHeader, ...formattedValueSets].join('\n\n');
  }

  formatMappingsFile(target) {
    this.mappingFormatter.target = target;

    const formattedMappings = [];
    for (const map of this.nsMappings[target]) {
      if (map.inheritance != 'inherited') {
        const formattedMap = this.mappingFormatter.formatMapping(map);
        formattedMappings.push(formattedMap);
      }
    }

    const fileHeader = this.formatHeader('Map');

    return [fileHeader, ...formattedMappings].join('\n\n');
  }
}

class FileHeaderFormatter {
  constructor(namespaces, elements, valuesets, mappings) {
    // Grammar:   DataElement 5.0
    // Namespace:   shr.core
    // Description:	"The SHR Core domain contains definitions for a variety of general-purpose elements that are used widely in SHR. These include definitions for coding, expressions of time, quantities, addresses, names, and more."
    // Uses:			shr.entity, shr.base, shr.finding

    // Path:			FHIR = http://hl7.org/fhir/ValueSet
    // CodeSystem:     CC = http://www.nationsonline.org/oneworld/country_code_list
    // CodeSystem:     LNC = http://loinc.org
    // CodeSystem:     SCT = http://snomed.info/sct
    // CodeSystem:     MTH = http://ncimeta.nci.nih.gov
    // CodeSystem:		NCI = https://evs.nci.nih.gov/ftp1/CDISC/SDTM/
    // CodeSystem:     UCUM = http://unitsofmeasure.org

    this._namespaces = namespaces;
    this._elements = elements;
    this._valuesets = valuesets;
    this._mappings = mappings;
  }

  get namespaces() { return this._namespaces; }
  get elements() { return this._elements; }
  get valuesets() { return this._valuesets; }
  get mappings() { return this._mappings; }

  formatDataElementFileHeader(namespace, uses, codesystems, paths) {
    if (uses) {
      uses = uses.filter(ns=>ns != namespace.namespace);
    }
    return this.formatHeader('DataElement', namespace, uses, codesystems, paths);
  }

  formatValueSetFileHeader(namespace, codesystems) {
    return this.formatHeader('ValueSet', namespace, undefined, codesystems);
  }

  formatMappingFileHeader(namespace, target) {
    return this.formatHeader('Map', namespace, undefined, undefined, undefined, target, 3);
  }

  formatHeader(fileType, namespace, uses = [], codesystems = [], paths = [], target, maxTabs = undefined) {
    const formattedFileDeclaration = this.formatFileDeclaration(fileType, namespace, target, maxTabs);
    const formattedUses = (uses && uses.length > 0) ? this.formatUses(uses) : null;
    const formattedCS = codesystems.map(cs => this.formatCodeSystem(cs));
    const formattedPaths = paths.map(p => this.formatPath(p));

    return [
      ...formattedFileDeclaration,
      formattedUses,
      ...formattedPaths,
      ...formattedCS
    ].filter(l => l).join('\n');
  }

  formatFileDeclaration(fileType, ns, target, maxTabs = undefined) {
    const formattedDeclaration = [
      `${rightPad('Grammar:', maxTabs)}${fileType} 5.0`,
      `${rightPad('Namespace:', maxTabs)}${ns.namespace}`,
    ];

    if (fileType === 'DataElement') {
      if (ns.description) {
        formattedDeclaration.push(`${rightPad('Description:', maxTabs)}"${ns.description}"`);
      }
    } else if (fileType === 'Map' && target) {
      formattedDeclaration.push(`${rightPad('Target:', maxTabs)}${target}`);
    }

    return formattedDeclaration;
  }

  formatUses(uses) {
    return `${rightPad('Uses:')}${uses.join(', ')}`;
  }

  formatCodeSystem(cs) {
    return `${rightPad('CodeSystem:')}${shorthandFromCodesystem(cs)} = ${cs}`;
  }

  formatPath(path) {
    return `${rightPad('Path:')}${path.shorthand} = ${path.url}`;
  }
}


//  /$$    /$$          /$$                      /$$$$$$              /$$
// | $$   | $$         | $$                     /$$__  $$            | $$
// | $$   | $$ /$$$$$$ | $$ /$$   /$$  /$$$$$$ | $$  \__/  /$$$$$$  /$$$$$$   /$$$$$$$
// |  $$ / $$/|____  $$| $$| $$  | $$ /$$__  $$|  $$$$$$  /$$__  $$|_  $$_/  /$$_____/
//  \  $$ $$/  /$$$$$$$| $$| $$  | $$| $$$$$$$$ \____  $$| $$$$$$$$  | $$   |  $$$$$$
//   \  $$$/  /$$__  $$| $$| $$  | $$| $$_____/ /$$  \ $$| $$_____/  | $$ /$$\____  $$
//    \  $/  |  $$$$$$$| $$|  $$$$$$/|  $$$$$$$|  $$$$$$/|  $$$$$$$  |  $$$$//$$$$$$$/
//     \_/    \_______/|__/ \______/  \_______/ \______/  \_______/   \___/ |_______/


class ValueSetFormatter {
  constructor(specs) {
    this._specs = specs;
    this._codesystems = [];
  }

  get specs() { return this._specs; }
  get codesystems() { return this._codesystems; }

  reset() {
    this._codesystems = [];
    this._paths = [];
  }

  shFromCodeSystem(cs) {
    if (cs.match(/http:\/\/standardhealthrecord.org\/(.*\/)?cs\/(#[A-Za-z0-9]*CS)/)) {
      return '';
    }

    const shorthands = {
      'https://sdt.cap.org': 'CAP',
      'http://www.dsm5.org/': 'DSM',
      'https://evs.nci.nih.gov/ftp1/CDISC/SDTM/': 'NCI',
      'http://www.genenames.org': 'HGNC',
      'http://hl7.org/fhir/quantity-comparator': 'UGLY',
      'http://hl7.org/fhir/sid/cvx': 'CVX',
      'http://hl7.org/fhir/allergy-verification-status': 'AVS',
      'http://hl7.org/fhir/observation-status': 'OBS',
      'http://hl7.org/fhir/ValueSet/allergy-intolerance-category': 'AIC',
      'http://hl7.org/fhir/ValueSet/allergy-intolerance-type': 'AIT',
      'http://hl7.org/fhir/observation-category': 'OBSCAT',
      'http://hl7.org/fhir/v3/ActReason': 'V3',
      'http://loinc.org': 'LNC',
      'http://www.meddra.org': 'MDR',
      'http://www.nationsonline.org/oneworld/country_code_list': 'CC',
      'https://www.ncbi.nlm.nih.gov/refseq': 'REFSEQ',
      'http://ncimeta.nci.nih.gov': 'MTH',
      'https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus': 'NCIT',
      'http://www.nlm.nih.gov/research/umls/rxnorm': 'RXN',
      'http://snomed.info/sct': 'SCT',
      'http://unitsofmeasure.org': 'UCUM',
      'http://uts.nlm.nih.gov/metathesaurus': 'MTS',
      'urn:iso:std:iso:4217': 'CURRENCY',
      'urn:tbd': 'TBD'
    };

    if (shorthands[cs]) {
      if (cs != 'urn:tbd') {
        this._codesystems.pushNew(cs);
      }

      return shorthands[cs];
    } else {
      return `${cs} `;
    }
  }

  formattedCodeFromCncpt(concept) {
    var formattedConceptCode = `${this.shFromCodeSystem(concept.system)}#${concept.code}`;
    if (concept.display) {
      formattedConceptCode = `${formattedConceptCode} "${concept.display}"`;
    } else if (concept.description) {
      formattedConceptCode = `${formattedConceptCode} "${concept.description}"`;
    }

    return formattedConceptCode;
  }

  formatValueSet(valueSet) {
    var concepts, description, rules;
    let outputs = [];

    const declaration = this.formatDeclaration(valueSet);
    outputs.push(declaration);

    if (valueSet.concepts.length > 0) {
      concepts = this.formatConcepts(valueSet);
      outputs.push(concepts);
    }

    if (valueSet.description) {
      description = this.formatDescription(valueSet);
      outputs.push(description);
    }

    if (valueSet.rules.length > 0) {
      rules = this.formatRules(valueSet);
      outputs.push(rules);
    }

    return outputs.join('\n');
  }

  formatDeclaration(vs) {
    const formattedTitle = `${rightPad('ValueSet:')}${vs.identifier.name}`;
    return formattedTitle;
  }

  formatConcepts(vs) {
    const formattedConcepts = [];
    for (const concept of vs.concepts) {
      const formattedConcept = `${this.formattedCodeFromCncpt(concept)}`;
      formattedConcepts.push(formattedConcept);
    }
    return `${rightPad('Concept:')}${formattedConcepts.join(', ')}`;
  }

  formatDescription(vs) {
    const formattedDesc = `${rightPad('Description:')}"${vs.description}"`;
    return formattedDesc;
  }

  formatRules(vs) {
    const formattedRules = [];

    for (const rule of vs.rulesFilter.includesFromCodeSystem.rules) {
      formattedRules.push(this.formatRuleByType(rule));
    }

    for (const rule of vs.rulesFilter.includesFromCode.rules) {
      formattedRules.push(this.formatRuleByType(rule));
    }

    if (vs.rulesFilter.includesDescendents.hasRules) {
      const excludesDescendentsRules = vs.rulesFilter.excludesDescendents.rules;
      for (const rule of vs.rulesFilter.includesDescendents.rules) {
        let formattedRule = this.formatRuleByType(rule);
        while (excludesDescendentsRules.length > 0) {
          formattedRule = `${formattedRule} ${this.formatRuleByType(excludesDescendentsRules.pop())}`;
        }
        formattedRules.push(formattedRule);
      }
    }

    for (const rule of vs.rulesFilter.includesCode.rules) {
      formattedRules.push(this.formatRuleByType(rule));
    }

    return formattedRules.join('\n');
  }

  formatRuleByType(rule) {
    switch (rule.constructor.name) {
      case 'ValueSetIncludesCodeRule':
        return this.formatIncludesCodeRule(rule);
      case 'ValueSetIncludesFromCodeRule':
        return this.formatIncludesFromCodeRule(rule);
      case 'ValueSetIncludesFromCodeSystemRule':
        return this.formatIncludesFromCodeSystemRule(rule);
      case 'ValueSetIncludesDescendentsRule':
        return this.formatIncludesDescendentsRule(rule);
      case 'ValueSetExcludesDescendentsRule':
        return this.formatExcludesDescendentsRule(rule);
      default:
        console.log('Unknown rule type: %s', rule.constructor.name);
        return;
    }
  }

  formatIncludesCodeRule(rule) {
    const formattedCode = `${this.shFromCodeSystem(rule.code.system)}#${rule.code.code}`;
    const formattedDesc = (rule.code.display != null) ? `"${rule.code.display}"` : '';
    return `${rightPad(formattedCode)}${formattedDesc}`;
  }

  formatIncludesFromCodeRule(rule) {
    const formattedCode = this.formattedCodeFromCncpt(rule.code);
    return `Includes codes from ${formattedCode} `;
  }

  formatIncludesFromCodeSystemRule(rule) {
    const formattedCodeSystem = this.shFromCodeSystem(rule.system);
    return `Includes codes from ${formattedCodeSystem} `;
  }

  formatIncludesDescendentsRule(rule) {
    const formattedCode = this.formattedCodeFromCncpt(rule.code);
    return `Includes codes descending from ${formattedCode}`;
  }

  formatExcludesDescendentsRule(rule) {
    const formattedCode = this.formattedCodeFromCncpt(rule.code);
    return `Includes codes descending from ${this.formattedCodeFromCncpt(formattedCode)}`;
  }
}

//  /$$      /$$                               /$$
// | $$$    /$$$                              |__/
// | $$$$  /$$$$  /$$$$$$   /$$$$$$   /$$$$$$  /$$ /$$$$$$$   /$$$$$$   /$$$$$$$
// | $$ $$/$$ $$ |____  $$ /$$__  $$ /$$__  $$| $$| $$__  $$ /$$__  $$ /$$_____/
// | $$  $$$| $$  /$$$$$$$| $$  \ $$| $$  \ $$| $$| $$  \ $$| $$  \ $$|  $$$$$$
// | $$\  $ | $$ /$$__  $$| $$  | $$| $$  | $$| $$| $$  | $$| $$  | $$ \____  $$
// | $$ \/  | $$|  $$$$$$$| $$$$$$$/| $$$$$$$/| $$| $$  | $$|  $$$$$$$ /$$$$$$$/
// |__/     |__/ \_______/| $$____/ | $$____/ |__/|__/  |__/ \____  $$|_______/
//                        | $$      | $$                     /$$  \ $$
//                        | $$      | $$                    |  $$$$$$/
//                        |__/      |__/                     \______/

class ElementMappingFormatter {
  constructor(specs) {
    this._specs = specs;
    // this._namespaces = namespaces;
    // this._elements = elements;
    // this._valuesets = valuesets;
    // this._mappings = mappings;
  }


  get target() { return this._target; }
  set target(target) {
    this._target = target;
  }

  reset() {
    this.target = '';
  }

  get specs() { return this._specs; }
  // get namespaces() { return this._namespaces; }
  // get elements() { return this._elements; }
  // get valuesets() { return this._valuesets; }
  // get mappings() { return this._mappings; }

  formatMapping(mapping) {
    const elementMapping = this.formatTopLevelMapping(mapping);
    const rules = this.formatRules(mapping);
    return [
      elementMapping,
      ...rules
    ].join('\n');
  }

  formatTopLevelMapping(mapping) {
    const hasTarget = mapping.targetItem != null;
    const targetStatement = (hasTarget) ? ` maps to ${mapping.targetItem}` : '';

    const hasSubMappings = mapping.rules.length > 0;
    const semicolonStatement = hasSubMappings ? ':' : '';

    return `${mapping.identifier.name}${targetStatement}${semicolonStatement}`;
  }

  formatRules(mapping) {
    const formattedRules = [];
    for (const rule of mapping.rules) {
      if (rule.lastModifiedBy.fqn == mapping.identifier.fqn) {
        const formattedRule = this.formatRuleByType(rule);
        formattedRules.push(`\t${formattedRule}`);
      }
    }
    return formattedRules;
  }

  formatRuleByType(rule) {
    switch (rule.constructor.name) {
      case 'FieldMappingRule': {
        return `${this.formatRuleSource(rule)} maps to ${rule.target.replace(/[ \t]+$/, '')}`;
      }
      case 'CardinalityMappingRule': {
        return `constrain ${rule.target.replace(/[ \t]+$/, '')} to ${rule.cardinality.toString()}`;
      }
      case 'FixedValueMappingRule': {
        return `fix ${rule.target.replace(/[ \t]+$/, '')} to ${rule.value}`;
      }

      default:
        console.log('Unknown Mapping Rule Type: %s', rule.constructor.name);
        return;
    }
  }

  formatRuleSource(rule) {
    if (rule.sourcePath.length == 1 && rule.sourcePath[0].text) { //.text.match(/^TBD\(.*\)$/)
      return `TBD "${rule.sourcePath[0].text}"`;
    }
    return rule.sourcePath.map(p => p.name).join('.');
  }

}

//  /$$$$$$$              /$$               /$$$$$$$$ /$$                                               /$$
// | $$__  $$            | $$              | $$_____/| $$                                              | $$
// | $$  \ $$  /$$$$$$  /$$$$$$    /$$$$$$ | $$      | $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
// | $$  | $$ |____  $$|_  $$_/   |____  $$| $$$$$   | $$ /$$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
// | $$  | $$  /$$$$$$$  | $$      /$$$$$$$| $$__/   | $$| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$
// | $$  | $$ /$$__  $$  | $$ /$$ /$$__  $$| $$      | $$| $$_____/| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
// | $$$$$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$| $$$$$$$$| $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
// |_______/  \_______/   \___/   \_______/|________/|__/ \_______/|__/ |__/ |__/ \_______/|__/  |__/   \___/ |_______/




class DataElementFormatter {
  constructor(specs) {
    this._specs = specs;
    this._codesystems = [];
    this._uses = [];
    // this._namespaces = namespaces;
    // this._elements = elements;
    // this._valuesets = valuesets;
    this._codesystems = [];
  }

  get specs() { return this._specs; }

  get codesystems() { return this._codesystems; }
  get uses() { return this._uses; }

  reset() {
    this._codesystems = [];
    this._paths = [];
  }

  shFromCodeSystem(cs) {
    if (!cs) return '';

    if (cs.match(/http:\/\/standardhealthrecord.org\/shr\/[A-Za-z]*\/cs\/(#[A-Za-z]*CS)/)) {
      return '';
    }


    const shorthands = {
      'https://sdt.cap.org': 'CAP',
      'http://www.dsm5.org/': 'DSM',
      'https://evs.nci.nih.gov/ftp1/CDISC/SDTM/': 'NCI',
      'http://www.genenames.org': 'HGNC',
      'http://hl7.org/fhir/quantity-comparator': 'UGLY',
      'http://hl7.org/fhir/sid/cvx': 'CVX',
      'http://hl7.org/fhir/allergy-verification-status': 'AVS',
      'http://hl7.org/fhir/observation-status': 'OBS',
      'http://hl7.org/fhir/ValueSet/allergy-intolerance-category': 'AIC',
      'http://hl7.org/fhir/ValueSet/allergy-intolerance-type': 'AIT',
      'http://hl7.org/fhir/observation-category': 'OBSCAT',
      'http://hl7.org/fhir/v3/ActReason': 'V3',
      'http://loinc.org': 'LNC',
      'http://www.meddra.org': 'MDR',
      'http://www.nationsonline.org/oneworld/country_code_list': 'CC',
      'https://www.ncbi.nlm.nih.gov/refseq': 'REFSEQ',
      'http://ncimeta.nci.nih.gov': 'MTH',
      'https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus': 'NCIT',
      'http://www.nlm.nih.gov/research/umls/rxnorm': 'RXN',
      'http://snomed.info/sct': 'SCT',
      'http://unitsofmeasure.org': 'UCUM',
      'http://uts.nlm.nih.gov/metathesaurus': 'MTS',
      'urn:iso:std:iso:4217': 'CURRENCY',
      'urn:tbd': 'TBD'
    };

    if (shorthands[cs]) {
      if (cs != 'urn:tbd') {
        this._codesystems.pushNew(cs);
      }

      return shorthands[cs];
    } else {
      return cs;
    }
  }

  getIdFromFqnAndTrackUsed(fqn) {
    const id = idFromFQN(fqn);
    if (id.namespace != 'primitive') {
      this.uses.pushNew(id.namespace);
    }

    return id;
  }

  getVSFromURIAndTrackUsed(vs) {
    const ns = vs.match(/(shr\/[A-Za-z]*)\//)[1].replace('/', '.');
    this.uses.pushNew(ns);

    const name = vs.split('/').pop().replace('#', '');
    return name;
  }

  formattedCodeFromCncpt(concept) {
    var formattedConceptCode = `${this.shFromCodeSystem(concept.system)}#${concept.code}`;
    if (concept.display) {
      formattedConceptCode = `${formattedConceptCode} "${concept.display}"`;
    } else if (concept.description) {
      formattedConceptCode = `${formattedConceptCode} "${concept.description}"`;
    }

    return formattedConceptCode;
  }

  formatDataElement(de) {
    var declaration, concepts, basedOns, description, value;
    let outputs = [];

    declaration = this.formatDeclaration(de);
    outputs.push(declaration);

    if ('basedOn' in de && de.basedOn.length > 0) {
      basedOns = this.formatBasedOns(de);
      outputs.push(basedOns);
    }

    if ('concepts' in de && de.concepts.length > 0) {
      concepts = this.formatConcepts(de);
      outputs.push(concepts);
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

    return outputs.join('\n');
  }

  formatDeclaration(de) {
    let formattedModifier = '';
    if (de.isEntry) {
      formattedModifier = 'Entry';
    } else if (de.isAbstract) {
      formattedModifier = 'Abstract ';
    }

    const formattedTitle = `${rightPad(`${formattedModifier}Element:`, 4)}${de.identifier.name}`;
    return formattedTitle;
  }

  formatBasedOns(de) {
    const formattedBasedOns = [];
    for (const basedOn of de.basedOn) {

      const formattedBasedOn = this.getIdFromFqnAndTrackUsed(basedOn.fqn).name;
      formattedBasedOns.push(formattedBasedOn);
    }
    return `${rightPad('Based on:', 4)}${formattedBasedOns.join(', ')}`;
  }

  formatConcepts(de) {
    const formattedConcepts = [];
    for (const concept of de.concepts) {
      const formattedConcept = `${this.formattedCodeFromCncpt(concept)}`;
      formattedConcepts.push(formattedConcept);
    }
    return `${rightPad('Concept:', 4)}${formattedConcepts.join(', ')}`;
  }

  formatDescription(de) {
    const formattedDesc = `${rightPad('Description:', 4)}"${de.description}"`;
    return formattedDesc;
  }

  arrangeValuesByConstraintPaths(value, de) {
    var constraintsByPaths = value.constraints.reduce((out, constraint, i) => {
      if (constraint.lastModifiedBy.fqn != de.identifier.fqn) {
        return out;
      }

      let combinedPaths = [];

      if (constraint.path.length > 0) {

        let pathsClone = [...constraint.path];

        while (pathsClone.length > 0) {
          const p = pathsClone.shift();

          if (p.fqn) this.getIdFromFqnAndTrackUsed(p.fqn);

          if (p.name == 'Units' && pathsClone.length > 1 && pathsClone[1].name == 'Coding') {
            pathsClone.shift();
            continue;
          }

          if (['code', 'Coding'].includes(p.name)) {
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

    // if (!value.inheritance && Object.keys(out).filter(key=>key!='root').length > 0) {

    // }

    if (Object.keys(constraintsByPaths).length && Object.keys(constraintsByPaths)[0] == 'CodeableConcept') {
      constraintsByPaths = {'root':constraintsByPaths['CodeableConcept']};
    }

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
          return `${rightPad('0..0',4)}Value`;
        } else {
          return `${rightPad('0..0',4)}${formattedValue}`;
        }
      }

      formattedValue = this.formatValueWithCard(formattedValue, value, formatAsField);
    }

    //then do path
    if (path && path !== 'root' && value.inheritance) {
      formattedValue = `${formattedValue}.${path}`;
    }

    // then try the mess that is constraints
    if ('constraints' in value && value.constraints.length > 0) {
      if (!formatAsField && value.constructor.name == 'RefValue' && value.constraints.length == 1 && value.constraints[0].constructor.name == 'TypeConstraint') {
        formatAsField = true;
        formattedValue = `${rightPad('',4)}Value`;
      }

      formattedValue = this.formatValueWithConstraints(formattedValue, value, de, formatAsField);
    }

    if (!formatAsField) return `${rightPad('Value:',4)}${formattedValue}`;

    return formattedValue;

  }

  formatValueByType(value, de) {
    if (value.identifier && value.identifier.fqn) {
      this.getIdFromFqnAndTrackUsed(value.identifier.fqn);
    }

    switch (value.constructor.name) {
      case 'IdentifiableValue':
        return value.identifier.name;
      case 'RefValue':
        return `ref(${value.identifier.name})`;
      case 'ChoiceValue': {
        let choiceStrings = [];
        for (const opt of value.options) {
          var choiceStr = this.formatValueByType(opt, de, true);
          // formatValueWithConstraints(formattedByPath, value, de, formatAsField);
          choiceStr = this.formatValueWithConstraints(choiceStr, opt, de, false);

          // choiceStr = this.formatValueWithConstraints(choiceStr, opt, de, true)
          choiceStrings.push(choiceStr);
        }
        return choiceStrings.join(' or ');
        // return 'learn how to format choices'
      }
      case 'TBD':
        return `TBD "${value.text}"`;
      default:
        return;
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

      formattedValue = `${formattedValue}.${p.name}`;
    }

    return formattedValue;
  }

  formatValueWithCard(formattedValue, value, formatAsField) {
    if (!formatAsField && value.effectiveCard.min == 1 && value.effectiveCard.max == 1) {
      return formattedValue;
    }

    if (formatAsField && value.inheritedFrom) { //handled in formatbyConstrainttype
      return `${ rightPad('', 4) }${formattedValue}`;
    }

    if (value.constructor.name == 'ChoiceValue') {
      formattedValue = `(${formattedValue})`;
    }

    let cardString = `${value.effectiveCard.toString()} `;

    if (formatAsField) cardString = rightPad(cardString, 4);

    return `${cardString}${formattedValue}`;
  }

  formatValueWithConstraints(formattedByPath, value, de, formatAsField) {
    let formattedWithConstraint = formattedByPath;
    for (const con of value.constraints) {
      if (con.lastModifiedBy.fqn == de.identifier.fqn) {
        formattedWithConstraint = this.formatValueByConstraintType(formattedWithConstraint, con, formatAsField, value);
      }
    }
    return formattedWithConstraint;
  }

  formatValueByConstraintType(formattedValue, constraint, formatAsField, value) {
    switch (constraint.constructor.name) {
      case 'TypeConstraint': {
        if (formatAsField && !value.inheritance && !constraint.onValue) {
          constraint.onValue = true;
        }

        return this.formatValueWithTypeConstraint(formattedValue, constraint);
      }
      case 'ValueSetConstraint': {
        if (!formatAsField && constraint.path.length >= 2 && constraint.path[0].name == 'Units' && constraint.path[1].name == 'Coding') {
          return [
            formattedValue,
            `${rightPad('', 4)}${this.formatValueWithValueSetConstraint(`${formattedValue.replace(/.*\s([^\s]*)/,'$1')}.Units`, constraint)}`,
          ].join('\n');
        }

        return this.formatValueWithValueSetConstraint(formattedValue, constraint);
      }
      case 'CardConstraint': {
        if (formatAsField) {
          return this.formatValueWithCardConstraint(formattedValue, constraint);
        } else {
          return formattedValue;
        }
      }
      case 'IncludesTypeConstraint':
        return this.formatValueWithIncludesTypeConstraint(formattedValue, constraint);
      case 'IncludesCodeConstraint':
        return this.formatValueWithIncludesCodeConstraint(formattedValue, constraint);
      case 'BooleanConstraint':
        return this.formatValueWithBooleanConstraint(formattedValue, constraint);
      case 'CodeConstraint':
        return this.formatValueWithCodeConstraint(formattedValue, constraint);
      default:
        console.log('learn to deal with this %s', constraint.constructor.name);
        return formattedValue;
    }
  }

  formatValueWithTypeConstraint(formattedValue, constraint) {
    if (constraint.isA.fqn) {
      this.getIdFromFqnAndTrackUsed(constraint.isA.fqn);
    }

    if (constraint.onValue) {
      return `${formattedValue} value is type ${constraint.isA.name}`;
    } else {
      return `${formattedValue} is type ${constraint.isA.name}`;
    }
  }

  formatValueWithValueSetConstraint(formattedValue, constraint) {
    let vs = constraint.valueSet;

    if (vs.identifier && vs.identifier.fqn) {
      this.getIdFromFqnAndTrackUsed(vs.identifier.fqn);
    }


    if (vs.startsWith('http://standardhealthrecord.org')) {
      vs = this.getVSFromURIAndTrackUsed(vs);
    } else if (vs.startsWith('urn:tbd:')) {
      vs = `TBD "${vs.replace('urn:tbd:', '')}"`;
    }


    switch (constraint.bindingStrength) {
      case 'REQUIRED':
        return `${formattedValue} from ${vs}`;
      case 'EXTENSIBLE':
        return `${formattedValue} from ${vs} if covered`;
      case 'PREFERRED':
        return `${formattedValue} should be from ${vs}`;
      case 'EXAMPLE':
        return `${formattedValue} could be from ${vs}`;
      default:
        return formattedValue;
    }
  }

  formatValueWithCardConstraint(formattedValue, constraint, formatAsField) {
    let formattedConstraint = `${constraint.card.toString()}${formattedValue.replace('\t','')}`;
    return formattedConstraint;
    // return value;
  }

  formatValueWithBooleanConstraint(formattedValue, constraint) {
    return `${formattedValue} is ${constraint.value}`;
  }

  formatValueWithCodeConstraint(formattedValue, constraint) {
    let shorthand = this.shFromCodeSystem(constraint.code.system);
    if (!shorthand) {
      shorthand = '';
    }

    var formattedDisplay = '';
    if (constraint.code.display) {
      formattedDisplay = ` "${constraint.code.display}"`;
    }

    var formattedCode = `${shorthand}#${constraint.code.code}${formattedDisplay}`;

    if (constraint.path.length >= 2 && constraint.path[0].name == 'Units' && constraint.path[1].name == 'Coding') {
      return `${formattedValue} with units ${formattedCode}`;
    }

    return `${formattedValue} is ${formattedCode}`;
  }

  formatValueWithIncludesTypeConstraint(formattedValue, constraint) {
    let formattedConstraint = `${rightPad('\t',4)}includes ${constraint.card.toString()} ${constraint.isA.name}`;
    return [formattedValue, formattedConstraint].join('\n');
  }

  formatValueWithIncludesCodeConstraint(formattedValue, constraint) {
    let shorthand = this.shFromCodeSystem(constraint.code.system);
    if (!shorthand) {
      shorthand = '';
    }

    var formattedDisplay = '';
    if (constraint.code.display) {
      formattedDisplay = ` "${constraint.code.display}"`;
    }

    var formattedCode = `${shorthand}#${constraint.code.code}${formattedDisplay}`;

    let formattedConstraint = `${rightPad('\t',4)}includes ${formattedCode}`;
    return [formattedValue, formattedConstraint].join('\n');
  }
}


module.exports = { CimcoreImporter, CimplExporter, DataElementFormatter };