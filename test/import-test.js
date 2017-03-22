const {expect} = require('chai');
const {importFromFilePath} = require('../index');
const {Version, DataElement, Value, RefValue, ChoiceValue, Identifier, PrimitiveIdentifier, Cardinality, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, TypeConstraint, CardConstraint} = require('shr-models');

describe('#importFromFilePath()', () => {
  it('should correctly import a namespace definition', () => {
    const {specifications, errors} = importFixture('Simple');
    expect(errors).to.eql([]);
    const ns = specifications.namespaces.find('shr.test');
    expect(ns.namespace).to.equal('shr.test');
    expect(ns.description).to.equal('The SHR test namespace');
  });

  it('should correctly import a simple entry', () => {
    const {specifications, errors} = importFixture('Simple');
    expect(errors).to.eql([]);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.grammarVersion).to.eql(new Version(4, 0));
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expect(simple.description).to.equal('It is a simple entry');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should correctly import a simple element', () => {
    const {specifications, errors} = importFixture('SimpleElement');
    expect(errors).to.eql([]);
    const simple = expectAndGetElement(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should correctly import a coded entry', () => {
    const {specifications, errors} = importFixture('Coded');
    expect(errors).to.eql([]);
    const coded = expectAndGetEntry(specifications, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expectNoConstraints(coded.value);
  });

  it('should correctly import an entry with a code from a valueset', () => {
    const {specifications, errors} = importFixture('CodedFromValueSet');
    expect(errors).to.eql([]);
    const coded = expectAndGetEntry(specifications, 'shr.test', 'CodedFromValueSet');
    expect(coded.description).to.equal('It is a coded entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import an entry with a code from a valueset using a path', () => {
    const {specifications, errors} = importFixture('CodedFromPathValueSet');
    expect(errors).to.eql([]);
    const coded = expectAndGetEntry(specifications, 'shr.test', 'CodedFromPathValueSet');
    expect(coded.description).to.equal('It is a coded entry that uses a valueset with a path');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import an entry with a code from a valueset using a default path', () => {
    const {specifications, errors} = importFixture('CodedFromDefaultPathValueSet');
    expect(errors).to.eql([]);
    const coded = expectAndGetEntry(specifications, 'shr.test', 'CodedFromDefaultPathValueSet');
    expect(coded.description).to.equal('It is a coded entry that uses a valueset with a default path');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import an entry with a Coding from a valueset', () => {
    const {specifications, errors} = importFixtureFolder('codingFromValueSet');
    expect(errors).to.eql([]);
    const codingFromVS = expectAndGetEntry(specifications, 'shr.test', 'CodingFromValueSet');
    expect(codingFromVS.description).to.equal('It is a coded entry with Coding');
    expectCardOne(codingFromVS.value);
    expectValue(codingFromVS.value, 'shr.core', 'Coding');
    expect(codingFromVS.value.constraints).to.have.length(1);
    expect(codingFromVS.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(codingFromVS.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import an entry with a CodeableConcept from a valueset', () => {
    const {specifications, errors} = importFixtureFolder('codeableConceptFromValueSet');
    expect(errors).to.eql([]);
    const codingFromVS = expectAndGetEntry(specifications, 'shr.test', 'CodeableConceptFromValueSet');
    expect(codingFromVS.description).to.equal('It is a coded entry with CodeableConcept');
    expectCardOne(codingFromVS.value);
    expectValue(codingFromVS.value, 'shr.core', 'CodeableConcept');
    expect(codingFromVS.value.constraints).to.have.length(1);
    expect(codingFromVS.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(codingFromVS.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import a reference to simple element', () => {
    const {specifications, errors} = importFixture('SimpleReference');
    expect(errors).to.eql([]);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'SimpleReference');
    expect(simple.description).to.equal('It is a reference to a simple element');
    expectCardOne(simple.value);
    expectRefValue(simple.value, 'shr.test', 'Simple');
    expectNoConstraints(simple.value);
  });

  it('should correctly import an entry with a list value', () => {
    const {specifications, errors} = importFixture('MultiString');
    expect(errors).to.eql([]);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'MultiString');
    expect(simple.description).to.equal('It is a multi-string entry');
    expectMinMax(simple.value, 1);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should correctly import a choice entry', () => {
    const {specifications, errors} = importFixtureFolder('choice');
    expect(errors).to.eql([]);
    const choice = expectAndGetEntry(specifications, 'shr.test', 'Choice');
    expect(choice.description).to.equal('It is an entry with a choice');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 3);
    expectChoiceOption(choice.value, 0, 'primitive', 'date');
    expectChoiceOption(choice.value, 1, 'other.ns', 'Period');
    expectChoiceOption(choice.value, 2, 'shr.test', 'Simple');
    expectNoConstraints(choice.value);
    expectNoConstraints(choice.value.options);
  });

  /* Not currently supported by grammar, but maybe it should be?
  it('should correctly import a complex choice entry', () => {
    const {specifications, errors} = importFixtureFolder('complexChoice');
    expect(errors).to.eql([]);
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const choice = expectAndGetEntry(ns, 0, 'ComplexChoice');
    expect(choice.description).to.equal('It is an entry with a complex choice');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 2);
    const option0 = choice.value.options[0];
    expectMinMax(option0, 1, 2);
    expectChoiceValue(option0, 2);
    expectChoiceOption(option0, 0, 'primitive', 'date');
    expectChoiceOption(option0, 1, 'other.ns', 'Period');
    const option1 = choice.value.options[1];
    expectMinMax(option1, 3, 4);
    expectValue(option1, 'shr.test', 'Simple');
  });
  */

  it('should correctly import a group entry with a code value', () => {
    const {specifications, errors} = importFixtureFolder('group');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications,'shr.test', 'SimpleGroup');
    expect(group.concepts).to.have.length(3);
    expectConcept(group.concepts[0], 'http://foo.org', 'bar');
    expectConcept(group.concepts[1], 'http://boo.org', 'far');
    expectConcept(group.concepts[2], 'http://zoo.org', 'bear');
    expect(group.description).to.equal('It is a group entry with a code value');
    expectCardOne(group.value);
    expectPrimitiveValue(group.value, 'code');
    expectNoConstraints(group.value);
    expect(group.fields).to.have.length(4);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Coded', 0);
    expectField(group, 2, 'shr.test', 'Simple2', 1);
    expectField(group, 3, 'other.ns', 'Thing', 1, 1);
    expectNoConstraints(group.fields);
  });

  it('should correctly import a group element without a value', () => {
    const {specifications, errors} = importFixtureFolder('groupElement');
    expect(errors).to.eql([]);
    const group = expectAndGetElement(specifications, 'shr.test', 'SimpleGroup');
    expect(group.concepts).to.have.length(3);
    expectConcept(group.concepts[0], 'http://foo.org', 'bar');
    expectConcept(group.concepts[1], 'http://boo.org', 'far');
    expectConcept(group.concepts[2], 'http://zoo.org', 'bear');
    expect(group.description).to.equal('It is a group element');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(4);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Coded', 0);
    expectField(group, 2, 'shr.test', 'Simple2', 1);
    expectField(group, 3, 'other.ns', 'Thing', 1, 1);
    expectNoConstraints(group.fields);
  });

  // Constraints

  it('should correctly import an entry with a valueset constraint on the value', () => {
    const {specifications, errors} = importFixture('VSConstraintOnValue');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a valueset constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    const cst = entry.value.constraints[0];
    expect(cst).to.be.instanceof(ValueSetConstraint);
    expect(cst.path).to.eql([pid('code')]);
    expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
  });

  it('should correctly import an entry with a valueset constraint on the value\' child', () => {
    const {specifications, errors} = importFixture('VSConstraintOnValueChild');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a valueset constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'Complex');
    expect(entry.value.constraints).to.have.length(2);
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
    expect(entry.value.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[1].path).to.eql([id('shr.test', 'CodedFromValueSet'), pid('code')]);
    expect(entry.value.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
    expect(entry.fields).to.be.empty;
  });

  it('should correctly import a group with a valueset constraint on a field', () => {
    const {specifications, errors} = importFixture('VSConstraintOnField');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnField');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a valueset constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'shr.test', 'CodedFromValueSet', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(1);
    expect(cmplx.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(cmplx.constraints[0].path).to.eql([pid('code')]);
    expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
  });

  it('should correctly import a group with a valueset constraint on a field\'s child', () => {
    const {specifications, errors} = importFixture('VSConstraintOnFieldChild');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a valueset constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Complex', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(2);
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(cmplx.constraints[1].path).to.eql([id('shr.test', 'CodedFromValueSet'), pid('code')]);
    expect(cmplx.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
  });

  it('should correctly import an entry with a code constraint on the value', () => {
    const {specifications, errors} = importFixtureFolder('codeConstraints');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a code constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Coding');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with a code constraint on the value\'s child', () => {
    const {specifications, errors} = importFixtureFolder('codeConstraints');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a code constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','Coding')]);
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import a group with a code constraint on a field', () => {
    const {specifications, errors} = importFixtureFolder('codeConstraints');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnField');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a code constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'shr.core', 'Coding', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.be.empty;
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import a group with a code constraint on a field\'s child', () => {
    const {specifications, errors} = importFixtureFolder('codeConstraints');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a code constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core','Coding')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with a system-less code constraint on the value', () => {
    const {specifications, errors} = importFixtureFolder('codeConstraints');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'SystemlessCodeConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a system-less code constraint on the value');
    expect(entry.basedOn).to.have.length(1);
    expect(entry.basedOn[0].namespace).to.equal('shr.test');
    expect(entry.basedOn[0].name).to.equal('CodedFromValueSet');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Coding');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, null, 'bar');
  });

  // NOTE: Quantity with unit constraints are just syntactic sugar for a code constraint!
  it('should correctly import an entry with a unit constraint on the value', () => {
    const {specifications, errors} = importFixtureFolder('unitConstraints');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a unit constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Quantity');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','Units'), id('shr.core','Coding')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import an entry with a unit constraint on the value\'s child', () => {
    const {specifications, errors} = importFixtureFolder('unitConstraints');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a unit constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'Volume');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'Coding')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import a group with a unit constraint on a field', () => {
    const {specifications, errors} = importFixtureFolder('unitConstraints');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnField');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a unit constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'shr.core', 'Quantity', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core','Units'), id('shr.core','Coding')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import a group with a unit constraint on a field\'s child', () => {
    const {specifications, errors} = importFixtureFolder('unitConstraints');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with unit constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Volume', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'Coding')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import an entry with an includes code constraint on the value', () => {
    const {specifications, errors} = importFixtureFolder('includesCodeConstraints');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'IncludesCodeConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with an includes code constraint on the value');
    expectMinMax(entry.value, 1);
    expectValue(entry.value, 'shr.core', 'Coding');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with an includes code constraint (using CodeableConcept) on the value', () => {
    const {specifications, errors} = importFixtureFolder('includesCodeConstraintsUsingCodeableConcept');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'IncludesCodeConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with an includes code constraint on the value');
    expectMinMax(entry.value, 1);
    expectValue(entry.value, 'shr.core', 'CodeableConcept');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with an includes code constraint on the value\'s child', () => {
    const {specifications, errors} = importFixtureFolder('includesCodeConstraints');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'IncludesCodeConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with an includes code constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'MultiCodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','Coding')]);
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import a group with an includes code constraint on a field', () => {
    const {specifications, errors} = importFixtureFolder('includesCodeConstraints');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'IncludesCodeConstraintOnField');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with an includes code constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'shr.core', 'Coding', 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[0].path).to.be.empty;
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import a group with an includes code constraint on a field\'s child', () => {
    const {specifications, errors} = importFixtureFolder('includesCodeConstraints');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'IncludesCodeConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with an includes code constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'MultiCodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core','Coding')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with a boolean constraint on the value', () => {
    const {specifications, errors} = importFixture('BooleanConstraints');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'BooleanConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a boolean constraint on the value');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].value).to.be.true;
  });

  it('should correctly import an entry with a boolean constraint on the value\'s child', () => {
    const {specifications, errors} = importFixture('BooleanConstraints');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'BooleanConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a boolean constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'SimpleBoolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('boolean')]);
    expect(entry.value.constraints[0].value).to.be.false;
  });

  it('should correctly import a group with a boolean constraint on a field\'s child', () => {
    const {specifications, errors} = importFixture('BooleanConstraints');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'BooleanConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a boolean constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'SimpleBoolean', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(el.constraints[0].path).to.eql([pid('boolean')]);
    expect(el.constraints[0].value).to.be.true;
  });

  it('should correctly import an entry based on an element and specializing the value', () => {
    const {specifications, errors} = importFixture('TypeConstraints');
    expect(errors).to.eql([]);
    const basedOn = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnValue');
    expect(basedOn.basedOn).to.have.length(1);
    expect(basedOn.basedOn[0].namespace).to.equal('shr.test');
    expect(basedOn.basedOn[0].name).to.equal('SimpleBase');
    expect(basedOn.description).to.equal('It is a simple element based on SimpleBase and specializing the value');
    expectCardOne(basedOn.value);
    expectValue(basedOn.value, 'shr.test', 'Simple');
    expect(basedOn.value.constraints).to.have.length(1);
    expect(basedOn.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(basedOn.value.constraints[0].path).to.be.empty;
    expect(basedOn.value.constraints[0].onValue).to.be.false;
    expectIdentifier(basedOn.value.constraints[0].isA, 'shr.test', 'Simple2');
  });

  it('should correctly import an entry based on an element and specializing the value\'s child', () => {
    const {specifications, errors} = importFixture('TypeConstraints');
    expect(errors).to.eql([]);
    const basedOn = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnValueChild');
    expect(basedOn.basedOn).to.have.length(1);
    expectIdentifier(basedOn.basedOn[0], 'shr.test', 'ComplexBase');
    expect(basedOn.description).to.equal('It is a simple element based on SimpleBase and specializing the value\'s child');
    expectCardOne(basedOn.value);
    expectValue(basedOn.value, 'shr.test', 'Complex');
    expect(basedOn.value.constraints).to.have.length(2);
    expect(basedOn.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(basedOn.value.constraints[0].path).to.eql([id('shr.test', 'Simple')]);
    expect(basedOn.value.constraints[0].card.min).to.equal(1);
    expect(basedOn.value.constraints[0].card.max).to.equal(1);
    expect(basedOn.value.constraints[1]).to.be.instanceof(TypeConstraint);
    expect(basedOn.value.constraints[1].path).to.eql([id('shr.test', 'Simple')]);
    expect(basedOn.value.constraints[1].onValue).to.be.false;
    expectIdentifier(basedOn.value.constraints[1].isA, 'shr.test', 'Simple2');
  });

  it('should correctly import a group with a type constraint on a field', () => {
    const {specifications, errors} = importFixture('TypeConstraints');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'shr.test', 'GroupBase');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a type constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.test', 'Simple');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, 'shr.test', 'Simple2');
  });

  it('should correctly import a group with a type constraint on a field\'s child', () => {
    const {specifications, errors} = importFixture('TypeConstraints');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a type constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Complex', 0, 1);
    const cmplx = group.fields[1];
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

  it('should correctly import a group with a type constraint on a field\'s value', () => {
    const {specifications, errors} = importFixture('TypeConstraints');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnFieldValue');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'shr.test', 'Group2');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a type constraint on a field\'s value');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.test', 'HasSimpleValue');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.true;
    expectIdentifier(group.fields[0].constraints[0].isA, 'shr.test', 'Simple2');
  });

  it('should correctly import an entry with a card constraint on the value\'s child', () => {
    const {specifications, errors} = importFixture('CardConstraints');
    expect(errors).to.eql([]);
    const entry = expectAndGetEntry(specifications, 'shr.test', 'CardConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a card constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'Simple');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('string')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
  });

  it('should correctly import a group with a card constraint on a field\'s child', () => {
    const {specifications, errors} = importFixture('CardConstraints');
    expect(errors).to.eql([]);
    const group = expectAndGetEntry(specifications, 'shr.test', 'CardConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a card constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Simple2', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CardConstraint);
    expect(el.constraints[0].path).to.eql([pid('string')]);
    expect(el.constraints[0].card.min).to.equal(1);
    expect(el.constraints[0].card.max).to.equal(2);
  });

  it('should correctly import an entry based on an element', () => {
    const {specifications, errors} = importFixture('BasedOn');
    expect(errors).to.eql([]);
    const basedOn = expectAndGetEntry(specifications, 'shr.test', 'SimpleBasedOn');
    expect(basedOn.basedOn).to.have.length(1);
    expect(basedOn.basedOn[0].namespace).to.equal('shr.test');
    expect(basedOn.basedOn[0].name).to.equal('SimpleBase');
    expect(basedOn.concepts).to.have.length(1);
    expectConcept(basedOn.concepts[0], 'http://foo.org', 'bar');
    expect(basedOn.description).to.equal('It is a simple definition based on SimpleBase');
    expectCardOne(basedOn.value);
    expectValue(basedOn.value, 'shr.test', 'Simple');
    expectNoConstraints(basedOn.value);
  });

  it('should correctly import multiple elements in a single namespace', () => {
    const {specifications, errors} = importFixture('MultipleElementNamespace');
    expect(errors).to.eql([]);

    const simple = expectAndGetEntry(specifications, 'shr.test', 'SimpleDate');
    expect(simple.description).to.equal('It is a simple date entry');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'date');
    expectNoConstraints(simple.value);

    const coded = expectAndGetElement(specifications, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded element');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly resolve URL, URN, and URN OID vocabularies', () => {
    const {specifications, errors} = importFixture('Vocabularies');
    expect(errors).to.eql([]);

    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(3);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expectConcept(simple.concepts[1], 'urn:iso:std:iso:4217', 'baz', 'Foobaz');
    expectConcept(simple.concepts[2], 'urn:oid:2.16.840.1.114222.4.11.826', 'bam', 'Foobam');
  });

  it('should correctly resolve elements and vocabularies from other namespaces', () => {
    const {specifications, errors} = importFixtureFolder('uses');
    expect(errors).to.eql([]);

    const one = expectAndGetEntry(specifications, 'shr.test.one', 'One');
    expect(one.concepts).to.have.length(2);
    expectConcept(one.concepts[0], 'http://foo.org', 'bar');
    expectConcept(one.concepts[1], 'http://moo.org', 'car');
    expect(one.description).to.equal('It is an entry that uses other namespaces');
    expectCardOne(one.value);
    expectValue(one.value, 'shr.test.two', 'Two');
    expectNoConstraints(one.value);

    const two = expectAndGetEntry(specifications, 'shr.test.two', 'Two');
    expect(two.concepts).to.have.length(1);
    expectConcept(two.concepts[0], 'http://zoo.org', 'bear');
    expect(two.description).to.equal('It is an entry that uses other namespaces too');
    expectCardOne(two.value);
    expectPrimitiveValue(two.value, 'string');
    expectNoConstraints(two.value);

    expect(specifications.dataElements.namespaces).not.to.contain('shr.test.three');
  });

  it('should return errors when there are invalid vocabulary references', () => {
    const {specifications, errors} = importFixture('InvalidVocabularyReference');
    expect(errors).has.length(1);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'ZOO', 'bear'); // Defaults to vocabulary alias
    expect(simple.description).to.equal('It is a simple entry with invalid vocab');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should return errors when there are invalid element references', () => {
    const {specifications, errors} = importFixture('InvalidElementReference');
    expect(errors).has.length(1);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid element reference');
    expectCardOne(simple.value);
    expectValue(simple.value, 'unknown', 'Complex');
    expectNoConstraints(simple.value);
  });

  it('should return errors when there are invalid fully qualified element references', () => {
    const {specifications, errors} = importFixture('InvalidFQElementReference');
    expect(errors).has.length(1);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid fully qualified element reference');
    expectCardOne(simple.value);
    expectValue(simple.value, 'other.ns', 'Complex');
    expectNoConstraints(simple.value);
  });

  it('should return errors when there are ambiguous element references', () => {
    const {specifications, errors} = importFixtureFolder('ambiguousResolution');
    expect(errors).has.length(1);
    const amb = expectAndGetEntry(specifications, 'shr.test.one', 'Ambiguous');
    expect(amb.concepts).to.be.empty;
    expect(amb.description).to.equal('It is an entry that uses an ambiguous reference');
    expectCardOne(amb.value);
    expectValue(amb.value, 'shr.test.two', 'Foo'); // Defaults to first encountered namespace
    expectNoConstraints(amb.value);
  });

  it('should return errors when there are conflicting vocab references', () => {
    const {specifications, errors} = importFixtureFolder('conflictingVocab');
    expect(errors).to.have.length(1);
    expect(errors[0]).to.contain('FOO');
    expect(errors[0]).to.not.contain('MOO');

    const conflicting = expectAndGetEntry(specifications, 'shr.test.one', 'Conflicting');
    expect(conflicting.concepts).to.have.length(2);
    expectConcept(conflicting.concepts[0], 'http://foo.org', 'bar'); // Default to the first encountered vocab
    expectConcept(conflicting.concepts[1], 'http://moo.org', 'car');
    expect(conflicting.description).to.equal('It is an entry that uses a conflicting vocab reference');
    expectCardOne(conflicting.value);
    expectPrimitiveValue(conflicting.value, 'string');
    expectNoConstraints(conflicting.value);
  });
});

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
  if (typeof expectedMin !== 'undefined') {
    expect(card).to.be.instanceof(Cardinality);
    expect(card.min).to.equal(expectedMin);
    if (typeof card.max != 'undefined') {
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

function importFixture(name) {
  const {specifications, errors} = importFromFilePath(`${__dirname}/fixtures/dataElement/_dependencies`);
  if (errors.length > 0) {
    console.error("ERRORS", errors);
  }
  return importFromFilePath(`${__dirname}/fixtures/dataElement/${name}.txt`, specifications);
}

function importFixtureFolder(name) {
  const {specifications, errors} = importFromFilePath(`${__dirname}/fixtures/dataElement/_dependencies`);
  if (errors.length > 0) {
    console.error("ERRORS", errors);
  }
  return importFromFilePath(`${__dirname}/fixtures/dataElement/${name}`, specifications);
}