const Engineer = require('../lib/Engineer');

test('Creates random Engineer object', () =>{
    const engineer = new Engineer ('Starscream','345','screamerrulez@mail.com','starscream4')
    expect(engineer.name).toBe('Starscream')
    expect(engineer.id).toBe('345')
    expect(engineer.email).toBe('screamerrulez@mail.com')
    expect(engineer.gitHub).toBe('starscream4')
});