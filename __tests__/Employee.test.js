const Employee = require('../lib/Employee');

test('Creates random Employee object', () =>{
    const employee = new Employee ('Optimus','555','autobots@mail.com')
    expect(employee.name).toBe('Optimus')
    expect(employee.id).toBe('555')
    expect(employee.email).toBe('autobots@mail.com')
});
