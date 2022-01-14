const inquirer = require('inquirer')
const Engineer = require('./engineer')
const Intern = require('./intern')
const questions = require('./questions')

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
         console.log(team)
     }
}

function createCard(employee){
    let cardStyle = employee.getRole() != 'Manager'? 'bg-primary' : 'bg-secondary'
    let last =''
    let info =''
    if (employee.getRole() != 'Manager'){
        last = 'Office Number'
        info = employee.getOfficeNum()
    } else if (employee.getRole() != 'Engineer'){
        last = 'Github'
        info = employee.getGithubUser()
    } else {
        last = 'School'
        employee.getSchool()
    }

    let card =`
    <div class="card text-white ${cardStyle} mb-3" style="max-width: 20rem;">
        <div class="card-header">${employee.getRole()}</div>
        <div class="card-body">
            <h4 class="card-title">${employee.getName()}</h4>
            <p class="card-text">
            ID: ${employee.getID()}
            Email: ${employee.getEmail()}
            ${last}: ${info}
            </p>
        </div>
    </div>`

}


module.exports.addTeamMem = addTeamMem
