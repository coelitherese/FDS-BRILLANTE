/* 
1. In the S28 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code and instructions from your Boodle Notes into your index.js.
*/
// 4. Create a variable groceryList that has a value of an array of grocery items

// console.log("Items to buy:")
// console.log(groceryList);
console.log(" ");
let groceryList = ["Eggs", "Bacon", "Milk", "Pancake and Waffle Mix", "Cheese"];
function displayGroceries(){
    console.log("GROCERY SHOPPING LIST");
    console.log("Items to buy:");
    if(groceryList.length == 0 || groceryList == []){
        console.log("Your grocery list is empty.");
    }else{
        for(let index = 0; index < groceryList.length; index++){
            console.log((index + 1) + ". " + groceryList[index]);
        }
    }
}
displayGroceries();

/*
    Important note: Don't pass the array as an argument to the function.
*/

/*
    5. Create a function which is able to receive a single argument and add a grocery item at the end of the groceryList array.
        -function should be able to receive a single argument.
        -add the grocery item at the end of the array.
        -The function should not be able to return anything.
        -invoke and add an argument to be passed in the function.
        // -log the groceryList array in the console.*/


console.log(" ");
function addItem(name){
    groceryList[groceryList.length] = name;
    console.log("SYSTEM: The item '" + name + "' has been added to your grocery shopping list!");
}
addItem("Maple Syrup");

displayGroceries();

/*
    6. Create function which is able to receive an index number as a single argument return the item accessed by its index.
        -function should be able to receive a single argument.
        -return the item accessed by the index.
        -Create a global variable called outside of the function called itemFound and store the value returned by the function in it.
        -log the itemFound variable in the console.

ADD CODE HERE */

console.log(" ");
console.log("6. Item Found");
let itemFound;
function getItemByIndex(index){
    if(grocery.length == 0 || grocery == [] || index > 0 || index >= grocery){
        console.log("Your grocery list is empty")
    }else{
        for(let index = 0; index < grocery.length; index++){
            console.log((index + 1) + ". " + grocery[index])
        }
    }
};


// console.log("Item: " + itemFound)

// console.log(itemFound);

/*
    7. Create function which is able to delete the last item in the array after it is bought and return the deleted item.
        -Create a function scoped variable to store the last item in the groceryList array.
        -Look up how to use .length property in accessing the last element of an array and extending/shortening an array.
        -Shorten the length of the array by at least 1 to delete the last item using .length property.
        -return the last item in the array which was stored in the variable.
*/

console.log(" ");
console.log("7. Delete Item");
// function deleteItem(){
//     let deletedLastItem = grocery.pop();
//     console.log(deletedLastItem + " has been removed from your grocery list.");
// }


// function deleteItem(){
//     if(grocery.length === 0){
//         console.log("Grocery list is already empty")
//     }else{
//         let deletedLastItem = grocery.pop();
//         console.log(deletedLastItem + " has been removed from your grocery list")
//     }
// }

// deleteItem();
// console.log(grocery);
// groceryList();

function deleteItem(){
    grocery.length = grocery.length -1
}
deleteItem();
console.log(grocery);

// without pop
