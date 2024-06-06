const fruits = ["banana", "Kiwi", "Strawberry"]

fruits.push("Avocado")
console.log(Object.keys(fruits))
console.log(fruits.length)

fruits.length = 2
console.log(Object.keys(fruits))
console.log(fruits)

const [fruit] = Array.of(fruits)

console.log(fruit[1])

fruit.pop()
console.log(fruit[0])
 
let carBranchString = "Bmw, Honda, Pegeout, Chevrolet, Chevy, Abhi, Mercedes"
let carBranchArray = carBranchString.split(",")
console.log(carBranchArray[6])

carBranchArray[6] = " Volkswagen"
console.log(carBranchArray[6])
console.log(carBranchArray.includes("Bmw", "Honda"))
console.log(carBranchArray.reduce((branch, carBranchArray) => branch + carBranchArray))
const twoHundredCommaValue = Array(200).fill(",")
console.log(twoHundredCommaValue.length)

let index = carBranchArray.indexOf("Pegeout")
console.log(index)

if(index === -1){
  console.log("This branch already exist")
} else {
}

index = carBranchArray.indexOf("Chevrolet")
console.log(index === -1 ? ("This branch exist") : ("Try again"))

const emptyArray = []

const count = [1,2,3,4,5]

console.log(count.slice(1, 4))