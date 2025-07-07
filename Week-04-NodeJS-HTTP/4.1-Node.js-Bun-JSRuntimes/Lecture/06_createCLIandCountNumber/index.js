// Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words inside it.
// Input - node index.js /Users/kirat/file.txt
// Output - You have 10 words in this file

const fs = require("fs");

function main(fileName) {
    fs.readFile(fileName, "utf-8", function (err, data) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            if (data[i] === " ") {
                total++;
            }
        }

        console.log(total + 1);        // spaces + 1 = Words
    });
} 

main("a.txt");