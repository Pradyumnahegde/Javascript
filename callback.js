// Callback fns

// function myDisplayer(value) {
//   console.log(value);
// }

// function myCalculator(num1, num2, myCallbackFn) {
//   let sum = num1 + num2;
//   myCallbackFn(sum);
// }


// setTimeout(function() { myCalculator(2,2, myDisplayer)}, 3000)

// myCalculator(5, 5, myDisplayer);


// function square (n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }

// function sumOfSomething(a,b,callbackFn){
//         const x = callbackFn(a);
//         const y = callbackFn(b);
    
//         return x+y;
//     }

// console.log(sumOfSomething(3,4,square));
// console.log(sumOfSomething(3,4,cube));

// Anonymous fns
// console.log(sumOfSomething(3,4,(n) => {return n*n}));
// this is vague way of puting that fns 


// function square (n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }

// function sumOfSquare(a,b){
//     const x = square(a);
//     const y = square(b);

//     return x+y;
// }

// function sumOfCubes(a,b){
//     const x = cube(a);
//     const y = cube(b);

//     return x+y;
// }

// console.log(sumOfSquare(3,4));
// console.log(sumOfCubes(2,3));


function orderPizza(ready){
  console.log('pizza ordered')
  setTimeout(()=>{
    ready()
  },3000)
}

function pizzaReady(){
  console.log(`Pizza is ready`)
  eatPizza()
}

function eatPizza(){
  console.log('eating pizza')
}

orderPizza(pizzaReady)
console.log('Call my friend')

// callback hell
function f1(callback){
  callback()
}
function f2(callback){
  callback()
}
function f3(callback){
  callback()
} 
// 
thing1(()=>{
  thing2(()=>{
    thing3(()=>{

    })
  })
})