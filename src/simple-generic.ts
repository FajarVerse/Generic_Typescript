// generic class tanpa constructor parameter

export class SimpleGeneric<T> {
  _value?: T;

  public set Value(v: T) {
    this._value = v;
  }

  public get Value(): T | undefined {
    return this._value;
  }
}
