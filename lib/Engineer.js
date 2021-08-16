const Employee = require('./Employee');

// Engineer is a subclass that adds on to employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // Taking from the Employee class
        super(name, id, email);

        this.github = github;
    }

    getGitHub () {
        return this.github;
    }
    // placing engineer as the new role for employee. 
    getRole () {
        return 'Engineer';
    }
}

module.export = Engineer;