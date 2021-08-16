const generatedHTML = require('./src/generateHTML');
// access file system and inquirer to generate questions and create HTML
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const { template } = require('@babel/core');

// empty array for team
const inputTeam = [];

const addManager = [
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
    ];

    // .then(managerInput => {
    //     const { name, id, email, officeNumber } = managerInput;
    //     const manager = new manager (name, id, email, officeNumber);

    //     inputTeam.push(manager);
    //     console.log(manager);
    // });
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if(err) {
                console.err(error);
            }
        });
    }
    function init() {
        inquirer
            .prompt(addManager)
            .then((response) => {
                writeToFile("index.html", generatedHTML(response));
            })
    }