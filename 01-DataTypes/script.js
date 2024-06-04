//TODO Data Types

// TODO String

// * Syntax '' or "" template literals ``

// * literal declaration ""

// ex: "Hello JavaScript"

// * Global Object declaration

console.log(new String("thing"));

// * Methods

console.log("JavaScript".charAt(4)); // Output: 4

// treathing a string as an array-like Object *//
console.log("JavaScript"[4]); // Output: 4

let stringPrimitive = "foo";
let stringObject = new String(stringPrimitive);

console.log(typeof stringPrimitive); // Output: String
console.log(typeof stringObject); // Output: Object

let string1 = "2 + 4";
let string2 = new String("2 + 3");
let string3 = "2 > 3";
let string4 = new String("2 > 3");

// ? eval() basically computes the string as a JavaScriptCode

//   eval is a dangerous function!  which executes the code passed
//   with the caller's privileges. If you run the eval()with a string
//   of characters that could be affected by a malicious party

console.log(eval(string1)); // Output: 6
console.log(eval(string2)); // Output: String Object ("2 + 3")
console.log(eval(string3)); // false
console.log(eval(string4)); // Output: String Object ("2 > 3")
console.log(0, eval(string1)); // Inderect Calling, Output: 0 6

// * Generic String Methods

let number = "1000";
console.log(number.replace(/0/, "20"));
console.log(number.replace(/1/, "20"));

console.log(number.indexOf("1"));
console.log(number.lastIndexOf("0"));
console.log("olá pedro".trim());

const numberSliced = number.slice("0", "1");
const numberSplited = number.split("0", "1");

console.log(numberSliced);
console.log(numberSplited);

const inputText = document.getElementById("text");
const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  const inputValue = e.target.value;
  inputText.innerText = inputValue;
});

// TODO Number

console.log(Number(1 + 1)); // Constructor, Output: 2
console.log(Number(5).toLocaleString())
console.log(Number(50).toFixed(1))
console.log(Number(50).toExponential(1))
console.log(Number(50).toPrecision(1))

number = 20
console.log(isNaN(number))

number = 20.1
console.log((Math.random() * number).toFixed(0))

console.log(Math.ceil(2.2))

// TODO Boolean

// Boolean is a logical data type that can have only the values true or false

console.log("João" && "João" ? "Seu nome é João" : "Tente novamente")
console.log(typeof false)
console.log(typeof true)

if("Chico"){
  console.log("Chico")
} else {
  console.log("Tente novamente")
}

<<<<<<< HEAD
// TODO Symbol
=======
// Todo Symbol

const symbol1 = Symbol("foo")
const symbol2 = Symbol("foo")

console.log(symbol1 === symbol2)
>>>>>>> 42664f519b2e93178fc3d38d3c10c4761a5c3a0f
