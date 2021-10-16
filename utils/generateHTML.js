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
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="fas fa-mug-hot"></i>

            </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: ${manager.email}</p>
            <p class="officenumber">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;


}

// create engineer card
function engineerCard(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="fas fa-glasses"></i>
            </div>

        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: ${engineer.email}</p>
            <p class="github">GitHub: ${engineer.gitHub}</p>
        </div>
    </div>
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="fas fa-glasses"></i>
            </div>

        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: ${engineer.email}</p>
            <p class="github">GitHub: ${engineer.gitHub}</p>
        </div>
    </div>


    `;
}

// create intern card
function internCard(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="fas fa-user-graduate"></i>


            </div>

        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: ${intern.email}</p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>

    `;
}


function finalHTML() {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Amazing Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="nav" id="navbar">
                <span class="nav justify-content-center" id="nav-text">My Team</span>
            </nav>
        
        </header>
        <main>
            <div class="container">
                <div class="row justify-content" id="team-card">

                ${cardArray.join("")}
                </div>
            </div>
    
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    </body>
    </html>
   `;
}
module.exports = generateHTML;

