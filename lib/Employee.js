class Employee {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

const information = [];
const inquireInfo = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employees name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter the members name!');
            }
        }
    },
    {
        type:'input',
        name: 'id',
        message:"What is the member's ID number?",
        validate: idInput => {
            if (idInput) {
                return true;
            }else {
                console.log('Enter employee ID number');
            }
        }
    },
    {
        type:'input',
        name: 'email',
        message: 'What is the employees email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }else {
                console.log("Enter employee's email address!");
            }
        }
    }
]
getName() {
    
};
getId()
getEmail()
getRole()

module.exports=Employee;