
const generateTeam = (team) => {

  const generateManager = (manager) => {
    return `
        <div class="card">
        <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
        </div>
        <div class="card-body">
        <li>${manager.getId()}</li>
        <li>${manager.getEmail()}</li>
        <li>${manager.getOfficeNumber()}</li>
        </div>
        </div>`;
  };

  const generateEngineer = (engineer) => {
    return `<div class="card">
    <div class="card-header">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
    <li>${engineer.getId()}</li>
    <li>${engineer.getEmail()}</li>
    <li>${engineer.getGithub()}</li>
    </div>
    </div>`;
  };

  const generateIntern = (intern) => {
    return `<div class="card">
    <div class="card-header">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
    <li>${manager.getId()}</li>
    <li>${manager.getEmail()}</li>
    <li>${manager.getschool()}</li>
    </div>
    </div>`;
  };

  const html = [];

  html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)));
  html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateManager(engineer)).join(''));
  html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateManager(intern)).join(''));



  return html.join('');

  module.exports = (team) => {
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container>
    <div class="row>${generateTeam(team)}</div>
    </div>
</body>
</html>`;
  };
};
