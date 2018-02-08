const fs = require('fs');
const path = require('path');
const bunyan = require('bunyan');
const mkdirp = require('mkdirp');

const {Specifications, MODELS_INFO} = require('shr-models');
const {Preprocessor, VERSION, GRAMMAR_VERSION} = require('./preprocessor');
const {DataElementImporter} = require('./dataElementListener');
const {ValueSetImporter} = require('./valueSetListener');
const {MappingImporter} = require('./mappingListener');
const {CimcoreImporter, CimplExporter} = require('./cimcoreHandler');

var logger = bunyan.createLogger({name: 'shr-text-import'});
function setLogger(bunyanLogger) {
  logger = bunyanLogger;
  require('./preprocessor').setLogger(logger);
  require('./dataElementListener').setLogger(logger);
  require('./valueSetListener').setLogger(logger);
  require('./mappingListener').setLogger(logger);
}

function importFromFilePath(filePath, configuration=[], specifications = new Specifications()) {
  const filesByType = processPath(filePath);
  const preprocessor = new Preprocessor(configuration);

  for (const file of filesByType.dataElement) {
    preprocessor.preprocessFile(file);
  }
  const valueSetimporter = new ValueSetImporter(specifications, configuration);
  for (const file of filesByType.valueSet) {
    valueSetimporter.importFile(file);
  }
  const importer = new DataElementImporter(preprocessor.data, specifications);
  for (const file of filesByType.dataElement) {
    importer.importFile(file);
  }
  const mappingImporter = new MappingImporter(specifications);
  for (const file of filesByType.map) {
    mappingImporter.importFile(file);
  }
  return specifications;
}

function importConfigFromFilePath(filePath) {
  const filesByType = processPath(filePath);
  const preprocessor = new Preprocessor();

  let defaultConfigPath = path.join(__dirname, 'config-template', '/default_config.json');
  let defaultConfigFile = fs.readFileSync(defaultConfigPath, 'utf8');

  let configuration;
  if (filesByType.config.length > 0) {
    configuration = preprocessor.preprocessConfig(defaultConfigFile, filesByType.config[0]);
  } else {
    configuration = preprocessor.preprocessConfig(defaultConfigFile);
    fs.writeFileSync(filePath + '/config.json', defaultConfigFile, 'utf8');
  }

  return configuration;
}

function importCIMCOREFromFilePath(filePath, expSpecs) {
  const handler = new CimcoreImporter();
  handler.readFiles(filePath + '/cimcore', expSpecs);

  let e = handler.deConstructor.elements;
  const exporter = new CimplExporter();
  function findOrigDef(el) {
    const ns = el.identifier.namespace.split('.').join('_');
    const file = fs.readFileSync(filePath + '/' + ns + '.txt', 'utf8').split('\n');
    let abstract = el.isAbstract;
    let entry = el.isEntry;
    for (line of file) {
      if (line.match(new RegExp(`\\s*${(abstract) ? 'Abstract' : (entry) ? 'Entry' : ''}\\s*Element:\\s*${el.identifier.name}\\s*$`))) {
  
        let i = file.indexOf(line);
        let j = i;
        while (j < file.length - 1) {
          let stripped = file[j].replace(/\s/g, '');
          if (stripped.length == 0) {
            return file.slice(i, j).join('\n');
          }
          j++;
        }
      } else {
        continue;
      }
    }
  }
  e.forEach(element => {
    console.log('------------------------------------------------------')
    console.log('\n(original)\n')
    console.log(findOrigDef(expSpecs.dataElements.all.find(el => el.identifier.name == element.identifier.name)));
    console.log('\n(exported)\n');
    console.log(exporter.deFormatter.formatDataElementOutput(element)); 
    console.log();
  });

// let v = handler.vsConstructor.valuesets;
// let m = handler.mapConstructor.mappings;
// let n = handler.nsConstructor.namespaces;

//   for (const de of handler.deConstructor.elements) {
//     let namespace = de.identifier.namespace.replace(/\./, '-');
//     let fqn = de.identifier.fqn.replace(/\./g, '-');
//     let out = Object.assign({ 'fileType': 'DataElement' }, de.toJSON());
    
//     const hierarchyPath = `${filePath}/cimcoreCompare/${namespace}/${fqn}.json`;
//     mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
//     fs.writeFileSync(hierarchyPath, JSON.stringify(out, null, '  '));
//   }
//   //valuesets
//   for (const vs of handler.vsConstructor.valuesets) {
//     let namespace = vs.identifier.namespace.replace(/\./, '-');
//     let name = vs.identifier.name.replace(/\./g, '-');;
//     let out = Object.assign({ 'fileType': 'ValueSet' }, vs.toJSON());
    
//     const hierarchyPath = `${filePath}/cimcoreCompare/${namespace}/valuesets/${name}.json`;
//     mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
//     fs.writeFileSync(hierarchyPath, JSON.stringify(out, null, '  '));
//   }
//   //mappings
//   for (const mapping of handler.mapConstructor.mappings) {
//     let namespace = mapping.identifier.namespace.replace(/\./, '-');
//     let name = mapping.identifier.name;
//     let out = Object.assign({ 'fileType': 'Mapping' }, mapping.toJSON());

//     const hierarchyPath = `${filePath}/cimcoreCompare/${namespace}/mappings/${name}-mapping.json`;
//     mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
//     fs.writeFileSync(hierarchyPath, JSON.stringify(out, null, '  '));
//   }
//   //meta namespace files
//   for (const ns of handler.nsConstructor.namespaces) { //namespace files
//     let namespace = ns.namespace.replace(/\./, '-');
//     let out = Object.assign({ 'fileType': 'Namespace' }, ns.toJSON());

//     const hierarchyPath = `${filePath}/cimcoreCompare/${namespace}/${namespace}.json`;
//     mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
//     fs.writeFileSync(hierarchyPath, JSON.stringify(out, null, '  '));
//   }  



  //const filesByType = processCIMCOREPath(filePath + '/cimcore');

  // let specs;
  // if (filesByType.config.length > 0) {
  //   specs = preprocessor.preprocessCIMCORE();
  // } else {
  //   // configuration = preprocessor.preprocessConfig(defaultConfigFile);
  //   // fs.writeFileSync(filePath + '/config.json', defaultConfigFile, 'utf8');
  // }

  // return specs;
 }

