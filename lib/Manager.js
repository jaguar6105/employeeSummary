const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {

        super(name, id, email);
        this.officeNumber = office;
    }

    //returns object's office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    //returns object's role
    getRole() {
        return "Manager";
    }

}
module.exports = Manager;