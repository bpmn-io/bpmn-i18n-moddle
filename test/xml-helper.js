const expect = require('./expect');

const SchemaValidator = require('xsd-schema-validator');

const { readFile } = require('./helper');

const XSD = 'test/fixtures/xsd/ALL.xsd';


module.exports = {
  fromFile,
  fromFilePart,
  toXML,
  validate
};

function fromFile(moddle, file) {
  return fromFilePart(moddle, file, 'bpmn:Definitions');
}

function fromFilePart(moddle, file, type) {
  const fileContents = readFile(file);

  return moddle.fromXML(fileContents, type);
}

function toXML(element, opts) {
  return element.$model.toXML(element, opts);
}

function validate(xml) {

  if (!xml) {
    throw new Error('XML is not defined');
  }

  return new Promise((resolve, reject) => {
    SchemaValidator.validateXML(xml, XSD, function(err, result) {

      if (err) {
        return reject(err);
      }

      try {
        expect(result.valid).to.be.true;
      } catch (err) {
        return reject(err);
      }

      return resolve();
    });
  });
}