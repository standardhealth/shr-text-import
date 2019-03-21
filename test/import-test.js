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


testImport(true, "/fixtures/dataElement/");
//testImport(false, "/fixtures/dataElementExports/")

function testImport(testExport, fixtureDir) {
describe('#importDataElement', () => {
  beforeEach(function() {
    err.clear();
  });

  it('Import01: Check reading the header', () => {
    const specifications = importFixture('header', fixtureDir);
    const ns = specifications.namespaces.find('header');
    expect(ns.namespace).to.equal('header');
    expect(ns.description).to.equal('The SHR test namespace');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import02: Check reading a simple entry', () => {
    const specifications = importFixture('simpleEntry', fixtureDir);
    const simple = expectAndGetEntry(specifications, 'simpleEntry', 'SimpleEntry');
    expect(simple.grammarVersion).to.eql(new Version(6, 0));
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expect(simple.description).to.equal('It is a simple entry');
    expect(simple.isAbstract).to.be.false;
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import03: should correctly import a simple element', () => {
    const specifications = importFixture('simpleElement', fixtureDir);
    const simple = expectAndGetElement(specifications, 'simpleElement', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expect(simple.isAbstract).to.be.false;
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import04: should correctly import a simple abstract element', () => {
    const specifications = importFixture('simpleAbstractElement', fixtureDir);
    const simple = expectAndGetElement(specifications, 'simpleAbstractElement', 'Simple');
    expect(simple.isAbstract).to.be.true;
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import05: should correctly import an entry whose value is a concept', () => {
    const specifications = importFixture('coded', fixtureDir);
    const coded = expectAndGetEntry(specifications, 'coded', 'Coded');
    expect(coded.description).to.equal('It is a concept entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expectNoConstraints(coded.value);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import06: should correctly import an entry with a code from a valueset', () => {
    const specifications = importFixture('codedFromValueSet', fixtureDir);
    const coded = expectAndGetEntry(specifications, 'codedFromValueSet', 'CodedFromValueSet');
    expect(coded.description).to.equal('It is a coded entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import07: should correctly import an entry with a code from a valueset using a path', () => {
    const specifications = importFixture('codedFromPathValueSet', fixtureDir);
    const coded = expectAndGetEntry(specifications, 'codedFromPathValueSet', 'CodedFromPathValueSet');
    expect(coded.description).to.equal('It is a coded entry that uses a valueset with a path');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import08: should correctly import an entry whose value is an element', () => {
    const specifications = importFixture('valueIsElement', fixtureDir);
    const simple = expectAndGetEntry(specifications, 'valueIsElement', 'ValueIsElement');
    expect(simple.description).to.equal('Value is a reference to a simple element');
    expectCardOne(simple.value);
    expectNoConstraints(simple.value);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import10: should correctly import a group element without a value', () => {
    const specifications = importFixture('groupPropertiesOnly', fixtureDir);
    const group = expectAndGetElement(specifications, 'groupPropertiesOnly', 'GroupPropertiesOnly');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(4);
    expectField(group, 0, 'groupPropertiesOnly', 'Simple', 0, 1);
    expectField(group, 1, 'groupPropertiesOnly', 'Coded', 0);
    expectField(group, 2, 'groupPropertiesOnly', 'Simple2', 1);
    expectField(group, 3, 'groupPropertiesOnly', 'Thing', 1, 1);
    expectNoConstraints(group.fields);
    if(testExport) testCIMPL6Export(specifications);
  });


  it('Import11: should correctly import a group entry with both a value and properties', () => {
    const specifications = importFixture('groupValueAndProperties', fixtureDir);
    const group = expectAndGetElement(specifications,'groupValueAndProperties', 'GroupValueAndProperties');
    expectCardOne(group.value);
    expectPrimitiveValue(group.value, 'concept');
    expectNoConstraints(group.value);
    expect(group.fields).to.have.length(4);
    expectField(group, 0, 'groupValueAndProperties', 'Simple', 0, 1);
    expectField(group, 1, 'groupValueAndProperties', 'Coded', 0);
    expectField(group, 2, 'groupValueAndProperties', 'Simple2', 1);
    expectField(group, 3, 'groupValueAndProperties', 'Thing', 1, 1);
    expectNoConstraints(group.fields);
    if(testExport) testCIMPL6Export(specifications);
  });

  // Constraints

  it('Import12: should correctly import an entry with a valueset constraint on the value', () => {
    const specifications = importFixture('vsConstraintOnValue', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'vsConstraintOnValue', 'VSConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a valueset constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'vsConstraintOnValue', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    const cst = entry.value.constraints[0];
    expect(cst).to.be.instanceof(ValueSetConstraint);
    expect(cst.path).to.be.empty;
    expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
    expect(cst.bindingStrength).to.equal(REQUIRED);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import13: should correctly import an entry with a valueset constraint on the child\'s value', () => {
    const specifications = importFixture('vsConstraintOnValueChild', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'vsConstraintOnValueChild', 'VSConstraintOnValueChild');
    expectCardOne(entry.value);
    expect(entry.fields).to.be.empty;
    expectValue(entry.value, 'vsConstraintOnValueChild', 'Complex');
    expect(entry.value.constraints).to.have.length(2);  // failing here
    // constraint[0]: Complex.CodedFromValueSet 1..2
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
    expect(entry.value.constraints[0].path).to.eql([id('vsConstraintOnValueChild', 'CodedFromValueSet')]);
    // constraint[1]: Complex.CodedFromValueSet from http://standardhealthrecord.org/test/vs/Coded (required)
    expect(entry.value.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[1].path).to.eql([id('vsConstraintOnValueChild', 'CodedFromValueSet')]);
    expect(entry.value.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(entry.value.constraints[1].bindingStrength).to.equal(REQUIRED);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import14: should correctly import a group with a valueset constraint on a field', () => {
    const specifications = importFixture('vsConstraintOnField', fixtureDir);
    const group = expectAndGetEntry(specifications, 'vsConstraintOnField', 'VSConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'vsConstraintOnField', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'vsConstraintOnField', 'CodedFromValueSet', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(1);   // failing here
    expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(cmplx.constraints[0].bindingStrength).to.equal(EXAMPLE);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import15: should correctly import a group with a valueset constraint on a field\'s child', () => {
    const specifications = importFixture('vsConstraintOnFieldChild', fixtureDir);
    const group = expectAndGetEntry(specifications, 'vsConstraintOnFieldChild', 'VSConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'vsConstraintOnFieldChild', 'Simple', 0, 1);
    expectField(group, 1, 'vsConstraintOnFieldChild', 'Complex', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(2);  // failing here
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id('vsConstraintOnFieldChild', 'CodedFromValueSet')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(cmplx.constraints[1].path).to.eql([id('vsConstraintOnFieldChild', 'CodedFromValueSet')]);
    expect(cmplx.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(cmplx.constraints[1].bindingStrength).to.equal(REQUIRED);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import16: should correctly import entries with valueset constraints on value with a binding strength', () => {
    const specifications = importFixture('vsConstraintOnValueWithBindingStrength', fixtureDir);
    const answerKey = {
      'RequiredVSConstraintOnValue': REQUIRED,
      'ExtensibleVSConstraintOnValue': EXTENSIBLE,
      'PreferredVSConstraintOnValue': PREFERRED,
      'ExampleVSConstraintOnValue': EXAMPLE
    };
    for (const testCase of Object.keys(answerKey)) {
      const entry = expectAndGetEntry(specifications, 'vsConstraintOnValueWithBindingStrength', testCase);
      expectCardOne(entry.value);
      expectPrimitiveValue(entry.value, 'concept');
      expect(entry.value.constraints).to.have.length(1);
      let cst = entry.value.constraints[0];
      expect(cst).to.be.instanceof(ValueSetConstraint);
      expect(cst.path).to.eql([]);
      expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
      expect(cst.bindingStrength).to.equal(answerKey[testCase]);
    }
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import17: should correctly import entries with a valueset constraint on a field with a binding strength', () => {
    const specifications = importFixture('vsConstraintOnFieldWithBindingStrength', fixtureDir);
    const answerKey = {
      'RequiredVSConstraintOnField': REQUIRED,
      'ExtensibleVSConstraintOnField': EXTENSIBLE,
      'PreferredVSConstraintOnField': PREFERRED,
      'ExampleVSConstraintOnField': EXAMPLE
    };
    for (const testCase of Object.keys(answerKey)) {
      const entry = expectAndGetEntry(specifications, 'vsConstraintOnFieldWithBindingStrength', testCase);
      expect(entry.value).to.be.undefined;
      expect(entry.fields).to.have.length(1);  // failing here
      expectField(entry, 0, 'vsConstraintOnFieldWithBindingStrength', 'CodedThing', 0, 1);
      const cmplx = entry.fields[0];
      expect(cmplx.constraints).to.have.length(1);
      expect(cmplx.constraints[0]).to.be.instanceof(ValueSetConstraint);
      expect(cmplx.constraints[0].path).to.be.empty;
      expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
      expect(cmplx.constraints[0].bindingStrength).to.equal(answerKey[testCase]);
    }
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import18: should correctly import an entry with a valueset constraint on inherited value', () => {
    const specifications = importFixture('vsConstraintOnValueKeyWord', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'vsConstraintOnValueKeyWord', 'ChildElement');
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
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import19: should correctly import an entry with a code constraint on the value', () => {
    const specifications = importFixture('codeConstraintOnValue', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'codeConstraintOnValue', 'CodeConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'concept');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import20: should correctly import an entry with a code constraint on the value\'s child', () => {
    const specifications = importFixture('codeConstraintOnValueChild', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'codeConstraintOnValueChild', 'CodeConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'codeConstraintOnValueChild', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import21: should correctly import an entry with a code constraint on the Value keyword', () => {
    const specifications = importFixture('codeConstraintOnValueKeyWord', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'codeConstraintOnValueKeyWord', 'ChildElement');
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
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import22: should correctly import a group with a code constraint on a field', () => {
    const specifications = importFixture('codeConstraintOnField', fixtureDir);
    const group = expectAndGetEntry(specifications, 'codeConstraintOnField', 'CodeConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'codeConstraintOnField', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'codeConstraintOnField', 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);   // fails here
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.have.length(1);
    expect(el.constraints[0].path).to.eql([pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import23: should correctly import a group with a code constraint on a field\'s child', () => {
    const specifications = importFixture('codeConstraintOnFieldChild', fixtureDir);   // failing to load file
    const group = expectAndGetEntry(specifications, 'codeConstraintOnFieldChild', 'CodeConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'codeConstraintOnFieldChild', 'Simple', 0, 1);
    expectField(group, 1, 'codeConstraintOnFieldChild', 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
  //  expect(el.constraints[0].path).to.eql([id('codeConstraintOnFieldChild','CodedFromVS2')]);
  expect(el.constraints[0].path).to.eql([id('codeConstraintOnFieldChild','CodedFromVS2'), pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(testExport) testCIMPL6Export(specifications);
  });



  it('Import25: should correctly import an entry with a unit constraint on the value', () => {
    const specifications = importFixture('unitConstraintOnValue', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'unitConstraintOnValue', 'UnitConstraintOnValue');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Quantity');
    expect(entry.value.constraints).to.have.length(1); // fails here
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
 //   expect(entry.value.constraints[0].path).to.eql([id('shr.core','Units'), id('shr.core','concept')]);
    expect(entry.value.constraints[0].path).to.have.length(2);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','Units'), id('primitive', 'concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import26: should correctly import an entry with a unit constraint on the value\'s child', () => {
    const specifications = importFixture('unitConstraintOnValueChild', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'unitConstraintOnValueChild', 'UnitConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'unitConstraintOnValueChild', 'Volume');
    expect(entry.value.constraints).to.have.length(1);  // fails here
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
   // expect(entry.value.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'concept')]);
   expect(entry.value.constraints[0].path).to.have.length(3);
   expect(entry.value.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('primitive', 'concept')]);
   expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
   if(testExport) testCIMPL6Export(specifications);
  });

  it('Import27: should correctly import a group with a unit constraint on a field', () => {
    const specifications = importFixture('unitConstraintOnField', fixtureDir);
    const group = expectAndGetEntry(specifications, 'unitConstraintOnField', 'UnitConstraintOnField');
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
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import28: should correctly import a group with a unit constraint on a field\'s child', () => {
    const specifications = importFixture('unitConstraintOnFieldChild', fixtureDir);
    const group = expectAndGetEntry(specifications, 'unitConstraintOnFieldChild', 'UnitConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'unitConstraintOnFieldChild', 'Volume', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
//    expect(el.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'concept')]);
    expect(el.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import29: should correctly import a group with an includes code constraint on a field', () => {
    const specifications = importFixture('includesCodeConstraints', fixtureDir);
    const group = expectAndGetEntry(specifications, 'includesCodeConstraints', 'IncludesCodeConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'includesCodeConstraints', 'Coded', 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(2);
    expect(el.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[0].path).to.be.empty;
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    expect(el.constraints[1]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[1].path).to.be.empty;
    expectConcept(el.constraints[1].code, 'http://foo.org', 'baz', 'FooBaz');
    if(testExport) testCIMPL6Export(specifications);
  });


  it('Import30: should correctly import an entry with a boolean constraint on the value', () => {
    const specifications = importFixture('booleanConstraintOnValue', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'booleanConstraintOnValue', 'BooleanConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.be.true;
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import31: should correctly import an entry with a boolean constraint on the value (alternate syntax)', () => {
    const specifications = importFixture('booleanConstraintOnValue2', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'booleanConstraintOnValue2', 'BooleanConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.be.true;
    if(testExport) testCIMPL6Export(specifications);
  });


  it('Import32: should correctly import an entry with a boolean constraint on the value\'s child', () => {
    const specifications = importFixture('booleanConstraintOnValueChild', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'booleanConstraintOnValueChild', 'BooleanConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'booleanConstraintOnValueChild', 'SimpleBoolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('boolean')]);
    expect(entry.value.constraints[0].value).to.be.false;
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import33: should correctly import a group with a boolean constraint on a field\'s child', () => {
    const specifications = importFixture('booleanConstraintOnFieldChild', fixtureDir);
    const group = expectAndGetEntry(specifications, 'booleanConstraintOnFieldChild', 'BooleanConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'booleanConstraintOnFieldChild', 'SimpleBoolean', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(el.constraints[0].path).to.eql([pid('boolean')]);
    expect(el.constraints[0].value).to.be.true;
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import34: should correctly import an entry based on an element and substituting the value', () => {
    const specifications = importFixture('typeConstraintOnValue', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'typeConstraintOnValue', 'TypeConstraintOnValue');
    expect(entry.basedOn).to.have.length(1);
    expect(entry.basedOn[0].namespace).to.equal('typeConstraintOnValue');
    expect(entry.basedOn[0].name).to.equal('SimpleBase');
    expectCardOne(entry.value);
    expectValue(entry.value, '', '_Value');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.false;
    expectIdentifier(entry.value.constraints[0].isA, 'typeConstraintOnValue', 'Simple2');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import35: should correctly import an entry based on an element and substitute the value\'s child', () => {
    const specifications = importFixture('typeConstraintOnValueChild', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'typeConstraintOnValueChild', 'TypeConstraintOnValueChild');
    expect(entry.basedOn).to.have.length(1);
    expectIdentifier(entry.basedOn[0], 'typeConstraintOnValueChild', 'ComplexBase');
    expectCardOne(entry.value);
    expectValue(entry.value, '', '_Value');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('typeConstraintOnValueChild', 'Simple')]);  // should the path include Complex? (yes)
    expect(entry.value.constraints[0].onValue).to.be.false;
    expectIdentifier(entry.value.constraints[0].isA, 'typeConstraintOnValueChild', 'Simple2');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import36: should correctly import a group with a type constraint on a field', () => {
    const specifications = importFixture('typeConstraintOnField', fixtureDir);
    const group = expectAndGetEntry(specifications, 'typeConstraintOnField', 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'typeConstraintOnField', 'GroupBase');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'typeConstraintOnField', 'Simple');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, 'typeConstraintOnField', 'Simple2');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import37: should correctly import a group with a cardinality constraint and a type constraint on a field\'s child', () => {
    const specifications = importFixture('typeConstraintOnFieldChild', fixtureDir);
    const group = expectAndGetEntry(specifications, 'typeConstraintOnFieldChild', 'TypeConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'typeConstraintOnFieldChild', 'Complex', 0, 1);
    const cmplx = group.fields[0];
    expect(cmplx.constraints).to.have.length(2);
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id('typeConstraintOnFieldChild', 'Simple')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(TypeConstraint);
    expect(cmplx.constraints[1].path).to.eql([id('typeConstraintOnFieldChild', 'Simple')]);
    expect(cmplx.constraints[1].onValue).to.be.false;
    expectIdentifier(cmplx.constraints[1].isA, 'typeConstraintOnFieldChild', 'Simple2');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import38: should correctly import a group with a type constraint on a field\'s value', () => {
    const specifications = importFixture('typeConstraintOnFieldValue', fixtureDir);
    const group = expectAndGetEntry(specifications, 'typeConstraintOnFieldValue', 'TypeConstraintOnFieldValue');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'typeConstraintOnFieldValue', 'Group2');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'typeConstraintOnFieldValue', 'HasSimpleValue');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.have.length(1);
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, 'typeConstraintOnFieldValue', 'Simple2');
    if(testExport) testCIMPL6Export(specifications);
  });

  // Choices

  it('Import40: should correctly import a choice entry', () => {
    const specifications = importFixture('choiceType', fixtureDir);
    const choice = expectAndGetElement(specifications, 'choiceType', 'ChoiceElement');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 3);
    expectChoiceOption(choice.value, 0, 'primitive', 'date');
    expectChoiceOption(choice.value, 1, 'primitive', 'dateTime');
    expectChoiceOption(choice.value, 2, 'choiceType', 'DateTimeString');
    // MK: not sure what the following two statements are asserting
    expectNoConstraints(choice.value);
    expectNoConstraints(choice.value.options);
    if(testExport) testCIMPL6Export(specifications);
  });


  it('Import41: should correctly import an entry with a value choice constraint (to primitive) on a choice field', () => {
    const specifications = importFixture('choiceTypeConstraintToPrimitive', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'choiceTypeConstraintToPrimitive', 'ThingWithChoiceField');
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, 'choiceTypeConstraintToPrimitive', 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    expect(entry.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.fields[0].constraints[0].path).to.be.empty;
    expect(entry.fields[0].constraints[0].onValue).to.be.true;
    // MK:onValue is true because it is a constraint on the value of ChoiceElement.
    expectPrimitiveIdentifier(entry.fields[0].constraints[0].isA, 'dateTime');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import42: should correctly import an entry with a value choice constraint (to non-primitive) on a choice field', () => {
    const specifications = importFixture('choiceTypeConstraintToNonPrimitive', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'choiceTypeConstraintToNonPrimitive', 'ThingWithChoiceField');
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, 'choiceTypeConstraintToNonPrimitive', 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    expect(entry.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.fields[0].constraints[0].path).to.be.empty;
    expect(entry.fields[0].constraints[0].onValue).to.be.true;
    expectIdentifier(entry.fields[0].constraints[0].isA, 'choiceTypeConstraintToNonPrimitive', 'DateTimeString');
    if(testExport) testCIMPL6Export(specifications);
  });

  it.skip('Import43: should correctly import an entry with a value choice constraint (to a reduced choice) on a choice field', () => {
    const specifications = importFixture('choiceTypeConstraintToReducedChoice', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'choiceTypeConstraintToReducedChoice', 'ThingWithChoiceField');  // error here because 'or' is not being accepted in an 'only' statement
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, 'choiceTypeConstraintToReducedChoice', 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    const choice = entry.fields[0];
    expect(cmplx.constraints).to.have.length(1);
    expect(choice.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(choice.constraints[0].path).to.be.empty;
    expect(choice.constraints[0].onValue).to.be.true;
    expectChoiceValue(choice.value, 2);
    expectChoiceOption(choice.value, 0, 'primitive', 'dateTime');
    expectChoiceOption(choice.value, 1, 'choiceTypeConstraintToReducedChoice', 'DateTimeString');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import44: should correctly import an entry with a value choice inheriting from a parent with a simple value field', () => {
    const specifications = importFixture('choiceExplicitRestrictionInSubclass', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'choiceExplicitRestrictionInSubclass', 'ChildWithSpecificDateTypes');
    expectCardOne(entry.value);
    expectChoiceValue(entry.value, 3);
    expectChoiceOption(entry.value, 0, 'choiceExplicitRestrictionInSubclass', 'DateString');
    expectChoiceOption(entry.value, 1, 'choiceExplicitRestrictionInSubclass', 'DateDate');
    expectChoiceOption(entry.value, 2, 'choiceExplicitRestrictionInSubclass', 'DateRange');
    // MK: not sure what the following two statements are asserting
    expectNoConstraints(entry.value);
    expectNoConstraints(entry.value.options);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import45: should correctly import an entry with a card constraint on the value\'s child', () => {
    const specifications = importFixture('cardConstraintOnValueChild', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'cardConstraintOnValueChild', 'CardConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'cardConstraintOnValueChild', 'Thing1');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('cardConstraintOnValueChild','Thing2')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import46: should correctly import a group with a card constraint on a field\'s child', () => {
    const specifications = importFixture('cardConstraintOnFieldChild', fixtureDir);
    const group = expectAndGetEntry(specifications, 'cardConstraintOnFieldChild', 'CardConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'cardConstraintOnFieldChild', 'Thing1', 0);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CardConstraint);
    expect(el.constraints[0].path).to.eql([id('cardConstraintOnFieldChild', 'Thing2')]);
    expect(el.constraints[0].card.min).to.equal(1);
    expect(el.constraints[0].card.max).to.equal(2);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import47: should correctly import single concept', () => {
    const specifications = importFixture('ConceptSingle', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'conceptSingle', 'ConceptSingle');
    expect(entry.concepts).to.have.length(1);
    expectConcept(entry.concepts[0], 'http://foo.org', 'bar');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import48: should correctly import multiple concepts', () => {
    const specifications = importFixture('conceptMultiple', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'conceptMultiple', 'ConceptMultiple');
    expect(entry.concepts).to.have.length(2);
    expectConcept(entry.concepts[0], 'http://foo.org', 'bar');
    expectConcept(entry.concepts[1], 'http://boo.org', 'baz');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import49: should correctly import TBD concept', () => {
    const specifications = importFixture('conceptTBD', fixtureDir);
    const entry = expectAndGetEntry(specifications, 'conceptTBD', 'ConceptTBD');
    expect(entry.concepts).to.have.length(0);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import50: should correctly import a simple parent-child relationship', () => {
    const specifications = importFixture('BasedOn', fixtureDir);
    const child = expectAndGetEntry(specifications, 'basedOn', 'Child');
    expect(child.basedOn).to.have.length(1);
    expect(child.basedOn[0].namespace).to.equal('basedOn');
    expect(child.basedOn[0].name).to.equal('Base');
    expectCardOne(child.value);
    expectValue(child.value, 'basedOn', 'Simple');
    expectNoConstraints(child.value);
    expect(child.fields).to.have.length(0);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import51: should correctly import multiple elements in a single namespace', () => {
    const specifications = importFixture('multipleElementNamespace', fixtureDir);
    const simple = expectAndGetEntry(specifications, 'multipleElementNamespace', 'SimpleDate');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'date');
    expectNoConstraints(simple.value);
    const coded = expectAndGetElement(specifications, 'multipleElementNamespace', 'Coded');
    expect(coded.description).to.equal('It is a coded element');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import52: should correctly resolve URL, URN, and URN OID vocabularies', () => {
    const specifications = importFixture('vocabularies', fixtureDir);
    const simple = expectAndGetEntry(specifications, 'vocabularies', 'Simple');
    expect(simple.concepts).to.have.length(3);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expectConcept(simple.concepts[1], 'urn:iso:std:iso:4217', 'baz', 'Foobaz');
    expectConcept(simple.concepts[2], 'urn:oid:2.16.840.1.114222.4.11.826', 'bam', 'Foobam');
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import53: should correctly resolve elements and vocabularies from other namespaces', () => {
    const specifications = importFixtureFolder('uses', fixtureDir);
    const one = expectAndGetEntry(specifications, 'uses', 'One');
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
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import54: should be able to apply a fixed concept to a choice value', () => {
    const specifications = importFixture('constraintOnChoiceValue', fixtureDir);
    const choice = expectAndGetElement(specifications, 'constraintOnChoiceValue', 'ConstraintOnChoiceValue');
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
    if(testExport) testCIMPL6Export(specifications);
  });

  it('Import55: should correctly import a group with a cardinality constraint on a substituted element', () => {
    const specifications = importFixture('substituteOnReferenceName', fixtureDir);
    const group = expectAndGetEntry(specifications, 'substituteOnReferenceName', 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'substituteOnReferenceName', 'GroupBase');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    //console.log(group.fields);
    expectField(group, 0, 'substituteOnReferenceName', 'Simple');
    expect(group.fields[0].constraints).to.have.length(2);  
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, 'substituteOnReferenceName', 'Simple2');
    expect(group.fields[0].constraints[1]).to.be.instanceof(CardConstraint);
    expect(group.fields[0].constraints[1].card.min).to.equal(0);
    expect(group.fields[0].constraints[1].card.max).to.equal(1);
    if(testExport) testCIMPL6Export(specifications);
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