// showing to pass function as argument 


/* function fnWelcome() {
    console.log("Welcome to React Training");
}

setInterval(fnWelcome, 2000);
 */

// setInterval(()  =>   console.log("Welcome to React Training") , 2000);


// few es6 function which take function as argument 
let names =['Santosh', 'Rajitha', 'prit', 'Sandeep']; 

// let firstChars = names.map((val) => {return val.charAt(0)}); 
let firstChars = names.map((val) =>   val.charAt(0)); 

console.log(firstChars);

firstChars.forEach((val) => console.log(val.toUpperCase()));

// with find index 
console.log(names.findIndex((val) => val ==='Harry')>=0?"Found" :"Not Found"); 

// with index of 
console.log(names.indexOf("Sandeep"));



