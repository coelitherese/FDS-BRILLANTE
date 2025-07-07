// server preparation and creation
// since node.js is already installed in our device, we can require application by declaring a variable and requiring the said module

const http = require("http");

// port creation
const port = 4000;

// mock database -> array
let items = ["laptop" , "phones"];
let users = ["Coeli Therese Brillante" , "Jane Doe" , "John Doe"];

// server creation via http or node
const app = http.createServer((request, response) =>{

    // endpoint creation via node server
    // to access this endpoint we will use local host
    // localhost:4000/greeting
    // www.mylink.com/greeting

    // greeting
    if(request.url == "/greeting"){
        response.end("Hi there!");
    // home page
    }else if(request.url == "/homepage"){
        response.end("Welcome to the homepage user!");
    
    // about 
    }else if(request.url == "/about"){
        response.writeHead(200);
        response.end("This is the about page.");

    // get items
    }else if(request.url == "/items" && request.method == "GET"){
        response.writeHead(200);
        response.end(JSON.stringify (items));
    
    // add items
    }else if(request.url == "/items/add" && request.method == "POST"){
        response.writeHead(201);
        items.push("Desktop");
        response.end("Item is now Added!");

    // delete items
    }else if(request.url == "/items/delete" && request.method == "DELETE"){
        if(items.length == 0){
            response.writeHead(200);
            response.end("There are no items to delete!")
        }else{
            response.writeHead(200);
            items.pop;
            response.end("An item has been deleted!");
        }   
    
    
    // login
    }else if(request.url == "/login" && request.method == "GET"){
        response.writeHead(200);
        response.end("Welcome to the log in page, " + users + "!")
        response.end(JSON.stringify (users))


    // get users
    }else if(request.url == "/users" && request.method == "GET"){
        response.writeHead(200);
        response.end(JSON.stringify (users));

    // register   
    }else if(request.url == "/register" && request.method == "POST"){
        response.writeHead(201);
        response.end("A new user is now added. Welcome to the register page!");

    // delete users
    }else if(request.url == "/users/delete" && request.method == "DELETE"){
        if(users.length == 0){
            response.writeHead(200);
            response.end("There are no users to delete!")
        }else{
            response.writeHead(200);
            users.pop;
            response.end("A user has been deleted!");
        }
    }else{
        response.writeHead(404);
        response.end("Page not found!")
    }
})


// post listening
// makes sure that the system knows what port they are going to
app.listen(port);

// confirmation message
console.log(`Server is now running at port ${port}.`);