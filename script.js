add = (a, b) => a + b;

subtract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

let operator;
let nOne;
let nTwo;

//will need? or will need to update these for operate function to work;

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
//Finish logic for each button;
let display = document.querySelector(".display");

let allButtons = document.querySelectorAll(".buttons");
allButtons.forEach(button => { button.addEventListener("click", ()=> {
    if(button.id === "seven"){
        let integer = 7;
        display.append(integer);
    }else if(button.id ==="eight"){
        let integer = 8;
        display.append(integer);
    }

})

})

//when = is hit, take display info into operate, display operate's return and save the value to continue to be modified;