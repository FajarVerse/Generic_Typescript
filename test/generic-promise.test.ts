describe("Generic Promise", () => {
  async function fetchData(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (value === "Gifari") {
          resolve(`Hello ${value}`);
        } else {
          reject(`Not Found`);
        }
      }, 1000);
    });
  }

  it("should support function promise", async () => {
    const result = await fetchData("Gifari");
    expect(result.toUpperCase()).toBe(`HELLO GIFARI`);
    console.info(result);

    try {
      await fetchData("Alfa");
    } catch (error) {
      console.info(error);
      expect(error).toBe("Not Found");
    }
  });
});
