//get the submit button
let submitBtn = document.getElementById("submitBtn");
//get the user input field
let userGuess = document.getElementById("userGuess");
// Add click event to the submit button
submitBtn.addEventListener("click", function () {
  //call the checkResult function passing the user chosen number as parameter
  checkResult(userGuess.value);
});

//Game logic function; takes the user guessed number as parameter
function checkResult(userGuess) {
  //generates a random number between 1-20
  let num = Math.floor(Math.random() * 20) + 1;
  console.log(num);
  //retrieve the hidden p in the DOM to show user the results
  let results = document.getElementById("results");
  //if the user guessed number is higher than the randomly generated number
  if (userGuess > num) {
    // show the results p by removing the hidden class
    results.removeAttribute("class");
    // outputs to the user that the guessed number is too high
    results.innerHTML =
      "You answered " + userGuess + ". The correct answer is lower!";
  } else if (userGuess < num) {
    // show the results p by removing the hidden class
    results.removeAttribute("class");
    // outputs to the user that the guessed number is too low
    results.innerHTML =
      "You answered " + userGuess + ". The correct answer is higher!";
  } else {
    // show the results p by removing the hidden class
    results.removeAttribute("class");
    // outputs to the user that he guessed right!
    results.innerHTML =
      "You answered " + userGuess + ". This is the correct answer!";
  }
}

//input validation

//presentation
