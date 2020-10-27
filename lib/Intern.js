const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);
        this.school = school;
    }

    //returns object's school
    getSchool() {
        return this.school;
    }

    //returns object's role
    getRole() {
        return "Intern";
    }

}
