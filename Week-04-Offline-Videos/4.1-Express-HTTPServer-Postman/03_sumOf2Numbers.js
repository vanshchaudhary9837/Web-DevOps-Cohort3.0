const express = require('express');

const app = express();

// create a function to calculate the sum of two numbers
function sumOfTwoNumbers(a, b) {
    // add a and b and store the result in sum variable
    const sum = a + b;

    // return the sum of two numbers
    return sum;
}

app.get("/", function(req, res){
    // get the value of a and b from the query parameters using req.query object and parse them to integers using parseInt function
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // call the sumOfTwoNumbers function and pass a and b as arguments to calculate the sum of two numbers and store it in sum variable
    const sum = sumOfTwoNumbers(a, b);

    // send the response to the client with the sum of two numbers
    res.send("Sum of " + a + " and " + b + " is: " + sum);

})

app.listen(3000);