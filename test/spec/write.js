import { assign } from 'min-dash';

import expect from '../expect';

import { createModdle } from '../helper';


describe('write', function() {

  const moddle = createModdle();


  function write(element, options) {

    // skip preamble for tests
    options = assign({ preamble: false }, options);

    return moddle.toXML(element, options);
  }


  describe('should export types', function() {

    it('i18n:translation', async function() {

      // given
      const translations = [
        moddle.create('i18n:Translation', { 'xml:lang': 'de', body: 'Startereignis' }),
        moddle.create('i18n:Translation', { 'xml:lang': 'de', body: 'ja', target: '@isInterrupting' }),
        moddle.create('i18n:Translation', { 'xml:lang': 'de', body: 'Ein Startereignis.', target: 'documentation' })
      ];
      const extensionElements = moddle.create('bpmn:ExtensionElements', { translations });

      const expectedXML =
        '<bpmn:extensionElements xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" ' +
          'xmlns:i18n="http://www.omg.org/spec/BPMN/non-normative/extensions/i18n/1.0">' +
          '<i18n:translation xml:lang="de">Startereignis</i18n:translation>' +
          '<i18n:translation target="@isInterrupting" xml:lang="de">ja</i18n:translation>' +
          '<i18n:translation target="documentation" xml:lang="de">Ein Startereignis.</i18n:translation>' +
        '</bpmn:extensionElements>';

      // when
      const { xml } = await write(extensionElements);

      // then
      expect(xml).to.eql(expectedXML);
    });
  });
});
