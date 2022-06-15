let name1 = "Rajitha"; 
let age1 = 22; 
let someString=`hey you know what ${name1} is ${age1} years old`;

function myFunction(name, age) {
    console.log(`Name ${name}`);
    console.log(`Age ${age}`);
}

// tagged function 
function myFunction1 (tempString, name, age) {
    console.log(tempString);
    console.log(`Name ${name}`);
    console.log(`Age ${age}`);
}

// with variable args / spread operator
function myFunction2 (tempString, ...values) {
    console.log(tempString);
    console.log(values);
}


// myFunction(name, age)
myFunction1 `hey you know what ${name1} is ${age1} years old`;
myFunction2 `hey you know what ${name1} is ${age1} years old`;

