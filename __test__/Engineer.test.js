const Engineer = require('../lib/Engineer');

// testing Engineer test using engineer object
describe('engineer test', ()=> {
    describe('Initialization', ()=> {

        it('should create an engineer object with its properties name, id, and email, gitHub username', () => {
        
            const engineer = new Engineer('Abby', 10, 'abby.clark@gmail.com', 'abbyclark29');
            expect(engineer.name).toEqual('Abby');
            expect(engineer.id).toEqual(10);
            expect(engineer.email).toEqual('abby.clark@gmail.com');
            expect(engineer.github).toEqual('abbyclark29');
        });
        
        it('should return gitHub username', ( )=> {
            const engineer = new Engineer('Abby', 10, 'abby.clark@gmail.com', 'abbyclark29');
            expect(engineer.getGithub()).toEqual('abbyclark29');
        })

        it('should get engineer role from getRole', () => {
            const engineer = new Engineer('Abby', 10, 'abby.clark@gmail.com');
            expect(engineer.getRole()).toEqual('Engineer');
        })

    })
})
