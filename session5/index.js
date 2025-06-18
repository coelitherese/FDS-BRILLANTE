console.log("Session 05: Array Traversal");
console.log(" ");

let studentNumbers = ["UA-001" , "UA-002" , "UA-003" , "UA-004" , "UA-005"];


let grades = [98.5 , 94.3, 89.2, 90.1];
console.log(grades);
console.log(grades[10]);

let computerBrands = ["Acer", "Asus", "Lenovo", "Toshiba", "Apple",];
console.log(computerBrands);

let mixedArray = [12, "John", true, null];
console.log(mixedArray);

let city1 = "Quezon City";
let city2 = "Mabalacat City";
let city3 = "San Fernando City";
let city4And5 = ["Baguio City", "Caloocan City"];

let cities = [city1, city2, city3, city4And5];
console.log(cities);

console.log(cities.length);

let lakersLegends = ["Kobe", "Shaq", "Lebron", "Magic", "Kareem"];
console.log(lakersLegends);

lakersLegends[2] = "Gasol";
console.log(lakersLegends);

let bullsLegends = ["Jordan", "Rose", "Rodman"];
let lastIndex = bullsLegends.length -1;
console.log(bullsLegends[lastIndex]);

let newArray = [];
console.log(newArray);

newArray[0] = "Cloud Strife";
console.log(newArray);

newArray[newArray.length] = "Tifa Lockhart";
console.log(newArray);

for (let index = 0; index < newArray.length; index++){
    console.log("LOOP: " + newArray[index]);
}

let numArray = [5, 12, 30, 46, 40];
for (let index = 0; index < numArray.length; index++){
    if (numArray[index] % 5 == 0){
        console.log(numArray[index] + " is divisible by 5")
    }else{
        console.log(numArray[index] + " is NOT divisible by 5")
    }
}

let students = [];
function displayStudents(){
    if(students.length == 0 || students == []){
        console.log("The array is empty");
    }else{
        for(let index = 0; index < students.length; index++){
            console.log((index + 1) + ". " + students[index]);
        }
    }
}

function addStudent(name){
    students[students.length] = name;
    console.log(name + " is added to the list.");
}

addStudent("Harry Potter");
addStudent("Hermione Granger");
addStudent("Ron Weasley");
displayStudents();

