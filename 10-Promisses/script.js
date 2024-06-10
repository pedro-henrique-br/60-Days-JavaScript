const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const countries = ["Canadá", "United States", "Orklahoma"];
    if (countries.length >= 2) {
      resolve("Fullfiled");
    } else {
      reject("Error, countries not find");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(`Sucess: ${result}`);
  })
  .catch((error) => console.log(error));

const url = "https://pokeapi.co/api/v2/pokemon/";

const getAllData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  getPokemons(data);
};

getAllData();

const getPokemons = (data) => {
  const [bulbasaur, bulbasaur_Evolution, bulbasaur_EvolutionFinal] =
    data.results;
  console.log(bulbasaur, bulbasaur_Evolution, bulbasaur_EvolutionFinal);
};

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const getCatsData = async() => {
  const promise = await fetch(catsAPI)
  const data = await promise.json()
  getCat(data)
}

getCatsData()

const getCat = (cats) => {
  for(const cat of cats){
    console.log(`The avarage weight of ${cat.name} are ${Number(cat.weight.metric[0]) + Number(cat.weight.metric[4]) / 2}`)
  }
}