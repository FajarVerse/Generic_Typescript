// Default Parameter Generic (jika tidak menyebutkan tipe data)
export class DefaultGenericPrameter<T = string> {
  _value?: T;

  public set value(value: T) {
    this._value = value;
  }

  public get value(): T | undefined {
    return this._value;
  }
}
