const fruits = ["banana", "Kiwi", "Strawberry"];

fruits.push("Avocado");
console.log(Object.keys(fruits));
console.log(fruits.length);

fruits.length = 2;
console.log(Object.keys(fruits));
console.log(fruits);

const [fruit] = Array.of(fruits);

console.log(fruit[1]);

fruit.pop();
console.log(fruit[0]);

let carBranchString = "Bmw, Honda, Pegeout, Chevrolet, Chevy, Abhi, Mercedes";
let carBranchArray = carBranchString.split(",");
console.log(carBranchArray[6]);

carBranchArray[6] = " Volkswagen";
console.log(carBranchArray[6]);
console.log(carBranchArray.includes("Bmw", "Honda"));
console.log(
  carBranchArray.reduce((branch, carBranchArray) => branch + carBranchArray)
);
const twoHundredCommaValue = Array(200).fill(",");
console.log(twoHundredCommaValue.length);

let index = carBranchArray.indexOf("Pegeout");
console.log(index);

if (index === -1) {
  console.log("This branch already exist");
} else {
}

index = carBranchArray.indexOf("Chevrolet");
console.log(index === -1 ? "This branch exist" : "Try again");

const emptyArray = [];

const count = [1, 2, 3, 4, 5, 6, 7];

console.log(count[0], count[3], count[6]);

const mixedDataTypes = ["Hello Friend", 0, "MRX", false, undefined];

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies.length);
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);

itCompanies.map((companie) => console.log(companie));
itCompanies.map((companie) => console.log(companie.toUpperCase()));
itCompanies[5] = "Oracle and Amazon";
itCompanies.pop();
console.log(itCompanies.join(", ") + " are big it companies");

console.log(
  itCompanies.includes("Instagram") ? "The company exist" : "Company not found"
);
console.log(
  itCompanies.includes("Google") ? "The company exist" : "Company not found"
);

console.log(
  itCompanies.filter((companie) => (companie.includes("oo") ? companie : ""))
);
console.log(itCompanies.sort());
console.log(itCompanies.reverse().slice(3, 6));
console.log(itCompanies.reverse().slice(3));
itCompanies.shift();
console.log(itCompanies);
console.log(itCompanies.slice(3, 4));
itCompanies.pop();
console.log(itCompanies);
itCompanies.splice(0, 4);
console.log(itCompanies);
itCompanies.push("Hotmart");
console.log(itCompanies);

console.log(countries.length);
countries.push("United kingdown");
console.log(countries);

const countries1 = countries.slice(0, 3);
const countries2 = countries.slice(3);

console.log(countries1);
console.log(countries2);

const countriesArray = new Array(countries1, countries2);

console.log(countriesArray);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();

const maxAge = (ages) => {
  let age = 0;
  for (let index = 0; ages.length > index; index++) {
    if(ages[index] > age) {
      age += ages[index];
    } else {
      age = 0;
    }
  }
  console.log(age);
  return age
};

maxAge(ages);

const minAge = (ages) => {
  let age = 0;
  for (let index = 0; ages.length > index; index++) {
    if(ages[index] < age || age == 0) {
      age += ages[index];
    } else {
    }
  }
  console.log(age);
  return age
};

minAge(ages);

const getAverageAge = (ages) => {
  let totalAge = 0;
  let avarageAge = 0
  for (let index = 0; ages.length > index; index++) {
    totalAge += ages[index]
    avarageAge = totalAge / ages.length
  }
  return Math.floor(avarageAge)
};

console.log(getAverageAge(ages));
