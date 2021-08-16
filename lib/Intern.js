const Employee = require('./Employee');

// Intern is a subclass that adds on to employee
class Intern extends Employee {
    constructor (name, id, email, school) {
        // Taking from the Employee class
        super(name, id, email);

        this.school = school;
    }

    getSchool () {
        return this.school;
    }
    // placing Intern as the new role for employee. 
    getRole () {
        return 'Intern';
    }
}

module.exports = Intern;