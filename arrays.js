// let a = [1,2,3];

// a.push(4)

// console.log(a[1])
// console.log(a)
// console.log(a.length)

// T = a.concat(5);  // use concat esp in react
// console.log(T)


// one way of doing arrays to new arrays
const arr = [1,2,3,4,5];
const newArr = [];

for(let i =0; i < arr.length; i++){
    newArr.push(arr[i]*2);
}
console.log(newArr)

// Better way to do the same

function newFn(i){         // this will transform the code for arrays elements to newArrys elements
    return i*2;             // when u want to transform arrays using map fn is better option
}
const ans = arr.map(newFn);
console.log(ans)

// or

// const ans = arr.map((i)=>{return i*2})
// console.log(ans)

// concepts in arr - map, filter