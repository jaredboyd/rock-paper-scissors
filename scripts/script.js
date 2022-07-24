let wins = 0
let ties = 0
let losses = 0

function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors']
  //Return random choice from array
  return choices[Math.floor(Math.random() * choices.length)]
}

function getPlayerChoice() {
  let isValid = false
  let choice = ''
  while (isValid === false) {
    //Prompt player choice and format 
    choice = prompt("Rock, paper, or scissors?")
    choice = choice.toLowerCase().trim()
    choice = choice.charAt(0).toUpperCase() + choice.slice(1)
    //Validate player choice
    if (choice !== 'Rock' && choice !== 'Paper' && choice !== 'Scissors') {
      console.log("Invalid player selection. Try again...")
    } else {
      isValid = true
    }
  }
  return choice
}

function playRound(playerSelection, computerSelection) {
  console.log("Player: " + playerSelection + " -- Computer: " + computerSelection)

  let winString = "You Win! " + playerSelection + " beats " + computerSelection
  let loseString = "You Lose! " + computerSelection + " beats " + playerSelection
  let tieString = "It's a tie. " + playerSelection + " vs " + computerSelection

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

  //Return results
  if (win) {
    wins++
    console.log(winString)
    return winString
  } else if (tie) {
    ties++
    console.log(tieString)
    return tieString
  } else {
    losses++
    console.log(loseString)
    return loseString
  }
}

function game() {
  wins = 0
  ties = 0
  losses = 0
  for(let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice()
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
  }
  let winsString = ' wins, '
  if (wins === 1) {
    winsString = ' win, '
  }
  let lossesString = ' losses, and '
  if (losses === 1) {
    lossesString = ' loss, and '
  }
  let tiesString = ' ties'
  if (ties === 1) {
    tiesString = ' tie'
  }

  let totals = wins + winsString + losses + lossesString + ties + tiesString
  if (wins > losses) {
    console.log("You win: " + totals)
  } else if (wins < losses) {
    console.log("You lose: " + totals)
  } else {
    console.log("Tie game: " + totals)
  }
}
