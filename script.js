add = (a, b) => a + b;

subtract = (a, b) => a - b;

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

function operate(a, b, operator){

    if (operator === "+"){
        let answer = add(a, b);
        return parseFloat(answer.toFixed(4));
    }else if (operator === "-"){
        let answer = subtract(a, b);
        return parseFloat(answer.toFixed(4));
    }else if(operator === "*"){
        let answer = multiply(a, b);
        return parseFloat(answer.toFixed(4));
    }else if(operator === "/"){
        let answer = divide(a, b);
        return parseFloat(answer.toFixed(4));
    }else{
        return "something went really wrong";
    }

}

let display = document.querySelector(".display");
let bottomDisplay = document.querySelector(".bottom");
let topDisplay = document.querySelector(".top");
let allButtons = document.querySelectorAll(".buttons");
let decimalCount = 0;
let equalCount = 0;

allButtons.forEach(button => { button.addEventListener("click", ()=> {


//prevent multiple decimal places in a single number;

    if (button.id === "decimal"){
        decimalCount++;
    }
    if (button.id === "decimal" && decimalCount > 1){
        return;
    }

//prevent user from hitting equal back to back

    if (button.id === "equals"){
        equalCount++;
    }
    if (button.id === "equals" && equalCount > 1){
        return;
    }

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
        if(topDisplay.textContent.includes(" + ") || topDisplay.textContent.includes(" - ") 
            || topDisplay.textContent.includes(" * ") || topDisplay.textContent.includes(" / ")){
            topDisplay.append(bottomDisplay.textContent);
            let operators = /[+\-*/]/;
            let problem = topDisplay.textContent;
            let integerArray = problem.split(operators);
            let numberOne = parseFloat(integerArray[0].trim());
            let numberTwo = parseFloat(integerArray[1].trim());
            let extractOperator = problem.split(" ");
            let finalOperator = extractOperator[1];
            bottomDisplay.textContent = operate(numberOne, numberTwo, finalOperator);
            topDisplay.textContent = "";
            decimalCount = 0;
            equalCount = 0;
        }
        topDisplay.append(bottomDisplay.textContent, operator);
        bottomDisplay.textContent = "";
        decimalCount = 0;
        equalCount = 0;
    }else if (button.id === "subtract"){
        let operator = " - ";
        if(topDisplay.textContent.includes(" + ") || topDisplay.textContent.includes(" - ") 
            || topDisplay.textContent.includes(" * ") || topDisplay.textContent.includes(" / ")){
            topDisplay.append(bottomDisplay.textContent);
            let operators = /[+\-*/]/;
            let problem = topDisplay.textContent;
            let integerArray = problem.split(operators);
            let numberOne = parseFloat(integerArray[0].trim());
            let numberTwo = parseFloat(integerArray[1].trim());
            let extractOperator = problem.split(" ");
            let finalOperator = extractOperator[1];
            bottomDisplay.textContent = operate(numberOne, numberTwo, finalOperator);
            topDisplay.textContent = "";
            decimalCount = 0;
            equalCount = 0;
        }
        topDisplay.append(bottomDisplay.textContent, operator);
        bottomDisplay.textContent = "";
        decimalCount = 0;
        equalCount = 0;
    }else if (button.id === "multiply"){
        let operator = " * ";
        if(topDisplay.textContent.includes(" + ") || topDisplay.textContent.includes(" - ") 
            || topDisplay.textContent.includes(" * ") || topDisplay.textContent.includes(" / ")){
            topDisplay.append(bottomDisplay.textContent);
            let operators = /[+\-*/]/;
            let problem = topDisplay.textContent;
            let integerArray = problem.split(operators);
            let numberOne = parseFloat(integerArray[0].trim());
            let numberTwo = parseFloat(integerArray[1].trim());
            let extractOperator = problem.split(" ");
            let finalOperator = extractOperator[1];
            bottomDisplay.textContent = operate(numberOne, numberTwo, finalOperator);
            topDisplay.textContent = "";
            decimalCount = 0;
            equalCount = 0;
        }
        topDisplay.append(bottomDisplay.textContent, operator);
        bottomDisplay.textContent = "";
        decimalCount = 0;
        equalCount = 0;
    }else if (button.id === "divide"){
        let operator = " / ";
        if(topDisplay.textContent.includes(" + ") || topDisplay.textContent.includes(" - ") 
            || topDisplay.textContent.includes(" * ") || topDisplay.textContent.includes(" / ")){
            topDisplay.append(bottomDisplay.textContent);
            let operators = /[+\-*/]/;
            let problem = topDisplay.textContent;
            let integerArray = problem.split(operators);
            let numberOne = parseFloat(integerArray[0].trim());
            let numberTwo = parseFloat(integerArray[1].trim());
            let extractOperator = problem.split(" ");
            let finalOperator = extractOperator[1];
            bottomDisplay.textContent = operate(numberOne, numberTwo, finalOperator);
            topDisplay.textContent = "";
            decimalCount = 0;
            equalCount = 0;
        }
        topDisplay.append(bottomDisplay.textContent, operator);
        bottomDisplay.textContent = "";
        decimalCount = 0;
        equalCount = 0;
    }else if (button.id === "decimal"){
        let operator = ".";
        bottomDisplay.append(operator);
    }else if (button.id === "clearAll"){
        bottomDisplay.textContent = "";
        topDisplay.textContent = "";
        decimalCount = 0;
    }else if (button.id === "delete"){
        let currentDisplay = bottomDisplay.textContent;
        let newDisplay = currentDisplay.slice(0, -1);
        bottomDisplay.textContent = newDisplay;
        decimalCount = 0;
            if (bottomDisplay.textContent.includes(".")){
            decimalCount = 1;
            }
    }else if (button.id === "clear"){
        bottomDisplay.textContent = "";
        decimalCount = 0;
    }else if (button.id === "equals"){
       topDisplay.append(bottomDisplay.textContent);
       let operators = /[+\-*/]/;
       let problem = topDisplay.textContent;
       let integerArray = problem.split(operators);
       let numberOne = parseFloat(integerArray[0].trim());
       let numberTwo = parseFloat(integerArray[1].trim());
       let extractOperator = problem.split(" ");
       let finalOperator = extractOperator[1];
       bottomDisplay.textContent = operate(numberOne, numberTwo, finalOperator);
       topDisplay.textContent = "";
       decimalCount = 0;
    }

})

})

//if top display has an operator, operator hit => evaluate bottom display with top display, display answer on bottom display;