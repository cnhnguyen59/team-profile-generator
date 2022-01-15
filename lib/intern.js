const Employee = require('./employee')

class Intern extends Employee{
    constructor(name, id, email, school){
        super('Intern', name, id, email)
        this.School = school
    }

    getSchool(){
        return this.school
    }
}

module.exports = Intern