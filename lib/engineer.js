const Employee = require('./employee')

class Engineer extends Employee{
    constructor(name, id, email, githubUser){
        super('Engineer', name, id, email)
        this.githubUser = githubUser
    }

    getGithubUser(){
        return this.githubUser
    }
}

module.exports = Engineer