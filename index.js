const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const information = [];
const internQuestion = [
    {
        type:'input',
        name: 'school',
        message: 'What school does this person attend?',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Enter the school name!');
            }
        }
    }
]
const engineerQuestion = [
    {
        type:'input',
        name: 'github',
        message: "Input Engineer's github username",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter the github username!');
            }
        }
    }
]
const managerQuestion = [
    {
        type:'input',
        name: 'office',
        message: "Input office number",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Enter the office number!');
            }
        }
    }
]
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
    // {
    //     type: 'confirm',
    //     name: 'engineer',
    //     message: "Is the employee a engineer?",
    //     default: true

    // },
    // {},
    // {
    //     type:'confirm',
    //     name:'manager',
    //     message: "Is the employee a manager?",
    //     default: true
    // },
    // {},
    // {
    //     type:'confirm',
    //     name: 'intern',
    //     message: "Is the employee a intern?",
    //     default: true
    // },
    // {},
    {
        type:'list',
        name: 'employeeType',
        message: 'What type of employee are they?',
        choices: ['Engineer','Manager','Intern'],
        validate: data => {
            switch (data) {
                case 'Engineer':
                    return engineerQuestion;
                case 'Manager':
                    return managerQuestion;
                case 'Intern':
                    return internQuestion;
            }
        }
    }
];

const companyPrompt = () => {
    return inquirer
    .prompt(inquireInfo)
}

companyPrompt();