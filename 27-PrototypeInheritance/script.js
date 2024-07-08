const bike = {
  branch: "Yamaha",
  wheels: 2,
  isWheelie: true,
  wheelie(){
    return `${this.isWheelie}`
  }
}

const car = {
  branch: "BMW",
  wheels: 4,
  potency: "131cv"
}

console.log(bike.potency = "31cv")
console.log(bike)
console.log(bike.wheelie())

car.__proto__ = bike
car.isWheelie = false
console.log(car.wheelie())

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000
};

console.log(table.pen)
console.log(bed.glasses)

let animal = {
  feed: [],
  eat(food) {
    this.feed = [food];
  }
};

let isFeed = {
  __proto__: animal
};

animal.eat("dog's food")
console.log(animal.feed)
console.log(isFeed.feed)