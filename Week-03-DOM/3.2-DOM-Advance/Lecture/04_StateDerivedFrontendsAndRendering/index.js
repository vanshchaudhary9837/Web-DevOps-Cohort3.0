let todos = [];    // keeping all todos in a JavaScript array, not in the DOM directly — this is good practice.
// Every time you add/delete something, you update the array and re-render the UI using the render() function.




//This takes the input value, wraps it inside an object ({ title: "something" }) and adds it to the array.
// Then calls render() to update the UI.

function addTodo() {
  todos.push({
    title: document.querySelector("input").value,
  });

  render();
}

// different ways to remove items. All are valid. here i am using .shift() and .pop() now:
// shift() removes the first item
// pop() removes the last item
// Then you call render() to update the UI again.


function deleteFirstTodo() {
  // todos.splice(0, 1);
  // todos = todos.slice(1);
  todos.shift();  

  render();
}

function deleteLastTodo() {
  // todos.splice(todos.length - 1, 1);
  // todos = todos.slice(0, todos.length - 1);
  // todos.length = todos.length - 1;
  todos.pop();

  render();
}


// creating the visual part of each todo item:
// A <span> to show the todo's title.
// A <button> for "Delete" (but you haven’t added logic to this button yet).
// A <div> that wraps them both.
// This function returns the complete todo UI element so render() can use it.

function createTodoComponent(todo, index) {
  const spanEle = document.createElement("span");
  spanEle.innerHTML = todo.title;

  const buttonEle = document.createElement("button");
  buttonEle.innerHTML = "Delete";
  
  buttonEle.onclick = function () {
    todos.splice(index, 1);
    render();
  };

  const divEle = document.createElement("div");
  divEle.appendChild(spanEle);
  divEle.appendChild(buttonEle);

  return divEle;
}

// It first clears the UI.
// Then loops over the todos[] array and uses createTodoComponent() to create a DOM element for each todo.
// Appends that to the #todos container.

function render() {
  document.querySelector("#todos").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i], i);

    document.querySelector("#todos").appendChild(element);
  }
}