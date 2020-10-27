const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//asks the user questions and create the object from the questions
async function askQuestions(role) {
    try {
        const { name } = await inquirer.prompt({
            message: `What is the name of the ${role}:`,
            name: "name"
        });
        const { id } = await inquirer.prompt({
            message: `What is the ${role}'s id:`,
            name: "id"
        });
        const { email } = await inquirer.prompt({
            message: `What is the ${role}'s email:`,
            name: "email"
        });
        if (role == "Manager") {
            const { room } = await inquirer.prompt({
                message: "What is the manager's office number:",
                name: "room"
            });
            const employee = new Manager(name, id, email, room);
            return employee;
        }
        else if (role == "Intern") {
            const { school } = await inquirer.prompt({
                message: "What school does the intern attend:",
                name: "school"
            });
            const employee = new Intern(name, id, email, school);
            return employee;
        }
        else if (role == "Engineer") {
            const { github } = await inquirer.prompt({
                message: "What is the engineer's github:",
                name: "github"
            });
            const employee = new Engineer(name, id, email, github);
            return employee;
        }

    } catch (err) {
        console.log(err);
    }
}


//the program running function
async function init() {
    const employeeList = [];
    let manager = await askQuestions("Manager");
    employeeList.push(manager);
    let run = await askNext();
    while(run) {
        let role = await askUserRole();
        let employee = await askQuestions(role);
        employeeList.push(employee);
        run = await askNext();
    }


    writeToFile(render(employeeList));
}

//asks if the user wants to add a new user
async function askNext() {
    try {
        const { answer } = await inquirer.prompt({
            type: "list",
            choices: ["Yes", "No"],
            name: "answer",
            message: "Do you want to add another employee:"
        });
        if(answer == "Yes") {
            return true;
        }
        else {
            return false;
        }

    } catch (err) {
        console.log(err);
    }
}

//asks if the user what new user they want
async function askUserRole() {
    try {
        const { answer } = await inquirer.prompt({
            type: "list",
            choices: ["Manager", "Engineer", "Intern"],
            name: "answer",
            message: "What is the new user's role:"
        });
        return answer;

    } catch (err) {
        console.log(err);
    }
}

//writes text to team.htlm in the output folder
function writeToFile(data) {
    fs.writeFileSync("./output/team.html", data);
}


init();
