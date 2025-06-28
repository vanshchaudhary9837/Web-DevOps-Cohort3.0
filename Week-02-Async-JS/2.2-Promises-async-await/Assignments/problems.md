# **Week 02 - 2.2 | Promises and Async Await**

## [Assignment Link](https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-10)

or

## Assignment #1 - Create a Circle class

```js
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  area() {
    const area = this.radius * this.radius * Math.PI;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const circle = new Circle(2, "red");
const area = circle.area();
console.log(area);
```

> **💡Can you see there is code repetition here and in the Rectangle class?**

## Assignment #2 - Create a base shape class

### **Base Class**

```js
class Shape {
  constructor(color) {
    this.color = color;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }

  area() {
    throw new Error("The area method must be implemented in the subclass");
  }

  getDescription() {
    return `A shape with color ${this.color}`;
  }
}
```

### **Rectangle Class**

```js
class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color); // Call the parent class constructor to set the color
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  getDescription() {
    return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
  }
}
```

### **Circle Class**

```js
class Circle extends Shape {
  constructor(radius, color) {
    super(color); // Call the parent class constructor to set the color
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  getDescription() {
    return `A circle with radius ${this.radius} and color ${this.color}`;
  }
}
```

**Play trying with it**

```js
const circle = new Circle(20);
console.log(circle.area());
```

## Assignment #3

**Q: Write code that**

1. logs `hi` after 1 second
2. logs `hello` 3 seconds after `step 1`
3. logs `hello there` 5 seconds after `step 2`

<details>
<summary>Solution (has callback hell)</summary>

```js
setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("hello");

    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);
```
</details>

<details>
<summary>Alt solution (doesnt really have callback hell)</summary>

```js
function step3Done() {
  console.log("hello there");
}

function step2Done() {
  console.log("hello");
  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("hi");
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);
```
</details>

### **Promisified version**
**Now use the `promisified` version we saw in the last slide**
```js
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

<details>
<summary>Solution #1 (has callback hell)</summary>

```js
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("hello there");
    });
  });
});
```
</details>

<details>
<summary>Alt solution</summary>

```js
setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });
```
</details>

## Assignment #4 - Try to create promisified version of setTimeOut
## Assignment #5 - Try to create promisified version of fetch
## Assignment #6 - Try to create promisified version of fs.readFile

![Assignment Pic](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ff9bd336e-6925-42df-88cc-d9e21b14a6b1%2FScreenshot_2024-08-11_at_6.25.44_PM.png?table=block&id=2e351175-5069-4ede-ba29-65a7eedd9aff&cache=v2)