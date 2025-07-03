let todos = [];

function addTodo() {
  todos.push({
    title: document.querySelector("input").value,
  });

  render();
}

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

function render() {
  document.querySelector("#todos").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i], i);

    document.querySelector("#todos").appendChild(element);
  }
}