const loadHTML = employee => {
  return `
  <h1>${employee.getRole()}</h1>
  <h2>${employee.getName()}</h2>`;
};

module.exports = teamArr => {
  let arr = [];
  for (let i = 0; i < teamArr.length; i++) {
    const pageHTML = loadHTML(teamArr[i]);
    arr.push(pageHTML);
  }
  joinedHTML = arr.join('');
  return joinedHTML;
};