// Design a prototype for employee which takes id and name in construction of object and has a salary property.
var Employee = function (name, id) {
  if (!id || !name) {
    throw new Error("Employee must have an ID and name");
  }
  this.name = name;
  this.id = id;
};

Employee.prototype.getId = function () {
  return this.id;
};
Employee.prototype.getName = function () {
  return this.name;
};
Employee.prototype.setSalary = function (salary) {
  this.salary = salary;
};
Employee.prototype.getSalary = function () {
  return this.salary;
};

// Design a prototype for manager which is employee and can have department property

var Manager = function (params) {
  Employee.apply(this, arguments);
};

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.setDepartment = function (department) {
  this.department = department;
};
Manager.prototype.getDepartment = function () {
  return this.department;
};
