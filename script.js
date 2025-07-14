function add(a, b){
let sum = a + b;
return sum;
};



function subtract(a, b){
    let sum = a - b;
    return sum;
};



function multiply(a, b){
    let sum = a * b;
    return sum;
};



function divide(a, b){
    let sum = a / b;
    return sum;
}

let numberOne = 33;
let numberTwo = 45;
let operator;

function operate(op){
    if (op == "addition"){
        add(numberOne, numberTwo);
    }else{
        return "oops";
    }
}

console.log(operate("addition"))

console.log(add(3, 2))