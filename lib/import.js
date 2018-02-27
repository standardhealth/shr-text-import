const fs = require('fs');
const path = require('path');
const bunyan = require('bunyan');
const mkdirp = require('mkdirp');

const {Specifications, MODELS_INFO} = require('shr-models');
const {Preprocessor, VERSION, GRAMMAR_VERSION} = require('./preprocessor');
const {DataElementImporter} = require('./dataElementListener');
const {ValueSetImporter} = require('./valueSetListener');
const {MappingImporter} = require('./mappingListener');
const {CimcoreImporter, CimplExporter} = require('./cimcore/cimcoreHandler');

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

  // let e = handler.deConstructor.elements;
  // let v = handler.vsConstructor.valuesets;
  // let m = handler.mapConstructor.mappings;
  let n = handler.nsConstructor.namespaces;

  let importedSpecs = handler.convertToSpecifications();

  const exporter = new CimplExporter(importedSpecs);
  for (const ns of n) {
    let path = filePath + '/cimplExport';
    exporter.exportNamespaceToPath(ns.namespace, path);
  }





















  function findOrigDef(el) {
    const ns = el.identifier.namespace.split('.').join('_');
    const file = fs.readFileSync(filePath + '/' + ns + '.txt', 'utf8').split('\n');
    let abstract = el.isAbstract;
    let entry = el.isEntry;
    for (let line of file) {
      if (line.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*/, '').match(new RegExp(`\\s*${(abstract) ? 'Abstract' : (entry) ? 'Entry' : ''}\\s*Element:\\s*${el.identifier.name}\\s*$`))) {

        let i = file.indexOf(line);
        let j = i;
        while (j < file.length) {
          let stripped = file[j].replace(/\s/g, '').replace(/^\/\*.*/, '');
          if (stripped.length == 0) {
            return file.slice(i, j);
          } else if (j == file.length - 1) {
            return file.slice(i, j + 1);
          }

          j++;
        }
      } else {
        continue;
      }
    }
  }

  function compareSimilarity(orig, out) {
    let similarLines = 0;
    let strippedOrig = orig.map(ln =>
      ln.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*/, '')
        .replace(/^\/\*.*/, '')
        .replace('FHIR/', 'http://hl7.org/fhir/ValueSet/')
        .replace(/\s/g, '')
        .replace(/ref\(([^\(\)]*)\)/, `$1`)
        .replace(/valueistype/, 'istype')
        .replace(/Valueistype/, 'istype')
        .replace(/Value:([A-Za-z]*)istype/, 'istype')
    );
    strippedOrig = strippedOrig.filter(ln =>
      ln !== 'Concept:TBD'
      && ln !== 'Description:""'
      && ln !== ''
      && !ln.startsWith('/*')
    );

    let strippedOut = [];
    out.map(ln => ln.split('\n')).forEach(a => strippedOut.push(...a));
    strippedOut = strippedOut.map(ln =>
      ln.replace(/\s/g, '')
        .replace(/http:\/\/standardhealthrecord.org\/shr\/[A-Za-z]*\/cs\/#[A-Za-z]*CS/g, '')
        .replace(/ref\(([^\(\)]*)\)/, `$1`)
        .replace(/\.([A-Za-z]*)istype/, 'istype')
        .replace(/valueistype/, 'istype')
        .replace(/Value:([A-Za-z]*)istype/, 'istype')
    );

    let totalLines = Math.max(strippedOrig.length, strippedOut.length);
    let strippedOutClone = strippedOut.map(a => a);

    for (const line of strippedOut) {
      if (strippedOrig.indexOf(line) > -1) {
        similarLines += 1;
        strippedOrig = strippedOrig.filter(a => a != line);
        strippedOutClone = strippedOutClone.filter(a => a != line);
      }
    }

    //linting formatting filters
    for (const line of strippedOut) {
      let match = strippedOrig.find(ln => ln.indexOf(line) > -1);
      if (strippedOutClone.indexOf(line) > -1 && match && match.replace(/^[0-9]..[0-9]/,'') == line) {
        similarLines += 1;
        strippedOrig = strippedOrig.filter(a => a != match);
        strippedOutClone = strippedOutClone.filter(a => a != line);
      }
    }

    for (const line of strippedOut) {
      let match = strippedOrig.find(ln => ln.indexOf(line) > -1 && ln.indexOf('includes'));
      let index = strippedOutClone.indexOf(line);
      if (index < strippedOutClone.length - 1 && [line, strippedOutClone[index + 1]].join('') == match) {
        similarLines += 2;
        strippedOrig = strippedOrig.filter(a => a != match);
        strippedOutClone = strippedOutClone.filter(a => a != line && a != strippedOutClone[index + 1]);
      }
    }



    let per = Math.floor(similarLines / totalLines * 100);
    return [`${per}% similar, ${totalLines - similarLines} dissimilar lines`, per, strippedOrig, strippedOutClone];
  }


  let totalPer = [0,0];

  /*
  // console.log(expSpecs.dataElements.all.filter(de => (de.value && de.value.constraintsFilter.boolean.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.boolean.hasConstraints).length > 0)).length)
  // console.log(expSpecs.dataElements.all.filter(de => (de.value && de.value.constraintsFilter.code.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.code.hasConstraints).length > 0)).length)
  console.log(expSpecs.dataElements.all.filter(de => (de.value && de.value.constraintsFilter.card.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.card.hasConstraints).length > 0)).length);
  // console.log(expSpecs.dataElements.all.filter(de => (de.value && de.value.constraintsFilter.child.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.code.hasConstraints).length > 0)).length)
  // console.log(expSpecs.dataElements.all.filter(de => (de.value && de.value.constraintsFilter.code.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.code.hasConstraints).length > 0)).length)
  // console.log(expSpecs.dataElements.all.filter(de => (de.value && de.value.constraintsFilter.includesCode.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.includesCode.hasConstraints).length > 0)).length)
  // console.log(expSpecs.dataElements.all.filter(de => (de.value && de.value.constraintsFilter.includesType.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.includesType.hasConstraints).length > 0)).length)
  // console.log(expSpecs.dataElements.all.filter(de => (de.value && de.value.constraintsFilter.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.hasConstraints).length > 0)).length)

  // console.log(e.filter(de => (de.value && de.value.constraintsFilter.boolean.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.boolean.hasConstraints).length > 0)).length)
  // console.log(e.filter(de => (de.value && de.value.constraintsFilter.code.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.code.hasConstraints).length > 0)).length)
  console.log(e.filter(de => (de.value && de.value.constraintsFilter.card.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.card.hasConstraints).length > 0)).length);
  // console.log(e.filter(de => (de.value && de.value.constraintsFilter.child.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.code.hasConstraints).length > 0)).length)
  // console.log(e.filter(de => (de.value && de.value.constraintsFilter.code.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.code.hasConstraints).length > 0)).length)
  // console.log(e.filter(de => (de.value && de.value.constraintsFilter.includesCode.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.includesCode.hasConstraints).length > 0)).length)
  // console.log(e.filter(de => (de.value && de.value.constraintsFilter.includesType.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.includesType.hasConstraints).length > 0)).length)
  // console.log(e.filter(de => (de.value && de.value.constraintsFilter.hasConstraints) || (de.fields && de.fields.filter(f=> f.constraintsFilter.hasConstraints).length > 0)).length)
  */

  // let namespaces = {};
  // e.forEach(element => {
  //   if (!namespaces[element.identifier.namespace]) {
  //     namespaces[element.identifier.namespace] = [];
  //   }

  //   let breakname;
  //   breakname = 'ContraceptiveMethodRequestedAgainst';
  //   if (element.identifier.name == breakname) {
  //     let stop = 'here';
  //   }

  //   let origDef = findOrigDef(expSpecs.dataElements.all.find(el => el.identifier.name == element.identifier.name)) || [];
  //   let outDef = exporter.deFormatter.formatDataElementOutput(element) || [];

  //   namespaces[element.identifier.namespace].push(outDef);

  //   let sim = compareSimilarity(origDef, outDef);
  //   if (sim[1] != 100) {
  //     // console.log('------------------------------------------------------')
  //     // console.log('\n(original)\n')
  //     // console.log(origDef.join('\n'));
  //     // console.log('\ndifferent lines:')
  //     // console.log(sim[2].join('\n'));

  //     // console.log('\n(exported) %s\n', sim[0]);
  //     // console.log(outDef.join('\n'));
  //     // console.log('\ndifferent lines:')
  //     // console.log(sim[3].join('\n'));
  //     // console.log();
  //   }
  //   totalPer = [totalPer[0] + (sim[1] == 100 ? 1 : 0), totalPer[1]+1];
  // });

  // for (const name in namespaces) {

  // }

  console.log(`${totalPer[0]}/${totalPer[1]} cases equilavent`);


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

