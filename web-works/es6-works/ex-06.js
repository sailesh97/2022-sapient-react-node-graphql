// closures 




function one(val1) {
    return function(val2) {
        return val1 + val2; 
    }
}


let oneRef = one(5);
let innerOneRef = oneRef(10); 

console.log(oneRef);
console.log(innerOneRef);