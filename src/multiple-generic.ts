export class EntryGeneric<K, V> {
  constructor(public key: K, public value: V) {
    this.key = key;
    this.value = value;
  }
}

export class TripleGeneric<K, V, T> {
  constructor(public first: K, public second: V, public third: T) {
    this.first = first;
    this.second = second;
    this.third = third;
  }
}
