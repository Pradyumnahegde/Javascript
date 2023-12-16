 function sum(n){
    let ans = 1;
    for(let i=1; i<=1000; i++){
        ans+=i;}
    return ans;
 }
function sumOf(){
    console.log(sum(1000));
}

 setTimeout(sumOf,1000);
 console.log("Hello world");