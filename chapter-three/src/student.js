import Person from './person';

class Student extends Person {
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }

    introduce(){
        if(this.klass.leader){
            return `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`;
        }else {
            return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
        }
    }
}

export default Student


