function add(){
    let a = 10, b = 2;

    function sum(){
        return a+b;
    } 
    return sum();
}

let cal = add();
console.log(cal)

// Arrow functions

let a = (name)=>{
    return name;
}
console.log(a("Hello"));