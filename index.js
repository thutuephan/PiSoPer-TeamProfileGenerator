const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const teamMemberArray = [];

// created inquirer prompts for manager
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

            const manager = new Manager(answers.name, answers.ID, answers.Email, answers.officeNumber);
            teamMemberArray.push(manager);
            employeeType();
        })
}

// create a function asking if user wants to add more members to his team
function employeeType() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of employee would you want to add?',
            choices: ['Engineer', 'Intern', 'No more members'],
        },
    ])
    .then((answers) => {
        if (answers.employeeType) {
                // uses switch statement to evaluate the expression
            switch (answers.employeeType) {
                case 'Engineer':
                    addEngineer();
                     break;
                case 'Intern':
                    addIntern();
                    break;
                
                case 'No more members':
                    generateHTML();
                    break;
            }
        }
    })
}
// function that makes engineer object, adds to team array, then calls employeeType() again 
    
function addEngineer(){
    //     inquirer.prompt(/*questions about engineer to add*/)
    inquirer.prompt([
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
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.Name, answers.ID, answers.Email, answers.GitHub);
        teamMemberArray.push(engineer);
        employeeType();
    })
}
        /* function that makes intern object, adds to team array, then calls employeeType() again */ 
    
function addIntern() {
    inquirer.prompt([
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
            message: 'What is the email address of the intern?',
        },
        {
            type: 'input',
            name: 'SChool',
            message: 'Which school is the intern currently attending at?',
        },
        
    ])
    .then((answers) => {
        const intern = new Intern(answers.Name, answers.ID, answers.Email, answers.School);
        teamMemberArray.push(intern);
        employeeType();
    })
 
    .then ((answers) => {
        const generateContent = generateHTML(answers);
        // create a function to write README file
        fs.writeFile('index.html', generateContent, (err) =>
        err? console.log(err) : console.log('Successfully created an index.html file!')
        )
    })
}
// Function call to initialize app

init();
        
        





