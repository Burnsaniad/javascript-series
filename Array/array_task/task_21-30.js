const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

// Task-21
// Can you filter employees who work in the "Engineering" department?
const employeesInEngineering = employees.filter(employee => employee.departmentId === departments.find(({name}) => name === "Engineering").id);
console.log(employeesInEngineering);

// Task-22
// Create a new array that combines employee names and department names in the format: "Alice (HR)".
const combinedNames = employees.map(employee => {
    const department = departments.find((dept) => dept.id === employee.departmentId)
    return `${employee.name} (${department ? department.name : "Unknown"})`
});
console.log(combinedNames);

// Task-23
// Find the highest salary among employees.
const highestSalary = employees.reduce((max, employee) => {
    return employee.salary > max ? employee.salary : max;
}, 0);
console.log(highestSalary);

// Task-24
// Check if there is at least one employee in the "Sales" department.
const hasOneInSales = employees.some(employee => employee.departmentId === departments.find(({name}) => name === 'Sales').id)
console.log(hasOneInSales);

// Task-25
// Write a function to filter employees earning more than 6000.
const highEarners = employees.filter(employee => {
    return employee.salary > 6000;
});

// Task-26
// Create an array of employee names only.
const employeeNames = employees.map(employee => employee.name);
console.log(employeeNames);

// Task-27
// Calculate the total salary of all employees using reduce.
const totalSalary = employees.reduce((acc, employee) => {
  return acc + employee.salary
}, 0);
console.log(totalSalary);

// Task-28
// Is there any employee earning less than 5000?
const hasLowEarners = employees.some(employee => {
  return employee.salary < 5000;
})
console.log(hasLowEarners);

// Task-29
// Find the first employee who earns exactly 5100.
const firstEarning5100 = employees.find(employee => employee.salary === 5100);
console.log(firstEarning5100);

// Task-30
// Find the last employee in the "HR" department.
const findHR = departments.find(({name}) => name === "HR")
const lastInHR = employees.filter(employee => employee.departmentId === findHR.id).pop();
console.log(lastInHR);