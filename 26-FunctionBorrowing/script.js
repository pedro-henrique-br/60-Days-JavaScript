class Car {
  constructor(branch, name, realeaseYear, price){
    this.branch = branch
    this.name = name 
    this.realeaseYear = realeaseYear
    this.price = price 
  }
  rondomdom(){
    return `i am a ${this.price} car rrroooommm rondom dom`
  }
}

const newCar = new Car("BMW", "30i", "2008", "$21.999,99")

console.log(newCar.rondomdom())
console.log(newCar.branch)

class Bike {
  constructor(branch, name, realeaseYear, price){
    this.branch = branch
    this.name = name 
    this.realeaseYear = realeaseYear
    this.price = price 
  }
}

const newBike = new Bike("BMW", "S100RR", "2021", "25.000,00")

console.log(newCar.rondomdom.call(newBike))

const bikeRondomdom = newCar.rondomdom.bind(newBike)

console.log(bikeRondomdom())

const find = (...arguments) => {
  let args = Array.prototype.slice.call(arguments)
  return args.filter((a) => a.includes("o"))
}

console.log(find("Masaroppi", "Super Sayajin", "David Goggins", "Mark Zuckerberg", "Dylan o'Brien", "McGreggor"))
console.log((["Masaroppi", "Super Sayajin", "David Goggins", "Mark Zuckerberg", "Dylan o'Brien", "McGreggor"]).filter((name) => name.includes("e")))