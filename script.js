add = (a, b) => a + b;

subtract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

let operator;
let nOne;
let nTwo;

//will even need? or will need to update these for operate function to work;

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
    if(button.id === "one"){
        let integer = 1;
        display.append(integer);
    }else if(button.id === "two"){
        let integer = 2;
        display.append(integer);
    }else if(button.id === "three"){
        let integer = 3;
        display.append(integer);
    }else if (button.id === "four"){
        let integer = 4;
        display.append(integer);
    }else if (button.id === "five"){
        let integer = 5;
        display.append(integer);
    }else if (button.id === "six"){
        let integer = 6;
        display.append(integer);
    }else if (button.id === "seven"){
        let integer = 7;
        display.append(integer);
    }else if (button.id === "eight"){
        let integer = 8;
        display.append(integer);
    }else if (button.id === "nine"){
        let integer = 9;
        display.append(integer);
    }else if (button.id === "zero"){
        let integer = 0;
        display.append(integer);
    }else if (button.id === "add"){
        let operator = "+";
        display.append(operator);
    }else if (button.id === "subtract"){
        let operator = "-";
        display.append(operator);
    }else if (button.id === "multiply"){
        let operator = "*";
        display.append(operator);
    }else if (button.id === "divide"){
        let operator = "/";
        display.append(operator);
    }else if (button.id === "decimal"){
        let operator = ".";
        display.append(operator);
    }else if (button.id === "clearAll"){
        display.textContent = "";
    }else if (button.id === "delete"){
        let currentDisplay = display.textContent;
        let newDisplay = currentDisplay.slice(0, -1);
        display.textContent = newDisplay;
    }else if (button.id === "equals"){
        console.log("not ready yet!");
    }

})

})

//when = is hit, take display info into operate, display operate's return as answer on display and 
// save the value (answer) to continue to be modified; delete will delete a single character within display
//clear will clear all data from functions and screen