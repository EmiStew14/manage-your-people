const Employee = require('../lib/Employee');
class Manager extends Employee {
	constructor(id, name, email, office) {
		super(id, name, email);
		this.office = office;
	}
    github(){
        return this.office;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports=Manager;