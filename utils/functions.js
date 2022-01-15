const inquirer = require('inquirer')
const fs = require('fs')
const questions = require('./questions')
const Engineer = require('./engineer')
const Intern = require('./intern')
/* const htmlOutput =require('./generatehtml') */
let managerCard = ''
let teamMemCard = ''

function addTeamMem(data, team){
    if (data == 'Engineer'){
        inquirer
            .prompt(questions.engineer)
            .then(data =>{
                const employee = new Engineer (data.name, data.ID, data.email, data.github)

                team.push(employee)

                addTeamMem(data.addTeamMem, team)
            })
     } else if (data == 'Intern'){
        inquirer
            .prompt(questions.intern)
            .then(data =>{
                const employee = new Intern (data.name, data.ID, data.email, data.school)

                team.push(employee)

                addTeamMem(data.addTeamMem, team)
            })
     } else {
         console.log('Generating team profile...')
         team.forEach(employee => {
            let cardStyle = employee.getRole() == 'Manager'? 'bg-primary' : 'border-primary'
            let textColor = employee.getRole() == 'Manager'? 'text-white' : ''
            let uniqueQ =''
            let info =''
            if (employee.getRole() == 'Manager'){
                uniqueQ = 'Office Number'
                info = employee.getOffice()
            } else if (employee.getRole() == 'Engineer'){
                uniqueQ = 'Github'
                info = employee.getGithubUser()
            } else {
                uniqueQ = 'School'
                info = employee.getSchool()
            }
        
            let card =`
            <div class="card ${textColor} ${cardStyle} mx-2 mb-3" style="width: 20rem;">
                <div class="card-header">${employee.getRole()}</div>
                <div class="card-body">
                    <h4 class="card-title">${employee.getName()}</h4>
                    <p class="card-text">
                    ID: ${employee.getId()}<br>
                    Email: ${employee.getEmail()}<br>
                    ${uniqueQ}: ${info}
                    </p>
                </div>
            </div>`
        
            employee.getRole() == 'Manager' ? managerCard += card :teamMemCard += card
  
         });

         let htmlOutput = `
         <!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <meta http-equiv="X-UA-Compatible" content="IE=edge">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
             <link rel="stylesheet" href="./assets/bootswatch.journal.css"> 
             <title>Team Profile</title>
         </head>
         <body>
             <h1 class="bg-primary p-4 text-center" style="color:white; font-size: 40;">Team Profile</h1>
             
             <div class="container d-flex flex-column justify-content-center">
                 <div class="col-lg-12 d-flex justify-content-center" id="manager">
                     ${managerCard}
                 </div>
                 <div class="col-lg-12 d-flex flex-wrap justify-content-center" id="team">
                     ${teamMemCard}  
                 </div>
             </div>
             
             <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> 
             <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
             <script src="./assets/index.js"></script>
         </body>
         </html>
         `

         writeToFile('index.html', htmlOutput)
     }
}

function writeToFile(fileName, data) {  
    fs.writeFile(fileName, data, error =>
        error ? console.error(error) : console.log("HTML created"))
}

module.exports.addTeamMem = addTeamMem;
module.exports.managerCard = managerCard;
module.exports.teamMemCard = teamMemCard;
