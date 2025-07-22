const express = require('express');

const app = express();

// Function that returns a boolean value if the age of the person is greater than 14

function isOldEnough(age){
    if(age>14){
        return true;
    }else{
        return false;
    }
}

// create a route for GET request on /files path
app.get("/ride1" , function(req, res){
    if (isOldEnough(req.query.age)) {
        res.json({
            message: "You have successfully riden the ride 1",
        });
    } else {
        res.status(411).json({
            message: "Sorry your age is not enough to ride the ride 1",
        });
    }
})

// create a route for GET request on /files path
app.get("/ride2", function (req, res) {
    if (isOldEnough(req.query.age)) {
        res.json({
            message: "You have successfully riden the ride 2",
        });
    } else {
        res.status(411).json({
            message: "Sorry your age is not enough to ride the ride 2",
        });
    }
});

app.listen(3000);