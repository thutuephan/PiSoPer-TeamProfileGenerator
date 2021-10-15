const Employee = require('../lib/Employee');

describe('employee test', ()=> {
    describe('Initialization', ()=> {

        it('should create an employee object with its properties name, id, and email', ()=> {

        
        const employee = new Employee('Abby', 10, 'abby.clark@gmail.com');
        expect(employee.name).toEqual('Abby');
        expect(employee.id).toEqual(10);
        expect(employee.email).toEqual('abby.clark@gmail.com');
        });


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