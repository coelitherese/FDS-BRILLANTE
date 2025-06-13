// console.log("Hello!");

// JS Basic Functions
console.log("JS Basic Functions");
function sayHello(){
    console.log("HELLOOOO!!");
}
console.log(sayHello);

// function calling // Invocation
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

// function completeName(){
//     let fullName = "Coeli Therese Brillante"
//     console.log(fullName);
// }
// completeName(fullName);

// Global and Local scope variables
console.log("Global and Local scope variables");
let age = 20;
{
    const pi = 3.14;
    console.log(age);
}
// accessing the variable inside a curly brace
// console.log(pi); - error: not defined

let studentName = "Mary Poppins";
function getName(){
    let age = 50;
    console.log(studentName + " is " + age + " years old.");
}
getName();

console.log("Function with Alert");
function helloAlert(){
    alert("Hello!!!");
}
// it is not necessary to call a function in the js file. we can also call a function in the console panel.

console.log("Function with Prompt");
function enterName(){
    let inputName = prompt("Please enter your name: ");
    console.log("Hello there, " + inputName + "!");
}

// Parameterized Functions
// Parameters are variable-like code. It can gather client or user information/inputs.
function FullName(name){
    console.log("Welcome, " + name + "!");
}

// Function invocation with arrgument.
FullName("Tony Stark");

function introduceYourPet(name , breed , age){
    console.log("My pet is " + name)
    console.log("He/She is a " + breed)
    console.log("His/Her age is " + age + " years old.");
}
introduceYourPet("Jeff" , "Great White Shark" , 5);