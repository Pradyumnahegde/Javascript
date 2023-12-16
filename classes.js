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
