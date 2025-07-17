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

let display = document.querySelector(".display");


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

let allButtons = document.querySelectorAll(".buttons");
allButtons.forEach(button => { button.addEventListener("click", ()=> {
    if(button.id === "seven"){
        display.textContent = "7";
    }else{
        console.log("fail")
    }

})

})