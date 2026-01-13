const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const results = document.getElementById('result');

// isPalindrome function
const isPalindrome = (userInput) => {
  const cleanString = userInput.replace(/[\W_]+/g, "");

  const firstHalf = cleanString.slice(0, Math.floor(cleanString.length / 2)).split('');
  const secondHalf = cleanString.slice(Math.ceil(cleanString.length / 2)).split('').reverse();

  return firstHalf.join('').toLowerCase() === secondHalf.join('').toLowerCase();
};

// submitWord function
const submitWord = () => {
  const word = input.value;
  if(word){
    if(isPalindrome(word)){
    results.classList.remove('hide');
    results.innerText =`${word} is a palindrome!`;
  } else {
    results.classList.remove('hide');
    results.innerText =`${word} is not a palindrome!`
  };
  } else {
    alert("Please input a value");
  };
};

// button event listener
button.addEventListener("click", submitWord);