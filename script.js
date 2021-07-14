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
// need to look an import SAVS solution

//    e.g.
    
//         n1=2, n2=3 will return 8 (2 x 2 x 2);
    
//         n1=3, n2=3 will return 27 (3 x 3 x 3);
    
//         hint use Math.pow()

// Solution from QA

// const powerUp = (n1, n2) => Math.pow (n1, n2); 

//     console.log(powerUp(-3,3));

// SCOPE

        // Scope defines how variables can be seen / accessed
        // Use the let keyword to specify scope to the current block
        // If you don't use let then the variable has global scope
        // Unless you declare a variable in a function or block it is of global scope
        // Scope chains define how an identifier is looked up - start from the inside and work out
        //     Check if there is a local variable IF NOT then check if there is a global variable
        // If there is no local or global variable then one is added to the global scope!

//* SCOPE = Visibility of a VARIABLE in a file

const someFunction = () => {

    //? LOCAL SCOPE - Lives within the method
    let name = `Billy bob joe`;

    console.log(`${name} called from the function`);

}

//! We need the brackets to actually invoke the function!!!
// someFunction();

//? GLOBAL SCOPE - Visibile to everyone / Use it everywhere / Accessible within the whole file

let hello = `hello world`;

//? created without a let/const - VAR and hoists to the top of the file
let variableWithoutDeclaration = "hi";

// console.log(variableWithoutDeclaration);

const checkBalance = () => {
    let balance = 10; 
}

// checkBalance();
// console.log(balance); // Error cannot SEE balance!



let check = false; //? <- GLOBAL

const changeCheck = () => {
    check = true;
}

console.log(check); //? <- false
changeCheck();
console.log(check); //? <- true


//? We look within before going else where!!!!

console.log(`----------------`);


let flag; // <- GLOBAL VARIABLE

const test = () => {
    flag = true; 
    console.log(flag); // true
    test1();
    console.log(flag); // false
}

const test1 = () => {
    flag = false;
}

test();

console.log("-------------------");

let x; //? TRUE GLOBAL 

const anotherOne = () => {
    x = true; //? <- 
    console.log(x); //? TRUE
    theNextMethod();
    console.log(x); //? Uses Global becuase it can't access the local variable in theNextMethod();
}

const theNextMethod = () => {
    let x = false; //? LOCAL VARIABLE
    return;
}

anotherOne();

//? True true x2

//? TLDR: Always try to use local scopes where possible. If you don't have a local scope to use, use the global! Methods in a file can't READ/SEE LOCAL variables in other METHODS. "What's mine is mine".

// EXERCISE 1

//     Write the following code and assess the output
//         Create a function
//         Declare a variable with a value inside it (i.e. let x = 'foo')
//         Write an if statement that checks if the variable meets a condition
//         Inside create a local variable
//         Try to access both variables and asses your output


function aliG(){
      let a = "fu";
      if (a = "fu") {
          let b = "bu";
      }
      console.log(a);
      console.log(b);
    }
aliG();