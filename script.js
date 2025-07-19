add = (a, b) => a + b;

subtract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

//still need to work on floating point number accuracy within operate function - current returns are NOT right. 7/19 0355
//maybe it's just straight up to fixed?

function operate(a, b, operator){

    if (operator === "+"){
        let answer = add(a, b);
        return parseFloat(answer.toFixed(2));
    }else if (operator === "-"){
        let answer = subtract(a, b);
        return parseFloat(answer.toFixed(2));
    }else if(operator === "*"){
        let answer = multiply(a, b);
        return parseFloat(answer.toFixed(2));
    }else if(operator === "/"){
        let answer = divide(a, b);
        return parseFloat(answer.toFixed(2));
    }else{
        return "something went really wrong";
    }

}
//Finish logic for each button;

let display = document.querySelector(".display");
let bottomDisplay = document.querySelector(".bottom");
let topDisplay = document.querySelector(".top");

let allButtons = document.querySelectorAll(".buttons");
allButtons.forEach(button => { button.addEventListener("click", ()=> {
    if(button.id === "one"){
        let integer = 1;
        bottomDisplay.append(integer);
    }else if(button.id === "two"){
        let integer = 2;
        bottomDisplay.append(integer);
    }else if(button.id === "three"){
        let integer = 3;
        bottomDisplay.append(integer);
    }else if (button.id === "four"){
        let integer = 4;
        bottomDisplay.append(integer);
    }else if (button.id === "five"){
        let integer = 5;
        bottomDisplay.append(integer);
    }else if (button.id === "six"){
        let integer = 6;
        bottomDisplay.append(integer);
    }else if (button.id === "seven"){
        let integer = 7;
        bottomDisplay.append(integer);
    }else if (button.id === "eight"){
        let integer = 8;
        bottomDisplay.append(integer);
    }else if (button.id === "nine"){
        let integer = 9;
        bottomDisplay.append(integer);
    }else if (button.id === "zero"){
        let integer = 0;
        bottomDisplay.append(integer);
    }else if (button.id === "add"){
        let operator = " + ";
        topDisplay.append(bottomDisplay.textContent, operator);
        bottomDisplay.textContent = "";
    }else if (button.id === "subtract"){
        let operator = " - ";
        topDisplay.append(bottomDisplay.textContent, operator);
        bottomDisplay.textContent = "";
    }else if (button.id === "multiply"){
        let operator = " * ";
        topDisplay.append(bottomDisplay.textContent, operator);
        bottomDisplay.textContent = "";
    }else if (button.id === "divide"){
        let operator = " / ";
        topDisplay.append(bottomDisplay.textContent, operator);
        bottomDisplay.textContent = "";
    }else if (button.id === "decimal"){
        let operator = ".";
        bottomDisplay.append(operator);
    }else if (button.id === "clearAll"){
        bottomDisplay.textContent = "";
        topDisplay.textContent = "";
    }else if (button.id === "delete"){
        let currentDisplay = bottomDisplay.textContent;
        let newDisplay = currentDisplay.slice(0, -1);
        bottomDisplay.textContent = newDisplay;
    }else if (button.id === "clear"){
        bottomDisplay.textContent = "";
    }else if (button.id === "equals"){
       topDisplay.append(bottomDisplay.textContent);
       let operators = /[+\-*/]/;
       let problem = topDisplay.textContent;
       let integerArray = problem.split(operators);
       let numberOne = parseInt(integerArray[0].trim());
       let numberTwo = parseInt(integerArray[1].trim());
       let extractOperator = problem.split(" ");
       let finalOperator = extractOperator[1];
       bottomDisplay.textContent = operate(numberOne, numberTwo, finalOperator);
    }

})

})

//BELOW IS TESTING OF OTHER SCRIPT/LOGIC;

//when = is hit, take display info into operate, display operate's return as answer on display and 
// save the value (answer) to continue to be modified; delete will delete a single character within display
//clear will clear all data from functions and screen

// let fullExpression = display.textContent;
// let operatorIndex = fullExpression.indexOf("+" || "-" || "*" || "/");
// let numberBefore = fullExpression.slice(0, operatorIndex);
// let numberAfter = fullExpression.slice(operatorIndex,)

// let displayProblem = display.textContent;

// let displayProblem = display.textContent;
    //    let operators = /[+\-*/]/;
    //    let integerArray = displayProblem.split(operators);
    //    let numberOne = integerArray[0].trim();
    //    let numberTwo = integerArray[1].trim();
    //    console.log(numberOne);
    //    console.log(numberTwo);
       //first attempts at pulling the numbers out in order to get into function; I think i want to revisit this
       //have the display text area that initially shows the math problem return the answer on that text line
       //while putting the original problem one line above it