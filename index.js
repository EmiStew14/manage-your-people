const fs = require('fs');
const inquirer = require('inquirer');

const information = [];
const inquireInfo = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employees name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter the members name!');
            }
        }
    },
    {
        type:'input',
        name: 'id',
        message:"What is the member's ID number?",
        validate: idInput => {
            if (idInput) {
                return true;
            }else {
                console.log('Enter employee ID number');
            }
        }
    },
    {
        type:'input',
        name: 'email',
        message: 'What is the employees email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }else {
                console.log("Enter employee's email address!");
            }
        }
    },
    {
        type:'checkbox',
        name: 'employeeType',
        message: 'What type of employee are they?',
        choices: ['Engineer','Manager','Intern'],
    }
];