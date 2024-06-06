const car = {
  brand: "Bmw",
  model: "e31",
  year: 1998,
  series: 8,
  color: undefined
}

car.color = "black"
console.log(car)

for(proprierties in car){
  console.log(proprierties)
}

delete car.color

console.log("color" in car)