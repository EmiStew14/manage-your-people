const Intern = require('../lib/Intern');

test('Creates random Intern object', () =>{
    const intern = new Intern ('Blurr','582','speedster@mail.com','cybertronEliteGuard')
    expect(intern.name).toBe('Blurr')
    expect(intern.id).toBe('582')
    expect(intern.email).toBe('speedster@mail.com')
    expect(intern.school).toBe('cybertronEliteGuard')
});