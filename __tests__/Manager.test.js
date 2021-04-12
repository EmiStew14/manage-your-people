const Manager = require("../lib/Manager");

test('Creates random Manager object', () =>{
    const manager = new Manager ('Ratchet','456','grumpydoc@mail.com','865')
    expect(manager.name).toBe('Ratchet')
    expect(manager.id).toBe('456')
    expect(manager.email).toBe('grumpydoc@mail.com')
    expect(manager.office).toBe('865')
});