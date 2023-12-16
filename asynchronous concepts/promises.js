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