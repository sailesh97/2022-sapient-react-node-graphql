// spread/rest operators with function 

function fn1(name1, name2, name3="No Name") {
    console.log(`Hello ${name1} ${name2} ${name3}`);
}

fn1('Ravivarma', 'Rohit', 'Sourabh'); 
fn1('Ravivarma', 'Rohit'); 


//  if you are using spread operator on the function then that should be the last variable 
function fn2(name, ...names) {
    console.log("First Name ", name);
    console.log(`Hello ${names}`);
}
fn2('Ravivarma', 'Rohit', 'Hitesh', 'Himanshu'); 
