const input = document.getElementById("input--field");
const addButton = document.getElementById("sum--button");
const todoContainer = document.getElementById("to-do--container");
const removeButton = document.getElementById("remove--button");
const clearTodocontainer = document.getElementById("to-do--container")

addButton.addEventListener("click", () => {
  const inputValue = input.value;
  if(inputValue){
    localStorage.setItem("to-do", inputValue);
    createTodo(localStorage);
  }
  input.value = "";
});

const createTodo = (todo) => {
  const todoString = localStorage.getItem("to-do");
  let newTodo = document.createElement("div");
  newTodo.className = "to-do-task"
  newTodo.innerHTML = ` 
  <label class="to-do-task">
  <h3>${todoString}</h3>
  <button id="remove--button">
  <img src="./assets/icons/thrashIcon.png" alt="remove Todo" />
  </button>
  </label>`;
  todoContainer.appendChild(newTodo)
  clearTodocontainer.style.display = "flex"
  todoContainer.querySelectorAll("button#remove--button").forEach((button) => button.addEventListener("click", () => {
    console.log(todoContainer.children.length - 1)
  }))
  for(let index = 3; index <= todoContainer.childNodes.length; index++){
    clearTodocontainer.children[0].children[0].textContent = `You have ${index - 3} pending todo`
  }
};


