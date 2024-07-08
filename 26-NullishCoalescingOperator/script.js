let foo = null
let number = 32

const valA = foo ?? "foo"
const valB = number ?? "number"
const valC = foo ?? `foo is ${foo}`
const valD = foo || `foo is ${foo}`

console.log(valA)
console.log(valB)
console.log(valC)
console.log(valD)
