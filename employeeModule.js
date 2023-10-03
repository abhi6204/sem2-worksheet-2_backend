// views/employeeModule.js

const employees = [];

function addEmployee(name, salary, hours) {
  employees.push({ name, salary, hours});
}

function calculateSalaries() {
  return employees.map(employee => {
    return `Employee Name: ${employee.name}, Salary: ${employee.salary}, Hours worked: ${employee.hours}`;
  });
}

module.exports = {
  addEmployee,
  calculateSalaries
};
