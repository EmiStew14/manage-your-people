const Engineer = require('./lib/Engineer');

test('Creates random Engineer object', () =>{
    const engineer = new Engineer ('Starscream','345','screamerrulez@mail.com','starscream4')
    expect(engineer.name).toBe('Optimus')
    expect(engineer.id).toBe('555')
    expect(engineer.email).toBe('autobots@mail.com')
    expect(engineer.github).toBe('starscream4')
});