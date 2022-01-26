const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');
const employees = [];
console.log(employees);

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
        }
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager);
        addNewEmployee();
    });

function addNewEmployee() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'employeeType',
            message: 'Engineer or Intern?',
            choices: [
                'engineer',
                'intern'
            ]
        }])
        .then(answers => {
            if (answers.employeeType === 'engineer') {
                addEngineer();
            } else {
                addIntern();
            }
            console.log(answers)
        });
}

function addEngineer() {
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
                message: 'Please input github profile',
            },
            {
                type: 'list',
                name: 'addMore',
                message: 'would you like to add another employee?',
                choices: [
                        'yes',
                        'no'
                    ]
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineer);
            console.log(answers);
            if (answers === 'yes') {
                addNewEmployee();
            } else {
                return;
            }
        })
};

// function addIntern() {
//     inquirer
//     .prompt([{
//             type: 'input',
//             name: 'name',
//             message: 'Enter name',
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'Enter id number',
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'Enter email address',
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: 'Please input current school',
//         }
//     ])
//     .then((answers) => {
//         const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
//         employees.push(intern);
//         inquirer
//         .prompt([{
//             type: 'input',
//             name: 'addMore',
//             message: 'would you like to add another employee?',
//             choices: [
//                 'yes',
//                 'no'
//             ]
//             .then(answers => {
//                 console.log(answers);
//             })
//             .then(answers => {
//                 if (answers === 'yes') {
//                     addNewEmployee();
//                 } else {
//                     return;
//                 }
//             })
//          }]);
//     });
// }