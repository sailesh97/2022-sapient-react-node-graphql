// to show working of promise 

function divide(n1, n2) {

    
   return new Promise((resolve, reject) => {
        if(typeof n1 != 'number') {
            reject("Please enter first param as number")
            return; 
        }

        if(typeof n2 != 'number') {
            reject("Please enter second param as number");
            return;
        }
        if(n2 === 0) {
            reject ("Sorry cannot divide by zero");
            return;
        }

        resolve(n1/n2);
    });
   
}

console.log("Start of program");
const a = "100a";
const b = "10a";

// version 1 
// let divPromise = divide(a, b); 
// divPromise.then(res => console.log("Res ", res));
// divPromise.catch(err => console.log("Error" , err));


// version 2 
// let divPromise = divide(a, b); 
// divPromise
//     .then(res => console.log("Res ", res))
//     .catch(err => console.log("Error" , err)); 

// version 3 - es7 
setTimeout(async () => {
    try {
        let result = await divide(a, b); 
        console.log("result " , result);
    }catch(err) {
        console.log("error : ", err);
    }
}, 0);

console.log("End of program");

