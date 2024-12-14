describe("Generic Collection", () => {
  // Generic Collection

  // Generic Array<T>
  it("should support array", () => {
    const array = new Array<string>();
    array.push("Gifari", "Andrean");
    expect(array[0].toUpperCase()).toBe("GIFARI");
    expect(array[1].toUpperCase()).toBe("ANDREAN");

    const array2: Array<number> = [];
    array2.push(1, 3, 4);
    console.log(array2);
  });

  // Generic Set<T>
  it("should support set", () => {
    const set = new Set<string>();
    set.add("Gifari");
    set.add("Nazwa");
    set.add("Gifari");

    expect(set.size).toBe(2);
    expect(set.has("Gifari")).toBe(true);
    expect(set.has("Nazwa")).toBe(true);

    const set2 = new Set<number>();
    set2.add(1);
    set2.add(2);
    set2.add(3);
    console.info(set2);
  });

  // Generic Map<K, V>
  it("should support map", () => {
    const map = new Map<string, number>();
    map.set("Gifari", 1);
    map.set("Andrean", 2);
    map.set("Nazwa", 3);
    console.info(map);

    expect(map.get("Gifari")).toBe(1);
    expect(map.get("Andrean")).toBe(2);
    expect(map.get("Nazwa")).toBe(3);
  });
});
