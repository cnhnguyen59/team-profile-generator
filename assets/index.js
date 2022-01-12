const inquirer = require('inquirer');


const managerQ = [{ 
    type: 'text',
    name: 'name',
    message: 'Manager name:'
},
{ 
    type: 'text',
    name: 'email',
    message: 'Manager email:'
},
{ 
    type: 'text',
    name: 'ID',
    message: 'Manager ID:'
},
{ 
    type: 'text',
    name: 'officeNum',
    message: 'Manager office number:'
},
{ 
    type: 'list',
    name: 'addTeamMem',
    message: 'Add another team member?:',
    choices: ['Engineer', "Intern", 'None']
}]

inquirer
    .prompt(managerQ)
    .then(data => console.log(data))
    .then(data => {
        if (data.addTeamMem == 'Engineer'){
            inquirer.prompt(engineerQ)
        }
    } )
