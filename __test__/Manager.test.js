const Manager = require('../lib/Manager');

// testing Manager test using manager object
describe('manager test', ()=> {
    describe('Initialization', ()=> {

        it('should create an manager object with its properties name, id, and email, officeNumber and return officeNumber', () => {
        
            const manager = new Manager('Abby', 10, 'abby.clark@gmail.com', 101);
            expect(manager.officeNumber).toEqual(101);
        });

        it('should get manager role from getRole', () => {
            const manager = new Manager('Abby', 10, 'abby.clark@gmail.com');
            expect(manager.getRole()).toEqual('Manager');
        })

    })
})






// describe('engineer tests', () => {
//     it('should have the correct github', () => {
//         // test for correct github value here
//     }) 
//     it('should have the correct email', () => {
//         // test for correct email value here
//     }) 
//  })