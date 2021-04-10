const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const information = [];
const checkManager = () => {
    for (let i = 0; i < information.length; i++) {
         if (information[i].employeeType == 'Manager') {
             return true;
         }  
    }
    return false;
}
const addMore = () => {
    return inquirer
    .prompt (
        {
            type: 'confirm',
            name: 'moreEmployee',
            message: 'Add more team members?',
            default: false
        }
    )
    .then(data => {
        if (data.moreEmployee === true) {
            checkManager();
        }
    })
}
const internQuestion = () => {
    console.log('Hi newbie');
    return inquirer
    .prompt(
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
    )
}
const engineerQuestion = ()=>  {
    console.log('Hi coder');
    return inquirer
    .prompt(
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
    )
}
const managerQuestion = ()=> {
    console.log('Hi boss');
    return inquirer
    .prompt(
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
  )
}
const inquireInfo = () => {
    return inquirer
    .prompt(
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
    )
};

const firstQuestions = function() {
    inquireInfo();
    typePrompt()
}

const typePrompt = function(manager) {
    switch (manager) {
        case true:
            return inquirer
            .prompt(
                {
                    type:'list',
                    name: 'employeeType',
                    message: 'What type of employee are they?',
                    choices: ['Engineer','Intern'],
                },
            )
        case false:
            return inquirer
            .prompt(
                {
                    type:'list',
                    name: 'employeeType',
                    message: 'What type of employee are they?',
                    choices: ['Engineer','Manager','Intern'],
                },
            )
        default:
            break;
    }
} 

const companyPrompt = () => {
    firstQuestions()
    .then(data => {
         switch (data.employeeType) {
            case 'Engineer':
            engineerQuestion();
            break;
            case 'Manager':
            managerQuestion();
            break;
            case 'Intern':
            internQuestion();
            break;
            }
    })
    .then ()
}

companyPrompt();