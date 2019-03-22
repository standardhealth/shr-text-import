const fs = require('fs');
const {expect} = require('chai');
const {setLogger} = require('../index');
const {id, pid, expectAndGetElement, expectAndGetEntry, expectValue, expectPrimitiveValue, expectChoiceValue, expectCardOne, expectChoiceOption, expectField, expectConcept, expectIdentifier, expectPrimitiveIdentifier, expectNoConstraints, importFixture, importFixtureFolder, testCIMPL6Export } = require('../test/import-helper');
const {Version, IncompleteValue, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, TypeConstraint, CardConstraint, TBD, REQUIRED, EXTENSIBLE, PREFERRED, EXAMPLE} = require('shr-models');
const err = require('shr-test-helpers/errors');
const shrexpand = require('shr-expand');
const expand = shrexpand.expand;
const errorLogger = err.logger();

shrexpand.setLogger(errorLogger)
// Set the logger -- this is needed for detecting and checking errors
setLogger(errorLogger);

//------------------- Controlling the Tests -------------------------

// PHASE 1: Run import tests (always true)
const phase1 = true; 
// PHASE 2: Expand and Export: Write the re-constituted files to dataElementExports
const phase2 = true;
// PHASE 3 (comment out if not desired): This re-runs the tests by importing the files that were exported to dataElementExports (only valid if files were exported in phase 1)
const phase3 = true;

//------------------- The Tests -------------------------

testImportExport(phase2, "/fixtures/dataElement/", '#importDataElement');
testImportExport(phase3, "/fixtures/dataElementExports/", "#re-importExportedFiles");
// removal of exports directory is not yet tested
// emptyThenRmdir(`${__dirname}/fixtures/dataElementExports');



