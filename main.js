let playerWins = 0
let computerWins = 0
let ties = 0

let computerChoices = ['rock', 'paper', 'scissors']

let winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

// playerInput is the 'parameter' for the function. the argument is the value we pass into this function when it is called
function play(playerInput){
  let cChoice = compChoice()
  // console.log('computer choice', cChoice);
  // console.log('player choice', playerInput);

  // TODO standard if/else if method

  // if(playerInput == cChoice){
  //   ties++
  //   console.log("tie!", ties);
  // } else if(playerInput == "rock" && cChoice == "scissors" || playerInput == "paper" && cChoice == "rock" || playerInput == "scissors" && cChoice == "paper"){
  //   playerWins++
  //   console.log("you win!", playerWins);
  // } else {
  //   computerWins++
  //   console.log("you lose......", computerWins);
  // }

  // TODO using win dictionary

  // if(playerInput == cChoice){
  //   ties++
  //   console.log("tie", ties);
  // } else if(winConditions[playerInput] == cChoice){
  //   playerWins++
  //   console.log("you win!", playerWins);
  // } else {
  //   computerWins++
  //   console.log("you lose man", computerWins);
  // }

  // TODO using a ternary

  // remember that the ? is evaulating the 'truthiness' of the statement before it. the : will handle the "else" portion and will perform an action if false

playerInput == cChoice ? ties++ : winConditions[playerInput] == cChoice ? playerWins++ : computerWins++

  draw(playerInput, cChoice)
}

// Showing the difference between using innerHTML and innerText

function draw(playerInput, cChoice){
  document.getElementById('player-choice').innerHTML = /*html*/ `
  <p>Player Wins: ${playerInput}</p>
  `
  document.getElementById('computer-choice').innerText = cChoice

  document.getElementById('wins').innerText = playerWins
  document.getElementById('losses').innerText = computerWins
  document.getElementById('ties').innerText = ties
}

function compChoice(){
  // One liner way to return a randomized computer choice
  return computerChoices[Math.floor(Math.random() * computerChoices.length)]

  // let randomIndex = Math.floor(Math.random() * computerChoices.length)
  // let cChoice = computerChoices[randomIndex]
  // return cChoice
}


