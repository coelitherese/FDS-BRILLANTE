console.log("June 17 2025 - Session 04");
console.log(" ");

console.log("REPETITION CONTROL STRUCTURES");
console.log("1. While Loop");

// if & else - condition
// looping statement - expression

let count = 2;
while(count !== 0){
    console.log("While: " + count);
    count --;
}

console.log(" ");
console.log("2. Do-While Loop");
let number = (prompt("Please enter a number"));

do{
    console.log("Do-While Loop: " + number);
    number++;
}while(number <= 2);

console.log(" ");
console.log("3. For Loop");
for(let count = 0; count <= 2; count++){
    console.log("For Loop: " + count);
}


console.log(" ");
console.log("LOOPING STATEMENTS WITH STRINGS");
let myString = "Alex";
// .length -> to check the length of a string or an array.
console.log(myString.length);

console.log(myString[0]);
console.log(myString[3]);

for(let i = 0; i < myString.length; i++){
    console.log(myString[i])
}

console.log(" ");
console.log(" ");

let myName = "AlEx";
for(let i = 0; i < myName.length; i++){
    if(
        myName[i].toLowerCase() == "a" || 
        myName[i].toLowerCase() == "e" || 
        myName[i].toLowerCase() == "i" || 
        myName[i].toLowerCase() == "o" || 
        myName[i].toLowerCase() == "u" 
    ){
        console.log(3);
    }else{
        console.log(myName[i]);
    }
}

console.log(" ");
console.log("Continue and Break");
for(let x = 0; x < 50; x++){
    if(x % 2 == 0){
        continue;
    }else if(x == 35){
        break;
    }else{
        console.log(x);
    }
}
