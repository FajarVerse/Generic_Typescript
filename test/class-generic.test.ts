import { GenericData } from "../src/class-generic";

describe("Generic Class", () => {
  it("should can only one type ", () => {
    const data = new GenericData<number>(123);
    expect(data.value).toBe(123);

    const dataString = new GenericData<string>("Gifari Fajar maulana");
    const firstName = dataString.value.substring(0, 6);

    expect(firstName).toBe("Gifari");
  });
});
