// working with destructuring 


let p1 = {
    firstName:"Vikas", 
    lastName:"Verma", 
    email:"vikas@ps.com", 
    city:"Bengaluru"
};


// version 1 
// let firstName = p1.firstName; 
// let lastName = p1.lastName; 

// version 2 
// let {firstName, lastName, email, city:mycity} = p1;

let {firstName, lastName} = p1;
console.log(`First Name ${firstName}, Last Name ${lastName}`);
// console.log(mycity);

let nums =[1,3,5,6,445,77,88,90]; 
let  [n1, n2, ...restOfNumbers] = nums;
console.log(n1);
console.log(n2);
console.log(restOfNumbers);


function display(firstName, lastName, city, email) {
    console.log(`Hi ${firstName} how are you in ${city}`); 
}

display(p1.firstName,null,  p1.city);



function display1({firstName, lastName, city, email}) {
    console.log(`Hi ${firstName} how are you in ${city}`); 
}

display1(p1);