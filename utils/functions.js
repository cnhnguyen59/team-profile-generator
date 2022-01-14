const inquirer = require('inquirer')
const questions = require('./questions')

function addTeamMem(data){
    if (data.addTeamMem == 'Engineer'){
        inquirer
            .prompt(questions.engineer)
            .then(data =>{
                // create team member card
                addTeamMem(data)
            })
     } else if (data.addTeamMem == 'Intern'){
        inquirer
            .prompt(questions.engineer)
            .then(data =>{
                // create team member card
                addTeamMem(data)
            })
     } else {
         console.log('Generating Team Profile')
     }
}

function createCard(){
    

}

module.exports.addTeamMem = addTeamMem
