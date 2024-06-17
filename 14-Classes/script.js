class Square {
  constructor(height, width){
    this.height = height
    this.width = width
  }
}

class Circle extends Square {
  constructor(height, width){
    super(width, height)
    this.height = Number(height)
    this.width = Number(width)
  }
  getArea() {
    const area = this.height * this.width
    return area
  }

  get getWidth (){
    return this.width
  }

  set setWidth (width) {
    return this.width += width
  }
  static getAreaPow () {
    const width = 10
    const height = 10
    return width * height
  }
}

const circle = new Circle(2,4)
console.log(circle.getArea())
console.log(circle.getWidth)
circle.setWidth = 12
console.log(circle.getArea())
console.log(Circle.getAreaPow())
console.log(Square)

const Rectangle = class extends Square {
  constructor(width, height){
    super(width, height)
    return width, height
  }
}

console.log(Rectangle)

class statistic {
  constructor(age){
    this.age = age
  }
  set setAge(age) {
    return this.age = age
  }
  getCount(age){
    return age.length
  }
  getSum(age){
    let total = 0
    let index = 0
    while(index < age.length){
      total += age[index]
      index++
    }
    return total
  }
  getMin(age){
    let min = 0
    let index = 0
    while(index < age.length){
      if(age[index] > min){
        min += age[index]
      } else {
        min = 0
      }
      index++
    }
    return min
  }
  getMax(age){
    let max = 0
    let index = 0
    while(index < age.length){
      if(age[index] >= max){
        max = 0
        max += age[index]
      } else {
        max 
      }
      index++
    }
    return max
  }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistcs = new statistic(ages)

console.log(statistcs.getSum(ages))
console.log(statistcs.getMin(ages))
console.log(statistcs.getMax(ages))