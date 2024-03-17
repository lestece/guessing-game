//generates a random number between 1-20
let num = Math.floor(Math.random() * 20) + 1;
console.log(num);
//Initialize an attempt counter
let attemptCounter = 1;
//establish an attempts limit
let maxAttempts = 3;
//get the submit button
let submitBtn = document.getElementById("submitBtn");
//get the user input field
let userGuess = document.getElementById("userGuess");
//get the attempt number p
let attempts = document.getElementById("attempt");
attempts.innerHTML = "Attempt number:" + attemptCounter;

//reset the game
function reset() {
  //generates a random number between 1-20
  let num = Math.floor(Math.random() * 20) + 1;
  console.log(num);
  //Initialize an attempt counter
  let attemptCounter = 1;
  //establish an attempts limit
  let maxAttempts = 3;
}

//Number validation for the input field
function numberValidation(n) {
  if (isNaN(n)) {
    return false;
  } else {
    return true;
  }
}
//clear input field after each attempt
function clearField() {
  document.getElementById("userGuess").value = "";
}
// Add click event to the submit button
submitBtn.addEventListener("click", function () {
  //if the input validation is true (the user has inserted a number)
  numberValidation(userGuess.value)
    ? //call the checkResult function passing the user chosen number as parameter
      checkResult(userGuess.value)
    : //otherwise alert the user to insert a numeric value before proceeding
      alert("Please enter Numeric value!");
});

//Game logic function; takes the user guessed number as parameter
function checkResult(userGuess) {
  if (attemptCounter < maxAttempts) {
    //retrieve the hidden p in the DOM to show user the results
    let results = document.getElementById("results");
    //if the user guessed number is higher than the randomly generated number
    if (userGuess > num) {
      //clear user input field
      clearField();
      // show the results p by removing the hidden class
      results.removeAttribute("class");
      // outputs to the user that the guessed number is too high
      results.innerHTML =
        "You answered " + userGuess + ". The correct answer is lower!";
    } else if (userGuess < num) {
      //clear user input field
      clearField();
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
    //increment attempts by 1
    attemptCounter++;
    attempts.innerHTML = "Attempt number:" + attemptCounter;
  } else {
    attempts.innerHTML = "<b>Attempts allowance exceeded.</b>";
    results.innerHTML =
      "<h2>You lose the game! The random number was " + num + ".</h2>";
    reset();
  }
}

//presentation
