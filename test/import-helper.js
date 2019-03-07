const fs = require('fs');
const {expect} = require('chai');
const {importFromFilePath, importConfigFromFilePath, importCIMCOREFromFilePath, setLogger} = require('../index');
const {DataElement, Value, RefValue, ChoiceValue, Identifier, PrimitiveIdentifier, Cardinality, toCIMPL6} = require('shr-models');
const err = require('shr-test-helpers/errors');

// Shorthand Identifier constructor for more concise code
function id(namespace, name) {
  return new Identifier(namespace, name);
}

// Shorthand PrimitiveIdentifier constructor for more concise code
function pid(name) {
  return new PrimitiveIdentifier(name);
}

function expectAndGetElement(specs, expectedNamespace, expectedName) {
  return expectAndGetDataElement(specs, expectedNamespace, expectedName, false);
}

function expectAndGetEntry(specs, expectedNamespace, expectedName) {
  return expectAndGetDataElement(specs, expectedNamespace, expectedName, true);
}

function expectAndGetDataElement(specs, expectedNamespace, expectedName, isEntry) {
  const def = specs.dataElements.find(expectedNamespace, expectedName);
  expect(def).to.be.instanceof(DataElement);
  expect(def.isEntry).to.equal(isEntry);
  expectIdentifier(def.identifier, expectedNamespace, expectedName);
  return def;
}

function expectValue(value, expectedNamespace, expectedName) {
  expect(value).to.be.instanceof(Value);
  expectIdentifier(value.identifier, expectedNamespace, expectedName);
}

function expectPrimitiveValue(value, expectedName) {
  expect(value).to.be.instanceof(Value);
  expectPrimitiveIdentifier(value.identifier, expectedName);
}

function expectRefValue(value, expectedNamespace, expectedName) {
  expect(value).to.be.instanceof(RefValue);
  expectIdentifier(value.identifier, expectedNamespace, expectedName);
}

function expectChoiceValue(value, size) {
  expect(value).to.be.instanceof(ChoiceValue);
  expect(value.options).to.have.length(size);
}

function expectMinMax(value, expectedMin, expectedMax) {
  expect(value).to.be.instanceof(Value);
  const card = value.card;
  if (typeof expectedMax == 'undefined') {
    expectedMax = expectedMin;
  }
  if (typeof expectedMin !== 'undefined') {
    expect(card).to.be.instanceof(Cardinality);
    expect(card.min).to.equal(expectedMin);
    if (typeof card.max !== 'undefined') {
      expect(card.max).to.equal(expectedMax);
      expect(card.isMaxUnbounded).to.be.false;
    } else {
      expect(card.max).to.be.undefined;
      expect(card.isMaxUnbounded).to.be.true;
    }
  } else {
    expect(card).to.be.undefined;
  }
}

function expectCardOne(value) {
  expect(value.card.isExactlyOne).to.be.true;
}

function expectChoiceOption(choice, optionIndex, expectedNamespace, expectedName, expectedMin=1, expectedMax=1) {
  let option = choice.options[optionIndex];
  expectMinMax(option, expectedMin, expectedMax);
  expectValue(option, expectedNamespace, expectedName);
}

function expectField(element, fieldIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  const sptEl = element.fields[fieldIndex];
  expectMinMax(sptEl, expectedMin, expectedMax);
  expectValue(sptEl, expectedNamespace, expectedName);
}

function expectConcept(concept, system, code, display='') {
  expect(concept.system).equals(system);
  expect(concept.code).equals(code);
  expect(concept.display).equals(display);
}

function expectIdentifier(identifier, expectedNamespace, expectedName) {
  expect(identifier).to.be.instanceof(Identifier);
  expect(identifier.namespace).to.equal(expectedNamespace);
  expect(identifier.name).to.equal(expectedName);
}

function expectPrimitiveIdentifier(identifier, expectedName) {
  expect(identifier).to.be.instanceof(PrimitiveIdentifier);
  expect(identifier.namespace).to.equal('primitive');
  expect(identifier.name).to.equal(expectedName);
}

function expectNoConstraints(value) {
  if (Array.isArray(value)) {
    for (const v of value) {
      expectNoConstraints(v);
    }
  } else {
    expect(value.hasConstraints).to.be.false;
  }
}

function importFixture(name, hasExpectedErrors = false) {
  const dependencies = importFromFilePath(`${__dirname}/fixtures/dataElement/_dependencies`);
  const specifications = importFromFilePath(`${__dirname}/fixtures/dataElement/${name}.txt`, null, dependencies);
  checkImportErrors(hasExpectedErrors);
  return specifications;
}

function importFixtureFolder(name, hasExpectedErrors = false) {
  const dependencies = importFromFilePath(`${__dirname}/fixtures/dataElement/_dependencies`);
  const specifications = importFromFilePath(`${__dirname}/fixtures/dataElement/${name}`, null, dependencies);
  checkImportErrors(hasExpectedErrors);
  return specifications;
}

function importConfiguration(name, hasExpectedErrors = false) {
  const configuration = importConfigFromFilePath(`${__dirname}/fixtures/config/${name}.txt`);
  checkImportErrors(hasExpectedErrors);
  return configuration;
}

function importConfigurationFolder(name, hasExpectedErrors = false) {
  const configuration = importConfigFromFilePath(`${__dirname}/fixtures/config/${name}`);
  checkImportErrors(hasExpectedErrors);
  return configuration;
}

