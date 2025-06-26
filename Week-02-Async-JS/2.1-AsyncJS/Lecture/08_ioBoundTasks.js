// I/O bound tasks are computer tasks where the majority of the time is spent waiting for input/output operations to complete, rather than processing data by the CPU. Essentially, these tasks spend a lot of time waiting for data to be read from or written to external devices like hard drives, networks, or databases. 

// Key characteristics of I/O bound tasks:

    // Waiting for external resources:
        // A significant portion of the task's execution time is spent waiting for data to be transferred to or from external sources. 

    // CPU utilization is low:
        // Because the CPU is often idle while waiting for I/O operations, CPU utilization tends to be lower compared to CPU-bound tasks. 

// Examples:
    // Reading or writing files. 
    // Fetching data from a database. 
    // Making network requests. 
    // Web scraping (initially I/O bound with requests, then can become CPU-bound with parsing). 

// Optimization:
    // Techniques like asynchronous programming and multi-threading can be used to improve the performance of I/O bound tasks by allowing other operations to proceed while waiting for I/O. 

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

// this is the i/o bound task as in this we only can wait while it reads the file