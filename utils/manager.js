const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super('Manager', name, id, email)
        this.officeNum = officeNum
    }

    getOffice(){
        return this.officeNum
    }
}

module.exports = Manager