function checkImportErrors(hasExpectedErrors) {
  const errors = err.errors();
  console.log('message='+errors.map(e => e.msg).join('; '));
  if (hasExpectedErrors && errors.length === 0) {
    expect(true, '**Negative Test Failed: No error was reported**').to.be.false;
  } else if (!hasExpectedErrors && errors.length > 0) {
    expect(false, `**Import Errors: ${errors.map(e => e.msg).join('; ')}**`).to.be.true;
  } else if (hasExpectedErrors) {
    // Expectation of error was met. But let's print the error messsage anyway
    const message = `    The following test passed, error message:  ${errors.map(e => e.msg).join('; ')}`;
    console.log(message);
  }
}


/*
function importCimcoreNSFile(namespace, numExpectedErrors = 0) {
  namespace = namespace.replace(/\./g,'-');
  const configuration = fs.readFileSync(`${__dirname}/fixtures/cimcore/${namespace}/${namespace}.json`, 'utf8');
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function importCimcoreDEFile(namespace, name, numExpectedErrors = 0) {
  namespace = namespace.replace(/\./g,'-');
  const configuration = fs.readFileSync(`${__dirname}/fixtures/cimcore/${namespace}/${namespace}-${name}.json`, 'utf8');
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function importCimcoreVSFile(namespace, name, numExpectedErrors = 0) {
  namespace = namespace.replace(/\./g,'-');
  const configuration = fs.readFileSync(`${__dirname}/fixtures/cimcore/${namespace}/valuesets/${name}.json`, 'utf8');
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function importCimcoreMapFile(namespace, name, numExpectedErrors = 0) {
  namespace = namespace.replace(/\./g,'-');
  const configuration = fs.readFileSync(`${__dirname}/fixtures/cimcore/${namespace}/mappings/${name}-mapping.json`, 'utf8');
  checkImportErrors(numExpectedErrors);
  return configuration;

}

function importCimcoreProjectFile(numExpectedErrors = 0) {
  const configuration = fs.readFileSync(`${__dirname}/fixtures/cimcore/project.json`, 'utf8');
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function importCimcoreFolder(numExpectedErrors = 0) {
  const configuration = importCIMCOREFromFilePath(`${__dirname}/fixtures/cimcore/`);
  checkImportErrors(numExpectedErrors);
  return configuration;
}


//THIS IS A HORRIBLE HACK. THIS AND THE CORRESPONDING SECTION IN shr-cli SHOULD
//BE REPLACED WITH A STANDARD shr-model METHOD AS SOON AS WE REFACTOR shr-models.
function convertSpecsToCimcore(configSpecifications, expSpecifications) {
  const cimcoreSpecifications = {
    'dataElements': [],
    'valueSets': [],
    'mappings': [],
    'namespaces': {},
  //also includes 'projectInfo'
  };

  //meta project file
  let versionInfo = {
    'CIMPL_version': '5.6.0',   //TODO: Update these to use an accurate constant. Current mode constant is on 4.0.0
    'CIMCORE_version': '1.1'    //TODO: Update these to use an accurate constant. Current mode constant is on 4.0.0
  };

  let projectMetaOutput = Object.assign({ 'fileType': 'ProjectInfo' }, configSpecifications, versionInfo); //project meta information
  cimcoreSpecifications['projectInfo'] = projectMetaOutput;

  //meta namespace files
  for (const ns of expSpecifications.namespaces.all) { //namespace files
    let out = Object.assign({ 'fileType': 'Namespace' }, ns.toJSON());
    cimcoreSpecifications.namespaces[ns.namespace] = out;
  }

  //data elements
  for (const de of expSpecifications.dataElements.all) {
    let out = Object.assign({ 'fileType': 'DataElement' }, de.toJSON());
    cimcoreSpecifications.dataElements.push(out);
  }

  //valuesets
  for (const vs of expSpecifications.valueSets.all) {
    let out = Object.assign({ 'fileType': 'ValueSet' }, vs.toJSON());
    cimcoreSpecifications.valueSets.push(out);
  }

  //mappings
  for (const mapping of [...expSpecifications.maps._targetMap][0][1].all) {
    let out = Object.assign({ 'fileType': 'Mapping' }, mapping.toJSON());
    cimcoreSpecifications.mappings.push(out);
  }

  return cimcoreSpecifications;
}

module.exports = {id, pid, expectAndGetElement, expectAndGetEntry, expectAndGetDataElement, expectValue, expectPrimitiveValue, expectRefValue, expectChoiceValue, expectMinMax, expectCardOne, expectChoiceOption, expectField, expectConcept, expectIdentifier, expectPrimitiveIdentifier, expectNoConstraints, importFixture, importFixtureFolder, importConfiguration, importConfigurationFolder, importCimcoreNSFile, importCimcoreDEFile, importCimcoreVSFile, importCimcoreMapFile, importCimcoreProjectFile, importCimcoreFolder, checkImportErrors, convertSpecsToCimcore };

*/

module.exports = {id, pid, expectAndGetElement, expectAndGetEntry, expectAndGetDataElement, expectValue, expectPrimitiveValue, expectRefValue, expectChoiceValue, expectMinMax, expectCardOne, expectChoiceOption, expectField, expectConcept, expectIdentifier, expectPrimitiveIdentifier, expectNoConstraints, importFixture, importFixtureFolder, importConfiguration, importConfigurationFolder, checkImportErrors, toCIMPL6 };
