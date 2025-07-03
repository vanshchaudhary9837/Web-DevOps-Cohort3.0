State, Component and Render Function


1. What is State?
State is just a data object that holds the current condition or values in your app.
    In our code:   let todos = [];  is our state

    todos is our state — it holds all the to-do items.

    When todos changes (e.g., by .push() or .pop()), our app's UI needs to re-render to reflect that change.


2. What is a Component?
A component is a reusable unit of UI. It’s a function (or class) that returns HTML (usually as DOM elements or JSX).

In our code:  function createTodoComponent(todo) {
                const divEle = document.createElement("div");
                ...
                 return divEle;
              }                      

    This is a component — it builds the UI for one todo item.

    You can think of it like:
    "A function that takes data (state) and returns the view."


3. What is Render?
Render means converting your data (state) into actual visible UI on the screen.

In our code:  function render() {
                document.querySelector("#todos").innerHTML = "";

                for (let i = 0; i < todos.length; i++) {
                const element = createTodoComponent(todos[i]);
                document.querySelector("#todos").appendChild(element);
                }
              }

    -You clear the screen (.innerHTML = "")
    -You loop through your state (todos)
    -You use the component function to generate UI
    -You append it to the DOM
    -This is the manual version of what React or Vue does under the hood!

