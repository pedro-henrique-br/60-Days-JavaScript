const input = document.getElementById("inputField");
const output = document.getElementById("outputField");
const buttonConvert = document.getElementById("convert-button");

buttonConvert.addEventListener("click", (e) => {
  e.preventDefault();
  binaryConversionToDecimal(input.value);
});

const binaryConversionToDecimal = (number) => {
  let decimalNumber = 0
  for (let i = 0; String(number.length) > i; i++) {
    let binaryNumber = number[number.length - 1 - i];
    decimalNumber += Number(binaryNumber) * Math.pow(2, i)
  }
  output.textContent = decimalNumber 
};


