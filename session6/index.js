console.log("Session 06: Array Mutator Methods");
console.log(" ");

let fruits=["Apple", "Orange", "Kiwi", "Dragon Fruit"];
console.log(fruits);
console.log("Length: " + fruits.length)

console.log(" ");
console.log("1. Push Method");
fruits.push("Mango");
console.log("New set of data: ");
console.log(fruits);
fruits.push("Avocado", "Guava");
console.log("New set of data: ");
console.log(fruits);

console.log(" ");
console.log("a. Function with Array Method");
function addFruit(fruit){
    fruits.push(fruit);
    console.log("SYSTEM: '" + fruit + "' is now added!");
}
function displayFruits(){
    console.log(fruits);
    return fruits;
}

console.log(" ");
console.log("2. Pop Method");
console.log("New Set of Data:");
console.log(fruits);

function removeFruit(){
    let removed = fruits.pop();
    console.log(removed + " has now been removed")
}
removeFruit();

console.log(" ");
console.log("3. Unshift Method");
fruits.unshift("Banana" , "Lime");
console.log("New Set of Data:");
console.log(fruits);

function unshiftFruit(fruit){
    fruits.unshift(fruit);
    console.log(fruit + " has been added")
}
unshiftFruit("Blueberry");


console.log(" ");
console.log("4. Shift Method");
function shiftFruit(fruit){
    fruits.shift(fruit);
    console.log(fruit + " has been removed")
}
shiftFruit("Blueberry");

console.log(" ");
console.log("5. Splice Method");
fruits.splice(1, 2, "Lime" , "Cherry");
console.log("New Set of Data:");
console.log(fruits);

function spliceFruit(index, deleteCount, fruit){
    fruits.splice(index, deleteCount, fruit);
}
spliceFruit(3, 1, "Raspberry");
console.log("New Set of Data:");
console.log(fruits);

spliceFruit(4, 0, "Test01");
console.log("New Set of Data:");
console.log(fruits);

console.log(" ");
console.log("6. Sort Method");
fruits.sort();
console.log("New Set of Data:");
console.log(fruits);

console.log(" ");
console.log("Function with returns");
function sahod(rate, day){
    let total = rate * day;
    return total;
}

let result = sahod(1000, 5);
console.log(result);

function bonus(amount){
    let totalSalary = result + amount;
    return totalSalary;
}
let netIncome = bonus(1500);
console.log(netIncome);

           