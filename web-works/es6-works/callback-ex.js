// program to work and know the use of call back 

// the idea to have callback is to show error first strategy 
function divide(n1, n2, callback) {

    if(typeof callback !='function') {
        throw "Callback function is mandatory";
    }

    setTimeout(() => {
            
        if(typeof n1 != 'number'){
            callback ("Please enter first param as number");
            return; 
        }
        if(typeof n2 !='number') {
            callback ("Please enter second param as number");
            return; 
        }
        if(n2 ===0) {
            callback ("Sorry cannot divide by zero");
            return; 
        }

        callback(null, n1/n2);
    }, 0);

}

console.log("Start of program");
const a = 100;
const b = 10;

let res = divide(a, b, (err, res) => {
    if(err){
        console.log("There is an Error : ", err);
    }else {
        console.log(`Result ${res}`);
    }
}); 

console.log("End of program");

