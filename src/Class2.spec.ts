import Class2 from "./Class2";
import * as assert from 'assert';

class Class3 extends Class2 {
  public foo2() {
    return this.foo();
  }
}

describe('Class2', () => {
  it('creates class instance', () => {
    new Class3();
    assert(true);
  });

  it('gets foo', () => {
    const c = new Class3();
    const foo2 = c.foo2();
    assert.equal(foo2, 'bar');
  });
});