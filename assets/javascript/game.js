// page setup
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
let correctLetter = "";
commitCorrectLetter();
let guessedLetters = "";
let remainingCountOfPlayerGuesses = 10;
let totalPlayerWins = 0;
let totalPlayerLosses = 0;

// updates when a key is pressed
document.onkeypress = function(key) {
  guessedLetters += key.key
  remainingCountOfPlayerGuesses -= 1
  isGameOver(key.key)
  updateDOM()
}

function updateDOM() {
  document.getElementById("guessedletters").innerHTML = guessedLetters;
  document.getElementById("remaining-guesses").innerHTML = remainingCountOfPlayerGuesses;
  document.getElementById("totalplayerwins").innerHTML = totalPlayerWins;
  document.getElementById("totalplayerlosses").innerHTML = totalPlayerLosses;
}

function isGameOver(letter) {
  if (letter == correctLetter) {
    totalPlayerWins += 1
    alert('You won!')
    resetGame()
  } else if (remainingCountOfPlayerGuesses < 1 && letter != correctLetter) {
    totalPlayerLosses += 1
    alert('You lost.  Try again.')
    resetGame()
  }
}

function resetGame() {
  guessedLetters = "";
  remainingCountOfPlayerGuesses = 10;
  commitCorrectLetter()
}

function commitCorrectLetter() {
  let randomNumber = Math.floor(Math.random() * 26);
  correctLetter = alphabet[randomNumber];
  console.log(correctLetter)
  return correctLetter
}
