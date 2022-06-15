// hoisting, this works because in JS the function / variables which are declared are hoisted 


let s1 = hello(); 
console.log(s1);

// hoisted function 
function hello() {
    return "Hey i'm from Hello"; 
}

////////////////////////


let greet = function() {
    return "Hey i'm trying to greet"; 
}

let s2 = greet();
console.log(s2);

console.log(myval);
var myval = 1111; 
console.log(myval);