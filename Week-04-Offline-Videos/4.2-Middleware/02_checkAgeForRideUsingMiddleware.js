const express = require("express");

const app = express();

// This function is a middleware function that checks if the age of the person is greater than 14

function isOldEnoughMiddleware(req, res, next){
    // get the age from the query parameter of the request object and store it in age variable
    const age = req.query.age;

    // if age is greater than 14, call the next middleware function else return a status code 411 with message "Sorry!, your age is not enough to ride"
    if (age > 14) {
        next();
    } else {
        res.status(411).json({
            message: "Sorry!, your age is not enough to ride yet",
        });
    }
}

// use the middleware function isOldEnoughMiddleware for all the routes below this line of code in the file 
app.use(isOldEnoughMiddleware);
// we have two options for applying middleware. 1st like upper one which works for all routes below it and 2nd to apply that separately.

app.get("/ride1" , function(req, res){  // app.get("/ride", isOldEnoughMiddleware, function(eq, res)).  like this.....
    res.json({
        message: "You have successfully riden the ride 1",
    })
})
app.get("/ride2" , function(req, res){
    res.json({
        message: "You have successfully riden the ride 2",
    })
})

app.listen(3000);