const inquirer = require('inquirer');
const fs = require('fs'); 

const generateHTML = require("./utils/generateHTML.js");

// Create an array of questions for user input

function init() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'Name',
            message: '',
        },
        {
            type: 'input',
            name: 'Role',
            message: 'Please give description for this project.',

        },
        {
            type: 'input',
            name: 'ID',
            message: 'What motivated your to build this app?',

        },
        {
            type: 'input',
            name: 'Email',
            message: 'How do you install your app?',
        
        },
        {
            type: 'input',
            name: 'Office number',
            message: 'How will your app be used?',
        
        },
        {
            type: 'input',
            name: 'GitHub username',
            message: 'Who would you like to give credits to in this project?',
        
        },
        {
            type: 'input',
            name: 'School',
            message: 'What command do you use to test this app?'
        
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
