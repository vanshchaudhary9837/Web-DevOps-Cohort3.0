// Map class in JavaScript — it's a built-in object that lets you store key-value pairs, just like an object, but with more flexibility.

// A Map is similar to a plain object {} but:

    //1.Keys can be any type (not just strings or symbols)
    //2.Keeps insertion order
    //3.Has built-in methods like set(), get(), has(), etc.

// create a map object with key-value pairs
const map = new Map();

// Set key-value pairs in the map object
map.set('name', 'Vansh');
map.set('age', 22);

// Log the map object
console.log(map); // Output: Map(2) { 'name' => 'Vansh', 'age' => 22 }

// Get the value of the key 'name' and 'age' from the map object
console.log(map.get('name')); // Output: Vansh
console.log(map.get('age')); // Output: 22