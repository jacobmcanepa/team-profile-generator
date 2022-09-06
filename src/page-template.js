const loadHTML = employee => {
  return `
  <h1>${employee.getRole()}</h1>
  <h2>${employee.getName()}</h2>`;
};

module.exports = teamArr => {
  console.log(teamArr.forEach(loadHTML));
};