const inquirer = require('inquirer')


const managerQ = [
    inquirer.Text (name = 'name', message = 'Manager name:'),
    inquirer.Text (name = 'email', message = 'Manager email:'),
    inqiorer.TextText (name = 'ID', message = 'Manager ID:'),
    inqiurer.Text (name = 'officeNum', message = 'Manager Office Number:'),
    inquirer.List (name = 'addTeamMember', message = 'Add a team member?', choices = ['Engineer', "Intern", 'None'])
]

let answers = inquirer.prompt(managerQ)

console.log(answers)