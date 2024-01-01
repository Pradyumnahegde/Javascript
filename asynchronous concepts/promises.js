// observe how fns work by changing time
// callback hell?
// setTimeout(function(){
//     console.log("first");

//     setTimeout(function () {
//         console.log("second")
//     }, 2000);

//     setTimeout(function () {
//         console.log("second")
//     }, 3000);
// }, 1000);


// Promises ( to fix callback hell)

//  async await syntax, promise chaining fixes the callback hell

function promisified(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, duration);
    });
    return p;
}

const ans = promisified(1000);
ans.then(function(){
    console.log("timeout is done")
})



// resolve reject => promises
// "reject" is another function used in Promises. It indicates that the asynchronous operation failed or encountered an error. 


// function fetchData(simulateSuccess = True) {     // check when = false
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (simulateSuccess) {
//           resolve( console.log("Hello, async/await!"));  // u can also do : {data: "Hello, async/await!"}
//         } else {
//           reject(new Error("Failed to fetch data"));
//         }
//       }, 2000);
//     });
    
//   }
  
// fetchData();