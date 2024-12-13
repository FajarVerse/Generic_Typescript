import { EntryGeneric, TripleGeneric } from "../src/multiple-generic";

describe("Multiple Generic", () => {
  //  Generic bisa memuat lebih dari satu type data
  it("should support multiple generic", () => {
    const result = new EntryGeneric<string, number>("Gifari", 1);
    console.info(result);

    const result2 = new TripleGeneric<string, number, boolean>(
      "Gifari",
      123,
      true
    );
    console.info(result2);
  });
});