function processPath(filePath, filesByType = new FilesByType()) {
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    const files = fs.readdirSync(filePath);
    for (const file of files) {
      processPath(path.join(filePath, file), filesByType);
    }
  } else {
    filesByType.add(filePath);
  }

  return filesByType;
}

function processCIMCOREPath(filePath, filesByType = new CIMCOREFilesByType()) {
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    const files = fs.readdirSync(filePath);
    for (const file of files) {
      processCIMCOREPath(path.join(filePath, file), filesByType);
    }
  } else {
    filesByType.add(filePath);
  }

  return filesByType;
}

class FilesByType {
  constructor() {
    this._contentProfile = [];
    this._dataElement = [];
    this._map = [];
    this._valueSet = [];
    this._config = [];
  }

  get contentProfile() { return this._contentProfile; }
  get dataElement() { return this._dataElement; }
  get map() { return this._map; }
  get valueSet() { return this._valueSet; }
  get config() { return this._config; }

  add(file) {
    switch (this.detectType(file)) {
    case 'DataElement':
      this._dataElement.push(file);
      break;
    case 'Map':
      this._map.push(file);
      break;
    case 'ValueSet':
      this._valueSet.push(file);
      break;
    case 'ContentProfile':
      this._contentProfile.push(file);
      break;
    case 'Config':
      this._config.push(file);
      break;
    }
  }

  detectType(file) {
    if (!file.endsWith('.txt') && !file.endsWith('.shr') && !file.endsWith('config.json')) {
      return;  // only support *.txt or *.shr or .json coniguration files
    }
    const re = /^\s*Grammar:\s+([^\s]+)/;
    const lines = fs.readFileSync(file, 'utf-8').split('\n');
    for (const l of lines) {
      const match = l.match(re);
      if (match != null && match.length >= 2) {
        return match[1];
      } else if (file.endsWith('config.txt') || file.endsWith('config.json')) {
        return 'Config';
      }
    }
  }
}

class CIMCOREFilesByType {
  constructor() {
    this._projectMetaData;
    this._dataElement = [];
    this._map = [];
    this._valueSet = [];
    this._namespace = [];
  }

  get projectMetaData() { return this._projectMetaData; }
  get dataElement() { return this._dataElement; }
  get map() { return this._map; }
  get valueSet() { return this._valueSet; }
  get namespace() { return this._namespace; }

  add(file) {
    switch (this.detectType(file)) {
    case 'DataElement':
      this._dataElement.push(file);
      break;
    case 'Map':
      this._map.push(file);
      break;
    case 'ValueSet':
      this._valueSet.push(file);
      break;
    case 'ProjectMetaData':
      this._projectMetaData.push(file);
      break;
    case 'Namespace':
      this._namespace.push(file);
      break;
    }
  }

  detectType(file) {
    if (!file.endsWith('.json')) {
      return;
    }
    
    const lines = fs.readFileSync(file, 'utf-8').split('\n');
    for (const l of lines) {
      const match = l.match(re);
      if (match != null && match.length >= 2) {
        return match[1];
      } else if (file.endsWith('config.txt') || file.endsWith('config.json')) {
        return 'Config';
      }
    }
  }
}

module.exports = {importFromFilePath, importConfigFromFilePath, importCIMCOREFromFilePath, VERSION, GRAMMAR_VERSION, setLogger, MODELS_INFO};
