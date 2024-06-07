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

function getFullData () {
  const data = {
    name: "Pedro",
    lastName: "Henrique",
    countries: [
      "Europe",
      "France",
      "Brazil"
    ],
    getData: function(){
      return `${this.name} live in ${this.countries[2]}! `
    }
  }
  return data.getData() + data.hasOwnProperty("getData")
}

console.log(getFullData())

const dog = {}
console.log(dog)

dog.name = "destroyer"
dog.age = "5 years"
dog.legs = 4

console.log(dog)

dog.bark = function () {
  return "Au au au"
}

dog.breed = "pinsher"
console.log(dog.bark())

dog.getDogInfo = function () {
  return `the dog name is ${this.name} he has ${this.age} old and he barks like "${dog.bark()}" and he is a ${this.breed}`
}

console.log(dog.getDogInfo())

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


const {Alex, Asab, Brook, Daniel, John, Thomas, Paul} = users

const usersArray = [Alex, Asab, Brook, Daniel, John, Thomas, Paul]

const userWithMoreSkills = usersArray.map((user) => {
  let skill = 0
  for(let index = 0; user.skills.length > index; index++){
    if(user.skills.length > index){
      skill =+ user.skills.length
      
    } else {
      skill = 0
    }
  }
  return skill
})

console.log(userWithMoreSkills)