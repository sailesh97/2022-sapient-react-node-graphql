// to show working of template strings 
let s1 = "Prit";
let s2 = "Ranjan";
let age = 25; 
let s3 =`i'm hoping this 

is a long string`


console.log(s1);
console.log(s2);
console.log(s3);

console.log("Full Name " + s1 +",  " + s2);
// to use something call template strings 
console.log(`With Template String - Full Name ${s1}, ${s2}`)
console.log(`${s1} ${s2} is ${age<18?"Minor":"Major"}`)