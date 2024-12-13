import { EntryGeneric } from "../src/multiple-generic";
import { SimpleGeneric } from "../src/simple-generic";

describe("Optional Generic", () => {
  // bisa tidak menyebutkan tipe datanya, jika di constructor sudah di definisikan
  it("should support Optional Generic Type", () => {
    const entry = new EntryGeneric(1, "Gifari");

    console.log(entry);
    expect(entry.key).toBe(1);
    expect(entry.value).toBe("Gifari");
  });

  // tanpa constructor (bisa menggunakan getter and setter, atau methods)
  it("should support no constructor parameter", () => {
    const simpleGeneric = new SimpleGeneric();
    simpleGeneric.Value = "Gifari";
    console.info(simpleGeneric.Value);
  });
});
