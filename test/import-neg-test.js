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

  it('Neg1: should produce an error message (not a traceback) when a keyword is not followed by a colon', () => {
    importFixture('InvalidSyntaxMissingColon', true);
  });

  it('Neg2: should produce an error message (not a traceback) when there is an invalid vocabulary reference', () => {
    importFixture('InvalidVocabularyReference', true);
  });

  it('Neg3: should produce an error message (not a traceback) when there is an invalid element reference', () => {
    importFixture('InvalidElementReference', true);
  });

  it('Neg4: should produce an error message (not a traceback) when there is a duplicate element name', () => {
    importFixture('InvalidDuplicateElementDefinition', true);
   });

  it('Neg5: should produce an error message (not a traceback) when a class defines a property twice.', () => {
    importFixture('InvalidDuplicatePropertyDefinition', true);
  });

  it('Neg6: should produce an error message (not a traceback) if Grammar is not the first line of the file.', () => {
    importFixture('InvalidMisplacedGrammarDeclaration', true);
  });

  it('Neg7: should produce an error message (not a traceback) if there is no cardinality specified on a property.', () => {
    importFixture('InvalidPropertyNoCardinality', true);
  });

  it('Neg8: should produce an error message (not a traceback) if the file lacks a namespace declaration.', () => {
    importFixture('InvalidNoNamespace', true);
  });

  it('Neg9: should produce an error message (not a traceback) if a child class defines a property it already inherited.', () => {
    importFixture('InvalidInheritedFieldDuplicatedInChild', true);
  });

  it('Neg10: should produce an error message (not a traceback) when there is an invalid fully qualified element reference', () => {
    importFixture('InvalidFQElementReference', true);
  });

  it('Neg11: should produce an error message (not a traceback) when there is an ambiguous element reference', () => {
    // MK: I'm not sure that just loading the folder should trigger the checks for ambiguous elements
    importFixtureFolder('invalidAmbiguousResolution', true);
  });

  it('Neg12: should produce an error message (not a traceback) when there are conflicing code system declarations', () => {
    // MK: I'm not sure that just loading the folder should trigger the checks for ambiguous elements
    importFixtureFolder('invalidConflictingVocab', true);
  });

  it('Neg13: should produce an error message (not a traceback) when a code lacks a code system', () => {
    importFixture('InvalidSystemlessCode', true);
  });

  it('Neg14: should produce an error message (not a traceback) when a value is missing a value element', () => {
    importFixture('InvalidValueDeclarationEmpty', true);
  });

  it('Neg15: should produce an error message (not a traceback) when a value declares cardinality', () => {
    importFixture('InvalidValueDeclarationWithCardinality', true);
  });

  it('Neg16: should produce an error message (not a traceback) when a child class inherits a value but also defines a value', () => {
    importFixture('InvalidInheritanceValueOverride', true);
  });

  it('Neg16: should produce an error message (not a traceback) when a child class value overrides a required binding', () => {
    importFixture('InvalidValueBindingOverride', true);
  });  

  it('Neg17: should produce an error message (not a traceback) when a child class overrides a fixed code value', () => {
    importFixture('InvalidValueFixedCodeOverride', true);
  });  

  it('Neg18: should produce an error message (not a traceback) when choice value is constrained without specifying which choice the constraint applies to', () => {
    importFixture('InvalidConstraintOnChoice', true);
  });  

  it('Neg19: should produce an error message (not a traceback) when substituting a non-subclass for a field', () => {
    importFixture('InvalidSubstituteOnField', true);
  });  

  it('Neg20: should produce an error message (not a traceback) when substituting a non-subclass for a field child', () => {
    importFixture('InvalidSubstituteOnFieldChild', true);
  });  

  it('Neg21: should produce an error message (not a traceback) when a field declares a choice', () => {
    importFixture('InvalidDeclarationOfFieldChoice', true);
  });  

  it('Neg22: should produce an error message (not a traceback) when a class specifies its parent as TBD', () => {
    importFixture('InvalidTBDParent', true);
  });  

  it('Neg23: should produce an error message (not a traceback) when restricting a choice using the only keyword and substituting a class simultaneously', () => {
    importFixture('InvalidSubstituteOnFieldUsingOnly', true);
  });  

// end of negative examples  
});


