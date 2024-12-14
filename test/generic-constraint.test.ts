describe("Generic Constraint", () => {
  // Generic Constraint (membatasi tipe data)
  interface Employee {
    id: string;
    name: string;
  }

  interface Manager extends Employee {
    totalEmployee: number;
  }

  interface VP extends Manager {
    totalManager: number;
  }

  interface Person {
    id: string;
    name: string;
  }

  class EmployeeData<T extends Employee> {
    constructor(public employee: T) {}
  }

  it("should support Generic Constraint", () => {
    const data1 = new EmployeeData<Employee>({
      id: "100",
      name: "Gifari",
    });
    console.info(data1);

    const data2 = new EmployeeData<Manager>({
      id: "202",
      name: "Andrean",
      totalEmployee: 12,
    });
    console.info(data2);

    const data3 = new EmployeeData<VP>({
      id: "102",
      name: "Nazwa",
      totalManager: 10,
      totalEmployee: 10,
    });
    console.info(data3);

    const data4 = new EmployeeData<Person>({
      id: "101",
      name: "Maulana",
    });
    console.info(data4);

    // tipe data yang salah
    // const data5 = new EmployeeData<string>("Fajar");
  });
});
