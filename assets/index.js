const inquirer = require('inquirer');
/* const menu = require('inquirer-menu');
const addMenu = require('./utils/menu'); */
const questions = require('./utils/questions')
const functions = require('./utils/functions')

function init(){
    inquirer
    .prompt(questions.manager)
    .then(data => {
        console.log(data)
        functions.addTeamMem(data)
        //create manager card
        /* if (data.addTeamMem == 'Engineer'){
           /*  menu(addMenu.createMenu)
                .then(()=> console.log('Generating team profile'))
                .catch((err) => console.log(err.stack))
                inquirer(questions.engineer)
                    .prompt(data =>{
                        console.log(data)
                    })
        } else if (data.addTeamMem == 'Intern'){
            inquirer(questions.intern)
                    .prompt(data =>{
                        console.log(data)
                    })
        } else {
            console.log('Geberating Team Profile')
        } */
    })
}

/* function addTeamMem(data){
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
} */

init()


