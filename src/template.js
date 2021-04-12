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
          <div class="card-header text-white bg-dark col-3">
            <span class="text-bold">${name}</span>
          </br>
            <span class="text-bold">Manager</span>
          <div class="card-body text-white bg-dark d-flex row">
              <ul class="align-items-start col-auto">
                  <li><span class="text-bold">${id}</span></li>
                  <li><span class="text-bold">${email}</span></li>
                  <li><span class="text-bold">${office}</span></li>
              </ul>
          </div>
          </div>
          `;})
          .join('')}
          </div>
      `;
  };
  
  const internCard = information => {
        return `
    <div class="card border-success mb-3" style="max-width: 18rem;">
    ${information
        .filter((newIntern) => {return newIntern instanceof Intern})
        .map(({name, id, email, school}) =>{
            return `
    <div class="card-header text-white bg-dark col-3">
      <span class="text-bold">${name}</span>
    </br>
      <span class="text-bold">Intern</span>
    <div class="card-body text-white bg-dark d-flex row">
        <ul class="align-items-start col-auto">
            <li><span class="text-bold">${id}</span></li>
            <li><a target="_blank" href="${email}></a></li>
            <li><span class="text-bold">${school}</span></li>
        </ul>
    </div>
    </div>
    `;})
          .join('')}
  </div>
    `;
};
  const engineerCard = newEngineer => {
      console.log(newEngineer);
      return `
    <div class="card border-warning mb-3" style="max-width: 18rem;">
    ${information
        .filter(Engineer)
        .map(({name, id, email, gitHub}) =>{
            return `
    <div class="card-header text-white bg-dark col-3">
      <span class="text-bold">${name}</span>
    </br>
      <span class="text-bold">Engineer</span>
    <div class="card-body text-white bg-dark d-flex row">
        <ul class="align-items-start col-auto">
            <li><span class="text-bold">${id}</span></li>
            <li><a target="_blank" href="${email}></a></li>
            <li><a target="_blank" href="https://github.com/${gitHub}"></a></li>
        </ul>
    </div>
    </div>
    `;})
    .join('')}
  </div>
    `;
  };
  
  const employeeCard = (information) => {

      information.forEach(data => {

        if (data.employeeType == 'Intern'){
            return internCard();
        }
        if (data.employeeType == 'Engineer') {
            return engineerCard();
        }
      });
  }
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
            ${employeeCard(information)}
  
            </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </body>
    
    </html>
    `;
};
  