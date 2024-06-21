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

let todoIndex = 0
const createTodo = (value) => {
  todoIndex++
  let newTodo = document.createElement("div");
  newTodo.className = "to-do-task";
  newTodo.id = `${todoIndex}`;
  newTodo.innerHTML = ` 
  <label class="to-do-task">
  <h3>${value}</h3>
  <button id="remove--button">
  <img src="./assets/icons/thrashIcon.png" alt="remove Todo" />
  </button>
  </label>
 `;

  todoContainer.appendChild(newTodo);
  clearTodocontainer.style.display = "flex";

  saveTodo();

  
  todoContainer.querySelectorAll("div.to-do-task").forEach((todo, index) => {
    todoContainer.querySelectorAll("div.to-do-task")[index].addEventListener("click", removeTodo)
    clearTodocontainer.children[0].children[0].textContent = `You have ${index} pending todo`;
  })
}

const removeTodo = (e) => {
  console.log("clicked", e.target.style.display = "none")
  console.log(todoContainer.children[1].children[0].children[1].children[0] == e.target)
  console.log(todoContainer.children[1].children[0].children[1].children[0])


  const [...todos] = todoContainer.querySelectorAll("div.to-do-task")


  localStorage.clear("todos", todos);
}

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

