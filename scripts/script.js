let wins = 0
let ties = 0
let losses = 0

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')

let results = document.querySelector('.results')
let scores = document.querySelector('.scores')
scores.setAttribute('style', 'white-space: pre;');

rockButton.addEventListener('click', () => {
  playRound('Rock', getComputerChoice())
})

paperButton.addEventListener('click', () => {
  playRound('Paper', getComputerChoice())
})

scissorsButton.addEventListener('click', () => {
  playRound('Scissors', getComputerChoice())
})

function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors']
  //Return random choice from array
  return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
  //Set round result string options based on player and computer choices
  let winString = "You Win! " + playerSelection + " beats " + computerSelection
  let loseString = "You Lose! " + computerSelection + " beats " + playerSelection
  let tieString = "It's a tie. " + playerSelection + " vs " + computerSelection
  let resultString = ''

  let win = false
  let tie = false

  //Player winning moves
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    win = true
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    win = true
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    win = true
    //Tie game
  } else if (playerSelection === computerSelection) {
    tie = true
  }
  //Else player loses

  //Update score and the result string based on round results
  if (win) {
    wins++
    resultString = winString
  } else if (tie) {
    ties++
    resultString = tieString
  } else {
    losses++
    resultString = loseString
  }
  displayScores()
  results.textContent = resultString

  if (wins >= 5) {
    setTimeout(function () {
      alert("You won the game! Play again?")
      newGame()
    })
  } else if (losses >= 5) {
    setTimeout(function () {
      alert("You lost the game! Play again?")
      newGame()
    })
  }
}

function displayScores() {
  scores.textContent = 'Player wins: ' + wins + '    Computer wins: ' + losses
}

//Reset win/loss/tie counters to 0, clear results 
function newGame() {
  wins = 0
  ties = 0
  losses = 0

  results.textContent = ''
  displayScores()
}
