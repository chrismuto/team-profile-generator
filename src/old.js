const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/template');
const employee = require('./lib/Employee');
const manager = require('.lib/Manager');
const engineer = require('.lib/Engineer');
const intern = require('.lib/Intern');
const employees = [];
console.log(employees);
// const { getMaxListeners } = require('process');

const testEmployee = new employee(Chris, 23, "chrismuto@gmail.com");

inquirer
    .prompt([{
            type: 'input',
            name: 'name',
            message: 'Enter name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter id number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please input office number',
        }]
    );
    .then (({ text, addAnotherTask }) => {
        this.list.addTask(text);
            if (addAnotherTask) {
                this.getNewTask();
            } else {
                writeHTML();
            }

addEngineer();
inquirer
    .prompt([{
            type: 'input',
            name: 'name',
            message: 'Enter name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter id number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please input github username',
        }]
    );

    addIntern();
inquirer
    .prompt([{
            type: 'input',
            name: 'name',
            message: 'Enter name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter id number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where do you currently go to school',
        }]
    );
writeHTML();
const test = template(answers, role);
fs.writeFile('index.html', test, (err) =>
    err ? console.error(err) : console.log('Generating README.md...')
);
    })