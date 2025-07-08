// preparation of express server
const express = require("express");

// create the server and store in a variable
const app = express();

// port number
const port = 5000;





// middlewares
app.use(express.json());
    // primary role: to convert incoming and outgoing data to JS object
app.use(express.urlencoded({extended: true}))
    // allows users to input data in a form
    // reads or fetches data from a form


// server routes
app.get("/hello", (req, res) => {
    res.status(200).send("Hi there!")
});

let friends = []
    // get all friends
    app.get("/friends/list", (req, res) => {
        if(friends.length <= 0){
            res.status(200).send("There are no friends in your list at this moment.")
        }else{
            res.status(200).send(friends);
        }
    });




// getting an input from postman
app.get("/input", (req, res) => {
    res.send(`Hi there! ${req.body.name}`);
});

// add friend
app.post("/friends/add", (req, res) => {
    let friend = req.body.name;
    let checkFriend = friends.includes(friend);

    if(checkFriend){
        res.send(`The user "${friend}" is already in your friends list.`)
    }else{
        friends.push(friend);
        res.status(201).send(`You are now friends with the user "${friend}"`)
    }
})

// ACTIVITY
// unfriend
app.delete("/friends/remove", (req, res) => {
    let friend = req.body.name;
    let checkFriend = friends.indexOf(friend);

    if(checkFriend !== -1) {
        friends.splice(checkFriend, 1);
        res.status(201).send(`The user "${friend}" has now been removed from your friends list.`);
    }else{
        res.send(`The user "${friend}" is not included in your friends list.`);
    }
});


// port listening
app.listen(port, () => console.log(`Server is now active and running at port ${port}`));