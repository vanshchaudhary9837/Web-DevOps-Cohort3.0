// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which clears every one second


const express = require('express');
const app = express();

let numberOfRequestsForUser = {};
// create a setInterval function that clears the numberOfRequestsForUser object every one second
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

app.use(function(req, res, next){
    const userId = req.headers["user-id"];

    // firstly check if the user id is present in the numberOfRequestsForUser object
    if(numberOfRequestsForUser[userId]){
        numberOfRequestsForUser++;

        if(numberOfRequestsForUser[userId] > 5) {
            res.status(404).send("No Entry!");
        } else {
            next(); 
        }
    } else {
        // increment the number of requests made by the user by 1 and call the next middleware function in the stack
        numberOfRequestsForUser[userId] = 1;
        next();
    
    }
})

app.get("/user", function (req, res) {
    res.status(200).json({ name: "Vansh" });
});
app.post("/user", function (req, res) {
    res.status(200).json({ msg: "anything...." });
});


app.listen(3000);

