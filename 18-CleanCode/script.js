const count = {
  x:2,
  y:5,
  sumTwoNumbers(x, y){
    return count.x + count.y
  }
  
}

console.log(count.sumTwoNumbers())

const firstName = 'Johhn'

const obj = {
  firstName,
  firstName: 'Pedro'
}

console.log(obj)

const has = Object.prototype.hasOwnProperty;
console.log(has.call(obj, obj.firstName))
console.log(obj.hasOwnProperty(firstName))

const lastName = ["Jonh", "Lenon", "Leorio"]

// Implicit
const fullName = lastName.map(name => `${name} Caddilan`)
console.log(fullName)


// Explicit

const fruits = ["Orange", "Banana", "Grape"]
const getFruitsPrice = fruits.map(fruit => {
  return fruits.push(fruit.price =  `${fruit} $14`)
})

console.log(fruits)

const numbers = {a: 1, b:2, c:3}
const copyNumber = Object.assign({...numbers, d: 4})

const {a, ...number} = copyNumber

console.log(number)
console.log(copyNumber)

const copyObj = {...copyNumber}
console.log(copyObj === copyNumber)

for(const number in numbers){
  console.log(number, numbers[number])
}

const names = ["Pedro", "Talisson"]

const arrayNames = Array.from(names)
console.log(arrayNames)
console.log(arrayNames == names)

const processNames = (names) => {
  return [name1, name2] = names
} 

console.log(processNames(names))