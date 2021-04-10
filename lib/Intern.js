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