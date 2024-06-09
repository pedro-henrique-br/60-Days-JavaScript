// TODO Callback func

const callBack = (x, y) => {
  return x + y
}

const sumTwoNumbers = (callback, x, y) => {
  return callBack(x, y) + y
}

console.log(sumTwoNumbers(callBack, 3, 2))

// TODO High order function
// ? return function as a value

const highOrder = x => {
  const subTwoIntegers = y => {
    return Math.floor(x + y)
  }
  return subTwoIntegers
}

console.log(highOrder(5)(4.5))

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'hamas']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Explain the difference between forEach, map, filter, and reduce.

// both of the methods will through the entire array, filter is a method to filter the information that are passed in the implement test,
// Map return a new array without modifying the current one perfoming some transformation in these items
// Reduce goes through each item of the array making an expression chosen, and in the end return a single value
// ForEach gos through each item of the array making an expression and returning a value for each item of the array

countries.forEach((country) => console.log(country.toLowerCase()))
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase === countries)
console.log(countriesToUpperCase)

countries.filter((country) =>  country.toLowerCase().includes("land") ? (console.log(country)) : (null))
countries.filter((country) => country.length === 6 ? (console.log(country)) : (null))
countries.filter((country) => country[0] === "E" ? (console.log(country)) : (null))
products.filter((product) => product.price == 0 ? (console.log(product.product)) : (null))

const dataTypes = ["String_1", 1, "String_2", false, true, 9,2, "String_3"]

const getStringList = (array) => {
  for(let index = 0; array.length > index; index++){
    if(typeof array[index] == typeof ""){
      console.log(array[index])
    }
  }
}


getStringList(dataTypes)


console.log(numbers.reduce((number, currentValue) => currentValue + number))

// Explain the difference between some and every
// the diferrence beetwen some and every is that every method of the array instances test wether all elements in the array pass the test implemented by the provided func and the some test whether at least once element in the passed array

console.log((countries.every((country) => country.toLowerCase().includes("land"))))

console.log(numbers.find((number) => number == 10))
console.log(numbers.findIndex((number) => number === 3))


console.log(numbers.reduce((number, currentValue) => currentValue + number))
// Explain the difference between find and findIndex 
// find instances test if any element in the array pass in the test implemented by a provided function
// and the findIndex do the same, but return the index of the element in the passed array

console.log(countries.find((country) => country.length === 5))
console.log(countries.findIndex((country) => country.length === 5))

console.log(products.map((product) => product.price).reduce((price, totalPrice) => price == "" ? (0) : (Number(totalPrice += price))))
