const fs = require('fs');

const managerCard = (data) => {
    return `
      <div class="card border-warning mb-3" style="max-width: 18rem;">
          <div class="card-header text-white bg-dark col-3">
            <span class="text-bold">${data.managerName}</span>
          </br>
            <span class="text-bold">Manager</span>
          <div class="card-body text-white bg-dark d-flex row">
              <ul class="align-items-start col-auto">
                  <li><span class="text-bold">${data.managerId}</span></li>
                  <li><span class="text-bold">${data.managerEmail}</span></li>
                  <li><span class="text-bold">${data.office}</span></li>
              </ul>
          </div>
          </div>
          </div>
      `;
  };
  
  const employeeCard = (data) => {
    if (data.employeeType == "Intern") {
      return `
    <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header text-white bg-dark col-3">
      <span class="text-bold">${data.name}</span>
    </br>
      <span class="text-bold">${data.employeeType}</span>
    <div class="card-body text-white bg-dark d-flex row">
        <ul class="align-items-start col-auto">
            <li><span class="text-bold">${data.id}</span></li>
            <li><a target="_blank" href="${data.email}></a></li>
            <li><span class="text-bold">${data.school}</span></li>
        </ul>
    </div>
    </div>
  </div>
    `;
    }
    if (data.employeeType == "Engineer") {
      return `
    <div class="card border-warning mb-3" style="max-width: 18rem;">
    <div class="card-header text-white bg-dark col-3">
      <span class="text-bold">${data.name}</span>
    </br>
      <span class="text-bold">${data.employeeType}</span>
    <div class="card-body text-white bg-dark d-flex row">
        <ul class="align-items-start col-auto">
            <li><span class="text-bold">${data.id}</span></li>
            <li><a target="_blank" href="${data.email}></a></li>
            <li><a target="_blank" href="https://github.com/${data.github}"></a></li>
        </ul>
    </div>
    </div>
  </div>
    `;
    }
  };
  
  const template= (data) => {
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
            ${managerCard}
            ${employeeCard}
  
            </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </body>
    
    </html>
    `;
  };
  module.exports = template;
  