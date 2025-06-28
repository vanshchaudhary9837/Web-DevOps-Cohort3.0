//  In JavaScript, classes are a way to define blueprints for creating objects (these objects are different from the object which is data type).

//  approach-1--- without using classes and new, this keywords

// rect1 object with width, height and color properties


/*const rect1 = {
    width: 2,
    height: 4,
    color: "blue",
}

// Function to calculate area of rectangle 

function area1(para){
    return para.width * para.height;
}

// Function to paint rectangle with color
function paint1(para){
    console.log(`Painting with color ${para.color}`);
}

// Call area function with rect1 object and store the result in a variable
const area2 = area1(rect1);
console.log(area2);   

// Call paint function with rect1 object
paint1(rect1);
*/



// approach-2 ----- clean code using classes and objects 

// Rectangle class with area and paint methods
class Rectangle{  // always capital letter 
 // Constructor with width, height and color properties
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    // Method to calculate area of rectangle
    area(){
        const area = this.width * this.height;
        return area;
    }

    // Method to paint rectangle with color
    paint() {
        console.log(`Painting with color ${this.color}`);
    }
}

// Create a instance/object of Rectangle class

const rect1 = new Rectangle(2, 4, "Black");

// Call area method using the instance and store the result in a variable
const area1 = rect1.area();

// Log the area of the rectangle
console.log(area1); // Output: 8

// Call paint method using the instance
rect1.paint(); // Output: Painting with color red

// Create another instance/object of Rectangle class
const rect2 = new Rectangle(3, 6, "Green");


// Call area method using the instance and store the result in a variable
const area2 = rect2.area();

// Log the area of the rectangle
console.log(area2); // Output: 18

// Call paint method using the instance
rect2.paint(); // Output: Painting with color blue