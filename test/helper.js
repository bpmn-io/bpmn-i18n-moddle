const fs = require('fs');

const SimpleBpmnModdle = require('bpmn-moddle');

const bpmnI18nSchema = require('../resources/bpmn-i18n.json');


module.exports = {
  readFile,
  createModdle
};

function readFile(filename) {
  return fs.readFileSync(filename, { encoding: 'UTF-8' });
}

function createModdle(additionalPackages = {}, options) {
  return SimpleBpmnModdle({ i18n: bpmnI18nSchema, ...additionalPackages }, options);
}
