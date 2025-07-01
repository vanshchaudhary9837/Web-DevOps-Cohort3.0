// import fs module
const fs = require("fs");

function readFileAsync(){
    return new Promise((resolve, reject)=>{
        fs.readFile("a12213.txt", "utf-8", function(err, data){
            if(err){
                reject("File not found!!");
            }else{
                resolve(data);
            }
        });
    });
}

readFileAsync().then(function(data){
    console.log("File read successfully!!");
    console.log(data);
}).catch(function(err){
    console.log("Error occurred!!");
    console.log(err);
})