const Intern = require('../lib/Intern');

// testing Inter test using an intern object
describe('intern test', ()=> {
    describe('Initialization', ()=> {

        it('should create an inter object with its properties name, id, and email, school', () => {
        
            const intern = new Intern('Abby', 10, 'abby.clark@gmail.com', 'SMU');
            expect(intern.name).toEqual('Abby');
            expect(intern.id).toEqual(10);
            expect(intern.email).toEqual('abby.clark@gmail.com');
            expect(intern.school).toEqual('SMU');
        });
        
        it('should return school value', ( )=> {
            const intern = new Intern('Abby', 10, 'abby.clark@gmail.com', 'SMU');
            expect(intern.getSchool()).toEqual('SMU');
        });

        it('should get engineer role from getRole', () => {
            const intern = new Intern('Abby', 10, 'abby.clark@gmail.com');
            expect(intern.getRole()).toEqual('Intern');
        })

    })
})
