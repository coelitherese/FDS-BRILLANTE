/* 
1. In the S28 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code and instructions from your Boodle Notes into your index.js.
*/
// 4. Create a variable groceryList that has a value of an array of grocery items

// console.log("Items to buy:")
// console.log(groceryList);
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
addItem("TestItem");

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
        console.log("SYSTEM: Your grocery list is empty")
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
function deleteItem(name){
    if(groceryList.length == 0 || grocery == [] || index > 0 || index >= grocery){
        groceryList.length = groceryList.length
        console.log("SYSTEM: Your grocery list is empty. There is nothing to remove.")
    }else{
        groceryList.length = groceryList.length -1
        console.log("SYSTEM: The item '" + name + "' has been removed from your grocery shopping list!");
        for(let index = 0; index < grocery.length; index++){
            console.log((index + 1) + ". " + grocery[index])
        }
    }
}

deleteItem("TestItem");
displayGroceries();

/*
    8. Create function which is able to update a specific item in the groceryList array by its index.
        -Function should be able to receive 2 arguments, the update and the index number.
        -First, access and locate the item by its index then re-assign the item with the update.
        -This function should not have a return.
        -Invoke the function and add the update and index number as arguments.
        -Log the groceryList array in the console.
*/

   
function updateItemByIndex(updated, index) {
    if(index >= 0 && groceryList.length){
        groceryList[index] = updated
        console.log(groceryList)
    }
}

updateItemByIndex("Orange", 2);
console.log(groceryList);

/*
    9. Create a function which is able to iterate over the array to display each item in the console.
        -This function will not receive any argument
        -Using a for loop, iterate over the groceryList array to create new array where each element from groceryItems has prefixed number like [1. Milk, 2.Veggies...]
        -Return the newly formed array
        -Invoke the function and store it inside a variable itemsFound 
        - Log the itemsFound variable in the console.
*/
function displayItems() {
    for(let index = 0; index < groceryList.length; index++){
    console.log((index + 1) + ". " + groceryList[index]);
    }
}
console.log("Grocery List: ");
let itemsFound = displayItems();
console.log(itemsFound);

/*
    10. Create a function which is able to iterate over the array to search for an item.
        -This function will receive the name of the element as an argument
        -Create an index variable with a value of 0
        -Using a for loop, iterate over the array to search for each index that has the same value as the item.
        -If it found, reassign the value of the variable to the current value of index
        -After the loop, check if the value of the varialbe is not -1
            -If so, return the string "The item exists in the list."
            -If not, return the string "The item is not in the list."
        -Invoke the function to search for an item and store the result in a variable isItemFound.
        -Log the value of isItemFound in the console.
*/

function searchItem(search) {
    let index = -1;
      for (let i = 0; i < groceryList.length; i++) {
        if (groceryList[i] === search) {
            index = i;
        }
    }
    if(index !== -1){
        console.log("The item exists in the list");
    }else{
        console.log("The item is not in the list");
    } 
}

const isItemFound = searchItem("Bread");
console.log(isItemFound);

/*
11. Create a function which is able to remove a specific item in the array by index
    - This function will recieve the index as argument
    -Add an if statement to check if the index is less than 0 or greater than or equal to the .length of the groceryList
        -If it is, return invalid index.
    -Else, use for loop to iterate over the groceryList to reassign values starting from the argument sent.
        -reassign the value of the index into the next element by adding 1 to the current index
    -Outside the loop, decrease the length of the array
    -Return string Element removed successfully.
    -Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
    -Log the isUsersEmpty variable in the console.
*/

function removeElement(remove) {
    if(remove < 0 || remove >= groceryList.length){
        console.log("Invalid Index")
    }else{
        for(let index = remove; index < groceryList.length - 1; index++){
            groceryList[1] = groceryList.length[index + 1];
            groceryList.length = groceryList.length - 1;
            console.log("String element removed successfully")
        }
    }

}

// Test the removeElement function
const removedElement = removeElement(3);
console.log(removedElement); 
console.log(groceryList);

/*
12. Create function which is able to delete all items in the array.
    -You can modify/set the length of the array.
    -The function should not return anything.
*/

function deleteAll() {
    groceryList.length = 0;
};
deleteAll();
console.log(groceryList);

/*
13. Create a function which is able to check if the array is empty.
    -Add an if statement to check if the length of the users array is greater than 0.
        -If it is, return false.
    -Else, return true.
    -Create a global variable called outside of the function  called isUsersEmpty and store the returned value from the function.
    -Log the isUsersEmpty variable in the console.

*/

function isEmpty() {
    if(groceryList.length > 0){
        console.log("False")
    }else{
        console.log("True")
    }

}

const isUsersEmpty = isEmpty();
console.log(isUsersEmpty);
