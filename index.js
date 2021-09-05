// const generatedHTML = require('./src/generateHTML');
// access file system and inquirer to generate questions and create HTML
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
// profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const outputDirectory = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDirectory, "team.html");
const render = require("./src/template.js");

// empty array for team
const inputTeam = [];

function mainMenu() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enters the team manager name.",
        },

        {
          type: "input",
          name: "id",
          message: "Please enter the manager ID.",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter the managers email.",
        },

        {
          type: "input",
          name: "officeNumber",
          message: "Please enter the managers office number.",
        },
      ])
      .then((managerInput) => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        inputTeam.push(manager);
        console.log(manager);
        init();
      });
  }
  function renderTeam() {
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory);
    }
    fs.writeFileSync(outputPath, render(inputTeam), "utf-8");
  }
  function init() {
    inquirer.prompt({
      type: "list",
      name: "userChoice",
      message: "What type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I dont want to add anymore team members.",
      ],
    }).then(answer => {
        console.log('this is form init', answer.userChoice);
        switch(answer.userChoice){
            case 'Engineer':
                createEngineer();
                break;

            case 'Intern':
                createIntern();
                break;

            default: 
            renderTeam();
        }
        
    }) 
  }
  function createEngineer() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the engineer's name.",
      },

      {
        type: "input",
        name: "id",
        message: "Please enter the engineer's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email.",
      },

      {
        type: "input",
        name: "gitHub",
        message: "Please enter the engineer's github.",
      },
    ])
    .then((engineerInput) => {
        const { name, id, email, gitHub } = engineerInput;
        const engineer = new Engineer(name, id, email, gitHub);

        inputTeam.push(engineer);
        console.log(engineer);
        init();
      });
  }
  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enters the intern's name.",
        },

        {
          type: "input",
          name: "id",
          message: "Please enter the intern's ID.",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter the intern's email.",
        },

        {
          type: "input",
          name: "school",
          message: "Please enter the intern's school.",
        },
      ])
      .then((internInput) => {
        const { name, id, email, school } = internInput;
        const intern = new Intern(name, id, email, school);

        inputTeam.push(intern);
        console.log(intern);
        init();
      });
}


  createManager();
}
mainMenu();
