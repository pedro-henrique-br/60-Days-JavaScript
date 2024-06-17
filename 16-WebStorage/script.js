const user = {
  userId: 1,
  userName: "Alexander",
  userPassword: "wdzxca22az",
  isUserOnline: false
}

localStorage.clear()
localStorage.setItem("user", JSON.stringify(user))
user.isUserOnline = true
localStorage.getItem("user")

console.log(localStorage)

localStorage.clear()
sessionStorage.setItem("user", user)
console.log(localStorage)
console.log(sessionStorage)