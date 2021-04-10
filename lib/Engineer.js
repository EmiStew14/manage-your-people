const Employee = require('../lib/Employee');
class Engineer extends Employee {
	constructor(id, name, email, gitHub) {
		super(id, name, email);
		this.gitHub = gitHub;
        this.role= 'role';
	}
    github(){
        return this.gitHub;
    }
    getRole(){
        return this.role;
    }
}
module.exports=Engineer;