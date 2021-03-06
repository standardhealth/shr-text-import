const fs = require('fs');
const path = require('path');
const bunyan = require('bunyan');
const {Specifications, MODELS_INFO} = require('shr-models');
const {Preprocessor, VERSION, GRAMMAR_VERSION} = require('./preprocessor');
const {DataElementImporter} = require('./dataElementListener');
const {ValueSetImporter} = require('./valueSetListener');
const {MappingImporter} = require('./mappingListener');
const {ContentProfileImporter} = require('./contentProfileListener');
const {CimcoreImporter} = require('./cimcore/cimcoreImport');

var logger = bunyan.createLogger({name: 'shr-text-import'});

function setLogger(bunyanLogger) {
  logger = bunyanLogger;
  require('./preprocessor').setLogger(logger);
  require('./dataElementListener').setLogger(logger);
  require('./valueSetListener').setLogger(logger);
  require('./mappingListener').setLogger(logger);
  require('./contentProfileListener').setLogger(logger);
  require('./cimcore/cimcoreImport').setLogger(logger);
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
    importer.importFile(file, path.dirname(filePath));
  }
  const mappingImporter = new MappingImporter(specifications);
  for (const file of filesByType.map) {
    mappingImporter.importFile(file);
  }
  const contentProfileImporter = new ContentProfileImporter(specifications);
  let contentProfileFound = false;
  for (const file of filesByType.contentProfile) {
    if (configuration && (path.basename(file) === configuration.contentProfile)) {
      contentProfileFound = true;
      contentProfileImporter.importFile(file);
    }
  }
  if (configuration && configuration.contentProfile && !contentProfileFound) {
    //11038, 'Could not find content profile file: ${cpFile}', 'Unknown', 'errorNumber'
    logger.error({cpfile: configuration.contentProfile }, '11038');
  }
  return specifications;
}

function importConfigFromFilePath(filePath, configName) {
  const filesByType = processPath(filePath);
  const preprocessor = new Preprocessor();

  let defaultConfigPath = path.join(__dirname, 'config-template', '/default_config.json');
  let defaultConfigFile = fs.readFileSync(defaultConfigPath, 'utf8');

  let configuration; // variable to store configuration data

  let configFile;
  if (configName != null) {
    configFile = path.resolve(filePath, configName);
  } else if (fs.statSync(filePath).isDirectory()) {
    configFile = path.resolve(filePath, 'config.json');
  } else {
    configFile = path.resolve(filePath);
  }
  const validConfig = filesByType.config.some(f => path.resolve(f) === configFile);

  if (validConfig) {
    // 01012, 'Using config file ${configFile}',,
    logger.info({ configFile }, '01012');
    configuration = preprocessor.preprocessConfig(defaultConfigFile, configFile);
  } else if ((configName == null || configName === 'config.json') && fs.statSync(filePath).isDirectory()) {
    const newFile = path.resolve(filePath, 'config.json');
    configuration = preprocessor.preprocessConfig(defaultConfigFile);
    fs.writeFileSync(newFile, defaultConfigFile, 'utf8');
  } else {
    //11046, 'Invalid config file: ${configFilename1} ' ,  'Unknown' , 'errorNumber'
    logger.error({configFilename1 : configFile}, '11046' );
  }

  return configuration;
}

function importCIMCOREFromFilePath(filePath) {
  const importer = new CimcoreImporter();
  importer.readFiles(filePath);
  const configSpecs = importer.configSpecs;
  const importedSpecs = importer.convertToSpecifications();
  return [configSpecs, importedSpecs];
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

function errorFilePath() {
  return require('path').join(__dirname, '..', 'errorMessages.txt');
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
    const lcFile = file.toLowerCase();
    if (!lcFile.endsWith('.txt') && !lcFile.endsWith('.shr') && !lcFile.endsWith('.json')) {
      return;  // only support *.txt, *.shr, or .json files
    }
    const content = fs.readFileSync(file, 'utf-8');
    if (!lcFile.endsWith('.json')) {
      // This is likely an SHR text file, so detect type based on Grammar declaration
      const re = /^\s*Grammar:\s+([^\s]+)/;
      const lines = content.split('\n');
      for (const l of lines) {
        const match = l.match(re);
        if (match != null && match.length >= 2) {
          return match[1];
        }
      }
    }
    // No match yet, try parsing to see if it is a config file
    try {
      const fileJSON = JSON.parse(content);
      // if it is a JSON w/ a projectName attribute, we assume it is a config file
      if (fileJSON.projectName) {
        return 'Config';
      }
    } catch (e) {
      // No-op (couldn't parse JSON)
    }
  }
}

module.exports = {importFromFilePath, importConfigFromFilePath, importCIMCOREFromFilePath, errorFilePath, VERSION, GRAMMAR_VERSION, setLogger, MODELS_INFO};
