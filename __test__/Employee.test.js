const Employee = require('../lib/Employee');

describe('employee test', ()=> {
    describe('Initialization', ()=> {

        it('should create an employee object with its properties name, id, and email', () => {

        
            const employee = new Employee('Abby', 10, 'abby.clark@gmail.com');
            expect(employee.name).toEqual('Abby');
            expect(employee.id).toEqual(10);
            expect(employee.email).toEqual('abby.clark@gmail.com');
        });

        it('should get employee name from getName', () => {
            const employee = new Employee('Abby', 10, 'abby.clark@gmail.com');
            expect(employee.getName()).toEqual('Abby');
        });

        it('should get employee id from getId', () => {
            const employee = new Employee('Abby', 10, 'abby.clark@gmail.com');
            expect(employee.getId()).toEqual(10);
        });

        it('should get employee email from getEmail', () => {
            const employee = new Employee('Abby', 10, 'abby.clark@gmail.com');
            expect(employee.getEmail()).toEqual('abby.clark@gmail.com');
        });
        it('should get employee role from getRole', () => {
            const employee = new Employee('Abby', 10, 'abby.clark@gmail.com');
            expect(employee.getRole()).toEqual('Employee');
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