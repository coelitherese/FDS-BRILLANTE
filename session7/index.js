console.log("Session 7: Non-Mutator Method");

let countries = ["United States" , "Philippines" , "Canada" , "Singapore" , "Thailand" , "Philippines" , "France" , "Denmark"];
console.log(countries);

console.log("1. indexOf Method");
countries.indexOf("Philippines");
let indexOf = countries.indexOf("Philippines");
console.log("indexOf: " + indexOf);

let indexOf2 = countries.indexOf("Australia");
console.log("indexOf: " + indexOf2);


console.log(" ");
console.log("2. lastIndexOf Method");
let lastIndexOf = countries.lastIndexOf("Philippines");
console.log("lastIndexOf: " + lastIndexOf);

let lastIndexOf2 = countries.lastIndexOf("Philippines" , 6);
console.log("lastIndexOf: " + lastIndexOf2);

let lastIndexOf3 = countries.lastIndexOf("Philippines" , 3);
console.log("lastIndexOf: " + lastIndexOf3);


console.log(" ");
console.log("3. slice Method");
console.log("sliceA");
let sliceA = countries.slice(2);
console.log(sliceA);

console.log("sliceB");
let sliceB = countries.slice(4);
console.log(sliceB);

console.log("sliceC - magsstart sa dulo");
let sliceC = countries.slice(-3);
console.log(sliceC);


console.log(" ");
console.log("4. concat method");
let taskA = ["Drink HTML" , "Eat JavaScript"];
let taskB = ["Inhale CSS" , "Breathe SASS"];
let taskC = ["Get GIT" , "Be NODE"];

console.log("taskA + taskB");
let tasks = taskA.concat(taskB);
console.log(tasks);

console.log("taskA + taskB + taskC");
let allTasks = taskA.concat(taskB, taskC);
console.log(allTasks)

let combinedTasks = allTasks.concat("Smell EXPRESS" , "Throw REACT");
console.log(combinedTasks);



console.log(" ");
console.log("5. iteration Methods");
console.log("forEach");
allTasks.forEach(function(task){
    console.log(task);
})
let filteredTasks = [];
allTasks.forEach(function(task){
    if(task.length > 10){
        filteredTasks.push(task);
    }
});
console.log(filteredTasks);

console.log("every");
let numbers = [1 , 2 , 3 , 4 , 5]
let allValid =  numbers.every(function(number){
    return number < 10
});
console.log(allValid);

console.log("some");
let numbersSome = [1 , 2 , 3 , 4 , 5]
let someValid =  numbers.some(function(numbersSome){
    return numbersSome < 10
});
console.log(someValid);

console.log("filter");
let numbersFilter = [1 , 2 , 3 , 4 , 5]
let filterValid =  numbers.filter(function(numbersFilter){
    return numbersFilter < 10
});
console.log(numbersFilter);