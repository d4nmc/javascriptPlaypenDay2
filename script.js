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

// EXERCISE 1
// The major difference between functions and function expressions are that functions are used globally making it available throughout our code. whereas function expressions are limited to where the function is available keeping the global scope light and maintain clean syntax.

// Create a function that takes in 2 parameters num1 and num2 and subtracts the two numbers.

// function subT(num1, num2) {
//     return console.log(num1 - num2);
// }

// subtract(50,10);

// const arrowFunctionSubtract = (num1, num2) => {

// return console.log(num1-num2);
// }

// arrowFunctionSubtract(-60,-110);


// EXERCISE 2
// Create a function expression called welcome that take in name, age,gender as a parameters. The outcome should be like so:
// e.g. "My name is Felix Cited, i am 20 years old and of gender Male"


// const welcome = function(name,age,gender){
//     return console.log(`My name is ${name}, I am ${age} years old and I identify as a ${gender}`);
    
//     }

//     welcome("Dwayne Johnson",48,"Rock");
//     welcome("Felix Cited",34,"Male");

  
// EXERCISE 3    
// Create an arrow function called powerUp that takes in two values n1 and n2. The arrow function will return the power of the two numbers.

//    e.g.
    
//         n1=2, n2=3 will return 8 (2 x 2 x 2);
    
//         n1=3, n2=3 will return 27 (3 x 3 x 3);
    
//         hint use Math.pow()

// Solution from QA

// const powerUp = (n1, n2) => Math.pow (n1, n2); 

//     console.log(powerUp(-3,3));

