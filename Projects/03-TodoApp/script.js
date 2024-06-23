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
  let newTodo = document.createElement("div");
  newTodo.className = "to-do-task--container";
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

  const todoLength = todoContainer.querySelectorAll("div.to-do-task--container").length

  clearTodocontainer.style.display = "flex"
  clearTodocontainer.children[0].children[0].textContent = `You have ${todoLength} pending todo`;
  clearTodocontainer.children[0].children[1].addEventListener("click", clearAllTodos)

  todoContainer.querySelectorAll("div.to-do-task--container").forEach((todo, index) => {
    todoContainer.querySelectorAll("div.to-do-task--container")[index].addEventListener("click", () => removeTodo(todo))
  })

  saveTodo();
}

const removeTodo = (todo) => {
  const [...todos] = todoContainer.querySelectorAll("div.to-do-task--container")
  let todoLength = todoContainer.childNodes.length - 3
  todoLength -= 1
  if(todos.includes(todo)){
    todoContainer.removeChild(todo)
    clearTodocontainer.children[0].children[0].textContent = `You have ${todoLength} pending todo`;
    todoLength === 0 ? (clearTodocontainer.style.display = "none") : ("")
    const todosArray = localStorage.getItem("todos")
    const todosSplit = todosArray.split(",")
    console.log(todosSplit)
    const todoString = todo.childNodes[1].childNodes[1].textContent
    console.log(todosSplit.includes(todoString))
  }
  }

const clearAllTodos = () => {
  localStorage.removeItem("todos")
  todoContainer.querySelectorAll("div.to-do-task--container").forEach((todo) => todoContainer.removeChild(todo))
  clearTodocontainer.style.display = `none`;
}


const saveTodo = () => {
  const todos = []
  todoContainer.querySelectorAll("div.to-do-task--container").forEach((todo, index) => {
      todos.push(todo.childNodes[1].childNodes[1].textContent)
    }
  )
  
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

