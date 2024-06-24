const container = document.getElementById("container")
const button = document.getElementById("button")
const input = document.getElementById("input")
const alert = document.getElementById("alert-field")

button.addEventListener("click", () => {
  const inputValue = input.value
  alert.style.display = "none"
  
  if(isNaN(inputValue)){
    alert.style.display = "flex"
  } else if(inputValue){
    container.innerHTML = ""
    numberGenarator(inputValue)
  }
  input.value = ""
})


const isPrime = (number) => {
  if(number <= 1){
    return false
  }
    for(let index = 2; index <= Math.sqrt(number); index++){
      if(number % index === 0){
        return false
      }
    }
    return true
}

const numberGenarator = (input) => {
  for(let index = 0; index <= input; index++){
    const number = document.createElement("div")
    number.className = "number-container"
    number.textContent = index
    number.style.background = "#1b8f08"
    if(isPrime(index)){
      number.style.background = "#ff3737"
    }
    else if(index % 2 === 1){
      number.style.color = "#000a"
      number.style.background = "#fffb00"
    } 
    container.appendChild(number)
  }
}
