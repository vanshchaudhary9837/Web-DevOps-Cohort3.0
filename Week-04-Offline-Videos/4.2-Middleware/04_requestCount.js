//You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will maintain a count of the number of requests made to the server in the global requestCount variable

const express = require('express');
const app = express();

// create a global variable requestCount and assign it a value of 0
let requestCount = 0;

app.use(function(req, res, next){
    requestCount++;
    next();
})

app.get("/user" , function(req, res){
    res.status(200).json({ name: "Vansh" });
})

app.post("/user", function(req , res){
    res.status(200).json({ msg: "anything...." });
})

app.get("/requestCount", function(req, res){
    res.status(200).json({ requestCount });
})

app.listen(3000);