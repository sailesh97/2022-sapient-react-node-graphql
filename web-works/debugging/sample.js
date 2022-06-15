
function getNum1() {
    return document.getElementById("num1").value;
}

function getNum2() {
    return document.getElementById("num2").value;
}


function updateResults() {
    document.querySelector("#mydiv").innerHTML = parseInt(getNum1()) + parseInt(getNum2());
}


document.getElementById("btnAdd").addEventListener('click', ()=> {
    if(getNum1()==='' || getNum2() ==='') {
        document.querySelector("#mydiv").innerHTML ="Please enter values"; 
    }else {
        updateResults();
        
    }
});

var arr =[[1,2,3,4], [5,6,7,8], [11,22,33,44]]

function doSomething() {
    console.log("One");
    setTimeout(() => {
        console.log("Two");
    }, 2000);
    
    console.log("Three");
    console.log("Four");
}