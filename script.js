//get the button
let submitBtn = document.getElementById("submitBtn");
//get the user input field
let userGuess = document.getElementById("userGuess");
// Add click event to the button
submitBtn.addEventListener(
  "click",
  function () {
    checkResult(userGuess.value);
  },
  false
);
//takes in a guess
function checkResult(userGuess) {
  //generates a random number
  let num = Math.floor(Math.random() * 20) + 1;
  console.log(num);
  //retrieve the hidden p to show user the results
  let results = document.getElementById("results");
  //returns a string with the guess and whether that guess is lower or higher than the random number
  //e.g. 'you answered 9. The correct answer is higher'
  if (userGuess > num) {
    results.removeAttribute("class");
    results.innerHTML = "You guess is too high!";
  } else if (userGuess < num) {
    results.removeAttribute("class");
    results.innerHTML = "You guess is too low!";
  } else {
    results.removeAttribute("class");
    results.innerHTML = "You guessed it right!";
  }
}
//returns a string with the guess and whether that guess is lower or higher than the random number
//e.g. 'you answered 9. The correct answer is higher'

//If the guess matches the random number, then returns a string which confirms this.
//e.g.'you answered 9. This is the correct answer'

//ranges

//input validation

//presentation
