function getData(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(46)
        },1)
    })
}

async function start(){
    const result = await getData()   // await lets u get the data like how we would in synchronous than using .then with logic inside it
    console.log(result)
}

start()    // async await

getData()   // promises
.then(result => {
    console.log(result)      // we need to write this part to get data using .then instead use await
})

// both await and .then are used to handle promises!!



// Error handling
// try and catch

// function getData(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve('here is your data')
//         },1)
//     })
// }

// async function start(){
//     try{
//         const result = await getData()
//         console.log(`Success: ${result}`)
//     }catch(error){
//         console.log(`Error: ${error}`)
//     }
// }

// start()