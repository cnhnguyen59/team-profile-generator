const inquirer = require('inquirer');
const questions = require('./src/questions')
const functions = require('./src/functions')
const Manager = require('./lib/manager')
/* const Engineer = require('./utils/engineer')
const Intern = require('./utils/intern') */

let team = []

function init(){
    inquirer
    .prompt(questions.manager)
    .then(data => {
        const employee = new Manager(data.name, data.ID, data.email, data.officeNum)

        team.push(employee)

        functions.addTeamMem(data.addTeamMem, team)
    })
}

init()


