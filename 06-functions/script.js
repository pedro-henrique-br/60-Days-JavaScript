// Closure 

function sumNumbers (x, y) {
  const a = x
  const b = y
  function subNumbers () {
    console.log(a - b)
  }
  subNumbers()
}

sumNumbers(8,5)

// Recursion

function even(number) {
  if(number % 2 === 0)
    return number
  else {
    return even(number - 1)
  }
}

console.log(even(3))


const printZeroPaddedWithLabel = (number , label) => {
  let numberString = String(number)
  numberString += ".000"
  console.log(`${numberString} ${label}`)
}

const printFarmIventory = (grainNumber) => {
  printZeroPaddedWithLabel(grainNumber, "Beans")
  printZeroPaddedWithLabel(grainNumber, "Brazilian Beans")
  printZeroPaddedWithLabel(grainNumber, "Oats")
  printZeroPaddedWithLabel(grainNumber, "Corn")
}


printFarmIventory(20)


const countBs = (string) => {
  let count = 0
  for(let i = 0; string.length >= i; i++){
    if(string[i] === "B"){
      count += 1
    }
  }
  console.log(count)
}

countBs("Biggest Bean of the world")
countBs("Biggest bean of the world")
countBs("Biggest Bean of the world Barrel world")

const countChar = (string, char) => {
  let count = 0
  for(let i = 0; string.length >= i; i++){
    if(string[i] === char){
      count += 1
    }
  }
  console.log(count)
}

countChar("Some stuff", "f")
countChar("Some stuff", "u")
countChar("Writing the most used vogals of the alphabetic", "e")