const input = document.getElementById("input")

input.addEventListener("keypress", (e) => {
  const inputValue = e.target.value
  if(e.key === "Enter" && inputValue){
    e.preventDefault()
    const inputRegExp = stringRegExp(inputValue)
    e.target.value = ""
    console.log(multNumbers(inputRegExp))
  }
})

const stringRegExp = (string) => {
  return string.replace((/[a-z]/), "")
}

const multNumbers = (sumNumbers) => {
  return sumNumbers * sumNumbers
}

