// tests for the employee constructor 
const Engineer = require('../lib/Engineer');

// Test for the Employee object
describe('Engineer', () => {
    describe('Initialization', () => {
        it('creates an object for engineer', () => {
            const name = 'Brandon';
            const id = 50;
            const email = 'bvanburenwx@gmail.com';
            const github = 'bvanburenwx'

            const addEngineer = new Engineer(name, id, email, github);

            expect(addEngineer.name).toEqual(name);
            expect(addEngineer.id).toEqual(id);
            expect(addEngineer.email).toEqual(email);
            expect(addEngineer.github).toEqual(github);
        });
    });
});

// Test for getting gitHub from getGitHub function from engineer.js
describe('getGitHub', () => {  
    it('gets employee github', () => {
        const name = 'Brandon';
        const id = 50;
        const email = 'bvanburenwx@gmail.com';
        const github = 'bvanburenwx'

        const addEngineer = new Engineer(name, id, email, github);

        expect(addEngineer.getGitHub()).toEqual(github);
    });
});

describe('getRole', () => {
    it('gets role from employee upon input', () => {
        const name = 'Brandon';
        const id = 50;
        const email = 'bvanburenwx@gmail.com';
        const github = 'bvanburenwx.'

        const addEngineer = new Engineer(name, id, email, github);    

        expect(addEngineer.getRole()).toEqual('Engineer');
    });
});