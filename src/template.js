const fs = require('fs');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const managerCard = information => {
    return `
      <div class="card border-warning mb-3" style="max-width: 18rem;">
      ${information
        .filter((employee) => {return employee instanceof Manager})
        .map(({name, id, email, office}) =>{
            return `
          <div class="card-header text-white bg-dark col-auto">
            <span class="text-bold">${name}</span>
          </br>
            <span class="text-bold">Manager</span>
          <div class="card-body text-white bg-dark d-flex row">
              <ul class="align-items-start col-auto">
                  <li>ID: <span class="text-bold">${id}</span></li>
                  <li>Email: <a target="_blank" href="${email}">${email}</a></li>
                  <li>Office Number: <span class="text-bold">${office}</span></li>
              </ul>
          </div>
          </div>
          `;})
          .join('')}
          </div>
      `;
  };
  
  const internCard = Intern => {
      console.log(Intern);
        return `
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header text-white bg-dark col-auto">
      <span class="text-bold">${Intern.name}</span>
    </br>
      <span class="text-bold">Intern</span>
    <div class="card-body text-white bg-dark d-flex row">
        <ul class="align-items-start col-auto">
            <li>ID: <span class="text-bold">${Intern.id}</span></li>
            <li>Email: <a target="_blank" href="${Intern.email}">${Intern.email}</a></li>
            <li>School: <span class="text-bold">${Intern.school}</span></li>
        </ul>
    </div>
    </div>
  </div>
    `;
}
  const engineerCard = Engineer => {
      console.log(Engineer);
      return `
    <div class="card border-warning mb-3" style="max-width: 18rem;">
    <div class="card-header text-white bg-dark col-auto">
      <span class="text-bold">${Engineer.name}</span>
    </br>
      <span class="text-bold">Engineer</span>
    <div class="card-body text-white bg-dark d-flex row">
        <ul class="align-items-start col-auto">
            <li>ID: <span class="text-bold">${Engineer.id}</span></li>
            <li>Email: <a target="_blank" href="${Engineer.email}">${Engineer.email}</a></li>
            <li>Github: <a target="_blank" href="https://github.com/${Engineer.gitHub}">${Engineer.gitHub}</a></li>
        </ul>
    </div>
    </div>
  </div>
    `;
  };
  const createNew = (information) => {
    employeeCard(information);
  }
  let cards = '';
  const employeeCard = (information) => {
      for (let i = 1; i < information.length; i++) {
        if (information[i].getRole() == 'Intern'){
             cards+= internCard(information[i]);
        }
        if (information[i].getRole() == 'Engineer') {
            cards+= engineerCard(information[i]);
        }
      }
      return cards;
  };
  module.exports = templateData  => {
      const information = templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <title></title>
    </head>
    <body class="bg-light">
            <header class="text-white bg-info">
                <div class="row">
                    <h1 class="col-12 text-center">My Team</h1>
                </div>
            </header>
    
            <div class="card-columns row text-center align-items-center p-3">
            ${managerCard(information)}
            </br>
            ${employeeCard(information)}
  
            </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </body>
    
    </html>
    `;
};
  