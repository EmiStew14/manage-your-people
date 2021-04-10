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
const managerQuestion = [
    {
        type:'input',
        name: 'office',
        message: "Input office number",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Enter the office number!');
            }
        }
    }
]

module.exports=Manager;