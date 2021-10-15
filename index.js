const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./utils/generateHTML.js");

// Create an array of questions for user input
const teamMemberArray = [];


function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: `What is the manager'name?`,
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Please enter his/her id.',

        },
        {
            type: 'input',
            name: 'Email',
            message: 'Please enter the email address of the manager.',

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter office number of the manager.',

        },
    ]
    )
        .then((answers) => {

            const manager = new Manager(answers.Name, answers.ID, answers.Email, answers.officeNumber);
            teamMemberArray.push(manager);
        })
}
init();
function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'Add member',
            message: 'What type of employee would you want to add?',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'Name',
            message: 'What is the name of the engineer?',
            
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is the id of the engineer?',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is the email address of the engineer?',
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'What is gitHub username of the engineer?',
        },
        
        {
            type: 'input',
            name: 'Name',
            message: 'What is the name of the intern?',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is the id of the intern?',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is the email address of the engineer?',
        },
        {
            type: 'input',
            name: 'SChool',
            message: 'Which school is the intern currently attending at?',
        },

    ])
    .then(answers => {
        if(answers.menu) {
            
        }
    })
}
// Function call to initialize app




// .then ((answers) => {
//     const generateContent = generateHTML(answers);
// // create a function to write README file
//     fs.writeFile('index.html', generateContent, (err) =>
//     err? console.log(err) : console.log('Successfully created an index.html file!')
//     );
// }
// );