// function processCIMCOREPath(filePath, filesByType = new CIMCOREFilesByType()) {
//   const stats = fs.statSync(filePath);
//   if (stats.isDirectory()) {
//     const files = fs.readdirSync(filePath);
//     for (const file of files) {
//       processCIMCOREPath(path.join(filePath, file), filesByType);
//     }
//   } else {
//     filesByType.add(filePath);
//   }

//   return filesByType;
// }

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

// class CIMCOREFilesByType {
//   constructor() {
//     this._projectMetaData;
//     this._dataElement = [];
//     this._map = [];
//     this._valueSet = [];
//     this._namespace = [];
//   }

//   get projectMetaData() { return this._projectMetaData; }
//   get dataElement() { return this._dataElement; }
//   get map() { return this._map; }
//   get valueSet() { return this._valueSet; }
//   get namespace() { return this._namespace; }

//   add(file) {
//     switch (this.detectType(file)) {
//     case 'DataElement':
//       this._dataElement.push(file);
//       break;
//     case 'Map':
//       this._map.push(file);
//       break;
//     case 'ValueSet':
//       this._valueSet.push(file);
//       break;
//     case 'ProjectMetaData':
//       this._projectMetaData.push(file);
//       break;
//     case 'Namespace':
//       this._namespace.push(file);
//       break;
//     }
//   }

//   detectType(file) {
//     if (!file.endsWith('.json')) {
//       return;
//     }

//     const lines = fs.readFileSync(file, 'utf-8').split('\n');
//     for (const l of lines) {
//       const match = l.match(re);
//       if (match != null && match.length >= 2) {
//         return match[1];
//       } else if (file.endsWith('config.txt') || file.endsWith('config.json')) {
//         return 'Config';
//       }
//     }
//   }
// }

module.exports = {importFromFilePath, importConfigFromFilePath, importCIMCOREFromFilePath, VERSION, GRAMMAR_VERSION, setLogger, MODELS_INFO};
