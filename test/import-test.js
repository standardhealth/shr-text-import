const fs = require('fs');
const {expect} = require('chai');
const {setLogger} = require('../index');
const {id, pid, expectAndGetElement, expectAndGetEntry, expectValue, expectPrimitiveValue, expectChoiceValue, expectCardOne, expectChoiceOption, expectField, expectConcept, expectIdentifier, expectPrimitiveIdentifier, expectNoConstraints, importFixture, importFixtureFolder } = require('../test/import-helper');
const {Version, IncompleteValue, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, TypeConstraint, CardConstraint, TBD, REQUIRED, EXTENSIBLE, PREFERRED, EXAMPLE} = require('shr-models');
const err = require('shr-test-helpers/errors');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());
const writeCIMPL6 = true;

describe('#importDataElement', () => {
  beforeEach(function() {
    err.clear();
  });

  it('Import01: Check reading the header', () => {
    const specifications = importFixture('Header');
    const ns = specifications.namespaces.find('headerOut');
    expect(ns.namespace).to.equal('headerOut');
    expect(ns.description).to.equal('The SHR test namespace');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
});

  it('Import02: Check reading a simple entry', () => {
    const specifications = importFixture('SimpleEntry');
    const simple = expectAndGetEntry(specifications, 'simpleEntryOut', 'SimpleEntry');
    expect(simple.grammarVersion).to.eql(new Version(6, 0));
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expect(simple.description).to.equal('It is a simple entry');
    expect(simple.isAbstract).to.be.false;
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import03: should correctly import a simple element', () => {
    const specifications = importFixture('SimpleElement');
    const simple = expectAndGetElement(specifications, 'simpleElementOut', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expect(simple.isAbstract).to.be.false;
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import04: should correctly import a simple abstract element', () => {
    const specifications = importFixture('SimpleAbstractElement');
    const simple = expectAndGetElement(specifications, 'simpleAbstractElementOut', 'Simple');
    expect(simple.isAbstract).to.be.true;
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import05: should correctly import an entry whose value is a concept', () => {
    const specifications = importFixture('Coded');
    const coded = expectAndGetEntry(specifications, 'codedOut', 'Coded');
    expect(coded.description).to.equal('It is a concept entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expectNoConstraints(coded.value);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import06: should correctly import an entry with a code from a valueset', () => {
    const specifications = importFixture('CodedFromValueSet');
    const coded = expectAndGetEntry(specifications, 'codedFromValueSetOut', 'CodedFromValueSet');
    expect(coded.description).to.equal('It is a coded entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import07: should correctly import an entry with a code from a valueset using a path', () => {
    const specifications = importFixture('CodedFromPathValueSet');
    const coded = expectAndGetEntry(specifications, 'codedFromPathValueSetOut', 'CodedFromPathValueSet');
    expect(coded.description).to.equal('It is a coded entry that uses a valueset with a path');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import08: should correctly import an entry whose value is an element', () => {
    const specifications = importFixture('ValueIsElement');
    const simple = expectAndGetEntry(specifications, 'valueIsElementOut', 'ValueIsElement');
    expect(simple.description).to.equal('Value is a reference to a simple element');
    expectCardOne(simple.value);
    expectNoConstraints(simple.value);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

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
  });*/

  it('Import10: should correctly import a group element without a value', () => {
    const specifications = importFixture('GroupPropertiesOnly');
    const group = expectAndGetElement(specifications, 'groupPropertiesOnlyOut', 'GroupPropertiesOnly');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(4);
    expectField(group, 0, 'groupPropertiesOnlyOut', 'Simple', 0, 1);
    expectField(group, 1, 'groupPropertiesOnlyOut', 'Coded', 0);
    expectField(group, 2, 'groupPropertiesOnlyOut', 'Simple2', 1);
    expectField(group, 3, 'groupPropertiesOnlyOut', 'Thing', 1, 1);
    expectNoConstraints(group.fields);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });


  it('Import11: should correctly import a group entry with both a value and properties', () => {
    const specifications = importFixture('GroupValueAndProperties');
    const group = expectAndGetElement(specifications,'groupValueAndPropertiesOut', 'GroupValueAndProperties');
    expectCardOne(group.value);
    expectPrimitiveValue(group.value, 'concept');
    expectNoConstraints(group.value);
    expect(group.fields).to.have.length(4);
    expectField(group, 0, 'groupValueAndPropertiesOut', 'Simple', 0, 1);
    expectField(group, 1, 'groupValueAndPropertiesOut', 'Coded', 0);
    expectField(group, 2, 'groupValueAndPropertiesOut', 'Simple2', 1);
    expectField(group, 3, 'groupValueAndPropertiesOut', 'Thing', 1, 1);
    expectNoConstraints(group.fields);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  // Constraints

  it('Import12: should correctly import an entry with a valueset constraint on the value', () => {
    const specifications = importFixture('VSConstraintOnValue');
    const entry = expectAndGetEntry(specifications, 'vSConstraintOnValueOut', 'VSConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a valueset constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'vSConstraintOnValueOut', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    const cst = entry.value.constraints[0];
    expect(cst).to.be.instanceof(ValueSetConstraint);
    expect(cst.path).to.be.empty;
    expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
    expect(cst.bindingStrength).to.equal(REQUIRED);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import13: should correctly import an entry with a valueset constraint on the child\'s value', () => {
    const specifications = importFixture('VSConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'vSConstraintOnValueChildOut', 'VSConstraintOnValueChild');
    expectCardOne(entry.value);
    expect(entry.fields).to.be.empty;
    expectValue(entry.value, 'vSConstraintOnValueChildOut', 'Complex');
    expect(entry.value.constraints).to.have.length(2);  // failing here
    // constraint[0]: Complex.CodedFromValueSet 1..2
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
    expect(entry.value.constraints[0].path).to.eql([id('vSConstraintOnValueChildOut', 'CodedFromValueSet')]);
    // constraint[1]: Complex.CodedFromValueSet from http://standardhealthrecord.org/test/vs/Coded (required)
    expect(entry.value.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[1].path).to.eql([id('vSConstraintOnValueChildOut', 'CodedFromValueSet')]);
    expect(entry.value.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(entry.value.constraints[1].bindingStrength).to.equal(REQUIRED);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import14: should correctly import a group with a valueset constraint on a field', () => {
    const specifications = importFixture('VSConstraintOnField');
    const group = expectAndGetEntry(specifications, 'vSConstraintOnFieldOut', 'VSConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'vSConstraintOnFieldOut', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'vSConstraintOnFieldOut', 'CodedFromValueSet', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(1);   // failing here
    expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(cmplx.constraints[0].bindingStrength).to.equal(EXAMPLE);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import15: should correctly import a group with a valueset constraint on a field\'s child', () => {
    const specifications = importFixture('VSConstraintOnFieldChild');
    const group = expectAndGetEntry(specifications, 'vSConstraintOnFieldChildOut', 'VSConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'vSConstraintOnFieldChildOut', 'Simple', 0, 1);
    expectField(group, 1, 'vSConstraintOnFieldChildOut', 'Complex', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(2);  // failing here
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id('vSConstraintOnFieldChildOut', 'CodedFromValueSet')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(cmplx.constraints[1].path).to.eql([id('vSConstraintOnFieldChildOut', 'CodedFromValueSet')]);
    expect(cmplx.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(cmplx.constraints[1].bindingStrength).to.equal(REQUIRED);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import16: should correctly import entries with valueset constraints on value with a binding strength', () => {
    const specifications = importFixture('VSConstraintOnValueWithBindingStrength');
    const answerKey = {
      'RequiredVSConstraintOnValue': REQUIRED,
      'ExtensibleVSConstraintOnValue': EXTENSIBLE,
      'PreferredVSConstraintOnValue': PREFERRED,
      'ExampleVSConstraintOnValue': EXAMPLE
    };
    for (const testCase of Object.keys(answerKey)) {
      const entry = expectAndGetEntry(specifications, 'vSConstraintOnValueWithBindingStrengthOut', testCase);
      expectCardOne(entry.value);
      expectPrimitiveValue(entry.value, 'concept');
      expect(entry.value.constraints).to.have.length(1);
      let cst = entry.value.constraints[0];
      expect(cst).to.be.instanceof(ValueSetConstraint);
      expect(cst.path).to.eql([]);
      expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
      expect(cst.bindingStrength).to.equal(answerKey[testCase]);
    }
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import17: should correctly import entries with a valueset constraint on a field with a binding strength', () => {
    const specifications = importFixture('VSConstraintOnFieldWithBindingStrength');
    const answerKey = {
      'RequiredVSConstraintOnField': REQUIRED,
      'ExtensibleVSConstraintOnField': EXTENSIBLE,
      'PreferredVSConstraintOnField': PREFERRED,
      'ExampleVSConstraintOnField': EXAMPLE
    };
    for (const testCase of Object.keys(answerKey)) {
      const entry = expectAndGetEntry(specifications, 'vSConstraintOnFieldWithBindingStrengthOut', testCase);
      expect(entry.value).to.be.undefined;
      expect(entry.fields).to.have.length(1);  // failing here
      expectField(entry, 0, 'vSConstraintOnFieldWithBindingStrengthOut', 'CodedThing', 0, 1);
      const cmplx = entry.fields[0];
      expect(cmplx.constraints).to.have.length(1);
      expect(cmplx.constraints[0]).to.be.instanceof(ValueSetConstraint);
      expect(cmplx.constraints[0].path).to.be.empty;
      expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
      expect(cmplx.constraints[0].bindingStrength).to.equal(answerKey[testCase]);
    }
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import18: should correctly import an entry with a valueset constraint on inherited value', () => {
    const specifications = importFixture('VSConstraintOnValueKeyWord');
    const entry = expectAndGetEntry(specifications, 'vSConstraintOnValueKeyWordOut', 'ChildElement');
    expect(entry.fields).to.be.empty;
    console.log("Test 18: entry.value = "+JSON.stringify(entry.value));
    expect(entry.value).to.be.instanceof(IncompleteValue);
    expectCardOne(entry.value);
    expect(entry.value.identifier.isValueKeyWord).to.be.true;
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(entry.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import19: should correctly import an entry with a code constraint on the value', () => {
    const specifications = importFixture('CodeConstraintOnValue');
    const entry = expectAndGetEntry(specifications, 'codeConstraintOnValueOut', 'CodeConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'concept');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import20: should correctly import an entry with a code constraint on the value\'s child', () => {
    const specifications = importFixture('CodeConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'codeConstraintOnValueChildOut', 'CodeConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'codeConstraintOnValueChildOut', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import21: should correctly import an entry with a code constraint on the Value keyword', () => {
    const specifications = importFixture('CodeConstraintOnValueKeyWord');
    const entry = expectAndGetEntry(specifications, 'codeConstraintOnValueKeyWordOut', 'ChildElement');
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
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import22: should correctly import a group with a code constraint on a field', () => {
    const specifications = importFixture('CodeConstraintOnField');
    const group = expectAndGetEntry(specifications, 'codeConstraintOnFieldOut', 'CodeConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'codeConstraintOnFieldOut', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'codeConstraintOnFieldOut', 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);   // fails here
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.have.length(1);
    expect(el.constraints[0].path).to.eql([pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import23: should correctly import a group with a code constraint on a field\'s child', () => {
    const specifications = importFixture('CodeConstraintOnFieldChild');   // failing to load file
    const group = expectAndGetEntry(specifications, 'codeConstraintOnFieldChildOut', 'CodeConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'codeConstraintOnFieldChildOut', 'Simple', 0, 1);
    expectField(group, 1, 'codeConstraintOnFieldChildOut', 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
  //  expect(el.constraints[0].path).to.eql([id('codeConstraintOnFieldChildOut','CodedFromVS2')]);
  expect(el.constraints[0].path).to.eql([id('codeConstraintOnFieldChildOut','CodedFromVS2'), pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });



  it('Import25: should correctly import an entry with a unit constraint on the value', () => {
    const specifications = importFixture('UnitConstraintOnValue');
    const entry = expectAndGetEntry(specifications, 'unitConstraintOnValueOut', 'UnitConstraintOnValue');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Quantity');
    expect(entry.value.constraints).to.have.length(1); // fails here
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
 //   expect(entry.value.constraints[0].path).to.eql([id('shr.core','Units'), id('shr.core','concept')]);
    expect(entry.value.constraints[0].path).to.have.length(2);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','Units'), id('primitive', 'concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import26: should correctly import an entry with a unit constraint on the value\'s child', () => {
    const specifications = importFixture('UnitConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'unitConstraintOnValueChildOut', 'UnitConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'unitConstraintOnValueChildOut', 'Volume');
    expect(entry.value.constraints).to.have.length(1);  // fails here
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
   // expect(entry.value.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'concept')]);
   expect(entry.value.constraints[0].path).to.have.length(3);
   expect(entry.value.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('primitive', 'concept')]);
   expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
   if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import27: should correctly import a group with a unit constraint on a field', () => {
    const specifications = importFixture('UnitConstraintOnField');
    const group = expectAndGetEntry(specifications, 'unitConstraintOnFieldOut', 'UnitConstraintOnField');
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
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import28: should correctly import a group with a unit constraint on a field\'s child', () => {
    const specifications = importFixture('UnitConstraintOnFieldChild');
    const group = expectAndGetEntry(specifications, 'unitConstraintOnFieldChildOut', 'UnitConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'unitConstraintOnFieldChildOut', 'Volume', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
//    expect(el.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'concept')]);
    expect(el.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import29: should correctly import a group with an includes code constraint on a field', () => {
    const specifications = importFixture('IncludesCodeConstraints');
    const group = expectAndGetEntry(specifications, 'includesCodeConstraintsOut', 'IncludesCodeConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'includesCodeConstraintsOut', 'Coded', 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(2);
    expect(el.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[0].path).to.be.empty;
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    expect(el.constraints[1]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[1].path).to.be.empty;
    expectConcept(el.constraints[1].code, 'http://foo.org', 'baz', 'FooBaz');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });


  it('Import30: should correctly import an entry with a boolean constraint on the value', () => {
    const specifications = importFixture('BooleanConstraintOnValue');
    const entry = expectAndGetEntry(specifications, 'booleanConstraintOnValueOut', 'BooleanConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.be.true;
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import31: should correctly import an entry with a boolean constraint on the value (alternate syntax)', () => {
    const specifications = importFixture('BooleanConstraintOnValue2');
    const entry = expectAndGetEntry(specifications, 'booleanConstraintOnValue2Out', 'BooleanConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.be.true;
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });


  it('Import32: should correctly import an entry with a boolean constraint on the value\'s child', () => {
    const specifications = importFixture('BooleanConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'booleanConstraintOnValueChildOut', 'BooleanConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'booleanConstraintOnValueChildOut', 'SimpleBoolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('boolean')]);
    expect(entry.value.constraints[0].value).to.be.false;
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import33: should correctly import a group with a boolean constraint on a field\'s child', () => {
    const specifications = importFixture('BooleanConstraintOnFieldChild');
    const group = expectAndGetEntry(specifications, 'booleanConstraintOnFieldChildOut', 'BooleanConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'booleanConstraintOnFieldChildOut', 'SimpleBoolean', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(el.constraints[0].path).to.eql([pid('boolean')]);
    expect(el.constraints[0].value).to.be.true;
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import34: should correctly import an entry based on an element and substituting the value', () => {
    const specifications = importFixture('TypeConstraintOnValue');
    const entry = expectAndGetEntry(specifications, 'typeConstraintOnValueOut', 'TypeConstraintOnValue');
    expect(entry.basedOn).to.have.length(1);
    expect(entry.basedOn[0].namespace).to.equal('typeConstraintOnValueOut');
    expect(entry.basedOn[0].name).to.equal('SimpleBase');
    expectCardOne(entry.value);
    expectValue(entry.value, '', '_Value');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.false;
    expectIdentifier(entry.value.constraints[0].isA, 'typeConstraintOnValueOut', 'Simple2');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import35: should correctly import an entry based on an element and substitute the value\'s child', () => {
    const specifications = importFixture('TypeConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'typeConstraintOnValueChildOut', 'TypeConstraintOnValueChild');
    expect(entry.basedOn).to.have.length(1);
    expectIdentifier(entry.basedOn[0], 'typeConstraintOnValueChildOut', 'ComplexBase');
    expectCardOne(entry.value);
    expectValue(entry.value, '', '_Value');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('typeConstraintOnValueChildOut', 'Simple')]);  // should the path include Complex? (yes)
    expect(entry.value.constraints[0].onValue).to.be.false;
    expectIdentifier(entry.value.constraints[0].isA, 'typeConstraintOnValueChildOut', 'Simple2');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import36: should correctly import a group with a type constraint on a field', () => {
    const specifications = importFixture('TypeConstraintOnField');
    const group = expectAndGetEntry(specifications, 'typeConstraintOnFieldOut', 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'typeConstraintOnFieldOut', 'GroupBase');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'typeConstraintOnFieldOut', 'Simple');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, 'typeConstraintOnFieldOut', 'Simple2');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import37: should correctly import a group with a cardinality constraint and a type constraint on a field\'s child', () => {
    const specifications = importFixture('TypeConstraintOnFieldChild');
    const group = expectAndGetEntry(specifications, 'typeConstraintOnFieldChildOut', 'TypeConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'typeConstraintOnFieldChildOut', 'Complex', 0, 1);
    const cmplx = group.fields[0];
    expect(cmplx.constraints).to.have.length(2);
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id('typeConstraintOnFieldChildOut', 'Simple')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(TypeConstraint);
    expect(cmplx.constraints[1].path).to.eql([id('typeConstraintOnFieldChildOut', 'Simple')]);
    expect(cmplx.constraints[1].onValue).to.be.false;
    expectIdentifier(cmplx.constraints[1].isA, 'typeConstraintOnFieldChildOut', 'Simple2');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import38: should correctly import a group with a type constraint on a field\'s value', () => {
    const specifications = importFixture('TypeConstraintOnFieldValue');
    const group = expectAndGetEntry(specifications, 'typeConstraintOnFieldValueOut', 'TypeConstraintOnFieldValue');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'typeConstraintOnFieldValueOut', 'Group2');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'typeConstraintOnFieldValueOut', 'HasSimpleValue');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.have.length(1);
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, 'typeConstraintOnFieldValueOut', 'Simple2');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  // Choices

  it('Import40: should correctly import a choice entry', () => {
    const specifications = importFixture('ChoiceType');
    const choice = expectAndGetElement(specifications, 'choiceTypeOut', 'ChoiceElement');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 3);
    expectChoiceOption(choice.value, 0, 'primitive', 'date');
    expectChoiceOption(choice.value, 1, 'primitive', 'dateTime');
    expectChoiceOption(choice.value, 2, 'choiceTypeOut', 'DateTimeString');
    // MK: not sure what the following two statements are asserting
    expectNoConstraints(choice.value);
    expectNoConstraints(choice.value.options);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });


  it('Import41: should correctly import an entry with a value choice constraint (to primitive) on a choice field', () => {
    const specifications = importFixture('ChoiceTypeConstraintToPrimitive');
    const entry = expectAndGetEntry(specifications, 'choiceTypeConstraintToPrimitiveOut', 'ThingWithChoiceField');
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, 'choiceTypeConstraintToPrimitiveOut', 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    expect(entry.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.fields[0].constraints[0].path).to.be.empty;
    expect(entry.fields[0].constraints[0].onValue).to.be.true;
    // MK:onValue is true because it is a constraint on the value of ChoiceElement.
    expectPrimitiveIdentifier(entry.fields[0].constraints[0].isA, 'dateTime');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import42: should correctly import an entry with a value choice constraint (to non-primitive) on a choice field', () => {
    const specifications = importFixture('ChoiceTypeConstraintToNonPrimitive');
    const entry = expectAndGetEntry(specifications, 'choiceTypeConstraintToNonPrimitiveOut', 'ThingWithChoiceField');
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, 'choiceTypeConstraintToNonPrimitiveOut', 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    expect(entry.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.fields[0].constraints[0].path).to.be.empty;
    expect(entry.fields[0].constraints[0].onValue).to.be.true;
    expectIdentifier(entry.fields[0].constraints[0].isA, 'choiceTypeConstraintToNonPrimitiveOut', 'DateTimeString');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import43: should correctly import an entry with a value choice constraint (to a reduced choice) on a choice field', () => {
    const specifications = importFixture('ChoiceTypeConstraintToReducedChoice');
    const entry = expectAndGetEntry(specifications, 'choiceTypeConstraintToReducedChoiceOut', 'ThingWithChoiceField');  // error here because 'or' is not being accepted in an 'only' statement
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, 'choiceTypeConstraintToReducedChoiceOut', 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    const choice = entry.fields[0];
    expect(cmplx.constraints).to.have.length(1);
    expect(choice.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(choice.constraints[0].path).to.be.empty;
    expect(choice.constraints[0].onValue).to.be.true;
    expectChoiceValue(choice.value, 2);
    expectChoiceOption(choice.value, 0, 'primitive', 'dateTime');
    expectChoiceOption(choice.value, 1, 'choiceTypeConstraintToReducedChoiceOut', 'DateTimeString');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import44: should correctly import an entry with a value choice inheriting from a parent with a simple value field', () => {
    const specifications = importFixture('ChoiceExplicitRestrictionInSubclass');
    const entry = expectAndGetEntry(specifications, 'choiceExplicitRestrictionInSubclassOut', 'ChildWithSpecificDateTypes');
    expectCardOne(entry.value);
    expectChoiceValue(entry.value, 3);
    expectChoiceOption(entry.value, 0, 'choiceExplicitRestrictionInSubclassOut', 'DateString');
    expectChoiceOption(entry.value, 1, 'choiceExplicitRestrictionInSubclassOut', 'DateDate');
    expectChoiceOption(entry.value, 2, 'choiceExplicitRestrictionInSubclassOut', 'DateRange');
    // MK: not sure what the following two statements are asserting
    expectNoConstraints(entry.value);
    expectNoConstraints(entry.value.options);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import45: should correctly import an entry with a card constraint on the value\'s child', () => {
    const specifications = importFixture('CardConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'cardConstraintOnValueChildOut', 'CardConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'cardConstraintOnValueChildOut', 'Thing1');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('cardConstraintOnValueChildOut','Thing2')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import46: should correctly import a group with a card constraint on a field\'s child', () => {
    const specifications = importFixture('CardConstraintOnFieldChild');
    const group = expectAndGetEntry(specifications, 'cardConstraintOnFieldChildOut', 'CardConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'cardConstraintOnFieldChildOut', 'Thing1', 0);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CardConstraint);
    expect(el.constraints[0].path).to.eql([id('cardConstraintOnFieldChildOut', 'Thing2')]);
    expect(el.constraints[0].card.min).to.equal(1);
    expect(el.constraints[0].card.max).to.equal(2);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import47: should correctly import single concept', () => {
    const specifications = importFixture('ConceptSingle');
    const entry = expectAndGetEntry(specifications, 'conceptSingleOut', 'ConceptSingle');
    expect(entry.concepts).to.have.length(1);
    expectConcept(entry.concepts[0], 'http://foo.org', 'bar');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import48: should correctly import multiple concepts', () => {
    const specifications = importFixture('ConceptMultiple');
    const entry = expectAndGetEntry(specifications, 'conceptMultipleOut', 'ConceptMultiple');
    expect(entry.concepts).to.have.length(2);
    expectConcept(entry.concepts[0], 'http://foo.org', 'bar');
    expectConcept(entry.concepts[1], 'http://boo.org', 'baz');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import49: should correctly import TBD concept', () => {
    const specifications = importFixture('ConceptTBD');
    const entry = expectAndGetEntry(specifications, 'conceptTBDOut', 'ConceptTBD');
    expect(entry.concepts).to.have.length(0);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import50: should correctly import a simple parent-child relationship', () => {
    const specifications = importFixture('BasedOn');
    const child = expectAndGetEntry(specifications, 'basedOnOut', 'Child');
    expect(child.basedOn).to.have.length(1);
    expect(child.basedOn[0].namespace).to.equal('basedOnOut');
    expect(child.basedOn[0].name).to.equal('Base');
    expectCardOne(child.value);
    expectValue(child.value, 'basedOnOut', 'Simple');
    expectNoConstraints(child.value);
    expect(child.fields).to.have.length(0);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import51: should correctly import multiple elements in a single namespace', () => {
    const specifications = importFixture('MultipleElementNamespace');
    const simple = expectAndGetEntry(specifications, 'multipleElementNamespaceOut', 'SimpleDate');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'date');
    expectNoConstraints(simple.value);
    const coded = expectAndGetElement(specifications, 'multipleElementNamespaceOut', 'Coded');
    expect(coded.description).to.equal('It is a coded element');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import52: should correctly resolve URL, URN, and URN OID vocabularies', () => {
    const specifications = importFixture('Vocabularies');
    const simple = expectAndGetEntry(specifications, 'vocabulariesOut', 'Simple');
    expect(simple.concepts).to.have.length(3);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expectConcept(simple.concepts[1], 'urn:iso:std:iso:4217', 'baz', 'Foobaz');
    expectConcept(simple.concepts[2], 'urn:oid:2.16.840.1.114222.4.11.826', 'bam', 'Foobam');
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import53: should correctly resolve elements and vocabularies from other namespaces', () => {
    const specifications = importFixtureFolder('uses');
    const one = expectAndGetEntry(specifications, 'usesOut', 'One');
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
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import54: should be able to apply a fixed concept to a choice value', () => {
    const specifications = importFixture('ConstraintOnChoiceValue');
    const choice = expectAndGetElement(specifications, 'constraintOnChoiceValueOut', 'ConstraintOnChoiceValue');
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
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });

  it('Import55: should correctly import a group with a cardinality constraint on a substituted element', () => {
    const specifications = importFixture('SubstituteOnReferenceName');
    const group = expectAndGetEntry(specifications, 'substituteOnReferenceNameOut', 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'substituteOnReferenceNameOut', 'GroupBase');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'substituteOnReferenceNameOut', 'Simple');
    expect(group.fields[0].constraints).to.have.length(1);  // mlt: there are 2 constraints in Entry: one TypeConstraint and now one CardConstraint.
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, 'substituteOnReferenceNameOut', 'Simple2');
    expect(group.fields[0].constraints[1]).to.be.instanceof(CardConstraint);
    expect(group.fields[0].constraints[1].card.min).to.equal(0);
    expect(group.fields[0].constraints[1].card.max).to.equal(1);
    if(writeCIMPL6) specifications.toCIMPL6('../cimpl6-out');
  });
});


// mlt: modularized negative tests. Now located in import-neg-test.js
// mlt: modularized config tests. Now located in config-import-test.js


/* MK - cutting out CIMCORE tests because the examples are out of date, in Grammar 5. If we revive this, it should live in a separate file (e.g., import-cimcore-test.js).
 mlt: - moved cimcore tests to import-cimcore-test.js.
*/

// mlt: decoupled all shared function tests. Now located in import-helper.js
