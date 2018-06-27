//  /$$$$$$$              /$$               /$$$$$$$$ /$$                                               /$$
// | $$__  $$            | $$              | $$_____/| $$                                              | $$
// | $$  \ $$  /$$$$$$  /$$$$$$    /$$$$$$ | $$      | $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
// | $$  | $$ |____  $$|_  $$_/   |____  $$| $$$$$   | $$ /$$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
// | $$  | $$  /$$$$$$$  | $$      /$$$$$$$| $$__/   | $$| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$
// | $$  | $$ /$$__  $$  | $$ /$$ /$$__  $$| $$      | $$| $$_____/| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
// | $$$$$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$| $$$$$$$$| $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
// |_______/  \_______/   \___/   \_______/|________/|__/ \_______/|__/ |__/ |__/ \_______/|__/  |__/   \___/ |_______/


const models = require('shr-models');
const { idFromFQN, constructCode } = require('../common');

var rootLogger = bunyan.createLogger({name: 'shr-text-import'});
var logger = rootLogger;

function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

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
    const constructedDE = new models.DataElement(new models.Identifier(de.namespace, de.name), de.isEntry, de.isAbstract);
    constructedDE.description = de.description;
    constructedDE.hierarchy = de.hierarchy;
    constructedDE.grammarVersion = models.GRAMMAR_VERSION;
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
      constructedConcepts.push(new models.Concept(cpt.system, cpt.code, cpt.display));
    }
    return constructedConcepts;
  }

  constructValue(value, de) {
    let constructedValue;

    switch (value.valueType) {
    case 'IdentifiableValue':
      constructedValue = new models.IdentifiableValue(idFromFQN(value.fqn));
      break;
    case 'RefValue':
      constructedValue = new models.RefValue(idFromFQN(value.fqn));
      break;
    case 'ChoiceValue': {
      let cValue = new models.ChoiceValue();
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
      constructedValue = new models.TBD(tbdText);
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
      const histCard = new models.Cardinality(h.min, h.max);
      histCard.source = idFromFQN(h.source);
      constructedHistory.push(histCard);
    }
    return constructedHistory;
  }

  constructCardHistoryConstraints(history) {
    const cardConstraint = new models.CardConstraint(new models.Cardinality(history.min, history.max));
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
      const typeConstraint = new models.TypeConstraint(idFromFQN(constraint.fqn), path, constraint.onValue);
      typeConstraint.lastModifiedBy = idFromFQN(constraint.lastModifiedBy);
      constructedConstraints.push(typeConstraint);
    }

    function constructValueSetConstraint(constraint, path) {
      const vsConstraint = new models.ValueSetConstraint(constraint.uri, path, constraint.bindingStrength);
      vsConstraint.lastModifiedBy = idFromFQN(constraint.lastModifiedBy);
      constructedConstraints.push(vsConstraint);
    }

    function constructCardConstraint(constraint, path) {
      const cardConstraint = new models.CardConstraint(new models.Cardinality(constraint.min, constraint.max), path);
      cardConstraint.lastModifiedBy = idFromFQN(constraint.lastModifiedBy);
      constructedConstraints.push(cardConstraint);
    }

    function constructFixedValueConstraint(constraint, path) {
      if (constraint.type == 'code') {
        const code = constructCode(constraint.value.code, constraint.value.system, constraint.value.display);
        const fixedValueConstraint = new models.CodeConstraint(code, path);
        fixedValueConstraint.lastModifiedBy = idFromFQN(constraint.lastModifiedBy);
        constructedConstraints.push(fixedValueConstraint);
      } else if (constraint.type == 'boolean') {
        const fixedValueConstraint = new models.BooleanConstraint(constraint.value, path);
        fixedValueConstraint.lastModifiedBy = idFromFQN(constraint.lastModifiedBy);
        constructedConstraints.push(fixedValueConstraint);
      } else {
        console.log('Unknown Fixed Value Type: %s', constraint.type);
      }
    }

    function constructIncludesTypeConstraints(constraint, path) {
      for (var cst of constraint) {
        let isA = idFromFQN(cst.fqn);
        let card = new models.Cardinality(cst.card.min, cst.card.max);
        var includesTypeConstraint = new models.IncludesTypeConstraint(isA, card, path);
        includesTypeConstraint.lastModifiedBy = idFromFQN(cst.lastModifiedBy);
        constructedConstraints.push(includesTypeConstraint);
      }
    }

    function constructIncludesCodeConstraints(constraint, path) {
      for (var cst of constraint) {
        let code = constructCode(cst.code, cst.system, cst.description);

        var includesCodeConstraint = new models.IncludesCodeConstraint(code, path);
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

module.exports = { DataElementConstructor, setLogger};