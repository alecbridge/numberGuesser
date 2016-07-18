
var randomNumber = Math.floor(Math.random() * 100) + 1;

var statusOutput = document.querySelector('.status_output');
var guessInput = document.querySelector('.guessInput');

var counter = 0;

function checkGuess() {
  var guessVal = parseInt(guessInput.value);

  if (counter < 12 && guessVal) {
   counter++;

   if (guessVal < randomNumber) {
    statusOutput.value = "Your Guess Was Too Low";
   }
   if (guessVal > randomNumber) {
    statusOutput.value = "Your Guess Was Too High";
   }
   if (guessVal === randomNumber) {
    statusOutput.value = "You Guessed The Correct Number " + randomNumber + "!";
   }
  }
  else if (counter === 12) {
    statusOutput.value = "You Ran Out of Guesses, The Number Was " + randomNumber;
  }
    return false;
}

