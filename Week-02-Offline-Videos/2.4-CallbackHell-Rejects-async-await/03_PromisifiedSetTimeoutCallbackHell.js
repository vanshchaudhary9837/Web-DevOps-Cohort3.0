/*
Q: Write code that
    - logs Hi after 1 second
    - logs Hello 3 seconds after step 1
    - logs Hello There 5 seconds after step 2
*/

// function to promisify setTimeout function using promise object

const setTimeoutPromisified = (ms) =>{
     // return a promise object that resolves after the miliseconds
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
}

// has callback hell
/*
setTimeoutPromisified(1000).then(()=>{console.log("Hii");
    setTimeoutPromisified(3000).then(()=>{console.log("Hello");
        setTimeoutPromisified(5000).then(()=>{console.log("Hello there")
        })
    })
})
*/

// Alternative - Doesn't really have callback hell -- Basically called Promise Chaining

 setTimeoutPromisified(1000).then(()=>{
    console.log("Hii");
    return setTimeoutPromisified(3000);
 })
 .then(()=>{
    console.log("Hello");
    return setTimeoutPromisified(5000);
 })
 .then(()=>{
    console.log("Hello there");
 })