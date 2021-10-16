const { Separator } = require("inquirer");

// create a global array to add each member's card
const cardArray = [];

function generateHTML(empArray) {
    // wrap the switch statement in a for loop so that we can iterate through the intire array
    console.log(empArray);
    for (let i = 0; i < empArray.length; i++) {
        const teamMember = empArray[i];
        //switch statement here
        switch (empArray[i].getRole()) {
            case 'Manager':
                console.log(teamMember);
                const managerHTML = managerCard(teamMember);
                cardArray.push(managerHTML);
                break;
            case 'Engineer':
                const engineerHTML = engineerCard(teamMember);
                cardArray.push(engineerHTML);
                break;
            case 'Intern':
                const internHTML = internCard(teamMember);
                cardArray.push(internHTML);
                break;
        }
    }
    return finalHTML();

}
// create card for each employee type
// create generate manager card
function managerCard(manager) {
    return `
    <div class="col-lg-3 col-md-4 col-sm-3">
            <div class="shadow d-flex 
            justify-content-center
            align-items-center p-3 bg-light rounded-lg
            flex-column">
            <div class="icon">
                <i class="fas fa-mug-hot"></i>
        
            </div>
            <div class="card-header my-2">
                <h3 class="text-grey">${manager.name}</h3>
                <h4 class="text-grey">Manager</h4>
            </div>
            <div class="card-body">
                <p class="text-grey id">ID: ${manager.id}</p>
                <p class="text-grey email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="text-grey officenumber">Office Number: ${manager.officeNumber}</p>
            </div>
            
            </div>
    </div>
    `;
}

// create engineer card
function engineerCard(engineer) {
    return `
       
        <div class="col-lg-3 col-md-4 col-sm-3">
            <div class="shadow d-flex 
            justify-content-center
            align-items-center p-3 bg-light rounded-lg
            flex-column">
            <div class="icon">
                <i class="fas fa-glasses"></i>
                        
            </div>
            <div class="card-header my-2">
                <h3 class="text-grey">${engineer.name}</h3>
                <h4 class="text-grey">Engineer</h4>
            </div>
    
            <div class="card-body">
                <p class="text-grey id">ID: ${engineer.id}</p>
                <p class="text-grey email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="text-grey github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
            </div>
        </div>
    
            
    `;
}

// create intern card
function internCard(intern) {
    return `
      
        <div class="col-lg-3 col-md-4 col-sm-3">
            <div class="shadow d-flex 
            justify-content-center
            align-items-center p-3 bg-light rounded-lg
            flex-column">
            <div class="icon">
                <i class="fas fa-user-graduate"></i>
                        
            </div>
            <div class="card-header my-2">
                <h3 class="text-grey">${intern.name}</h3>
                <h4 class="text-grey">Intern</h4>
            </div>
    
            <div class="card-body">
                <p class="text-grey id">ID: ${intern.id}</p>
                <p class="text-grey email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="text-grey github">School: ${intern.school}</p>
            </div>
            </div>
        
        </div>
    
    `;
}


function finalHTML() {
    return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="./src/style.css">
        <title>Amazing Team Profile</title>
    </head>
    <body>
        <section class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-white text-center my-5">Meet My Team</h2>
                    <div class="row">
                         ${cardArray.join("")}
                    </div>

                </div>
            </div>
        
        </section>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

    </body>
    </html>
   `;
}
module.exports = generateHTML;

