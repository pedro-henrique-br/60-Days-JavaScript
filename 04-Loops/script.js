// for(let i = 0; i <= 10; i++){
//   console.log(`Variable i = ${i}`)
// }

// for( /* inicio; condição; conclusão */){
//   declaração
// }

const input = document.getElementById("input-field")
const output = document.getElementById("output-field")
const button = document.getElementById("button")

// For in statement

function countPhrase (phrases) {
  let phrase = 0
  for(let i = 1; phrases.length > phrase; i++){
    phrase++
  }
  return phrase
}

button.addEventListener("click", () => {
  const inputValue = input.value
  input.value = ""
  output.textContent = `The number of letter is ${countPhrase(inputValue)}`
})

let i = 0

// Do - While

do {
  i++
  console.log(i)
} while ( i < 10)

let x = 0

// While

while(x < 5){
  x++
  console.log("number", x)
  if(x === 3){
    break
  }
}

// For of Statement

const fruits = ["Banana", "Blueberry", "Avocado", "Kiwi", "Grape", "Orange"]
fruits.newFruit = "apple"

for(fruit of fruits){
  console.log(fruit)
}

for(fruit in fruits){
  console.log(fruit)
}

const keyboards = {
  name: "Redragon - AKUMA",
  price: "USD 19,99"
}

for(const [name , price] of Object.entries(keyboards)){
  console.log(name, price)
}
