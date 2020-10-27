const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);
        this.github = github;
    }

    //returns object's github
    getGithub() {
        return this.github;
    }

    //returns object's role
    getRole() {
        return "Engineer";
    }

}