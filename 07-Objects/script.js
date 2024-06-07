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

users.Pedro = new Object(users.Paul)
users.Pedro.email = "pedroDev@gmail.com"
users.Pedro.isLoggedIn = true

const {Alex, Asab, Brook, Daniel, John, Thomas, Paul} = users

const usersArray = [Alex, Paul, Brook, Daniel, John, Thomas, Asab]

console.log(Object.assign(users))
console.log(Object.values(users))
console.log(Object.entries(users))
console.log(Object.keys(users))

const userWithMoreSkills = (usersArray) => {
  let userWithManySkills = 0
  for(let index = 0; index < usersArray.length; index++){
    if(usersArray[index].skills.length > userWithManySkills){
      userWithManySkills += usersArray[index].skills.length
    } else {
      userWithManySkills = 0
    }
  }
  return userWithManySkills
}

console.log(userWithMoreSkills(usersArray))

usersArray.find((user) => user.isLoggedIn === true ? (console.log(user.email + " " + "is logged in")) : (console.log(`${user.email} is not loged`)))

const usersApp = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

const newUser = {
  _id: 'ab12ex',
  username: 'Alex',
  email: 'alex@alex.com',
  password: '123123',
  createdAt:'08/01/2020 9:00 AM',
  isLoggedIn: false
}

const signUp = (newUser) => {
  let isUserExist = false
  for(let index = 0; usersApp.length > index; index ++){
    if(Object.values(usersApp[index]).includes(newUser._id)){
      isUserExist = true
    } 
  }
  return isUserExist
}

console.log(signUp(newUser))

const rateProduct = () => {
  const ratings = products.map((product) => {
    return product.ratings
  })
  return ratings
}

console.log(rateProduct())

const likeProduct = () => {
  const isLiked = false
  for(let index = 0; products.length > index; index ++){
    if(products[index].likes.length = 0){
      isLiked = true
    } else {
      products[index].likes = "fg12cy"
    }
  }
  console.log(products)
}

likeProduct()