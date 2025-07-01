// The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. 

//It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.

//async/await is essentially syntactic sugar on top of Promises. 

/*
Q: Write code that
    - logs Hi after 1 second
    - logs Hello 3 seconds after step 1
    - logs Hello There 5 seconds after step 2
*/

const setTimeoutPromisified = (ms) =>{
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    })
}

//async-await

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("Hii");
    await setTimeoutPromisified(3000);
    console.log("Hello");
	await setTimeoutPromisified(5000);
	console.log("Hi there");
}

solve();

console.log("After solve function");   // to show it work similary as earlier under the hood 