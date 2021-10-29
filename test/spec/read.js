const { find } = require('min-dash');

const expect = require('../expect');

const { createModdle } = require('../helper');

const { fromFile } = require('../xml-helper');


describe('read', function() {

  let moddle;


  beforeEach(() => {
    moddle = createModdle();
  });


  it('should import Definitions#xml:lang', async function() {

    // given
    const { rootElement: definitions } = await fromFile(moddle, 'test/fixtures/bpmn/simple.bpmn');

    // when
    const language = definitions.get('xml:lang');

    // then
    expect(language).to.eql('en');
  });


  it('should read i18n:translation elements', async function() {

    // given
    const { rootElement: definitions } = await fromFile(moddle, 'test/fixtures/bpmn/simple.bpmn');
    const startEvent = definitions.rootElements[0].flowElements[0];

    debugger;
    // when
    const translations = getTranslations(startEvent);

    // then
    expect(translations).to.exist;
    expect(translations).to.have.lengthOf(3);
  });

});

function getTranslations(element) {
  return element.get('extensionElements').get('translations');
}
