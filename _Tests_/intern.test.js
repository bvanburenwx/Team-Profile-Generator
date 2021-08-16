const Intern = require('../lib/Intern');


describe('Intern', () => {
    describe('Initialization', () => {
        it('creates an object for intern', () => {
            const name = 'Brandon';
            const id = 50;
            const email = 'bvanburenwx@gmail.com';
            const school = 'ATU'

            const addIntern = new Intern(name, id, email, school);

            expect(addIntern.name).toEqual(name);
            expect(addIntern.id).toEqual(id);
            expect(addIntern.email).toEqual(email);
            expect(addIntern.school).toEqual(school);
        });
    });
});

describe('getSchool', () => {  
    it('gets employee school', () => {
        const name = 'Brandon';
        const id = 50;
        const email = 'bvanburenwx@gmail.com';
        const school = 'ATU'

        const addIntern = new Intern(name, id, email, school);

        expect(addIntern.getSchool()).toEqual(school);
    });
});

describe('getRole', () => {
    it('gets role from employee upon input', () => {
        const name = 'Brandon';
        const id = 50;
        const email = 'bvanburenwx@gmail.com';
        const school = 'ATU'

        const addIntern = new Intern(name, id, email, school);    

        expect(addIntern.getRole()).toEqual('Intern');
    });
});