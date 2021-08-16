// tests for the employee constructor 
const Employee = require("../lib/Employee.js");

// Test for the Employee object
describe('Employee', () => {
    describe('Initialization', () => {
        it('creates an object for employee', () => {
            const name = 'Brandon';
            const id = 50;
            const email = 'bvanburenwx@gmail.com';
            
            const addEmployee = new Employee(name, id, email);

            expect(addEmployee.name).toEqual(name);
            expect(addEmployee.id).toEqual(id);
            expect(addEmployee.email).toEqual(email);
        });
    });
});


// Test for getting Name from getName function from employee.js
describe('getName', () => {  
    it('gets employee "name"', () => {
        const name = 'Brandon';
        const id = 50;
        const email = 'bvanburenwx@gmail.com';

        const addEmployee = new Employee(name, id, email);

        expect(addEmployee.getName()).toEqual(name);
    });
});


// Test for getting id from getID function from employee.js
describe('getId', () => {
    it('gets employee id from input', () => {
        const name = 'Brandon';
        const id = 50;
        const email = 'bvanburenwx@gmail.com';
    
        const addEmployee = new Employee(name, id, email);    
    
        expect(addEmployee.getId()).toEqual(id);
    });
});

describe('getEmail', () => {
    it('get employee email from input', () => {
        const name = 'Brandon';
        const id = 50;
        const email = 'bvanburenwx@gmail.com';

        const addEmployee = new Employee(name, id, email);    

        expect(addEmployee.getEmail()).toEqual(email);
    });
});

describe('getRole', () => {
    it('gets role from employee upon input', () => {
        const name = 'Brandon';
        const id = 50;
        const email = 'bvanburenwx@gmail.com';
    
        const addEmployee = new Employee(name, id, email);    
    
        expect(addEmployee.getRole()).toEqual('Employee');
    });
});
