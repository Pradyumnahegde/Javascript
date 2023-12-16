function asyncFunc() {
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hello there");
        }, 2000)
    });
    return p;
}

async function main(){
    const value = await asyncFunc();
    console.log(value);
}

main();
console.log("Hello 1st");