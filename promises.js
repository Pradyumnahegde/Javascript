const fs = require('fs');

// my user asynchronous fn
function readMe(){
    return new Promise(function(resolve){
        fs.readFile('a.txt', "utf-8", function(err,data){
            resolve(data);
        });
    })
}

// callback fn
function onDone(data){
    console.log(data);
}

readMe().then(onDone);


//  how is promise
// promise has pending, resolve, rejected
// for promise you have to pass the function(resolve)       
// var asyn = new Promise(function(resolve){             // defining side
//     resolve("iam promise");
// });

// function callback() {
//     console.log(asyn);                          
// }

// asyn.then(callback);                                  // calling side