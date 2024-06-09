const companies = new Set()
console.log(companies.name = "Carrefour")
console.log(companies)

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

for(const language of setOfLanguages){
  console.log(language)
}

companies.add("Microsoft")
companies.add("Meta")
console.log(typeof companies)

for(const language of setOfLanguages){
  companies.language = (language)
}

console.log(companies.language)

// set is a object with unique values