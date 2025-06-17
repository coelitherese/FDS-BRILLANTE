console.log("June 16 2025 ~ Session 03");
console.log(" ");
console.log("Selection control structures");

console.log("1. Conditional Statement");
console.log("'if' Statement");

let num1 = 5;
if(num1 < 3){
    console.log("hyello!");
}

// for the if statement to work, the condition must be true.

if (num1 > 1){
    console.log("Hi there!");
}

console.log(num1 > 1);

console.log(" ");
console.log("'else' Statement");
if(num1 == 10){
    console.log("Num1 is equal to 10");
}else{
    console.log("Num1 is NOT equal to 10");

}

console.log(" ");
console.log("'else if' Statement");
/*
if(){
}

else if(){
} 

else if(){
}else{
}

*/

let isLegalAge = false;
let isWorking = true;

if(isLegalAge == 1 && isWorking == 1){
    console.log("User is of the legal age and is working.");
}else if(isLegalAge == 1 && isWorking == 0){
    console.log("User is of the legal age and NOT working");
}else if(isLegalAge == 0 && isWorking == 1){
    console.log("User is not of the legal age but is working");
}else{
    console.log("Record cannot be assessed.");
}

console.log(" ");
console.log("Functions with Conditional Statements");
function checkGender(gender){
    let formatted_gender = gender.toUpperCase();
    if(formatted_gender === 'M'){
        console.log("Male");
    }else if (formatted_gender === 'F'){
        console.log("Female");
    }else{
        console.log("Others");
    }
}
checkGender("f");

console.log(" ");
console.log(" ");
console.log("2. Switch-Case Statement");

let color = prompt("Please enter R , G , or B for a color.");
switch(color){
    case 'R':
        console.log("The selected color is RED!");
        break;
    case 'G':
        console.log("The selected color is GREEN!");
        break;
    case 'B':
        console.log("The selected color is BLUE!");
        break;
    default : 
        console.log("The selected color is not recognized by our system.");
        break;

}