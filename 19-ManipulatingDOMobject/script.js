const allTitles = document.querySelectorAll(".title")

for(let index = 0; index < allTitles.length; index++){
  console.log(allTitles[index].textContent)
  allTitles[index].textContent = [index]
  console.log(allTitles[index].textContent)
}

const container = document.body.querySelector(".counter-container")
const countriesContainer = document.body.querySelector(".countries-container")

for(let index = 0; countries.length > index; index++){
  const country = document.createElement("div")
  country.className = "country-container"
  country.textContent = countries[index]
  country.style.display = "none"

  countriesContainer.appendChild(country)
}

const isPrime = (number) => {
  if(number <= 1){
    return false
  }
    for(let index = 2; index <= Math.sqrt(number); index++){
      if(number % index === 0){
        return false
      }
    }
    return true
}

const numberGenarator = () => {
  for(let index = 0; index <= 101; index++){
    const number = document.createElement("div")
    number.className = "number-container"
    number.textContent = index
    number.style.background = "#1b8f08"
    if(isPrime(index)){
      number.style.background = "#8c0000"
    }
    else if(index % 2 === 1){
      number.style.background = "#efcc00"
    } 
    container.appendChild(number)
  }
}

numberGenarator()

const infoContainer = document.querySelector(".user-app")

console.log(infoContainer)

const printUserInfo = () => {
  const {description, challengeSubtitle, challengeYear, keywords, author, challenges} = pedroBarbosaDev

  const userInfo = document.createElement("div")
  userInfo.className = "user-info"
  userInfo.innerHTML = `
  <h2>${description} ${challengeYear}</h2>
  <p>${challengeSubtitle}</p>
  <ul class="challenges">
  ${challenges.map((challenge) => {
    return `<li>${challenge.name}<select><option selected>${challenge.topics[0]}</option>${challenge.topics.map((topic) => {return `<option>${topic}</option>`})}</select><p>${challenge.status}</p></li>`
  })}
  </ul>
  `
 
  infoContainer.appendChild(userInfo)
}

printUserInfo()