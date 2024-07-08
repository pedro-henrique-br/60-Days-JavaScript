let foo = null
let number = 32
let number_2 = -0

const valA = foo ?? "foo"
const valB = number ?? "number"
const valC = foo ?? `foo is ${foo}`
const valD = foo || `foo is ${foo}`
const valE = number_2 || "number is false"
const valF = number_2 ?? "number is false"

console.log(valA)
console.log(valB)
console.log(valC)
console.log(valD)
console.log(valE)
console.log(valF)


