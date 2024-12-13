import { DefaultGenericPrameter } from "../src/default-parameter";

describe("Default Parameter Generic", () => {
  it("should support Default Parameter", () => {
    const result = new DefaultGenericPrameter();
    result.value = "Gifari";
    expect(result.value.toUpperCase()).toBe("GIFARI");

    const result2 = new DefaultGenericPrameter<number>();
    result2.value = 123;
    expect(result2.value).toBe(123);
  });
});
