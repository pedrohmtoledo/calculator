
// Function to exec a operation with 2 numbers

let firstOperator = 33;
let secondtOperator = 11;
let operand = "divide";

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






// const a = 5
// const b = 9

// console.log(add(a,b))
// console.log(subtract(a,b))
// console.log(divide(a,b))

console.log(operate(firstOperator,secondtOperator,operand))


