add = (a, b) => a + b;

subtract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

let operator;
let nOne;
let nTwo;

let addButton = document.querySelector(".addition");
let subtractButton = document.querySelector(".subtraction");
let multiplyButton = document.querySelector(".multiplication");
let divideButton = document.querySelector(".division");


function operate(operator, a, b){

    if (operator === addButton){
        return add(a, b);
    }else if (operator === subtractButton){
        return subtract(a, b);
    }else if(operator === multiplyButton){
        return multiply(a, b);
    }else if(operator === divideButton){
        return divide(a, b);
    }else{
        return "null";
    }

}

console.log(operate(addButton, 3, 7))

console.log(operate(divideButton, 10, 5));

console.log(operate(multiplyButton, 7, 3));

console.log(operate(subtractButton, 3, 1));