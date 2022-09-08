const cardHTML = employee => {
  if (employee.getRole() === 'Manager') {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-3">
    <div class="card">
      <div class="card-header bg-primary">
        <h2 class="text-white">${employee.getName()}</h2>
        <h5 class="text-white">${employee.getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${employee.getOfficeNum()}</li>
      </ul>
    </div>
  </div>`;
  }
  else if (employee.getRole() === 'Engineer') {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-3">
    <div class="card">
      <div class="card-header bg-primary">
        <h2 class="text-white">${employee.getName()}</h2>
        <h5 class="text-white">${employee.getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>
      </ul>
    </div>
  </div>`;
  }
  else if (employee.getRole() === 'Intern') {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 pt-3">
    <div class="card">
      <div class="card-header bg-primary">
        <h2 class="text-white">${employee.getName()}</h2>
        <h5 class="text-white">${employee.getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li class="list-group-item">School: ${employee.getSchool()}</li>
      </ul>
    </div>
  </div>`;
  }
};

const generateCards = teamArr => {
  let arr = [];
  for (let i = 0; i < teamArr.length; i++) {
    const pageHTML = cardHTML(teamArr[i]);
    arr.push(pageHTML);
  }
  joinedHTML = arr.join('');
  return joinedHTML;
};

module.exports = teamArr => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  <title>Team Profile</title>
</head>
<body>
  <header class="bg-danger text-center text-white pt-4 pb-4">
  <h1>My Team</h1>
  </header>

  <main class="container pt-5">
    <div class="row justify-content-center">
      ${generateCards(teamArr)}
    </div>
  </main>
</body>
</html>`;
};