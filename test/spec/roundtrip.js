const { createModdle } = require('../helper');

const {
  fromFile,
  toXML,
  validate
} = require('../xml-helper');


// TODO(@barmac): enable when XSD validation is figured out
describe.skip('roundtrip', function() {

  this.timeout(10000);

  let moddle;

  function test(file) {
    return async function() {

      // given
      const { rootElement: definitions } = await fromFile(moddle, file);

      // when
      const { xml } = await toXML(definitions, { format: true });

      // then
      return validate(xml);
    };
  }


  beforeEach(() => {
    moddle = createModdle();
  });


  it('should work with simple diagram', test('test/fixtures/bpmn/simple.bpmn'));
});
