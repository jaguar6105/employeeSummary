// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, ) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    

    //returns object's name
    getName() {
        return this.name;
    }

    //returns object's id
    getId() {
        return this.id;
    }

    //returns object's email
    getEmail() {
        return this.email;
    }

    //returns object's role
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;