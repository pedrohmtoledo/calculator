
// create a array to store the buttons pressed. show the buttons pressed on the display.
const display = document.querySelector("#display");
// variables ta will be use by the calculator code
let value = [];
let firstOperator = null;
let firstOperatorArray = [];
let secondOperator = null;
let secondOperatorArray = [];
let operand = [];
let result = null;
let equalArray = [];
let operantionLinger = false;
console.log(displayTwoDecimalsIfany(3.01))

const button = document.querySelectorAll("button");
button.forEach((button) => {
    button.addEventListener("click", () => {

        if (button.className === "number"){ 
            value.push(button.id);
            let numbersTyped = parseInt(value.join(""))
            displayNumber(numbersTyped); 
            whenNumberIsPressed(value)
                        
        }
        else if (button.className === "operand"){ 
            operand.push(button.id);
            displayNumber("");
            whenOperandIsPressed(value, operand)     
        }
        else if (button.id === "clear" ){
            whenClearIsPressed();
            displayNumber("");
           
        }
        else if (button.id === "equal"){
            equalArray.push(button.id);
            whenEqualisPressed(value, operand);
            
        }
      })
})

// Function to exec a operation with 2 numbers
function operate(first, second, operand){
    let result = 0;
    switch(operand){
        case "add":
            return result = add(first,second);
            
        case "subtract":
            return result = subtract(first,second);
            
        case "multiply":
            return result = multiply(first,second);
            
        case "divide":
           return result = divide(first,second);


    }
}

// Functions for the basics operations(+,-,*,/)
function add(a, b){
    return a + b;
}

function subtract(a ,b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}
 
function divide(a, b){
    return a / b;
}

// function to insert values to the display
function displayNumber(displayText){
    document.getElementById("display").innerHTML = "";
    textDisplay = document.createTextNode(displayText);
    display.appendChild(textDisplay);
}

// This function caculates de result when equal is pressed. it also sets the operationLinger to true in case the use wants to use the result to the next op
function whenEqualisPressed(array, operandArray){
    if (equalArray.length === 1 && operandArray.length > 0 && secondOperatorArray.length > 0){
        secondOperator = parseFloat(secondOperatorArray.slice().join(""));
        result = parseFloat(operate(firstOperator,secondOperator,operandArray[0]));
        array.splice(0, array.length);
        operandArray.shift();
        displayNumber(displayTwoDecimalsIfany(result));
        firstOperator = result;
        secondOperator = null;
        secondOperatorArray.splice(0, secondOperatorArray.length);
        equalArray.pop();
        operantionLinger = true;
        
    }
    else {
        equalArray.pop();
    }

}

// Function to store the numbers pressed in second or first operator array.
function whenNumberIsPressed (array){
    if (firstOperator === null){
        firstOperatorArray = array;
    }
    else {
        secondOperatorArray = array;
    }
}

// this is the main function. When operand is pressed it stores the value on firstOperatorArray in firstOperator and the secondOperatorArray in secondOperator
// it also use the operate function to do the operation.
function whenOperandIsPressed (array, operandArray){
    if (operantionLinger === true && operandArray.length > 1 && array.length === 0){
        operandArray.shift()
    }
    if (operandArray.length > 0 && array.length === 0 && operantionLinger === false){
        operandArray.shift()
    }
    else if (operandArray.length === 1 && array.length > 0){
        firstOperator = parseFloat(firstOperatorArray.slice().join(""));
        array.splice(0, array.length);
        firstOperatorArray.splice(0, firstOperatorArray.length);
    }
    else if (operandArray.length === 2 && typeof firstOperator === "number" && secondOperatorArray.length > 0){
        secondOperator = parseFloat(secondOperatorArray.slice().join(""));
        result = parseFloat(operate(firstOperator,secondOperator,operandArray[0]));
        array.splice(0, array.length);
        operandArray.shift();
        displayNumber(displayTwoDecimalsIfany(result));
        firstOperator = result;
        secondOperator = null
        secondOperatorArray.splice(0, secondOperatorArray.length);
        operantionLinger = false;

    }
}

// function to clear all variables when clear is pressed
function whenClearIsPressed () {
    firstOperator = null;
    firstOperatorArray = [];
    secondOperator = null;
    secondOperatorArray = [];
    result = null;
    value = [];
    operand = [];
    equalArray = [];
}

function displayTwoDecimalsIfany(amount){
    return (amount % 1 !== 0) ? amount.toFixed(2) :  amount;
}