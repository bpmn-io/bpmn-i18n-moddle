# bpmn-i18n-moddle

[![CI](https://github.com/bpmn-io/bpmn-i18n-moddle/workflows/CI/badge.svg)](https://github.com/bpmn-io/bpmn-i18n-moddle/actions?query=workflow%3ACI)

Read and write BPMN 2.0 diagram files with [bpmn-i18n extension](https://github.com/bpmn-miwg/bpmn-i18n) in NodeJS and the browser.

## Usage

```javascript
import BpmnModdle from 'bpmn-moddle';
import BpmnI18nSchema from 'bpmn-i18n-moddle/resources/bpmn-i18n.json';

const moddle = new BpmnModdle({ i18n: BpmnI18nSchema });

const translation = moddle.create('i18n:Translation', { 'xml:lang': 'de', body: 'Startereignis' });

const extensionElements = moddle.create('bpmn:ExtensionElements', {
  values: [ translation ]
});

console.log(extensionElements.get('values'));
```

## Resources

* [Issues](https://github.com/bpmn-io/bpmn-i18n-moddle/issues)
* [Changelog](./CHANGELOG.md)

## Building the Project

To run the test suite that includes XSD schema validation you must have a Java JDK installed and properly exposed through the `JAVA_HOME` variable.

Execute the tests via:

```sh
npm test
```

Perform a complete build of the application via:

```sh
npm run all
```

## License

Use under the terms of the [MIT license](http://opensource.org/licenses/MIT).
