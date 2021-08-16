const Employee = require('./Employee');

// Manager is a subclass that adds on to employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // Taking from the Employee class
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // placing manager as the new role for employee. 
    getRole () {
        return 'Manager';
    }
}

module.exports = Manager;