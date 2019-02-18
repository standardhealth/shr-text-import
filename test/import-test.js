const fs = require('fs');
const {expect} = require('chai');
const {importFromFilePath, importConfigFromFilePath, importCIMCOREFromFilePath, setLogger} = require('../index');
const {Version, DataElement, Value, RefValue, ChoiceValue, IncompleteValue, Identifier, PrimitiveIdentifier, Cardinality, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, TypeConstraint, CardConstraint, TBD, REQUIRED, EXTENSIBLE, PREFERRED, EXAMPLE} = require('shr-models');
const err = require('shr-test-helpers/errors');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());

describe('#importDataElement', () => {
  beforeEach(function() {
    err.clear();
  });

  it('Import01: Check reading the header', () => {
    const specifications = importFixture('Header');
    const ns = specifications.namespaces.find('shr.test');
    expect(ns.namespace).to.equal('shr.test');
    expect(ns.description).to.equal('The SHR test namespace');
});

  it('Import02: Check reading a simple entry', () => {
    const specifications = importFixture('SimpleEntry');
    const simple = expectAndGetEntry(specifications, 'shr.test', 'SimpleEntry');
    expect(simple.grammarVersion).to.eql(new Version(6, 0));
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expect(simple.description).to.equal('It is a simple entry');
    expect(simple.isAbstract).to.be.false;
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('Import03: should correctly import a simple element', () => {
    const specifications = importFixture('SimpleElement');
    const simple = expectAndGetElement(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expect(simple.isAbstract).to.be.false;
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('Import04: should correctly import a simple abstract element', () => {
    const specifications = importFixture('SimpleAbstractElement');
    const simple = expectAndGetElement(specifications, 'shr.test', 'Simple');
    expect(simple.isAbstract).to.be.true;
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('Import05: should correctly import an entry whose value is a concept', () => {
    const specifications = importFixture('Coded');
    const coded = expectAndGetEntry(specifications, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a concept entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expectNoConstraints(coded.value);
  });

  it('Import06: should correctly import an entry with a code from a valueset', () => {
    const specifications = importFixture('CodedFromValueSet');
    const coded = expectAndGetEntry(specifications, 'shr.test', 'CodedFromValueSet');
    expect(coded.description).to.equal('It is a coded entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('Import07: should correctly import an entry with a code from a valueset using a path', () => {
    const specifications = importFixture('CodedFromPathValueSet');
    const coded = expectAndGetEntry(specifications, 'shr.test', 'CodedFromPathValueSet');
    expect(coded.description).to.equal('It is a coded entry that uses a valueset with a path');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('Import08: should correctly import an entry whose value is an element', () => {
    const specifications = importFixture('ValueIsElement');
    const simple = expectAndGetEntry(specifications, 'shr.test', 'ValueIsElement');
    expect(simple.description).to.equal('Value is a reference to a simple element');
    expectCardOne(simple.value);
    expectNoConstraints(simple.value);
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
    const group = expectAndGetElement(specifications, 'shr.test', 'GroupPropertiesOnly');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(4);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Coded', 0);
    expectField(group, 2, 'shr.test', 'Simple2', 1);
    expectField(group, 3, 'shr.test', 'Thing', 1, 1);
    expectNoConstraints(group.fields);
  });


  it('Import11: should correctly import a group entry with both a value and properties', () => {
    const specifications = importFixture('GroupValueAndProperties');
    const group = expectAndGetEntry(specifications,'shr.test', 'GroupValueAndProperties');
    expectCardOne(group.value);
    expectPrimitiveValue(group.value, 'concept');
    expectNoConstraints(group.value);
    expect(group.fields).to.have.length(4);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Coded', 0);
    expectField(group, 2, 'shr.test', 'Simple2', 1);
    expectField(group, 3, 'shr.test', 'Thing', 1, 1);
    expectNoConstraints(group.fields);
  });

  // Constraints

  it('Import12: should correctly import an entry with a valueset constraint on the value', () => {
    const specifications = importFixture('VSConstraintOnValue');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a valueset constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    const cst = entry.value.constraints[0];
    expect(cst).to.be.instanceof(ValueSetConstraint);
    expect(cst.path).to.be.empty;
    expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
    expect(cst.bindingStrength).to.equal(REQUIRED);
  });

  it('Import13: should correctly import an entry with a valueset constraint on the child\'s value', () => {
    const specifications = importFixture('VSConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnValueChild');
    expectCardOne(entry.value);
    expect(entry.fields).to.be.empty;
    expectValue(entry.value, 'shr.test', 'Complex');
    expect(entry.value.constraints).to.have.length(2);  // failing here
    // constraint[0]: Complex.CodedFromValueSet 1..2
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
    expect(entry.value.constraints[0].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    // constraint[1]: Complex.CodedFromValueSet from http://standardhealthrecord.org/test/vs/Coded (required)
    expect(entry.value.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[1].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    expect(entry.value.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(entry.value.constraints[1].bindingStrength).to.equal(REQUIRED);
  });

  it('Import14: should correctly import a group with a valueset constraint on a field', () => {
    const specifications = importFixture('VSConstraintOnField');
    const group = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'shr.test', 'CodedFromValueSet', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(1);   // failing here
    expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(entry.value.constraints[1].bindingStrength).to.equal(EXAMPLE);
  });

  it('Import15: should correctly import a group with a valueset constraint on a field\'s child', () => {
    const specifications = importFixture('VSConstraintOnFieldChild');
    const group = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); 
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Complex', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(2);  // failing here
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(cmplx.constraints[1].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    expect(cmplx.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
    expect(cmplx.constraints[1].bindingStrength).to.equal(REQUIRED);
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
      const entry = expectAndGetEntry(specifications, 'shr.test', testCase);
      expectCardOne(entry.value);
      expectPrimitiveValue(entry.value, 'concept');
      expect(entry.value.constraints).to.have.length(1);
      let cst = entry.value.constraints[0];
      expect(cst).to.be.instanceof(ValueSetConstraint);
      expect(cst.path).to.eql([]);
      expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
      expect(cst.bindingStrength).to.equal(answerKey[testCase]);
    }
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
      const entry = expectAndGetEntry(specifications, 'shr.test', testCase);
      expect(entry.value).to.be.undefined;
      expect(entry.fields).to.have.length(1);  // failing here
      expectField(entry, 0, 'shr.test', 'CodedThing', 0, 1);
      const cmplx = entry.fields[0];
      expect(cmplx.constraints).to.have.length(1);
      expect(cmplx.constraints[0]).to.be.instanceof(ValueSetConstraint);
      expect(cmplx.constraints[0].path).to.be.empty;
      expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
      expect(cmplx.constraints[0].bindingStrength).to.equal(answerKey[testCase]);
    }
  });

  it('Import18: should correctly import an entry with a valueset constraint on the Value keyword', () => {
    const specifications = importFixture('VSConstraintOnValueKeyWord');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ChildElement');
    expect(entry.fields).to.be.empty;
    expect(entry.value.card).to.be.undefined;  // failing here
    expect(entry.value).to.be.instanceof(IncompleteValue);
    expect(entry.value.identifier.isValueKeyWord).to.be.true;
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(entry.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('Import19: should correctly import an entry with a code constraint on the value', () => {
    const specifications = importFixture('CodeConstraintOnValue');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'concept');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('Import20: should correctly import an entry with a code constraint on the value\'s child', () => {
    const specifications = importFixture('CodeConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);  // fails here
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('Import21: should correctly import an entry with a code constraint on the Value keyword', () => {
    const specifications = importFixture('CodeConstraintOnValueKeyWord');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ChildElement');
    expect(entry.description).to.be.undefined;
    expect(entry.value.card).to.be.undefined;   // fails here
    expect(entry.value).to.be.instanceof(IncompleteValue);
    expect(entry.value.identifier.isValueKeyWord).to.be.true;
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    expect(entry.fields).to.be.empty;
  });

  it('Import22: should correctly import a group with a code constraint on a field', () => {
    const specifications = importFixture('CodeConstraintOnField');
    const group = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'shr.test', 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);   // fails here
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.be.empty;
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('Import23: should correctly import a group with a code constraint on a field\'s child', () => {
    const specifications = importFixture('CodeConstraintOnFieldChild');   // failing to load file
    const group = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.test','CodedFromVS2')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });



  it('Import25: should correctly import an entry with a unit constraint on the value', () => {
    const specifications = importFixture('UnitConstraintOnValue');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnValue');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Quantity');
    expect(entry.value.constraints).to.have.length(1); // fails here
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','Units'), id('shr.core','concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  // MK - I'm unsure if the statement should be Volume[Quantity].Units or Value[Quantity].Units
  it('Import26: should correctly import an entry with a unit constraint on the value\'s child', () => {
    const specifications = importFixture('UnitConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'Volume');
    expect(entry.value.constraints).to.have.length(1);  // fails here
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('Import27: should correctly import a group with a unit constraint on a field', () => {
    const specifications = importFixture('UnitConstraintOnField');
    const group = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnField');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a unit constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.core', 'Quantity', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core','Units'), id('shr.core','concept')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('Import28: should correctly import a group with a unit constraint on a field\'s child', () => {
    const specifications = importFixture('UnitConstraintOnFieldChild');
    const group = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.test', 'Volume', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'concept')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('Import29: should correctly import a group with an includes code constraint on a field', () => {
    const specifications = importFixture('IncludesCodeConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'IncludesCodeConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.test', 'Coded', 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(2);
    expect(el.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[0].path).to.be.empty;
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    expect(el.constraints[1]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[1].path).to.be.empty;
    expectConcept(el.constraints[1].code, 'http://foo.org', 'baz', 'FooBaz');
  });


  it('Import30: should correctly import an entry with a boolean constraint on the value', () => {
    const specifications = importFixture('BooleanConstraintOnValue');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'BooleanConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].value).to.be.true;
  });

  it('Import31: should correctly import an entry with a boolean constraint on the value (alternate syntax)', () => {
    const specifications = importFixture('BooleanConstraintOnValue2');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'BooleanConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].value).to.be.true;
  });


  it('Import32: should correctly import an entry with a boolean constraint on the value\'s child', () => {
    const specifications = importFixture('BooleanConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'BooleanConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'SimpleBoolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('boolean')]);
    expect(entry.value.constraints[0].value).to.be.false;
  });

  it('Import33: should correctly import a group with a boolean constraint on a field\'s child', () => {
    const specifications = importFixture('BooleanConstraintOnFieldChild');
    const group = expectAndGetEntry(specifications, 'shr.test', 'BooleanConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.test', 'SimpleBoolean', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(el.constraints[0].path).to.eql([pid('boolean')]);
    expect(el.constraints[0].value).to.be.true;
  });

  it('Import34: should correctly import an entry based on an element and substituting the value', () => {
    const specifications = importFixture('TypeConstraintOnValue');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnValue');
    expect(entry.basedOn).to.have.length(1);
    expect(entry.basedOn[0].namespace).to.equal('shr.test');
    expect(entry.basedOn[0].name).to.equal('SimpleBase');
    expectCardOne(entry.value);  // fails here (value should be inherited)
    expectValue(entry.value, 'shr.test', 'Simple');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.false;
    expectIdentifier(entry.value.constraints[0].isA, 'shr.test', 'Simple2');
  });

  it('Import35: should correctly import an entry based on an element and substitute the value\'s child', () => {
    const specifications = importFixture('TypeConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnValueChild');
    expect(entry.basedOn).to.have.length(1);
    expectIdentifier(entry.basedOn[0], 'shr.test', 'ComplexBase');
    expectCardOne(entry.value);   // fails here (value should be inherited)
    expectValue(entry.value, 'shr.test', 'Complex');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.test', 'Simple')]);  // should the path include Complex?
    expect(entry.value.constraints[0].onValue).to.be.true;  // MK: changed false to true since this is a constraint on the value
    expectIdentifier(entry.value.constraints[0].isA, 'shr.test', 'Simple2');
  });

  it('Import36: should correctly import a group with a type constraint on a field', () => {
    const specifications = importFixture('TypeConstraintOnField');
    const group = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'shr.test', 'GroupBase');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);  // MK: changed from 1 to 2 since two fields are inherited: Simple and CodedFromValueSet
    expectField(group, 0, 'shr.test', 'Simple');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, 'shr.test', 'Simple2');
  });

  it('Import37: should correctly import a group with a cardinality constraint and a type constraint on a field\'s child', () => {
    const specifications = importFixture('TypeConstraintOnFieldChild');
    const group = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.test', 'Complex', 0, 1);
    const cmplx = group.fields[0];
    expect(cmplx.constraints).to.have.length(2);
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id('shr.test', 'Simple')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(TypeConstraint);
    expect(cmplx.constraints[1].path).to.eql([id('shr.test', 'Simple')]);
    expect(cmplx.constraints[1].onValue).to.be.false;
    expectIdentifier(cmplx.constraints[1].isA, 'shr.test', 'Simple2');
  });

  it('Import38: should correctly import a group with a type constraint on a field\'s value', () => {
    const specifications = importFixture('TypeConstraintOnFieldValue');
    const group = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnFieldValue');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'shr.test', 'Group2');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.test', 'HasSimpleValue');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.true;
    expectIdentifier(group.fields[0].constraints[0].isA, 'shr.test', 'Simple2');
  });

  // Choices

  it('Import39: should correctly import an element whose value has choices', () => {
    const specifications = importFixture('ChoiceType');
    const element = expectAndGetElement(specifications, 'shr.test', 'ChoiceElement');
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(0);
  // MK: don't know how to test that the value has a choice of date, dateTime, DateTimeString. Please discuss with me.
    expectChoiceOption(choice, optionIndex, expectedNamespace, expectedName, expectedMin=1, expectedMax=1)
  });


  it('Import40: should correctly import a choice entry', () => {
    const specifications = importFixture('ChoiceType');
    const choice = expectAndGetElement(specifications, 'shr.test', 'ChoiceElement');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 3);
    expectChoiceOption(choice.value, 0, 'primitive', 'date');
    expectChoiceOption(choice.value, 1, 'primitive', 'dateTime');
    expectChoiceOption(choice.value, 2, 'shr.test', 'DateTimeString');
    // MK: not sure what the following two statements are asserting
    expectNoConstraints(choice.value);
    expectNoConstraints(choice.value.options);
  });


  it('Import41: should correctly import an entry with a value choice constraint (to primitive) on a choice field', () => {
    const specifications = importFixture('ChoiceTypeConstraintToPrimitive');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ThingWithChoiceField');
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, 'shr.test', 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    expect(entry.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);  // MK: I don't know if there should be a ChoiceConstraint, but the 'only' (choice constraint) is not the same constraint as 'substitute' (type constraint). Please discuss with me.
    expect(entry.fields[0].constraints[0].path).to.be.empty;
    expect(entry.fields[0].constraints[0].onValue).to.be.true;
// MK: Should onValue be false? This constraint applies to a field (ChoiceElement) although it is a constraint on the value of ChoiceElement. Is that the meaning of onValue? 
    expectPrimitiveIdentifier(entry.fields[0].constraints[0].isA, 'dateTime');
  });

  it('Import42: should correctly import an entry with a value choice constraint (to non-primitive) on a choice field', () => {
    const specifications = importFixture('ChoiceTypeConstraintToNonPrimitive');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ThingWithChoiceField');
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, 'shr.test', 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    expect(entry.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.fields[0].constraints[0].path).to.be.empty;
    expect(entry.fields[0].constraints[0].onValue).to.be.true;
    expectIdentifier(entry.fields[0].constraints[0].isA, 'shr.test', 'DateTimeString');
  });

  it('Import43: should correctly import an entry with a value choice constraint (to a reduced choice) on a choice field', () => {
    const specifications = importFixture('ChoiceTypeConstraintToReducedChoice');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ThingWithChoiceField');  // error here because 'or' is not being accepted in an 'only' statement
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, 'shr.test', 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    const choice = entry.fields[0];
    expect(cmplx.constraints).to.have.length(1);
    expect(choice.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(choice.constraints[0].path).to.be.empty;
    expect(choice.constraints[0].onValue).to.be.true;
    expectChoiceValue(choice.value, 2);
    expectChoiceOption(choice.value, 0, 'primitive', 'dateTime');
    expectChoiceOption(choice.value, 1, 'shr.test', 'DateTimeString');
  });

  it('Import44: should correctly import an entry with a value choice inheriting from a parent with a simple value field', () => {
    const specifications = importFixture('ChoiceExplicitRestrictionInSubclass');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ChildWithSpecificDateTypes');
    expectCardOne(entry.value);
    expectChoiceValue(entry.value, 3);
    expectChoiceOption(entry.value, 0, 'shr.test', 'DateString');
    expectChoiceOption(entry.value, 1, 'shr.test', 'DateDate');
    expectChoiceOption(entry.value, 2, 'shr.test', 'DateRange');
    // MK: not sure what the following two statements are asserting
    expectNoConstraints(entry.value);
    expectNoConstraints(entry.value.options);
  });

  it('Import45: should correctly import an entry with a card constraint on the value\'s child', () => {
    const specifications = importFixture('CardConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'CardConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'Thing1');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.test','Thing2')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
  });

  it('Import46: should correctly import a group with a card constraint on a field\'s child', () => {
    const specifications = importFixture('CardConstraintOnFieldChild');
    const group = expectAndGetEntry(specifications, 'shr.test', 'CardConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.test', 'Thing1', 0);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CardConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.test', 'Thing2')]);
    expect(el.constraints[0].card.min).to.equal(1);
    expect(el.constraints[0].card.max).to.equal(2);
  });

  it('Import47: should correctly import single concept', () => {
    const specifications = importFixture('ConceptSingle');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ConceptSingle');
    expect(entry.concepts).to.have.length(1);
    expectConcept(entry.concepts[0], 'http://foo.org', 'bar');
  });

  it('Import48: should correctly import multiple concepts', () => {
    const specifications = importFixture('ConceptMultiple');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ConceptMultiple');
    expect(entry.concepts).to.have.length(2);
    expectConcept(entry.concepts[0], 'http://foo.org', 'bar');
    expectConcept(entry.concepts[1], 'http://boo.org', 'baz');
  });

  it('Import49: should correctly import TBD concept', () => {
    const specifications = importFixture('ConceptTBD');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ConceptTBD');
    // MK: I'm not sure if this test is correct. Is a TBD simply ignored? (in that case, the concepts array length would be 0)
    expect(entry.concepts).to.have.length(1);
    expect(entry.concepts[0]).to.be.instanceOf(TBD);
  });

  it('Import50: should correctly import a simple parent-child relationship', () => {
    const specifications = importFixture('BasedOn');
    const child = expectAndGetEntry(specifications, 'shr.test', 'Child');
    expect(child.basedOn).to.have.length(1);
    expect(child.basedOn[0].namespace).to.equal('shr.test');
    expect(child.basedOn[0].name).to.equal('Base');
    expectCardOne(child.value);
    expectValue(child.value, 'shr.test', 'Simple');
    expectNoConstraints(child.value);
    // MK: Are inherited fields internalized as fields on the child class? In this case, the child has no explicit fields, only the two inherited fields. So I'm not sure if the following expectations are correct:
    expect(child.fields).to.have.length(2);
    expectField(entry, 0, 'shr.test', 'Coded', 0);
    expectField(entry, 0, 'shr.test', 'Simple2', 1, 2);
  });

/* this is not supported, should not be allowed
  it('should correctly import an entry based on a TBD', () => {
    const specifications = importFixture('BasedOnTBD');
    const basedOn = expectAndGetEntry(specifications, 'shr.test', 'BasedOnTBD');
    expect(basedOn.basedOn).to.have.length(1);
    expect(basedOn.basedOn[0]).to.be.instanceOf(TBD);
    expect(basedOn.basedOn[0].text).to.equal('BaseToBeDetermined');
    expect(basedOn.concepts).to.have.length(1);
    expectConcept(basedOn.concepts[0], 'http://foo.org', 'bar');
    expect(basedOn.description).to.equal('It is a simple definition based on TBD BaseToBeDetermined');
    expectCardOne(basedOn.value);
    expectPrimitiveValue(basedOn.value, 'string');
    expectNoConstraints(basedOn.value);
  });
  */

  it('Import51: should correctly import multiple elements in a single namespace', () => {
    const specifications = importFixture('MultipleElementNamespace');
    const simple = expectAndGetEntry(specifications, 'shr.test', 'SimpleDate');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'date');
    expectNoConstraints(simple.value);
    const coded = expectAndGetElement(specifications, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded element');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('Import52: should correctly resolve URL, URN, and URN OID vocabularies', () => {
    const specifications = importFixture('Vocabularies');
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(3);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expectConcept(simple.concepts[1], 'urn:iso:std:iso:4217', 'baz', 'Foobaz');
    expectConcept(simple.concepts[2], 'urn:oid:2.16.840.1.114222.4.11.826', 'bam', 'Foobam');
  });

  it('Import53: should correctly resolve elements and vocabularies from other namespaces', () => {
    const specifications = importFixtureFolder('uses');
    const one = expectAndGetEntry(specifications, 'shr.test.one', 'One');
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
  });

  it('Import54: should be able to apply a fixed concept to a choice value', () => {
    const specifications = importFixture('ConstraintOnChoiceValue');
    const choice = expectAndGetElement(specifications, 'shr.test', 'ConstraintOnChoiceValue');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 2);
    expectChoiceOption(choice.value, 0, 'primitive', 'boolean');
    expectChoiceOption(choice.value, 1, 'primitive', 'concept');
// MK: I need some help writing this correctly. I'm not sure how to access constraints placed on choice values
// first the fixed boolean choice value
    const fb = choice.value[0];
    expect(fb.constraints).to.have.length(1);
    expect(fb.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(fb.constraints[0].path).to.be.empty;
    expect(fb.constraints[0].value).to.be.true;
// now the fixed concept choice value
    const fc = choice.value[1];
    expect(fc.constraints).to.have.length(1);
    expect(fc.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(fb.constraints[0].path).to.be.empty;
    expectConcept(fc.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });


});

describe('#importDataElementNegatives', () => {
  beforeEach(function() {
    err.clear();
  });

  it('Neg1: should throw an error 11013 when a keyword is not followed by a colon', () => {
//    const specifications = importFixture('InvalidSyntaxMissingColon', 1);
    expect(function(){
      importFixture('InvalidSyntaxMissingColon', 1);
    }).to.throw('11013')
  });

  it('Neg2: should throw an error when there is an invalid vocabulary reference', () => {
    expect(function(){
      importFixture('InvalidVocabularyReference', 1);
    }).to.throw()
  });

  it('Neg3: should throw an error when there is an invalid element reference', () => {
    expect(function(){
      importFixture('InvalidElementReference', 1);
    }).to.throw()
  });

  it('Neg4: should throw an error when there is a duplicate element name', () => {
    expect(function(){
      importFixture('InvalidDuplicateElementDefinition', 1);
    }).to.throw()
   });

  it('Neg5: should throw an error when a class defines a property twice.', () => {
      expect(function(){
        importFixture('InvalidDuplicatePropertyDefinition', 1);
      }).to.throw()
  });

  it('Neg6: should throw an error if Grammar is not the first line of the file.', () => {
    expect(function(){
      importFixture('InvalidMisplacedGrammarDeclaration', 1);
    }).to.throw()
  });

  it('Neg7: should throw an error if there is no cardinality specified on a property.', () => {
    expect(function(){
      importFixture('InvalidPropertyNoCardinality', 1);
    }).to.throw()
  });

  it('Neg8: should throw an error if the file lacks a namespace declaration.', () => {
    expect(function(){
      importFixture('InvalidNoNamespace', 1);
    }).to.throw()
  });

  it('Neg9: should throw an error if a child class defines a property it already inherited.', () => {
    expect(function(){
      importFixture('InvalidInheritedFieldDuplicatedInChild', 1);
    }).to.throw()
  });

  it('Neg10: should throw an error when there is an invalid fully qualified element reference', () => {
    expect(function(){
      importFixture('InvalidFQElementReference', 1);
    }).to.throw()
  });

  it('Neg11: should throw an error when there is an ambiguous element reference', () => {
    // MK: I'm not sure that just loading the folder should trigger the checks for ambiguous elements
    expect(function(){
        importFixtureFolder('invalidAmbiguousResolution', 1);
    }).to.throw()
  });

  it('Neg12: should throw an error when there are conflicing code system declarations', () => {
    // MK: I'm not sure that just loading the folder should trigger the checks for ambiguous elements
    expect(function(){
        importFixtureFolder('invalidConflictingVocab', 1);
    }).to.throw()
  });

  it('Neg13: should throw an error when a code lacks a code system', () => {
    expect(function(){
         importFixture('InvalidSystemlessCode');
    }).to.throw()
  });

  it('Neg14: should throw an error when a value is missing a value element', () => {
    expect(function(){
         importFixture('InvalidValueDeclarationEmpty');
    }).to.throw()
  });

  it('Neg15: should throw an error when a value declares cardinality', () => {
    expect(function(){
         importFixture('InvalidValueDeclarationWithCardinality');
    }).to.throw()
  });

  it('Neg16: should throw an error when a child class inherits a value but also defines a value', () => {
    expect(function(){
         importFixture('InvalidInheritanceValueOverride');
    }).to.throw()
  });

  it('Neg16: should throw an error when a child class value overrides a required binding', () => {
    expect(function(){
         importFixture('InvalidValueBindingOverride');
    }).to.throw()
  });  

  it('Neg17: should throw an error when a child class overrides a fixed code value', () => {
    expect(function(){
         importFixture('InvalidFixedCodeOverride');
    }).to.throw()
  });  

  it('Neg18: should throw an error when choice value is constrained without specifying which choice the constraint applies to', () => {
    expect(function(){
         importFixture('InvalidConstraintOnChoice');
    }).to.throw()
  });  

  it('Neg19: should throw an error when substituting a non-subclass for a field', () => {
    expect(function(){
         importFixture('InvalidSubstituteOnField');
    }).to.throw()
  });  

  it('Neg20: should throw an error when substituting a non-subclass for a field child', () => {
    expect(function(){
         importFixture('InvalidSubstituteOnFieldChild');
    }).to.throw()
  });  

  it('Neg21: should throw an error when a field declares a choice', () => {
    expect(function(){
         importFixture('InvalidDeclarationOfFieldChoice');
    }).to.throw()
  });  



// end of negative examples  
});


describe('#importConfig', () => {
  beforeEach(function() {
    err.clear();
  });

  it('Config1: should correctly import a basic configuration', () => {
    const configuration = importConfiguration('basicconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('TEST');
    expect(configuration.projectURL).to.eql('http://test.org');
    expect(configuration.fhirURL).to.eql('http://test.org/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'basic',
      'version': '1.2.3',
      'indexContent': 'basicindexcontent.html'
    });
    expect(configuration.publisher).to.eql('Test Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    }]);
  });

  it('Config2: should correctly generate missing fhir url from project url when fhir url is missing', () => {
    const configuration = importConfiguration('incompletefhirconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('TEST');
    expect(configuration.projectURL).to.eql('http://test.org');
    expect(configuration.fhirURL).to.eql('http://test.org/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'basic',
      'version': '1.2.3',
      'indexContent': 'basicindexcontent.html'
    });
    expect(configuration.publisher).to.eql('Test Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    }]);

  });

  it('Config3: should correctly import an incomplete configuration with partial default data', () => {
    const configuration = importConfiguration('incompleteconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('EXAMPLE');
    expect(configuration.projectURL).to.eql('http://example.com');
    expect(configuration.fhirURL).to.eql('http://example.com/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'example-npm-name',
      'version': '0.0.1',
      'indexContent': 'exampleIndexContent.html'
    });
    expect(configuration.publisher).to.eql('Example Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    }]);
  });

  it('Config4: should correctly import a configuration with missing npmName & version and add values', () => {
    const configuration = importConfiguration('incompleteigconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('TEST');
    expect(configuration.projectURL).to.eql('http://test.org');
    expect(configuration.fhirURL).to.eql('http://test.org/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'example-npm-name',
      'version': '0.0.1',
      'indexContent': 'basicindexcontent.html'
    });
    expect(configuration.publisher).to.eql('Test Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    }]);
  });

  it('Config5: should correctly translate deprecated properties', () => {
    const configuration = importConfiguration('deprecatedigconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('TEST');
    expect(configuration.projectURL).to.eql('http://test.org');
    expect(configuration.fhirURL).to.eql('http://test.org/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'example-npm-name',
      'version': '0.0.1',
      'indexContent': 'basicindexcontent.html',
      'includeLogicalModels': false,
      'includeModelDoc': false,
      'primarySelectionStrategy': {
        'strategy': 'hybrid',
        'primary': ['test'],
        'hideSupporting': true
      }
    });
    expect(configuration.publisher).to.eql('Test Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    }]);
  });

  it('Config6: should correctly throw error when file is not valid JSON', () => {
    const configuration = importConfiguration('invalidblankconfig', 1);
    expect(err.errors()[0].msg).to.contain('Invalid config file');
    expect(configuration).to.be.undefined;
  });

  it('Config7: should correctly create default configuration as config.json when no file exists', () => {
    // First ensure config.json doesn't exist (from previous run)
    const cfgPath = `${__dirname}/fixtures/config/emptyfolder/config.json`;
    if (fs.existsSync(cfgPath)) {
      fs.unlinkSync(cfgPath);
    }
    const configuration = importConfigurationFolder('emptyfolder');
    expect(fs.existsSync(cfgPath)).to.be.true;
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Example Project');
    expect(configuration.projectShorthand).to.eql('EXAMPLE');
    expect(configuration.projectURL).to.eql('http://example.com');
    expect(configuration.fhirURL).to.eql('http://example.com/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'example-npm-name',
      'version': '0.0.1',
      'indexContent': 'exampleIndexContent.html'
    });
    expect(configuration.publisher).to.eql('Example Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://example.com'
      }]
    }]);
  });
});

/* MK - cutting out CIMCORE tests because the examples are out of date, in Grammar 5. If we revive this, it should live in a separate file (e.g., cimcore-test.js).


describe('#importCimcoreFromFilePath', () => {
  it('Cimcore1: should be able to correctly import specifications instance and then export to identical cimcore', () => {
    const [importedConfigSpecifications, importedSpecifications] = importCimcoreFolder();

    //This is the cimcore produced from importedSpecs. Used for verifying fidelity
    const cimcoreSpecifications = convertSpecsToCimcore(importedConfigSpecifications, importedSpecifications);

    //All CIMCORE files are verified through string comparison. This is perhaps not ideal as they can still be
    //valid files if the same elemenets are outputted in a different order. However, this should not be a problem
    //for now, as the process that produced the original fixtures and the process that produces the unit test are
    //identical in their ordering of outputs. This change should be a considered update in the future.

    const origProjectJSON = importCimcoreProjectFile();
    expect(JSON.stringify(cimcoreSpecifications.projectInfo, null, 2)).to.eql(origProjectJSON);

    //meta namespace files
    for (const ns in cimcoreSpecifications.namespaces) { //namespace files
      const origNsJSON = importCimcoreNSFile(ns);
      expect(JSON.stringify(cimcoreSpecifications.namespaces[ns], null, 2)).to.eql(origNsJSON);
    }

    //data elements
    for (const de of cimcoreSpecifications.dataElements) { //namespace files
      const origDeJSON = importCimcoreDEFile(de.namespace, de.name);
      expect(JSON.stringify(de, null, 2)).to.eql(origDeJSON);
    }

    //valuesets
    for (const vs of cimcoreSpecifications.valueSets) {
      const origVsJSON = importCimcoreVSFile(vs.namespace, vs.name);
      expect(JSON.stringify(vs, null, 2)).to.eql(origVsJSON);
    }

    //mappings
    for (const mapping of [...cimcoreSpecifications.mappings]) {
      const origMapJSON = importCimcoreMapFile(mapping.namespace, mapping.name);
      expect(JSON.stringify(mapping, null, 2)).to.eql(origMapJSON);
    }

  });
});
*/

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

function expectConcept(concept, system, code, display) {
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

function importFixture(name, numExpectedErrors = 0) {
  const dependencies = importFromFilePath(`${__dirname}/fixtures/dataElement/_dependencies`);
  const specifications = importFromFilePath(`${__dirname}/fixtures/dataElement/${name}.txt`, null, dependencies);
  checkImportErrors(numExpectedErrors);
  return specifications;
}

function importFixtureFolder(name, numExpectedErrors = 0) {
  const dependencies = importFromFilePath(`${__dirname}/fixtures/dataElement/_dependencies`);
  const specifications = importFromFilePath(`${__dirname}/fixtures/dataElement/${name}`, null, dependencies);
  checkImportErrors(numExpectedErrors);
  return specifications;
}

function importConfiguration(name, numExpectedErrors = 0) {
  const configuration = importConfigFromFilePath(`${__dirname}/fixtures/config/${name}.txt`);
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function importConfigurationFolder(name, numExpectedErrors = 0) {
  const configuration = importConfigFromFilePath(`${__dirname}/fixtures/config/${name}`);
  checkImportErrors(numExpectedErrors);
  return configuration;
}

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

function checkImportErrors(numExpectedErrors = 0) {
  const errors = err.errors();
  const message = `Import Errors: ${errors.map(e => e.msg).join('; ')}`;
  expect(errors.length, message).to.equal(numExpectedErrors);
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
