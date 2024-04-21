
// ELEMENTS
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('GuessBtn');
const outputResult = document.getElementById('outputResult');
const guessForm = document.getElementById('guessForm');

function guess() {

  // Randomly Generated Number
  let correctGuess = Math.floor((Math.random() * (6)) + 1);
  // User input: Guessed Number 1-6
  let guessedNumber = parseInt(guessInput.value);

  // Check if guess matches
  if (guessedNumber == correctGuess) {
    outputResult.innerText = `The correct Number was ${correctGuess}, congratulations on guessing correctly!`
    return;
  }
  // else { ... } [ Unsure whether else statements are allowed
  // so I used returns instead ]
  outputResult.innerText = `The correct Number was ${correctGuess}, you guessed ${guessedNumber}! Better Luck next time!`
  return;
}

// Cool function notation
// form validation + submit call
guessForm.onsubmit = () => {
  guess()
  return false;
}