// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.

/*
// Approach-1 ----- Callback based

// function to print message
function callback(){
    console.log('3 Seconds have Passed!');
}

// setTimeout function to called callback function after 3 seconds
setTimeout(callback, 3000);    // Output: 3 Seconds have Passed!
*/

/*
// function to wait for 3 seconds and then call resolve function
function waitFor3Sec(resolve) {
    console.log(resolve);
    
    setTimeout(resolve, 5000);
}

// function to print message
function main() {
    console.log('main is called');
}

// calling waitFor3Sec function and passing main function as argument
waitFor3Sec(main);
*/

/*
function random(resolve) { // resolve is also a function
    resolve();
    setTimeout(resolve, 3000);
}

let p = new Promise(random); // suppose to return you something eventually 
console.log(p);

// using the eventual value returned by promise 
function callback() {
    console.log('Promise Successed!');
}

p.then(callback);
*/




// Approach-2 --------Promises based 

// function to print message
function promiseCallback() {
    console.log('3 Seconds have Passed!');
}

// function to return promise object after 3 seconds
function setTimeOutPromisified(ms) {
    // returning promise object after 3 seconds using setTimeout function
    return new Promise(resolve => setTimeout(resolve, ms));
}

// storing promise object in x variable and printing it
let x = setTimeOutPromisified(3000);
console.log(x); // Output: Promise { <pending> }

// function to print message after 3 seconds using promise
setTimeOutPromisified(3000).then(promiseCallback); // Output: 3 Seconds have Passed!