const {expect} = require('chai');
const {Preprocessor, setLogger} = require('../lib/preprocessor');
const err = require('shr-test-helpers/errors');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());

describe('#preprocessFile', () => {
  beforeEach(function() {
    err.clear();
  });

  it('Prep1: should correctly preprocess a simple entry definition', () => {
    const data = importFixture('SimpleEntry');
    expect(data._paths).to.eql({});
    expect(data._vocabularies).to.eql({
      'shr.test': { 'FOO': 'http://foo.org' }
    });
    expect(data._definitions).to.eql({
      'shr.test': { 'SimpleEntry': true }
    });
  });

  it('Prep2: should correctly preprocess a simple abstract element definition', () => {
    const data = importFixture('SimpleAbstractElement');
    expect(data._paths).to.eql({});
    expect(data._vocabularies).to.eql({
      'shr.test': { 'FOO': 'http://foo.org' }
    });
    expect(data._definitions).to.eql({
      'shr.test': { 'Simple': true }
    });
  });

  it('Prep3: should correctly preprocess a simple element definition', () => {
    const data = importFixture('SimpleElement');
    expect(data._paths).to.eql({});
    expect(data._vocabularies).to.eql({
      'shr.test': { 'FOO': 'http://foo.org' }
    });
    expect(data._definitions).to.eql({
      'shr.test': { 'Simple': true }
    });
  });

  it('Prep4: should correctly preprocess a path definition', () => {
    const data = importFixture('CodedFromPathValueSet');
    expect(data._paths).to.eql({
      'shr.test': { 'TESTVS': 'http://standardhealthrecord.org/test/vs' }
    });
    expect(data._vocabularies).to.eql({});
    expect(data._definitions).to.eql({
      'shr.test': { 'CodedFromPathValueSet': true }
    });
  });

  it('Prep5: should correctly preprocess multiple codesystem definitions in a single namespace', () => {
    const data = importFixture('CodeSystems');
    expect(data._paths).to.eql({});
    expect(data._vocabularies).to.eql({
      'shr.test': {
        'FOO': 'http://foo.org',
        'BOO': 'http://boo.org',
        'ZOO': 'http://zoo.org'
      }
    });
    expect(data._definitions).to.eql({
      'shr.test': {
        'SimpleGroup': true,
        'Simple': true,
        'Coded': true,
        'Simple2': true,
      }
    });
  });
});

function importFixture(name) {
  const preprocessor = new Preprocessor();
  preprocessor.preprocessFile(`${__dirname}/fixtures/dataElement/${name}.txt`);
  expect(err.hasErrors()).to.be.false;
  return preprocessor.data;
}