/*
PROBLEM #1:

3. Create a variable number that will store the value of the number provided by the user via the prompt.
4. Create a for loop that will be initialized with the number provided by the user, will stop when the value is less than or equal to 0 and will decrease by 1 every iteration.
5. Create a condition that if the current value is less than or equal to 50, stop the loop.
6. Create another condition that if the current value is divisible by 10, print a message that the number is being skipped and continue to the next iteration of the loop.
7. Create another condition that if the current value is divisible by 5, print the number.

PROBLEM #2:
8. Create a variable that will contain the string supercalifragilisticexpialidocious.
9. Create another variable that will store the consonants from the string.
10. Create another for Loop that will iterate through the individual letters of the string based on it’s length.
11. Create an if statement that will check if the letter of the string is equal to a vowel and continue to the next iteration of the loop if it is true.
12. Create an else statement that will add the letter to the second variable.

*/

// ADD CODE BELOW PROBLEM #1
console.log("PROBLEM #01")
let myNumber = (prompt("Please enter a number: "))
for(let x = myNumber; x <= 100; x--){
    if(x <= 50){
        console.log("The current number is at 50. The system is shutting down the loop.");
        break;
    }else if(x % 10 == 0){
        console.log("Current number is a multiple of 10. The system is skipping the number.");
        continue;
    }else if(x % 5 == 0){
        console.log(x);
    }
}

// ADD CODE BELOW PROBLEM #2
console.log(" ")
console.log("PROBLEM #02")
let string = "supercalifragilisticexpialidocious";
console.log(string);
let filteredString = '';
for(let i = 0; i < string.length; i++){
    if(
        string[i].toLowerCase() == "a" || 
        string[i].toLowerCase() == "e" || 
        string[i].toLowerCase() == "i" || 
        string[i].toLowerCase() == "o" || 
        string[i].toLowerCase() == "u" 
    ){continue;

    }else{
        filteredString += string[i];
    }
}
console.log(filteredString);