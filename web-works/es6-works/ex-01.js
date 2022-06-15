// the scope of variable 

let num1 = 1; 

function test() {
    var num1 = 1; 
    num1 ++; 
}

console.log(num1); 

test();

console.log(num1); 


////////////////  

function test1 () {
    for(var i=0; i<5; i++) {
        console.log("Value of i is " + i);
    }
    console.log("OutSide - Value of i is " + i);
}

test1(); 

