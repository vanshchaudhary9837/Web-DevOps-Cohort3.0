// function to add two numbers and return the sum

function sumOfTwoNumbers(a, b){
    return a + b;
}

// calling the function and storing the result in a variable
let result = sumOfTwoNumbers(7, 5);

// printing the result
console.log(result); //12



// if we make first var string 

let result2 = sumOfTwoNumbers("3", 6);

console.log(result2);     // it concatenate

// to deal with this we have two ways
//     1. use typescript
//     2. parse it to a number 

function sum(a, b){
    return parseInt(a) + parseInt(b);
}

let ans = sum("6", 4);
console.log(ans); // 10 instead of 64 ---- this is done because parseInt checks first wheather it is number or not. if not,  it firstly convert it then add it. 