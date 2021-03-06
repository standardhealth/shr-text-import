//  /$$    /$$          /$$                      /$$$$$$              /$$
// | $$   | $$         | $$                     /$$__  $$            | $$
// | $$   | $$ /$$$$$$ | $$ /$$   /$$  /$$$$$$ | $$  \__/  /$$$$$$  /$$$$$$   /$$$$$$$
// |  $$ / $$/|____  $$| $$| $$  | $$ /$$__  $$|  $$$$$$  /$$__  $$|_  $$_/  /$$_____/
//  \  $$ $$/  /$$$$$$$| $$| $$  | $$| $$$$$$$$ \____  $$| $$$$$$$$  | $$   |  $$$$$$
//   \  $$$/  /$$__  $$| $$| $$  | $$| $$_____/ /$$  \ $$| $$_____/  | $$ /$$\____  $$
//    \  $/  |  $$$$$$$| $$|  $$$$$$/|  $$$$$$$|  $$$$$$/|  $$$$$$$  |  $$$$//$$$$$$$/
//     \_/    \_______/|__/ \______/  \_______/ \______/  \_______/   \___/ |_______/


const models = require('shr-models');
const { idFromFQN, constructCode, GRAMMAR_VERSION } = require('./constructorCommons');

const bunyan = require('bunyan');
var rootLogger = bunyan.createLogger({name: 'shr-text-import'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

class ValueSetConstructor {

  constructor() {
    this._valuesets = [];
    this._codesystems = [];
  }

  get valuesets() { return this._valuesets; }
  set valuesets(valuesets) {
    this._valuesets = valuesets;
  }

  get codesystems() { return this._codesystems; }
  set codesystems(codesystems) {
    this._codesystems = codesystems;
  }

  get config() { return this._config; }
  set config(config) { this._config = config; }

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

    // If the VS contains custom codes, create a code system
    if (constructedVS.rulesFilter.includesCode.rules.some(rule => rule.code.system.startsWith(this.config.projectURL))) {
      const constructedCS = this.constructCodeSystem(constructedVS);
      constructedVS.rulesFilter.includesCode.rules
        .filter(rule => rule.code.system.startsWith(this.config.projectURL))
        .forEach(rule => constructedCS.addCode(rule.code));
      this.codesystems.push(constructedCS);
    }
  }

  constructBasicValueSet(vs) {
    const constructedVS = new models.ValueSet(idFromFQN(vs.fqn), vs.url);
    constructedVS.description = vs.description;
    constructedVS.grammarVersion = models.GRAMMAR_VERSION;

    return constructedVS;
  }

  constructConcepts(vs) {
    const constructedConcepts = [];
    for (let cpt of vs.concepts) {
      constructedConcepts.push(new models.Concept(cpt.system, cpt.code, cpt.display));
    }
    return constructedConcepts;
  }


  constructValues(values) {
    let constructedValues = [];
    for (const value of values) {
      let code = constructCode(value.code, value.system, value.description);

      let includesCodeRule = new models.ValueSetIncludesCodeRule(code);
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
        //11030 , 'Unable to import VS rule  unknown rule type: ${ruleType1}' , 'The type either does not exist  or the import tool needs to be updated.', 'errorNumber'
        logger.error({ruleType1 : rType }, '11030');
        break;
      }
    }


    function constructIncludesDescendentsRules(rules) {
      for (const rule of rules) {
        let code = constructCode(rule.code, rule.system, rule.description);

        let includesDescendentsRule = new models.ValueSetIncludesDescendentsRule(code);
        constructedRules.push(includesDescendentsRule);
      }
    }

    function constructIncludesFromCodeRules(rules) {
      for (const rule of rules) {
        let code = constructCode(rule.code, rule.system, rule.description);

        let includesFromCodeRule = new models.ValueSetIncludesFromCodeRule(code);
        constructedRules.push(includesFromCodeRule);
      }
    }

    function constructIncludesFromCodeSystemRules(rules) {
      for (const rule of rules) {
        let includesFromCodeSystemRule = new models.ValueSetIncludesFromCodeSystemRule(rule.system);
        constructedRules.push(includesFromCodeSystemRule);
      }
    }

    function constructExcludesDescendentsRules(rules) {
      for (const rule of rules) {
        let code = constructCode(rule.code, rule.system, rule.description);

        let excludesDescendentsRule = new models.ValueSetExcludesDescendentsRule(code);
        constructedRules.push(excludesDescendentsRule);
      }
    }
  }

  constructCodeSystem(constructedVS) {
    let currentPath = constructedVS.url.replace(/VS$/, 'CS');
    let csURL;
    if (currentPath.indexOf('/vs/') >= 0) {
      csURL = currentPath.replace('/vs/', '/cs/');
    } else if (currentPath.indexOf('/ValueSet/') >= 0) {
      csURL = currentPath.replace('/ValueSet/', '/CodeSystem/');
    } else {
      csURL = `${currentPath}cs/`;
    }
    // To eliminate confusion, if the name ends with VS, replace it with CS
    const vsID = constructedVS.identifier;
    const identifier = new models.Identifier(vsID.namespace, vsID.name.replace(/VS$/, 'CS'));
    const constructedCS = new models.CodeSystem(identifier, csURL);
    if (typeof constructedVS.description !== 'undefined') {
      constructedCS.description = constructedVS.description;
    }
    constructedCS.grammarVersion = GRAMMAR_VERSION;

    return constructedCS;
  }
}

module.exports = { ValueSetConstructor, setLogger};
