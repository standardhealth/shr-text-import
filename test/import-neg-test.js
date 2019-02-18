const fs = require('fs');
const {expect} = require('chai');
const {importFromFilePath, importConfigFromFilePath, importCIMCOREFromFilePath, setLogger} = require('../index');
const {id, pid, expectAndGetElement, expectAndGetEntry, expectAndGetDataElement, expectValue, expectPrimitiveValue, expectRefValue, expectChoiceValue, expectMinMax, expectCardOne, expectChoiceOption, expectField, expectConcept, expectIdentifier, expectPrimitiveIdentifier, expectNoConstraints, importFixture, importFixtureFolder, importConfiguration, importConfigurationFolder, importCimcoreNSFile, importCimcoreDEFile, importCimcoreVSFile, importCimcoreMapFile, importCimcoreProjectFile, importCimcoreFolder, checkImportErrors, convertSpecsToCimcore } = require('../test/import-helper');
const {Version, DataElement, Value, RefValue, ChoiceValue, IncompleteValue, Identifier, PrimitiveIdentifier, Cardinality, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, TypeConstraint, CardConstraint, TBD, REQUIRED, EXTENSIBLE, PREFERRED, EXAMPLE} = require('shr-models');
const err = require('shr-test-helpers/errors');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());

describe('#importDataElementCounterexample', () => {
  beforeEach(function() {
    err.clear();
  });
  
  it('Neg1: should return errors when there are invalid vocabulary references', () => {
    const specifications = importFixture('InvalidVocabularyReference', 1);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'ZOO', 'bear'); // Defaults to vocabulary alias
    expect(simple.description).to.equal('It is a simple entry with invalid vocab');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('Neg2: should return errors when there are invalid element references', () => {
    const specifications = importFixture('InvalidElementReference', 1);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid element reference');
    expectCardOne(simple.value);
    expectValue(simple.value, 'unknown', 'Complex');
    expectNoConstraints(simple.value);
  });

  it('Neg3: should return errors when there are invalid fully qualified element references', () => {
    const specifications = importFixture('InvalidFQElementReference', 1);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid fully qualified element reference');
    expectCardOne(simple.value);
    expectValue(simple.value, 'other.ns', 'Complex');
    expectNoConstraints(simple.value);
  });

  it('Neg4: should return errors when there are ambiguous element references', () => {
    const specifications = importFixtureFolder('ambiguousResolution', 1);
    const amb = expectAndGetEntry(specifications, 'shr.test.one', 'Ambiguous');
    expect(amb.concepts).to.be.empty;
    expect(amb.description).to.equal('It is an entry that uses an ambiguous reference');
    expectCardOne(amb.value);
    expectValue(amb.value, 'shr.test.two', 'Foo'); // Defaults to first encountered namespace
    expectNoConstraints(amb.value);
  });

  it('Neg5: should return errors when there are conflicting vocab references', () => {
    const specifications = importFixtureFolder('conflictingVocab', 1);
    expect(err.errors()[0].msg).to.contain('FOO');
    expect(err.errors()[0].msg).to.not.contain('MOO');

    const conflicting = expectAndGetEntry(specifications, 'shr.test.one', 'Conflicting');
    expect(conflicting.concepts).to.have.length(2);
    expectConcept(conflicting.concepts[0], 'http://foo.org', 'bar'); // Default to the first encountered vocab
    expectConcept(conflicting.concepts[1], 'http://moo.org', 'car');
    expect(conflicting.description).to.equal('It is an entry that uses a conflicting vocab reference');
    expectCardOne(conflicting.value);
    expectPrimitiveValue(conflicting.value, 'string');
    expectNoConstraints(conflicting.value);
  });
});   // end of describe(#importDataElementCounterexample)

