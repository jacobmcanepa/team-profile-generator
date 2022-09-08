const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const pageTemplate = require("./src/page-template");
const generatePage = require("./utils/generate-page");
let teamArr = [];

const getManagerData = () => {
  return inquirer
    .prompt([
        {
          type: 'text',
          name: 'name',
          message: "Enter team manager name",
          validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter a name!');
              return false;
            }
          }
        },
        {
          type: 'text',
          name: 'id',
          message: 'Enter employee ID:',
          validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter an id!');
              return false;
            }
          }
        },
        {
          type: 'text',
          name: 'email',
          message: 'Enter team manager email address:',
          validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter an email address!');
              return false;
            }
          }
        },
        {
          type: 'text',
          name: 'officeNumber',
          message: 'Enter office number:',
          validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter an office number!');
              return false;
            }
          }
        }
    ])
    .then(data => {
      const manager = new Manager(data.name, parseInt(data.id), data.email, parseInt(data.officeNumber));
      teamArr.push(manager);
      //console.log(teamArr);
      promptMemberType();
    });
};

const promptMemberType = () => {

  console.log(`
  =================
  Add a New Member?
  =================
  `);

  return inquirer
    .prompt(
      {
        type: 'checkbox',
        name: 'memberType',
        message: 'Choose a new type of member to add to your team or choose "Finished" to finish building your team:',
        choices: ['Engineer', 'Intern', 'Finished'],
        validate: input => {
          if (input.length > 0) {
            return true;
          } else {
            console.log('Please pick an option!');
            return false;
          }
        }
      })
      .then(answer => {
        if (answer.memberType[0] === 'Engineer') {
          getEngineerData();
        } 
        else if (answer.memberType[0] === 'Intern') {
          getInternData();
        } else {
          const pageHTML = pageTemplate(teamArr);
          generatePage(pageHTML)
            .then(generatePageResponse => {
              console.log(generatePageResponse.message);
            });
        }
      });
};

const getEngineerData = () => {
  return inquirer
    .prompt([
      {
        type: 'text',
        name: 'name',
        message: 'Enter a name:',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter a name!');
            return false;
          }
        }
      },
      {
        type: 'text',
        name: 'id',
        message: 'Enter employee ID:',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter an ID!');
            return false;
          }
        }
      },
      {
        type: 'text',
        name: 'email',
        message: 'Enter an email:',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter an email!');
            return false;
          }
        }
      },
      {
        type: 'text',
        name: 'github',
        message: 'Enter Github username:',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter a Github username!');
            return false;
          }
        }
      }
    ])
    .then(data => {
      const engineer = new Engineer(data.name, parseInt(data.id), data.email, data.github);
      teamArr.push(engineer);
      //console.log(teamArr);
      promptMemberType();
    });
};

const getInternData = () => {
  return inquirer
  .prompt([
    {
      type: 'text',
      name: 'name',
      message: 'Enter a name:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'id',
      message: 'Enter employee ID:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter an ID!');
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'email',
      message: 'Enter an email:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter an email!');
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'school',
      message: 'Enter in a University/College:',
      validate: input => {
        if (input) {
          return true;
        } else {
          console.log('Please enter a school name!');
          return false;
        }
      }
    }
  ])
  .then(data => {
    const intern = new Intern(data.name, parseInt(data.id), data.email, data.school);
    teamArr.push(intern);
    //console.log(teamArr);
    promptMemberType();
  });
};

getManagerData();
