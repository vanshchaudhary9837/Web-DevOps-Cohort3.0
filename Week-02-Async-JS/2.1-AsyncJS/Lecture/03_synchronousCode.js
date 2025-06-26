// Synchronous code is executed line by line, in the order it's written. Each operation waits for the previous one to complete before moving on to the next one.

// function to calculate the sum of numbers from 1 to n
function sum(num) {
    // variable to store the sum
	let ans = 0;

    // loop to iterate from 1 to n 
	for (let i = 1; i <= num; i++) {
        // adding the current number to the sum
		ans = ans + i
	}

    // returning the sum of numbers from 1 to n
	return ans;
}

// calling the function and storing the result in a variable
const ans1 = sum(10);
// printing the result
console.log(ans1); // 55

// calling the function and storing the result in a variable
const ans2 = sum(100);
// printing the result
console.log(ans2); // 5050

// calling the function and storing the result in a variable
const ans3 = sum(1000); 
// printing the result
console.log(ans3); // 500500