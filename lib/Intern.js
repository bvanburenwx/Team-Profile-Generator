const Employee = require('./Employee');

// Engineer is a subclass that adds on to employee
class Intern extends Employee {
    constructor (name, id, email, school) {
        // Taking from the Employee class
        super(name, id, email);

        this.school = school;
    }

    getSchool () {
        return this.school;
    }
    // placing engineer as the new role for employee. 
    getRole () {
        return 'Intern';
    }
}

module.export = Intern;