
const totalPlayerWins = 0
const totalPlayerLosses = 0
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const guessedLetters = ""
const remainingCountOfPlayerGuesses = 10
let correctLetter = ""

function startGame() {
  console.log("Game started")
  commitCorrectLetter()
  console.log(correctLetter)
}

function commitCorrectLetter() {
  let randomNumber = Math.floor(Math.random() * 26)
  correctLetter = alphabet[randomNumber]
  return correctLetter
}
