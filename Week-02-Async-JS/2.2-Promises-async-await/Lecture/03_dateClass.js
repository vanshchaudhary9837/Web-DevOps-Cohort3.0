// Date class in JavaScript is built-in and used to work with dates and times. It lets you get, set, and manipulate dates.

// Current Date and Time in JavaScript using Date Class  
const date = new Date();

// Print the current date and time
console.log(date); // Output: 2024-08-11T15:13:47.818Z

// print the current year
console.log(date.getFullYear());  

// print the current month
console.log(date.getMonth());

// print the current date
console.log(date.getDate());

// print the current day
console.log(date.getDay());

// print the current hours
console.log(date.getHours()); 

// print the current minutes
console.log(date.getMinutes()); 

date.toDateString();    // "Sat Jun 28 2025"
date.toISOString();     // "2025-06-28T06:00:00.000Z"
date.toLocaleString();  // "6/28/2025, 11:00:00 AM"
date.getTime();         // Timestamp in ms since Jan 1, 1970