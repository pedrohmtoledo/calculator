
// create a array to store the buttons pressed. show the buttons pressed on the display.
const display = document.querySelector("#display");

let value = [];
const operandsArray = ["add", "subtract", "multiply", "divide"]
let firstOperator = null;
let secondOperator = null;
let operand = [];
let result;
// let indexOfOperand;
// let operatorCounter = 0;

const button = document.querySelectorAll("button");
button.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.className === "number"){ 
            value.push(button.id);
            // let numbersTyped = parseInt(value.join(""))
            // document.getElementById("display").innerHTML = ""
            // textDIsplay = document.createTextNode(numbersTyped);
            // display.appendChild(textDIsplay);
            // getOperatorsAndOperand(value); 
        }
        else if (button.className === "operand" && typeof result != "number"){ 
            operand.push(button.id);
            console.log(result)
            getOperatorsAndOperand(value); 
            document.getElementById("display").innerHTML = "";
        }
        else if (button.id === "clear"){
            firstOperator = null;
            secondOperator = null;
            operand = [];
            value = [];
            document.getElementById("display").innerHTML = "";
        }
        else if(typeof result === "number" && button.className === "operand"){
            document.getElementById("display").innerHTML = result;
            result = null;
        }
       
        console.log(value)
        console.log(operand.length)
    })
})


// function to breakdown the array clicked in the calculator and calculate using operate function.
// fix the function below

function getOperatorsAndOperand(array){
            
    if(operand.length > 0 && array.length === 0){
        operand.shift()
        console.log(operand);
        console.log("primeiro if")
            
        
    }
    else if(operand.length > 0 && array.length > 0 && typeof firstOperator != "number"){
        firstOperator = parseInt(array.slice().join(""));
        array.splice(0, array.length);
        operand.slice(0, operand.length)
        console.log("test")
        console.log(firstOperator)
        console.log(array)
                         
    }
    else if(operand.length === 2 && typeof(firstOperator) === "number"){
        secondOperator = parseInt(array.slice().join(""))
        result = operate(firstOperator,secondOperator,operand[0]);
        operand.shift()
        console.log(`this is first ${firstOperator}`)
        console.log(`this is second ${secondOperator}`);
        console.log(result);
        console.log(array);
        array.splice(0, array.length);
        firstOperator = result;
        console.log("ultimo if")


            // console.log(array);
            // array.splice(0,array.length, result);
            // array.push(operand);
            // firstOperator = result;
            // secondOperator = null;
            // console.log(value);
            // console.log(firstOperator);
            // console.log("test");
            
            // indexOfOperand = array.indexOf(array[i])
            // console.log(firstOperator)
            // console.log(indexOfOperand)   
              
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







