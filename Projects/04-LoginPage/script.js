const loginLink = document.getElementById("login")
const registerLink = document.getElementById("register")
const registerContainer = document.getElementById("register-container")
const loginContainer = document.getElementById("login-container")
const loader = document.getElementById("loader")
const loginButton = document.getElementById("login-button")
const registerButton = document.getElementById("register-button")

loginLink.addEventListener("click", () => {
  loader.style.display = "flex"
  loginContainer.style.display = "none"
  
  setTimeout(() => {
    registerContainer.style.display = "flex"
    loader.style.display = "none"
  }, 700);
})

registerLink.addEventListener("click", () => {
  loader.style.display = "flex"
  registerContainer.style.display = "none"

  setTimeout(() => {
    loginContainer.style.display = "flex"
    loader.style.display = "none"
  }, 700);
})

loginButton.addEventListener("click", () => {
  let inputs = loginContainer.querySelectorAll("input")
    inputs.forEach((input) => input.value ? ( input.value = "") : (""))
})