function testImportExport(phase2, importDir, describeString) {
describe(describeString, () => {
  beforeEach(function() {
    err.clear();
  });

  it('Import01: Check reading the header, file = ', () => {
    const file = 'header';
    const specifications = importFixture(file, importDir);
    ns = specifications.namespaces.find(file);
    expect(ns.namespace).to.equal(file);
    expect(ns.description).to.equal('The SHR test namespace');
    if(phase2) testCIMPL6Export(specifications);
  });

  it('Import02: Check reading a simple entry, file = ', () => {
    const nspace = file = 'simpleEntry';
    const specifications = importFixture(file, importDir);
    const simple = expectAndGetEntry(specifications, nspace, 'SimpleEntry');
    expect(simple.grammarVersion).to.eql(new Version(6, 0));
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expect(simple.description).to.equal('It is a simple entry');
    expect(simple.isAbstract).to.be.false;
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
    if(phase2) testCIMPL6Export(specifications);
  });

  it('Import03: should correctly import a simple element, file = ', () => {
    const nspace = file = 'simpleElement'
    const specifications = importFixture(file, importDir);
    const simple = expectAndGetElement(specifications, nspace, 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expect(simple.isAbstract).to.be.false;
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
    if(phase2) testCIMPL6Export(specifications);
  });

  it('Import04: should correctly import a simple abstract element', () => {
    const nspace = file = 'simpleAbstractElement';
    const specifications = importFixture(file, importDir);
    const simple = expectAndGetElement(specifications, nspace, 'Simple');
    expect(simple.isAbstract).to.be.true;
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
    if(phase2) testCIMPL6Export(specifications);
  });

  it('Import05: should correctly import an entry whose value is a concept', () => {
    const nspace = file = 'coded';
    const specifications = importFixture(file, importDir);
    const coded = expectAndGetEntry(specifications, nspace, 'Coded');
    expect(coded.description).to.equal('It is a concept entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expectNoConstraints(coded.value);
    if(phase2) testCIMPL6Export(specifications);
  });

  it('Import06: should correctly import an entry with a code from a valueset', () => {
    const nspace = file = 'codedFromValueSet';
    const specifications = importFixture(file, importDir);
    const coded = expectAndGetEntry(specifications, nspace, 'CodedFromValueSet');
    expect(coded.description).to.equal('It is a coded entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    if(phase2) testCIMPL6Export(specifications);
  });


  it('Import07: should correctly import an entry with a code from a valueset using a path', () => {
    const nspace = file = 'codedFromPathValueSet';
    const specifications = importFixture(file, importDir);
    const coded = expectAndGetEntry(specifications, nspace, 'CodedFromPathValueSet');
    expect(coded.description).to.equal('It is a coded entry that uses a valueset with a path');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    if(phase2) testCIMPL6Export(specifications);
  });


  it('Import08: should correctly import an entry whose value is an element', () => {
    const nspace = file = 'valueIsElement';
    const specifications = importFixture(file, importDir);
    const simple = expectAndGetEntry(specifications, nspace, 'ValueIsElement');
    expect(simple.description).to.equal('Value is a reference to a simple element');
    expectCardOne(simple.value);
    expectNoConstraints(simple.value);
    if(phase2) testCIMPL6Export(specifications);
  });


  it('Import10: should correctly import a group element without a value', () => {
    const nspace = file = 'groupPropertiesOnly';
    const specifications = importFixture(file, importDir);
    const group = expectAndGetElement(specifications, nspace, 'GroupPropertiesOnly');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(4);
    expectField(group, 0, nspace, 'Simple', 0, 1);
    expectField(group, 1, nspace, 'Coded', 0);
    expectField(group, 2, nspace, 'Simple2', 1);
    expectField(group, 3, nspace, 'Thing', 1, 1);
    expectNoConstraints(group.fields);
    if(phase2) testCIMPL6Export(specifications);
  });

  
  it('Import11: should correctly import a group entry with both a value and properties', () => {
    const nspace = file = 'groupValueAndProperties';
    const specifications = importFixture(file, importDir);
    const group = expectAndGetElement(specifications, nspace, 'GroupValueAndProperties');
    expectCardOne(group.value);
    expectPrimitiveValue(group.value, 'concept');
    expectNoConstraints(group.value);
    expect(group.fields).to.have.length(4);
    expectField(group, 0, nspace, 'Simple', 0, 1);
    expectField(group, 1, nspace, 'Coded', 0);
    expectField(group, 2, nspace, 'Simple2', 1);
    expectField(group, 3, nspace, 'Thing', 1, 1);
    expectNoConstraints(group.fields);
    if(phase2) testCIMPL6Export(specifications);
  });

  // Constraints

  it('Import12: should correctly import an entry with a valueset constraint on the value', () => {
    const specifications = importFixture(file, importDir);
    const nspace = file = 'vsConstraintOnValue';
    const entry = expectAndGetEntry(specifications, nspace, 'VSConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a valueset constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    const cst = entry.value.constraints[0];
    expect(cst).to.be.instanceof(ValueSetConstraint);
    expect(cst.path).to.be.empty;
    expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
    expect(cst.bindingStrength).to.equal(REQUIRED);
    if(phase2) testCIMPL6Export(specifications);
  });


  it('Import13: should correctly import an entry with a valueset constraint on the child\'s value', () => {
    const nspace = file = 'vsConstraintOnValueChild' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'VSConstraintOnValueChild');
    expectCardOne(entry.value);
    expect(entry.fields).to.be.empty;
    expectValue(entry.value, nspace, 'Complex');
    expect(entry.value.constraints).to.have.length(2);  // failing here
    // constraint[0]: Complex.CodedFromValueSet 1..2
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
    expect(entry.value.constraints[0].path).to.eql([id(nspace, 'CodedFromValueSet')]);
    // constraint[1]: Complex.CodedFromValueSet from http://standardhealthrecord.org/test/vs/Coded (required)
    expect(entry.value.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[1].path).to.eql([id(nspace, 'CodedFromValueSet')]);
    expect(entry.value.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(entry.value.constraints[1].bindingStrength).to.equal(REQUIRED);
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import14: should correctly import a group with a valueset constraint on a field', () => {
    const nspace = file = 'vsConstraintOnField';
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'VSConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, nspace, 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, nspace, 'CodedFromValueSet', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(1);   // failing here
    expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(cmplx.constraints[0].bindingStrength).to.equal(EXAMPLE);
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import15: should correctly import a group with a valueset constraint on a field\'s child', () => {
    const nspace = file = 'vsConstraintOnFieldChild';
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'VSConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, nspace, 'Simple', 0, 1);
    expectField(group, 1, nspace, 'Complex', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(2);  // failing here
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id(nspace, 'CodedFromValueSet')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(cmplx.constraints[1].path).to.eql([id(nspace, 'CodedFromValueSet')]);
    expect(cmplx.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(cmplx.constraints[1].bindingStrength).to.equal(REQUIRED);
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import16: should correctly import entries with valueset constraints on value with a binding strength', () => {
    const nspace = file = 'vsConstraintOnValueWithBindingStrength' ;
    const specifications = importFixture(file, importDir);
    const answerKey = {
      'RequiredVSConstraintOnValue': REQUIRED,
      'ExtensibleVSConstraintOnValue': EXTENSIBLE,
      'PreferredVSConstraintOnValue': PREFERRED,
      'ExampleVSConstraintOnValue': EXAMPLE
    };
    for (const testCase of Object.keys(answerKey)) {
      const entry = expectAndGetEntry(specifications, nspace, testCase);
      expectCardOne(entry.value);
      expectPrimitiveValue(entry.value, 'concept');
      expect(entry.value.constraints).to.have.length(1);
      let cst = entry.value.constraints[0];
      expect(cst).to.be.instanceof(ValueSetConstraint);
      expect(cst.path).to.eql([]);
      expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
      expect(cst.bindingStrength).to.equal(answerKey[testCase]);
    }
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import17: should correctly import entries with a valueset constraint on a field with a binding strength', () => {
    const nspace = file = 'vsConstraintOnFieldWithBindingStrength';
    const specifications = importFixture(file, importDir);
    const answerKey = {
      'RequiredVSConstraintOnField': REQUIRED,
      'ExtensibleVSConstraintOnField': EXTENSIBLE,
      'PreferredVSConstraintOnField': PREFERRED,
      'ExampleVSConstraintOnField': EXAMPLE
    };
    for (const testCase of Object.keys(answerKey)) {
      const entry = expectAndGetEntry(specifications, nspace, testCase);
      expect(entry.value).to.be.undefined;
      expect(entry.fields).to.have.length(1);  // failing here
      expectField(entry, 0, nspace, 'CodedThing', 0, 1);
      const cmplx = entry.fields[0];
      expect(cmplx.constraints).to.have.length(1);
      expect(cmplx.constraints[0]).to.be.instanceof(ValueSetConstraint);
      expect(cmplx.constraints[0].path).to.be.empty;
      expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
      expect(cmplx.constraints[0].bindingStrength).to.equal(answerKey[testCase]);
    }
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import18: should correctly import an entry with a valueset constraint on inherited value', () => {
    const nspace = file = 'vsConstraintOnValueKeyWord' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ChildElement');
    expect(entry.fields).to.be.empty;
  //  console.log("Test 18: entry.value = "+JSON.stringify(entry.value));
    expect(entry.value).to.be.instanceof(IncompleteValue);
    expectCardOne(entry.value);
    expect(entry.value.identifier.isValueKeyWord).to.be.true;
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(entry.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import19: should correctly import an entry with a code constraint on the value', () => {
    const nspace = file = 'codeConstraintOnValue' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'CodeConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'concept');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import20: should correctly import an entry with a code constraint on the value\'s child', () => {
    const nspace = file = 'codeConstraintOnValueChild' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'CodeConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import21: should correctly import an entry with a code constraint on the Value keyword', () => {
    const nspace = file = 'codeConstraintOnValueKeyWord' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ChildElement');
    expect(entry.description).to.be.undefined;
    expectCardOne(entry.value);
    expect(entry.value).to.be.instanceof(IncompleteValue);
    expect(entry.value.identifier.isValueKeyWord).to.be.true;
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.have.length(1);
    expect(entry.value.constraints[0].path).to.eql([pid('concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    expect(entry.fields).to.be.empty;
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import22: should correctly import a group with a code constraint on a field', () => {
    const nspace = file = 'codeConstraintOnField' ;
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'CodeConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, nspace, 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, nspace, 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);   // fails here
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.have.length(1);
    expect(el.constraints[0].path).to.eql([pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import23: should correctly import a group with a code constraint on a field\'s child', () => {
    const nspace = file = 'codeConstraintOnFieldChild' ;
    const specifications = importFixture(file, importDir);   // failing to load file
    const group = expectAndGetEntry(specifications, nspace, 'CodeConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, nspace, 'Simple', 0, 1);
    expectField(group, 1, nspace, 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
  //  expect(el.constraints[0].path).to.eql([id(nspace,'CodedFromVS2')]);
  expect(el.constraints[0].path).to.eql([id(nspace,'CodedFromVS2'), pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import25: should correctly import an entry with a unit constraint on the value', () => {
    const nspace = file = 'unitConstraintOnValue' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'UnitConstraintOnValue');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Quantity');
    expect(entry.value.constraints).to.have.length(1); // fails here
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
 //   expect(entry.value.constraints[0].path).to.eql([id('shr.core','Units'), id('shr.core','concept')]);
    expect(entry.value.constraints[0].path).to.have.length(2);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','Units'), id('primitive', 'concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import26: should correctly import an entry with a unit constraint on the value\'s child', () => {
    const nspace = file = 'unitConstraintOnValueChild' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'UnitConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'Volume');
    expect(entry.value.constraints).to.have.length(1);  // fails here
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
   // expect(entry.value.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'concept')]);
   expect(entry.value.constraints[0].path).to.have.length(3);
   expect(entry.value.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('primitive', 'concept')]);
   expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
   if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import27: should correctly import a group with a unit constraint on a field', () => {
    const nspace = file = 'unitConstraintOnField' ;
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'UnitConstraintOnField');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a unit constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.core', 'Quantity', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
//    expect(el.constraints[0].path).to.eql([id('shr.core','Units'), id('shr.core','concept')]);
    expect(el.constraints[0].path).to.eql([id('shr.core','Units'), pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import28: should correctly import a group with a unit constraint on a field\'s child', () => {
    const nspace = file = 'unitConstraintOnFieldChild' ;
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'UnitConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'Volume', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
//    expect(el.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'concept')]);
    expect(el.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import29: should correctly import a group with an includes code constraint on a field', () => {
    const nspace = file = 'includesCodeConstraints' ;
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'IncludesCodeConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'Coded', 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(2);
    expect(el.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[0].path).to.be.empty;
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    expect(el.constraints[1]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[1].path).to.be.empty;
    expectConcept(el.constraints[1].code, 'http://foo.org', 'baz', 'FooBaz');
    if(phase2) testCIMPL6Export(specifications);
  });


  it('Import30: should correctly import an entry with a boolean constraint on the value', () => {
    const nspace = file = 'booleanConstraintOnValue' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'BooleanConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.be.true;
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import31: should correctly import an entry with a boolean constraint on the value (alternate syntax)', () => {
    const nspace = file = 'booleanConstraintOnValue2' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'BooleanConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.be.true;
    if(phase2) testCIMPL6Export(specifications);
  });


  it('Import32: should correctly import an entry with a boolean constraint on the value\'s child', () => {
    const nspace = file = 'booleanConstraintOnValueChild' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'BooleanConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'SimpleBoolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('boolean')]);
    expect(entry.value.constraints[0].value).to.be.false;
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import33: should correctly import a group with a boolean constraint on a field\'s child', () => {
    const nspace = file = 'booleanConstraintOnFieldChild' ;
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'BooleanConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'SimpleBoolean', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(el.constraints[0].path).to.eql([pid('boolean')]);
    expect(el.constraints[0].value).to.be.true;
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import34: should correctly import an entry based on an element and substituting the value', () => {
    const nspace = file = 'typeConstraintOnValue' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'TypeConstraintOnValue');
    expect(entry.basedOn).to.have.length(1);
    expect(entry.basedOn[0].namespace).to.equal(nspace);
    expect(entry.basedOn[0].name).to.equal('SimpleBase');
    expectCardOne(entry.value);
    expectValue(entry.value, '', '_Value');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.false;
    expectIdentifier(entry.value.constraints[0].isA, nspace, 'Simple2');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import35: should correctly import an entry based on an element and substitute the value\'s child', () => {
    const nspace = file = 'typeConstraintOnValueChild' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'TypeConstraintOnValueChild');
    expect(entry.basedOn).to.have.length(1);
    expectIdentifier(entry.basedOn[0], nspace, 'ComplexBase');
    expectCardOne(entry.value);
    expectValue(entry.value, '', '_Value');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id(nspace, 'Simple')]);  // should the path include Complex? (yes)
    expect(entry.value.constraints[0].onValue).to.be.false;
    expectIdentifier(entry.value.constraints[0].isA, nspace, 'Simple2');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import36: should correctly import a group with a type constraint on a field', () => {
    const nspace = file = 'typeConstraintOnField' ;
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], nspace, 'GroupBase');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'Simple');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, nspace, 'Simple2');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import37: should correctly import a group with a cardinality constraint and a type constraint on a field\'s child', () => {
    const nspace = file = 'typeConstraintOnFieldChild' ;
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'TypeConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'Complex', 0, 1);
    const cmplx = group.fields[0];
    expect(cmplx.constraints).to.have.length(2);
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id(nspace, 'Simple')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(TypeConstraint);
    expect(cmplx.constraints[1].path).to.eql([id(nspace, 'Simple')]);
    expect(cmplx.constraints[1].onValue).to.be.false;
    expectIdentifier(cmplx.constraints[1].isA, nspace, 'Simple2');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import38: should correctly import a group with a type constraint on a field\'s value', () => {
    const nspace = file = 'typeConstraintOnFieldValue' ;
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'TypeConstraintOnFieldValue');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], nspace, 'Group2');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'HasSimpleValue');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.have.length(1);
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, nspace, 'Simple2');
    if(phase2) testCIMPL6Export(specifications);
  });

  // Choices
  
  it('Import40: should correctly import a choice entry', () => {
    const nspace = file = 'choiceType' ;
    const specifications = importFixture(file, importDir);
    const choice = expectAndGetElement(specifications, nspace, 'ChoiceElement');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 3);
    expectChoiceOption(choice.value, 0, 'primitive', 'date');
    expectChoiceOption(choice.value, 1, 'primitive', 'dateTime');
    expectChoiceOption(choice.value, 2, nspace, 'DateTimeString');
    // MK: not sure what the following two statements are asserting
    expectNoConstraints(choice.value);
    expectNoConstraints(choice.value.options);
    if(phase2) testCIMPL6Export(specifications);
  });


  it('Import41: should correctly import an entry with a value choice constraint (to primitive) on a choice field', () => {
    const nspace = file = 'choiceTypeConstraintToPrimitive' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ThingWithChoiceField');
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, nspace, 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    expect(entry.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.fields[0].constraints[0].path).to.be.empty;
    expect(entry.fields[0].constraints[0].onValue).to.be.true;
    // MK:onValue is true because it is a constraint on the value of ChoiceElement.
    expectPrimitiveIdentifier(entry.fields[0].constraints[0].isA, 'dateTime');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import42: should correctly import an entry with a value choice constraint (to non-primitive) on a choice field', () => {
    const nspace = file = 'choiceTypeConstraintToNonPrimitive' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ThingWithChoiceField');
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, nspace, 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    expect(entry.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.fields[0].constraints[0].path).to.be.empty;
    expect(entry.fields[0].constraints[0].onValue).to.be.true;
    expectIdentifier(entry.fields[0].constraints[0].isA, nspace, 'DateTimeString');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it.skip('Import43: should correctly import an entry with a value choice constraint (to a reduced choice) on a choice field', () => {
    const nspace = file = 'choiceTypeConstraintToReducedChoice' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ThingWithChoiceField');  // error here because 'or' is not being accepted in an 'only' statement
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, nspace, 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    const choice = entry.fields[0];
    expect(cmplx.constraints).to.have.length(1);
    expect(choice.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(choice.constraints[0].path).to.be.empty;
    expect(choice.constraints[0].onValue).to.be.true;
    expectChoiceValue(choice.value, 2);
    expectChoiceOption(choice.value, 0, 'primitive', 'dateTime');
    expectChoiceOption(choice.value, 1, nspace, 'DateTimeString');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import44: should correctly import an entry with a value choice inheriting from a parent with a simple value field', () => {
    const nspace = file = 'choiceExplicitRestrictionInSubclass' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ChildWithSpecificDateTypes');
    expectCardOne(entry.value);
    expectChoiceValue(entry.value, 3);
    expectChoiceOption(entry.value, 0, nspace, 'DateString');
    expectChoiceOption(entry.value, 1, nspace, 'DateDate');
    expectChoiceOption(entry.value, 2, nspace, 'DateRange');
    // MK: not sure what the following two statements are asserting
    expectNoConstraints(entry.value);
    expectNoConstraints(entry.value.options);
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import45: should correctly import an entry with a card constraint on the value\'s child', () => {
    const nspace = file = 'cardConstraintOnValueChild' ;
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'CardConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'Thing1');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].path).to.eql([id(nspace,'Thing2')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import46: should correctly import a group with a card constraint on a field\'s child', () => {
    const nspace = file = 'cardConstraintOnFieldChild';
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'CardConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'Thing1', 0);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CardConstraint);
    expect(el.constraints[0].path).to.eql([id(nspace, 'Thing2')]);
    expect(el.constraints[0].card.min).to.equal(1);
    expect(el.constraints[0].card.max).to.equal(2);
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import47: should correctly import single concept', () => {
    const nspace = file = 'conceptSingle';
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ConceptSingle');
    expect(entry.concepts).to.have.length(1);
    expectConcept(entry.concepts[0], 'http://foo.org', 'bar');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import48: should correctly import multiple concepts', () => {
    const nspace = file = 'conceptMultiple';
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ConceptMultiple');
    expect(entry.concepts).to.have.length(2);
    expectConcept(entry.concepts[0], 'http://foo.org', 'bar');
    expectConcept(entry.concepts[1], 'http://boo.org', 'baz');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import49: should correctly import TBD concept', () => {
    const nspace = file = 'conceptTBD';
    const specifications = importFixture(file, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ConceptTBD');
    expect(entry.concepts).to.have.length(0);
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import50: should correctly import a simple parent-child relationship', () => {
    const nspace = file = 'BasedOn';
    const specifications = importFixture(file, importDir);
    const child = expectAndGetEntry(specifications, nspace, 'Child');
    expect(child.basedOn).to.have.length(1);
    expect(child.basedOn[0].namespace).to.equal(nspace);
    expect(child.basedOn[0].name).to.equal('Base');
    expectCardOne(child.value);
    expectValue(child.value, nspace, 'Simple');
    expectNoConstraints(child.value);
    expect(child.fields).to.have.length(0);
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import51: should correctly import multiple elements in a single namespace', () => {
    const nspace = file = 'multipleElementNamespace';
    const specifications = importFixture(file, importDir);
    const simple = expectAndGetEntry(specifications, nspace, 'SimpleDate');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'date');
    expectNoConstraints(simple.value);
    const coded = expectAndGetElement(specifications, nspace, 'Coded');
    expect(coded.description).to.equal('It is a coded element');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import52: should correctly resolve URL, URN, and URN OID vocabularies', () => {
    const nspace = file = 'vocabularies';
    const specifications = importFixture(file, importDir);
    const simple = expectAndGetEntry(specifications, nspace, 'Simple');
    expect(simple.concepts).to.have.length(3);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expectConcept(simple.concepts[1], 'urn:iso:std:iso:4217', 'baz', 'Foobaz');
    expectConcept(simple.concepts[2], 'urn:oid:2.16.840.1.114222.4.11.826', 'bam', 'Foobam');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import53: should correctly resolve elements and vocabularies from other namespaces', () => {
    const nspace = file = 'uses';
    const specifications = importFixtureFolder(file, importDir);
    const one = expectAndGetEntry(specifications, nspace, 'One');
    expect(one.concepts).to.have.length(2);
    expectConcept(one.concepts[0], 'http://foo.org', 'bar');
    expectConcept(one.concepts[1], 'http://moo.org', 'car');
    expectCardOne(one.value);
    expectValue(one.value, 'shr.test.two', 'Two');
    expectNoConstraints(one.value);
    const two = expectAndGetEntry(specifications, 'shr.test.two', 'Two');
    expect(two.concepts).to.have.length(1);
    expectConcept(two.concepts[0], 'http://zoo.org', 'bear');
    expectCardOne(two.value);
    expectPrimitiveValue(two.value, 'string');
    expectNoConstraints(two.value);
    expect(specifications.dataElements.namespaces).not.to.contain('shr.test.three');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import54: should be able to apply a fixed concept to a choice value', () => {
    const nspace = file = 'constraintOnChoiceValue';
    const specifications = importFixture(file, importDir);
    const choice = expectAndGetElement(specifications, nspace, 'ConstraintOnChoiceValue');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 2);
    expectChoiceOption(choice.value, 0, 'primitive', 'boolean');
    expectChoiceOption(choice.value, 1, 'primitive', 'concept');
    expect(choice.value.constraints).to.have.length(2);
    expect(choice.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(choice.value.constraints[0].path).to.be.empty;
    expect(choice.value.constraints[0].value).to.be.true;
    expect(choice.value.constraints[1]).to.be.instanceof(CodeConstraint);
    expect(choice.value.constraints[1].path).to.have.length(1);
    // TODO confirm this test case is correct.
    expect(choice.value.constraints[1].path).to.eql([pid('concept')]);
    expectConcept(choice.value.constraints[1].code, 'http://foo.org', 'baz');
    if(phase2) testCIMPL6Export(specifications);
  });
  

  it('Import55: should correctly import a group with a cardinality constraint on a substituted element', () => {
    const nspace = file = 'substituteOnReferenceName' ;
    const specifications = importFixture(file, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], nspace, 'GroupBase');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    //console.log(group.fields);
    expectField(group, 0, nspace, 'Simple');
    expect(group.fields[0].constraints).to.have.length(2);  
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, nspace, 'Simple2');
    expect(group.fields[0].constraints[1]).to.be.instanceof(CardConstraint);
    expect(group.fields[0].constraints[1].card.min).to.equal(0);
    expect(group.fields[0].constraints[1].card.max).to.equal(1);
    if(phase2) testCIMPL6Export(specifications);
  });
});
}

// mlt: modularized negative tests. Now located in import-neg-test.js
// mlt: modularized config tests. Now located in config-import-test.js


/* MK - cutting out CIMCORE tests because the examples are out of date, in Grammar 5. If we revive this, it should live in a separate file (e.g., import-cimcore-test.js).
 mlt: - moved cimcore tests to import-cimcore-test.js.
*/

// mlt: decoupled all shared function tests. Now located in import-helper.js


/*it('Import09: should correctly import a special entry', () => {
    const specifications = importFixture('SpecialWordsElement');
    const parent = expectAndGetEntry(specifications, 'shr.test', 'SpecialParent');
    expect(parent.grammarVersion).to.eql(new Version(6, 0));
    expectMinMax(parent.value, 0, 1);
    expectPrimitiveValue(parent.value, 'string');
    const child = expectAndGetEntry(specifications, 'shr.test', 'SpecialChild');
    expect(child.basedOn).to.have.length(1);
    expect(child.basedOn[0].namespace).to.equal('shr.test');
    expect(child.basedOn[0].name).to.equal('SpecialParent');
    // The _Value identifier is set as the value. Do I love this? No. But that's
    // how it already worked -- probably to avoid having to resolve the value
    // (and leave it to shr-expand to do that work).
    expect(child.value.identifier.isValueKeyWord).to.be.true;
    expectMinMax(child.value, 1, 1);
    expect(child.fields).to.have.length(1);
    expectField(child, 0, '', '_Entry', 1, 1);
    expect(child.fields[0].constraints).to.have.length(1);
    expect(child.fields[0].constraints[0]).to.be.instanceof(CardConstraint);
    expect(child.fields[0].constraints[0].path).to.eql([id('shr.core', 'Version')]);
    expect(child.fields[0].constraints[0].card.min).to.equal(0);
    expect(child.fields[0].constraints[0].card.max).to.equal(0);
  });
  */