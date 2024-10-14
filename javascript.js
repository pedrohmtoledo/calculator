
// create a array to store the buttons pressed. show the buttons pressed on the display.
const display = document.querySelector("#display");

let value = [];
const operandsArray = ["add", "subtract", "multiply", "divide"]
let firstOperator = null;
let secondOperator = null;
let operand = null;
let result;
let indexOfOperand;

const button = document.querySelectorAll("button");
button.forEach((button) => {
    button.addEventListener("click", () => {
        value.push(button.id)
        let number = document.createTextNode(button.id);
        display.appendChild(number);  
        getOperatorsAndOperand(value);    
    })
})


// function to breakdown the array clicked in the calculator and calculate using operate function.

function getOperatorsAndOperand(array){
    
    for (let i = 0; i < array.length; i++) {

        if(operandsArray.includes(array[i]) && array.indexOf(array[i]) === 0){
            firstOperator = 0;
            operand = array[i];
            indexOfOperand = array.indexOf(operand);
        
        }
        else if(operandsArray.includes(array[i]) && array.indexOf(array[i]) > 0 && firstOperator === null){
            operand = array[i];
            firstOperator = parseInt(array.slice(0,i).join(""));
            indexOfOperand = array.indexOf(operand); 
            console.log(indexOfOperand)
             
        }
        else if(operandsArray.includes(array[i]) && array.indexOf(array[i]) > 0 && firstOperator != null){
            secondOperator = parseInt(array.slice((indexOfOperand + 1), (array.length)).join(""))
            result = operate(firstOperator,secondOperator,operand);
            console.log(result);
              
        }       
            
    }
}

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







