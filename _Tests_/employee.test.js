// tests for the employee constructor 
const Employee = require();

// Test for the Employee object
test('creates an object for employee', () => {
    const employee = new Employee('Brandon', 654, 'bvanburenwx@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Test for getting Name from getName function from employee.js
test('gets employee name', () => {
    const employee = new Employee('Brandon', 654, 'bvanburenwx@gmail.com')

    expect(employee.getName()).toEqual(expect.any(String));
})