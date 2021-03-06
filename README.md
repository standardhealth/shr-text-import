> # Content Has Moved!
>
> **The shr-text-import repo has been integrated into the**
> **[shr-tools](https://github.com/standardhealth/shr-tools) monorepo.  All further development**
> **will be in [shr-tools/packages/shr-text-import](https://github.com/standardhealth/shr-tools/tree/master/packages/shr-text-import).**
>
> **Current releases can be found at [shr-tools/releases](https://github.com/standardhealth/shr-tools/releases).**

# SHR Text Import

The Standard Health Record (SHR) initiative is working to create a single, high-quality health record for every individual in the United States.  For more information, see [standardhealthrecord.org](http://standardhealthrecord.org/).

This GitHub repository contains an ES6 library for parsing SHR text definitions into the SHR models.  It also contains a simple Node.js script that imports a folder of SHR text files and prints out any errors.

The SHR text definitions and grammar files can be found in the [shr_spec](https://github.com/standardhealth/shr_spec) repo.  As the SHR text format (and content files) are still evolving, so is this import tool.

# Setting Up the Environment

This project has been developed and tested with Node.js 6.6, although other versions _may_ work.  After installing Node.js, change to the project directory and _npm install_ the dependencies:
```
$ npm install
```

# Running the Import

After installing the dependencies with npm, you can use node to import a file or folder of files from SHR text format and print out any errors:
```
$ node run.js /path/to/shr_spec/spec
```

# Running the Tests

This project contains unit tests for testing the SHR text importer, JSON schema exporter, and FHIR StructureDefinition exporter.  To run the tests, execute the following command:
```
$ npm test
```

During development, it is often helpful to run tests in _watch_ mode.  This launches a process that watches the filesystem for changes to the javascript files and will automatically re-run the tests whenever it detects changes.  To run the tests in _watch_ mode, execute the following command:
```
$ npm run test:watch
```

# Linting the Code

To encourage quality and consistency within the code base, all code should pass eslint without any warnings.  Many text editors can be configured to automatically flag eslint violations.  We also provide an npm script for running eslint on the project.  To run eslint, execute the following command:
```
$ npm run lint
```

# License

Copyright 2016 The MITRE Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
