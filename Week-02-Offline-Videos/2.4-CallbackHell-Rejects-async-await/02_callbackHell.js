// Callback hell happens when you have many nested callbacks, usually in async code — making it:
    // -Hard to read
    // -Hard to debug
    // -Hard to maintain

/*
Q: Write code that
    - logs Hi after 1 second
    - logs Hello 3 seconds after step 1
    - logs Hello There 5 seconds after step 2
*/

// Has Callback Hell - Print Hi, Hello, Hello There in sequence with 1, 3, 5 seconds delay

setTimeout(()=>{
    console.log("Hii");
    setTimeout(()=>{
        console.log("Hello");
        setTimeout(()=>{
            console.log("Hello there");
        }, 5000)
    },3000);
}, 1000);


// Alternate approach(Doesnt really have callback hell)
/*
const step1 = () =>{
    console.log("Hii");
    setTimeout(step2, 3000);
}

const step2 = () =>{
    console.log("Hello");
    setTimeout(step3, 5000);
}

const step3 = () =>{
    console.log("Hello there");
}

setTimeout(step1, 1000);
*/



