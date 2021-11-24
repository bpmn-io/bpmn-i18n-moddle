import { createModdle, readFile } from '../helper';

import {
  fromFile,
  toXML,
  validate
} from '../xml-helper';


describe('roundtrip', function() {

  this.timeout(10000);

  let moddle;

  function test(file) {
    return async function() {

      // assume
      await validate(readFile(file));

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
