const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require('./src/template');

const information = [];

const managerQuestion = () => {
    console.log("Hi boss");
    return inquirer.prompt([
        {
          type: "confirm",
          name: "manager",
          message: "Do you have a manager?",
          default: false
        },
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter the members name!');
                }
            }
          },
          {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                }else {
                    console.log('Enter employee ID number');
                }
            }
          },
          {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }else {
                    console.log("Enter employee's email address!");
                }
            }
          },
        {
      type: "input",
      name: "office",
      message: "Input office number",
      validate: (officeInput) => {
        if (officeInput) {
          return true;
        } else {
          console.log("Enter the office number!");
        }
      }
    }
    ])
    };

const addMore = () => {
  return inquirer
    .prompt({
      type: "confirm",
      name: "moreEmployee",
      message: "Add more team members?",
      default: false,
    })
    .then(inquireInfo)
        // (data)=>{
        // if(data.moreEmployee){
        //     console.log(data.moreEmployee);
        //     inquireInfo();
        // }else{
        //     return false;
        // }
     .then(employeeRole)
    .then((data) => {
      switch (data.employeeType) {
        case "Engineer":
          engineerQuestion();
          break;
        case "Intern":
          internQuestion();
          break;
      }
    })
};
const internQuestion = () => {
  console.log("Hi newbie");
  return inquirer.prompt({
    type: "input",
    name: "school",
    message: "What school does this person attend?",
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Enter the school name!");
      }
    },
  });
};
const engineerQuestion = () => {
  console.log("Hi coder");
  return inquirer.prompt({
    type: "input",
    name: "github",
    message: "Input Engineer's github username",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Enter the github username!");
      }
    },
  });
};
const employeeRole = () =>{
    return inquirer
    .prompt(
        {
            type: "list",
            name: "employeeType",
            message: "What type of employee are they?",
            choices: ["Engineer", "Intern"],
          }
    )
};
const inquireInfo = () => {
  console.log("build the info");
  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employees name",
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Enter the members name!');
          }
      }
    },
    {
      type: "input",
      name: "id",
      message: "What is the member's ID number?",
      validate: idInput => {
          if (idInput) {
              return true;
          }else {
              console.log('Enter employee ID number');
          }
      }
    },
    {
      type: "input",
      name: "email",
      message: "What is the employees email address?",
      validate: emailInput => {
          if (emailInput) {
              return true;
          }else {
              console.log("Enter employee's email address!");
          }
      }
    }
  ])
//   .then(employeeRole)
//   .then(data => {
//     switch (data.employeeType) {
//        case 'Engineer':
//        engineerQuestion();
//        break;
//        case 'Intern':
//        internQuestion();
//        break;
//        }
//     })
// .then(data => {
//     information.push(data);
// })
};

const makeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../dist/.index.html',fileContent,err =>{
        if (err) {
          reject(err);
          return;
        }

        resolve({
           ok: true,
          message: 'File created!'
        });
    });
  });
};

managerQuestion()
.then(addMore);
// .then(data =>{
//     return template(data);
// })
// .then(content => {
//     console.log(content);
//     makeFile(content);
// })
// .catch(err => {
//     console.log(err);
//   });

