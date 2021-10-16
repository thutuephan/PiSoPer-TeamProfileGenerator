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
    <div class="mt-4">
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
    <div class="mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="fas fa-glasses"></i>
            </div>
        </div>

        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: ${engineer.email}</p>
            <p class="github">GitHub: ${engineer.github}</p>
        </div>
    </div>
    `;
}

// create intern card
function internCard(intern) {
    return `
    <div class="mt-4">
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/style.css">
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
        </main>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  
    </body>
    </html>
   `;
}
module.exports = generateHTML;

