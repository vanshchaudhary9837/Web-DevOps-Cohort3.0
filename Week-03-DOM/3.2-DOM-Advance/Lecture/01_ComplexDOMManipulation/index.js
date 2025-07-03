function addTodo(){
    const value = document.querySelector("input").value;
    const newTodoDivEl = document.createElement("div");
    // newTodoDivEl.innerHTML =  value;  // its just for basic functionality

    newTodoDivEl.innerHTML = "<div>" + value + "</div> <button>Delete</button>";
    document.querySelector("body").appendChild(newTodoDivEl)
}