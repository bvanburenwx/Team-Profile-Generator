const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `
        <div class="card custom-card">
          <div class="card-header custom-content">
            <h2 class="card-title custom-info-title">${manager.getName()}</h2>
            <h3 class="card-title custom-info-title">${manager.getRole()}</h3>
          </div>
          <div class="list-group list-group-flush custom-content">
            <li class="list-group-item custom-info">ID: ${manager.getId()}</li>
            <li class="list-group-item custom-info">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item custom-info">Office Number: ${manager.getOfficeNumber()}</li>
          </div>
        </div>`;
  };

  const generateEngineer = (engineer) => {
    return `
    <div class="card custom-card">
      <div class="card-header custom-content">
        <h2 class="card-title custom-info-title">${engineer.getName()}</h2>
        <h3 class="card-title custom-info-title">${engineer.getRole()}</h3>
      </div>
      <div class="list-group list-group-flush custom-content">
        <li class="list-group-item custom-info">ID: ${engineer.getId()}</li>
        <li class="list-group-item custom-info">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item custom-info">GitHub: <a href="github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
      </div>
    </div>`;
  };

  const generateIntern = (intern) => {
    return `
    <div class="card custom-card">
      <div class="card-header custom-content">
        <h2 class="card-title custom-info-title">${intern.getName()}</h2>
        <h3 class="card-title custom-info-title">${intern.getRole()}</h3>
      </div>
      <div class="list-group list-group-flush custom-content">
        <li class="list-group-item custom-info">ID: ${intern.getId()}</li>
        <li class="list-group-item custom-info">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item custom-info">School: ${intern.getSchool()}</li>
      </div>
    </div>`;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
  };
  module.exports = (team) => {
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
  <header> 
    <h1> My Team </h1>
  </header>
    <div class="container profile">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          ${generateTeam(team)}
        </div>
      </div>
    </div>
</body>
</html>`;
  };

