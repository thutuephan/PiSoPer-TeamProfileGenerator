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
            name: 'name',
            message: `What is the manager'name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter his/her id.',
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log('Please enter a number.')
                    return false;
                } else {
                    return true;
                }
            }


        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of the manager.',

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter office number of the manager.',
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log('Please enter office number of the manager.')
                    return false;
                } else {
                    return true;
                }
            }

        },
    ]
    )
        .then((answers) => {

            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
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
        if (answers.addMember) {
                // uses switch statement to evaluate the expression
            switch (answers.addMember) {
                case 'Engineer':
                    addEngineer();
                     break;
                case 'Intern':
                    addIntern();
                    break;
                
                case 'No more members':
                    generateTeam();
                    break;
            }
        }
    })
}
// function that makes engineer object, adds to team array, then calls employeeType() again 
    
function addEngineer(){
    //     inquirer.prompt(questions about engineer to add)
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
    
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the engineer?',
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log('Please enter a number.')
                    return false;
                } else {
                    return true;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the engineer?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is github username of the engineer?',
        },
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMemberArray.push(engineer);
        employeeType();
    })
}
    //   function that makes intern object, adds to team array, then calls employeeType() again 
    
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the intern?',
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log('Please enter a number.')
                    return false;
                } else {
                    return true;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the intern?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Which school is the intern currently attending at?',
        },
        
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMemberArray.push(intern);
        employeeType();
    })
}
    
// Function call to initialize app
function generateTeam () {
    const generateContent = generateHTML(teamMemberArray);
        // create a function to write README file
        fs.writeFile('index.html', generateContent, (err) =>
        err? console.log(err) : console.log('Successfully created an index.html file!')
        )
} 

init();
        
        





