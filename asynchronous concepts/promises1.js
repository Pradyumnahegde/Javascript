//Promises = resolve and reject and we use .then


function getWeather() {
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve('sunny')
        },100)
    })
}

function getWeatherInfo(weather){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            switch(weather){
            case 'sunny' : resolve('Sunny☀️')
            break;
            case 'cloudy': resolve('Cloudy☁️')
            break;
            default: reject('No info of weather')
            }
        },100)
    })
}

function onSuccess(data){
    console.log(`Success ${data}`)
}
function onError(error){
    console.log(`Error ${error}`)
}
function onFinally(){
    console.log('Everything done')
}

getWeather()
.then(getWeatherInfo)
// .then(onSuccess,onError)  // .then(resolve, reject) is the kind of syntax
.then(onSuccess)
.catch(onError)
.finally(onFinally)