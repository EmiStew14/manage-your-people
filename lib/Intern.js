const Employee = require('./lib/Employee');
class Intern extends Employee {
	constructor(id, name, email, school) {
		super(id, name, email);
		this.school = school;
	}
schoolType(){
    return this.school;
}

getRole(){
    return 'Intern';
}
}
const internQuestion = [
    {
        type:'input',
        name: 'school',
        message: 'What school does this person attend?',
        when: ({employeeType}) == 'Intern',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Enter the school name!');
            }
        }
    }
]

module.exports=Intern;