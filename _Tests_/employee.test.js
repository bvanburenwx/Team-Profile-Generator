// tests for the employee constructor 
const Employee = require(lib/Employee.js);

// Test for the Employee object
it('creates an object for employee', () => {
    const employee = new Employee('Brandon', 654, 'bvanburenwx@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Test for getting Name from getName function from employee.js
it('gets employee name', () => {
    const employee = new Employee('Brandon', 654, 'bvanburenwx@gmail.com')

    expect(employee.getName()).toEqual(expect.any(String));
});

// Test for getting id from getID function from employee.js
it('gets employee id from input', () => {
    const employee = new Employee('Brandon', 654, 'bvanburenwx@gmail.com')

    expect(employee.getId()). toEqual(expect.any(Number));
});

it('get employee email from input', () => {
    const employee =new Employee('Brandon', 654, 'bvanburenwx@gmail.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

it('gets role from employee upon input', () => {
    const employee = new Employee('Brandon', 654, 'bvanburenwx@gmail.com')

    expect(employee.getRole()).toEqual('Employee');
});