import Class2 from "./Class2";

export default class Class1 extends Class2 {
  /**
   * Docs
   * @param param1 
   */
  public static method(param1: string = ''): void {
    console.log(param1);
  }
}