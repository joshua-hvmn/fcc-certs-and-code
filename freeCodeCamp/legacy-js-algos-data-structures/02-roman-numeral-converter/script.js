const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const results = document.getElementById('output');
let output = '';
const numeralArray = [
  {arabic: 1000, roman: "M"},
  {arabic: 900, roman: "CM"},
  {arabic: 500, roman: "D"},
  {arabic: 400, roman: "CD"},
  {arabic: 100, roman: "C"},
  {arabic: 90, roman: "XC"},
  {arabic: 50, roman: "L"},
  {arabic: 40, roman: "XL"},
  {arabic: 10, roman: "X"},
  {arabic: 9, roman: "IX"},
  {arabic: 5, roman: "V"},
  {arabic: 4, roman: "IV"},
  {arabic: 1, roman: "I"},
];

// Converter Function

const arabicToRoman = (arabicInput, index) => {
  if(arabicInput === ''){
    results.innerText = "Please enter a valid number";
    return;
  };
  arabicInput = Number(arabicInput);
  
  if(arabicInput === 0){
    results.innerText = output;
    return;
  } else if(arabicInput < 0){
    results.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if(arabicInput > 3999){
    results.innerText = "Please enter a number less than or equal to 3999";
  } else {
    const x = Math.floor(arabicInput / numeralArray[index].arabic);
    arabicInput = arabicInput % numeralArray[index].arabic;
    output += `${numeralArray[index].roman.repeat(x)}`;
    arabicToRoman(arabicInput, index + 1); 
  }
};

button.addEventListener("click", () => {output = '';
results.innerText = '';
arabicToRoman(input.value, 0)});