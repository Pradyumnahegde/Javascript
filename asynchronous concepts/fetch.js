// function fetchData(){
//     return new Promise(function(resolve, reject){
//         fetch('https://api.weather.gov/gridpoints/OKX/32,35/forecast')
//         .then(response => response.json())
//         .then(data => resolve(data.properties.periods[1].shortForecast))
//     })
// }

// function displayData(weather){
//     console.log(weather)
// }

// function onError(err){
//     console.log(`Error ${err}`)
// }


// fetchData()
//  .then(displayData)
//  .catch(onError)


// using async await with fetch
// now this is syntactically better than promises
async function fetchData(){
    const data = await fetch('https://api.weather.gov/gridpoints/OKX/32,35/forecast');
    const result = await data.json()
    console.log(result.properties.periods[1].shortForecast)
}

fetchData()

// see with promises now

async function fetchData1(){
    fetch('https://api.weather.gov/gridpoints/OKX/32,35/forecast')
    .then(data => data.json())
    .then(result => {
        console.log(result.properties.periods[1].shortForecast)
    })
}

fetchData1()