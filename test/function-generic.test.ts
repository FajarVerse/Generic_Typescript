describe("Functionn Generic", () => {
  function create<T>(value: T): T {
    return value;
  }

  // arrow function
  const createGeneric = <T>(value: T): T => {
    return value;
  };

  it("should support generic function", () => {
    const result = create<string>("Hello");
    expect(result).toBe("Hello");

    const result2 = createGeneric<number>(54);
    expect(result2).toBe(54)
  });
});
