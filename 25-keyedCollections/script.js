//? Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
// Armazenamento de dados com chaves complexas

const map = new Map()

map.set('1', "string_1")
map.set(2, "string_2")

console.log(map.get("1"))
console.log(map.get(2))

const fruitsMap = new Map([
  [ 1,
    {
    name: "Orange",
    price: "R$13,34"
    }
  ],
  [ 2,
    {
    name: "Banana",
    price: "R$5,99"
    }
  ],
  [ 3,
    {
    name: "Grape",
    price: "R$11,14"
    }  
  ]
])

for(const fruit of fruitsMap.values()){
  console.log(`${fruit.name} is ${fruit.price}`)
}

const weakMap = new WeakMap()
// Associações fracas de chaves a valores
const user_1 = {userId: 1}
weakMap.set(user_1, {userName: "Pedro"})

console.log(weakMap.get(user_1).userName)

console.log(weakMap.has(user_1))

const x = new Set([1,2,3])

// Coleção de valores únicos 

x.add(4)
x.add("Apple")
console.log(x.has("Apple"))
console.log(x)

const y = new WeakSet()
// Armazenamento de objetos sem impedir coleta de lixo
const userId = {id: 1}
y.add({id: 1})
console.log(y.has(userId))


// Criar um Dicionário de Usuários

//     Crie um Map onde as chaves sejam IDs de usuário (números) e os valores sejam objetos com informações sobre o usuário (nome, idade, etc.).
//     Adicione, remova e atualize usuários no Map.
//     Itere sobre o Map e exiba todas as informações dos usuários.

const nameInput = document.getElementById("name-input")
const ageInput = document.getElementById("age-input")
const emailInput = document.getElementById("email-input")
const button = document.getElementById("button")
const inputs = document.querySelectorAll("input")
const cardContainer = document.getElementById("card-container")

const users = new Map()

users.set(1, "a")
console.log(users.get(1))

let index = 0

const newUser = (index) => {
  const userMap = new Map()
  const user = {
    userId_ : index,
    userName : nameInput.value || null,
    age : ageInput.value || null,
    email : emailInput.value  || null,
  }

  userMap.set(index, user)

  const {userId_, userName, age, email} = userMap.get(index)

  let userCard = document.createElement("div")
  userCard.innerHTML = `
  <div class="card">
    <p>${userId_}</p>
    <h1>${userName}</h1>
    <h1>${age}</h1>
    <h1>${email}</h1>
    <button>Delete user</button>
  </div>
  `
  cardContainer.appendChild(userCard)
  userCard.querySelector("button").addEventListener("click", () => {
    deleteUser(userId_, userMap, userCard)
    index = userId_
  })
}

const deleteUser = (userId_, userMap, userCard) => {
  console.log(userMap)
  userMap.delete(userId_)
  console.log(userMap)
  cardContainer.removeChild(userCard)
}

button.addEventListener("click", (e) => {
  e.preventDefault()
  if(nameInput.value == ""){
    console.log("insert your name")
  } else if(ageInput.value == ""){
    console.log("insert your age")
  } else if(emailInput.value == ""){
    console.log("insert your email")
  } else {
    newUser(index += 1)
    inputs.forEach((input) => input.value = "")
  }
})

inputs.forEach((input) => input.value = "")