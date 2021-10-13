const inquirer = require('inquirer');
const fs = require('fs'); 

const generateHTML = require("./utils/generateHTML.js");

// Create an array of questions for user input

function init() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'Name',
            message: 'Please enter the name of your team member.',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Please enter his/her id.',

        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter the email of your team member.',

        },
        {
            type: 'list',
            name: 'Role',
            message: 'Choose the type of role that suits the employee:',
            choices: ['Manager', 'Engineer', 'Intern'],
        
        },
        {
            type: 'input',
            name: 'Office number',
            message: 'Please enter office number of the manager.',
        
        },
        {   type: 'confirm',
            name: 'Add member',
            message: 'Would you like to add another team member?'

        },
        {
            type: 'input',
            name: 'GitHub username',
            message: 'Please provide the GitHub username of the engineer.',
        
        },
        {
            type: 'input',
            name: 'School',
            message: 'Please'
        
        },
        {
            type: 'list',
            name: 'License',
            message: 'Which license is used for your app?',
            choices: ['MIT', 'Apache2.0', 'GPL3.0'],
        
        },
        
    ]
    )
    .then ((answers) => {
        const generateContent = generateHTML(answers);
    // create a function to write README file
        fs.writeFile('index.html', generateContent, (err) =>
        err? console.log(err) : console.log('Successfully created an index.html file!')
        );
    }
    );
}
// Function call to initialize app
init();
