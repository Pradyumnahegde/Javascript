// Callback fns

function square (n){
    return n*n;
}
function cube(n){
    return n*n*n;
}

function sumOfSomething(a,b,fn){
        const x = fn(a);
        const y = fn(b);
    
        return x+y;
    }

console.log(sumOfSomething(3,4,square));
console.log(sumOfSomething(3,4,cube));

// Anonymous fns

console.log(sumOfSomething(3,4,(n) => {return n*n}));


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




