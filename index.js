// const generatedHTML = require('./src/generateHTML');
// access file system and inquirer to generate questions and create HTML
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
// profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const outputDirectory = path.resolve(__dirname, 'dist');
const outputPath = path.join(outputDirectory, 'team.html');
const render = require('./src/template.js');

// empty array for team
const inputTeam = [];

function mainMenu(){

function createManager(){
inquirer.prompt( [
        {
            type: 'input',
            name: 'name',
            message: 'Please enters the team manager name.',
        },

        {
            type: 'input', 
            name: 'id',
            message: 'Please enter the manager ID.', 
        },
        {   
            type: 'input',
            name: 'email', 
            message: 'Please enter the managers email.',
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the managers office number.',
        },
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        inputTeam.push(manager);
        console.log(manager);
        init();
    });

}
    function renderTeam() {
       if(!fs.existsSync(outputDirectory)){
           fs.mkdirSync(outputDirectory)
       }
       fs.writeFileSync(outputPath, render(inputTeam), "utf-8");
    }
    function init() {
        inquirer.prompt(
            {
                type: 'choice', 
                name: 'userChoice',
                message: 'What type of team member would you like to add?', 
                choices: [
                    "Engineer",
                    "Intern",
                    "I dont want to add anymore team members."
                ]
            },
        )
    }

    createManager();
}
    mainMenu()