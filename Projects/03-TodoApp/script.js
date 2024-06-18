const input = document.getElementById("input--field");
const addButton = document.getElementById("sum--button");
const todoContainer = document.getElementById("to-do--container");
const removeButton = document.getElementById("remove--button");
const clearTodocontainer = document.getElementById("to-do--container");

addButton.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue) {
    createTodo(inputValue);
  }
  input.value = "";
});

const createTodo = (value) => {
  let newTodo = document.createElement("div");
  newTodo.className = "to-do-task";
  newTodo.innerHTML = ` 
  <label class="to-do-task">
  <h3>${value}</h3>
  <button id="remove--button">
  <img src="./assets/icons/thrashIcon.png" alt="remove Todo" />
  </button>
  </label>`;

  todoContainer.appendChild(newTodo);
  clearTodocontainer.style.display = "flex";

  saveTodo();

  
  for (let index = 3; index < todoContainer.childNodes.length; index++) {
    clearTodocontainer.children[0].children[0].textContent = `You have ${
      index - 3
      } pending todo`;
    todoContainer.childNodes[index].children[0].children[1].addEventListener("click", removeTodo)
    }
};

const saveTodo = () => {
  const todos = []
  todoContainer.querySelectorAll("div.to-do-task").forEach((todo) => {
    todos.push(todo.childNodes[1].childNodes[1].textContent)
  })
  
  localStorage.setItem("todos", todos);
};


const loadTodo = () => {
  const content = localStorage.getItem("todos");
  if (content) {
    const todoArray = content.split(",")
    todoArray.map((todo) => createTodo(todo))
  } 
};

window.onload = () => {
  loadTodo();
};

const removeTodo = () => {
  console.log("clicked")
  localStorage.clear("to-do")
}
