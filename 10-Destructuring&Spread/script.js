const usersInfo = [{name: "Pedro", id: "132_zad"},{name: "Oliver", id: "oliv@22"},{name: "Jonny", id: "zzkkadw2"},{name: "Grace", id: "zzkkada2w2"},{name: "Olivia", id: "zzkaxkadw2"}]

const [user_1, user_2, user_3, ...restUsers] = usersInfo

console.log(user_1)
console.log(restUsers[0])
console.log(restUsers[1])



const {name: userName, id: id_ } = user_1
const {name, id, id_1 = 2 } = restUsers[0]

console.log(id_1)
console.log(name, id)
console.log(userName, id_)

const copiedUser = {...usersInfo[0]}

console.log(copiedUser)

const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
  ]

for(const user of users){
  user.isFrontEnd = true 
  const {name: userAppName, scores, skills, age, isFrontEnd} = user
  console.log(`Hi i'm ${userAppName}, my score is ${scores}, my tech stack is ${skills.map((skill) => skill)}, i'm 
  ${age} years old, ${isFrontEnd === true ? ("and i'm a frontend developer") : ("i'm almost there")}`)
  skills.length < 2 ? (console.log(`The users who have less than two skills are ${userAppName}`)) : ("")
}

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = () => {
  for(student of students){
    const {name = student[0], skills = student[1], score = student[2]} = student
    const object = {name: name, skills: skills, score: score}
    console.log(object.name, object.skills, object.score)
  }
}

convertArrayToObject()
