const fs = require('fs');
const inquirer = require('inquirer');
// const Employee = require('./lib/Employee');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');

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
        // validate: value => {
        //     switch (value) {
        //         case 'Engineer':
        //             return Engineer;
        //         case 'Manager':
        //             return Manager;
        //         case 'Intern':
        //             return Intern;
        //     }
        // }
    }
];

const companyPrompt = () => {
    return inquirer
    .prompt(inquireInfo)
}

companyPrompt();