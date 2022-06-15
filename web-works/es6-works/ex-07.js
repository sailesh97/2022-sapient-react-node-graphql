// working with rest and spread operators 

let nums = [12,23,34,5,66,88,99]; 

console.log(nums);

// when you use spread operators the array is broken and only the values are passed 
let anotherNums = [100, 200, ...nums]; 
console.log(anotherNums);

nums.push(444); 
console.log(anotherNums);
console.log(nums);


let p1 = {name:"aman", email:"aman@ps.com"};


let p2 = {...p1};
let p1Details = {city:"Bengaluru", state:"Karanataka", ...p2};
console.log(p1 === p2);
console.log(p1Details);