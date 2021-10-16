// create a global array to add each member's card
const cardArray = [];
function generateHTML(empArray) {
    //switch statement here
    switch(employeeCard) {
        case 1:
            role = 'Manager';
            break;
        case 2:
            role = "Engineer";
            break;
        case 3:
            role = "Intern";
            break;
    }
    cardArray.push(managerCard);
  
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
        <div class="card-body>
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

        <div class="card-body>
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: ${engineer.email}</p>
            <p class="github">GitHub: ${engineer.gitHub}</p>
        </div>
    </div>

    `;
}

// create intern card
function interCard(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="fas fa-user-graduate"></i>


            </div>

        <div class="card-body>
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: ${intern.email}</p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>

    `;
}



module.exports = generateHTML;

// function finalHTML(){
//     //<!DOCTYPE html>
//    <html lang="en">
//    <meta charset="UTF-8">
//    <title>Page Title</title>
//    <meta name="viewport" content="width=device-width,initial-scale=1">
//    <link rel="stylesheet" href="">
//    <style>
//    </style>
//    <script src=""></script>
//    <body>
   
//      // cardArray.join("")
   
//    </body>}