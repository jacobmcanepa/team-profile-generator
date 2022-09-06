const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const getManagerData = function() {
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
          message: 'Enter team manager id number:',
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
    ]);
};

getManagerData()
  .then(answers => {console.log(answers)});