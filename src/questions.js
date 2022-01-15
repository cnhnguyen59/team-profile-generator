const manager = [{ 
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
    message: 'Add team member?:',
    choices: ['Engineer', 'Intern', 'No']
}]
const engineer = [{ 
    type: 'text',
    name: 'name',
    message: 'Engineer Name:'
},
{ 
    type: 'text',
    name: 'email',
    message: 'Engineer Email:'
},
{ 
    type: 'text',
    name: 'ID',
    message: 'Employee ID:'
},
{ 
    type: 'text',
    name: 'github',
    message: 'Github username:'
},
{ 
    type: 'list',
    name: 'addTeamMem',
    message: 'Add another team member?:',
    choices: ['Engineer', "Intern", 'No']
}]
const intern = [{ 
    type: 'text',
    name: 'name',
    message: 'Intern Name:'
},
{ 
    type: 'text',
    name: 'email',
    message: 'Intern Email:'
},
{ 
    type: 'text',
    name: 'ID',
    message: 'Intern ID:'
},
{ 
    type: 'text',
    name: 'school',
    message: 'School:'
},
{ 
    type: 'list',
    name: 'addTeamMem',
    message: 'Add another team member?:',
    choices: ['Engineer', "Intern", 'No']
}]

module.exports.manager = manager;
module.exports.engineer = engineer;
module.exports.intern = intern;