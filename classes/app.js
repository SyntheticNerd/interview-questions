// Design a class for employee which takes id and name in construction of object and has a salary property.
class Employee {
  constructor(name, id) {
    if (!id || !name) {
      throw new Error("Employee must have an ID and name");
    }
    this.name = name;
    this.id = id;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  setSalary(salary) {
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}

// Design a class for manager which is employee and can have department property

class Manager extends Employee {
  setDepartment(department) {
    this.department = department;
  }
  getDepartment() {
    return this.department;
  }
}
