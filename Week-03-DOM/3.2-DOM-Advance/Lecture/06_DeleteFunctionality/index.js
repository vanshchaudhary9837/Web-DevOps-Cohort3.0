let todos = [];

function addTodo(){
    todos.push({
        title: document.querySelector("input").value,
    });

    render();
}

function deleteFirstTodo(){
    todos.shift();
    render();
}

function deleteLastTodo() {
  todos.pop();
  render();
}

function createTodoComponent(todo, index){
    const spanEl = document.createElement("span");
    spanEl.innerHTML = todo.title;

    const dltBtn = document.createElement("button");
    dltBtn.innerHTML = "Delete";

    dltBtn.onclick = function(){
        todos.splice(index, 1);
        render();
    }

    const divEl = document.createElement("div");
    divEl.appendChild(spanEl);
    divEl.appendChild(dltBtn);

    return divEl;
}


function render(){
    document.querySelector("#todos").innerHTML = "";

    for(let i=0;i<todos.length;i++){
        const element = createTodoComponent(todos[i], i);

        document.querySelector("#todos").appendChild(element)
    }
}