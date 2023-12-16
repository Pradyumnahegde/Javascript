const dog = {
    name  : "dog",
    sound : "bow"
}

const cat = {
    name: "cat",
    sound: "meow"
}

function prntAnimal(animal){
    console.log("Animal is "+ animal["name"]);
}

// prntAnimal(dog);

// ex 1 
// const obj = {
//     name : "Anna",
//     roll : 12,

//     sum : function (a,b){
//         console.log(a + b);
//     }
// }

// let ob = obj;  // if constructor then call new obj =>     new obj;
// // let k = ob.sum(1,2);

// setTimeout(ob.sum.bind(obj.sum(2,3)), 1500);


// ex 2
// const obj = {
//     name : "Anna",
//     roll : 12,

//     sum : function (a,b){
//         console.log(a +b);
//     }
// }
 
// setTimeout(obj.sum.bind(obj.sum(2,3)), 1500);               // use bind



// const arto = {
//     name: 'Arto Hellas',
//     greet: function() {
//       console.log('hello, my name is ' + this.name)
//     },
//   }
  
//   setTimeout(arto.greet, 1000) // dissapearence of this keyword, it can be preserved by using bind
//   setTimeout(arto.greet.bind(arto), 1000);