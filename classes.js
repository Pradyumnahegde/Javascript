class Animal {
    constructor(name, voice){
        this.name = name;
        this.voice = voice;
    }
    static Call(){
        console.log("Animal")
    }

    prntAnimal(animal){
        console.log("Animal is "+this.name)
    }
}


let dog = new Animal("dog", "bow");
dog.prntAnimal()
let cat = new Animal("cat","meow");
cat.prntAnimal()

Animal.Call() // only static fns can be called directly


// OOP's basic example


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); 
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying hard.`);
    }
}


class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}


const john = new Person("John Doe", 30);
const alice = new Student("Alice Smith", 20, "A");
const mrSmith = new Teacher("Mr. Smith", 45, "Mathematics");


john.greet();
alice.greet();
alice.study();
mrSmith.greet();
mrSmith.teach();
