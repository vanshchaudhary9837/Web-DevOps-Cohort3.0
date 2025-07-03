function addTodo(){
    // get the value of input element
    const value = document.querySelector("input").value;

    // create span element and set its innerHTML to value
    const spanEl = document.createElement("span");
    spanEl.innerHTML = value;

    const btnEl = document.createElement("button");
    btnEl.innerHTML = "Delete";

    // create div element and append span and button elements to it
    const divEl = document.createElement("div");
    divEl.appendChild(spanEl);
    divEl.appendChild(btnEl);

    // append div element to body
    document.querySelector("body").appendChild(divEl);
}