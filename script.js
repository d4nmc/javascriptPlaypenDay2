'use strict'; // works more cleanly / prevents mistakes!

// Savs Notes to go with first video

/*  Functions are methods - they do something 
*   Required: An output
*   Required: A name
*   Optional: Parameters
*/

// add(3,4);
// addition(3,4); // THROW AN ERROR! - UNACCEPTABLE BEHAVIOUR

// ! Function Declaration - HOITS (DON'T USE!!!)

// function add(a , b){
//     console.log(a + b);
// }

// //! Function Expression

// const addition = function(a,b){
//     console.log(a+b);
// }

// //! Arrow function - ES6 (Latest Standard / Best Practise)

// //? SYNTAX: const NAMEOFFUNCTION = (params) => { body }

// const secondAddition = (a,b) => {
//     // Method body
//     console.log(a + b);
// }

// ! One line Arrow function
// const subtraction = (a,b) => console.log(a-b);

// EXERCISE
// The major difference between functions and function expressions are that functions are used globally making it available throughout our code. whereas function expressions are limited to where the function is available keeping the global scope light and maintain clean syntax.

// Create a function that takes in 2 parameters num1 and num2 and subtracts the two numbers.

function subT(num1, num2) {
    return num1 - num2;
}
console.log (subT(50,10));

// const subtraction = (num1, num2) => console.log(10-300); // nope

// Create a function expression called welcome that take in name, age,gender as a parameters. The outcome should be like so:
// e.g. "My name is Felix Cited, i am 20 years old and of gender Male"

const welcome = function(name,age,gender){
    return console.log(`My name is ${name}, I am ${age} years old and I identify as a ${gender}`);
    }
   
    welcome("Dwayne Johnson",48,"Rock");