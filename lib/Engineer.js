class Engineer extends Employee {
	constructor(id, name, email, gitHub) {
		super(id, name, email);
		this.gitHub = gitHub;
	}
    github(){
        return this.gitHub;
    }
    getRole(){
        return 'Engineer';
    }
}
const engineerQuestion = [
    {
        type:'input',
        name: 'github',
        message: "Input Engineer's github username",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter the github username!');
            }
        }
    }
]
module.exports=Engineer;