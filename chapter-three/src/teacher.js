import Person from './person';

class Teacher extends Person {
    constructor(id, name, age, klasses = []) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        let information = super.introduce() + ` I am a Teacher.`;
        if (this.klasses.length === 0) {
            information += ` I teach No Class.`;
        } else {
            information += ` I teach Class `;
            this.klasses.forEach((klass, index) => (index === (this.klasses.length - 1) ? information += `${klass.number}.` : information += `${klass.number}, `))
        }
        return information;
    }

    isTeaching(student) {
        return this.klasses.some(klass => klass.isIn(student));
    }
}

export default Teacher;


