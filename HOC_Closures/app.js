//lexical Scope
function outer() {
    const name = "Shinchan";

    function inner() {
        
        console.log(name); 
    }

    inner();
}
outer(); 
//Closure
function createCounter() {
    let count = 0; 

    return function innerCounter() {
        count++;
        console.log(`Current count: ${count}`);
    };
}
const counter = createCounter();
counter(); 
counter(); 
counter(); 

//high-order
// Higher-Order Function that TAKES a function as an argument
function processNumbers(num1, num2, operation) {
    return operation(num1, num2);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(processNumbers(5, 3, add));      // Outputs: 8
console.log(processNumbers(5, 3, multiply)); // Outputs: 15


//callbacks
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); 
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);