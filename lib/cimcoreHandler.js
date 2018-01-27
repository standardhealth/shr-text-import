const bunyan = require('bunyan');
const {FileStream, CommonTokenStream} = require('antlr4/index');
const {Version} = require('shr-models');

const VERSION = new Version(5, 2, 3);
const GRAMMAR_VERSION = new Version(5, 0, 1);

var rootLogger = bunyan.createLogger({name: 'shr-text-import'});

var logger = rootLogger;

function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

class CIMCOREHandler {

  constructor(configuration = [], files) {
    for (file of files) {
      console.log(file);
    }
  }

}

class NamespaceConstructor {

  constructor(namespace) {
    
  }

}

class DataElementConstructor {

  constructor(de) {

  }

  constructBasicElement(de) {

  }

  constructValue() {

  }

  constructFields() {

  }

  constructConstraints() {

  }

  constructBasedOn() {

  }
}   

class ValueSetConstructor {

  constructor(vs) {

  }

}

class MappingsConstructor {
    
  constructor(map) {
  
  }
  
}
