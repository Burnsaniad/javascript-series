
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


// Task-31
// Find the first employee in the "Marketing" department.
const MarketingDepartmentEmployees = employees.filter(employee => employee.departmentId === departments.find(({name}) => name === "Marketing").id);
const firstEmployee = MarketingDepartmentEmployees.shift()
console.log(firstEmployee);

// Task-32
// Check if all employees earn more than 4000.
const Check = employees.every(employee => employee.salary > 4000);
console.log(Check);

// Task-33
// Find the first employee in the "Sales" department
const SalesDepartmentEmployees = employees.filter(employee => employee.departmentId === departments.find(({name}) => name === 'Sales').id)
const firstEmployeeInSales = SalesDepartmentEmployees.shift()
console.log(firstEmployeeInSales);

// Task-34
// Verify if all employees belong to a department listed in the departments array.
const allEmployeesInDepartments = employees.every(employee => 
  departments.some(({id}) => id === employee.departmentId)
);
console.log(allEmployeesInDepartments);

// Task-35
// Log each employee's name and department name to the console.
const employeeDepartmentMappings = employees.map(employee => {
    const department = departments.find(({id}) => id === employee.departmentId);
    return `${employee.name} -> ${department ? department.name : "Unknown"}`;
})
console.log(employeeDepartmentMappings);