const generatedHTML = require('./src/generateHTML');
// access file system and inquirer to generate questions and create HTML
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const outputDirectory = path.resolve(__dirname, 'dist');

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

    function renderTeam(fileName, data) {
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