const inquirer = require('inquirer')
const questions = require('./questions')
const Engineer = require('./engineer')
const Intern = require('./intern')
let managerCard = ''
let teamMemCard = ''

function addTeamMem(data, team){
    console.log(data)
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
         console.log('Generating Team Profile')
         team.forEach(employee => {
            let cardStyle = employee.getRole() == 'Manager'? 'bg-primary' : 'bg-secondary'
            console.log(cardStyle)
            let textColor = employee.getRole() == 'Manager'? 'text-white' : ''
            console.log(textColor)
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
                employee.getSchool()
            }
        
            let card =`
            <div class="card ${textColor} ${cardStyle} mx-2 mb-3" style="width: 20rem;">
                <div class="card-header">${employee.getRole()}</div>
                <div class="card-body">
                    <h4 class="card-title">${employee.getName()}</h4>
                    <p class="card-text">
                    ID: ${employee.getId()}
                    Email: ${employee.getEmail()}
                    ${uniqueQ}: ${info}
                    </p>
                </div>
            </div>`
        

            employee.getRole() == 'Manager' ? managerCard += card :teamMemCard += card
  
         });

         console.log(managerCard)
         console.log(teamMemCard)
     }
}

module.exports.addTeamMem = addTeamMem
module.exports.managerCard = managerCard
module.exports.teamMemCard = teamMemCard
