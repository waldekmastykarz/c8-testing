import Class1 from "./Class1";
import * as assert from 'assert';

describe('Class1', () => {
  it('creates class instance', () => {
    new Class1();
    assert(true);
  });

  it('runs method without paramter', () => {
    Class1.method();
  });

  it('runs method with parameter', () => {
    Class1.method('a');
  });
});