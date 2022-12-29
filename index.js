function getComputerChoice() {
  let choice = ['Rock', 'Paper', 'Scissors'];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  let playerSelect = playerSelection.toLowerCase();
  playerSelect = playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1);
  let loose = `You Lose! ${computerSelection} beats ${playerSelect}`;
  let win = `You win! ${playerSelect} beats ${computerSelection}`;

  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    alert('Even!');
    console.log('Nobody won this round!')
    return roundPoints = 'even';
  }
  else if (
  playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors'
  || playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock'
  || playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase()) {
    alert(win);
    console.log('You won this round!');
    return roundPoints = 'addPlayerPoint';
    }
  else {
    alert(loose);
    console.log('Computer won this round!');
    return roundPoints = 'addComputerPoint';
  }
}

function game() {
  let playerPoints = 0;
  let computerPoints = 0;

  for (let i = 0; i < 5; i++) {
    playRound(playerPrompt(), getComputerChoice()); 
    if (roundPoints === 'addPlayerPoint') {
      playerPoints = ++playerPoints;
    } 
    else if (roundPoints === 'addComputerPoint') {
      computerPoints = ++computerPoints;
    }
    else {
      computerPoints = ++computerPoints;
      playerPoints = ++playerPoints;
    }
    
    console.log(`You ${playerPoints}/${computerPoints} Computer`);
  }
  if (playerPoints > computerPoints) {
    console.log(`You won the game, with ${playerPoints}/${computerPoints} points!`);
    alert(`You won the game!`);
  }
  else if (playerPoints < computerPoints){
    console.log(`You lost the game, with ${playerPoints}/${computerPoints} points!`);
    alert('You lost the game!');
  }
  else {
    console.log('Nobody won the game!');
    console.log(`You ${playerPoints}/${computerPoints} Computer`);
  }
}

function playerPrompt() {
  let playerInput;
  const regPlayerInput = /^paper$|^rock$|^scissors$/i;
  playerInput = prompt('Choose either: Rock, Paper, Scissors');
  while (!regPlayerInput.test(playerInput)) {
    alert('Input needs to be on of these options: Rock, Paper, Scissors!');
    playerInput = prompt('Choose either: Rock, Paper, Scissors');
  }
  return playerInput;
}

game()