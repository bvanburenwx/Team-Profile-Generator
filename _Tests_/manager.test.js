const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('creates an object for manager', () => {
            const name = 'Brandon';
            const id = 50;
            const email = 'bvanburenwx@gmail.com';
            const officeNumber = 15;

            const addmanager = new Manager(name, id, email, officeNumber);

            expect(addmanager.name).toEqual(name);
            expect(addmanager.id).toEqual(id);
            expect(addmanager.email).toEqual(email);
            expect(addmanager.officeNumber).toEqual(officeNumber);
        });
    });
});

// Test for getting gitHub from getGitHub function from manager.js
describe('getOfficeNumber', () => {  
    it('gets employee github', () => {
        const name = 'Brandon';
        const id = 50;
        const email = 'bvanburenwx@gmail.com';
        const officeNumber = 15;

        const addmanager = new Manager(name, id, email, officeNumber);

        expect(addmanager.officeNumber).toEqual(officeNumber);
    });
});

describe('getRole', () => {
    it('gets role from employee upon input', () => {
        const name = 'Brandon';
        const id = 50;
        const email = 'bvanburenwx@gmail.com';
        const officeNumber = 15;

        const addmanager = new Manager(name, id, email, officeNumber);    

        expect(addmanager.getRole()).toEqual('Manager');
    });
});