const fs = require('fs');
const {expect} = require('chai');
const {setLogger} = require('../index');
const {importFixture, importFixtureFolder } = require('../test/import-helper');
const err = require('shr-test-helpers/errors');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());

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

  it('Neg22: should throw an error when a class specifies its parent as TBD', () => {
    expect(function(){
         importFixture('InvalidTBDParent');
    }).to.throw()
  });  

// end of negative examples  
});


