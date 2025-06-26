// function to calculate the sum of numbers from 1 to n

function sum(n){
    let ans = 0; //it is the var to store total sum

    // loop to iterate and adding one by one
    for (let i = 1; i <= n; i++) {
        ans = ans + i;        
    }
    return ans;
}

// function call
let ans = sum(100);
console.log(ans);  //5050