const inquirer = require('inquirer');
/* const menu = require('inquirer-menu');
const addMenu = require('./utils/menu'); */
const questions = require('./utils/questions')
const functions = require('./utils/functions')
const Manager = require('./utils/manager')
const Engineer = require('./utils/engineer')
const Intern = require('./utils/intern')

function init(){
    inquirer
    .prompt(questions.manager)
    .then(data => {
        const  manager = new Manager(data.name, data.ID, data.email, data.officeNum)
        console.log(manager)
        /* functions.addTeamMem(data) */
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

init()


