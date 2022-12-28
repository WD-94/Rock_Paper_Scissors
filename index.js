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
    return roundPoints = '!add';
  }
  else if (
  playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors'
  || playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock'
  || playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase()) {
    alert(win);
    console.log('Player won this round!');
    return roundPoints = 'add';
    }
  else {
    alert(loose);
    console.log('Computer won this round!');
    return roundPoints = '!add';
  }
}

function game() {
  let points = 0;
  for (let i = 0; i < 5; i++) {
    playRound(prompt('Choose either: Rock, Paper, Scissors'), getComputerChoice()); 
    if (roundPoints === 'add') {
      points = ++points;
    } 
    
    console.log(`You have ${points}/5 points!`);
  }
  if (points > 2) {
    console.log(`You won the game, with ${points}/5 points!`);
    alert(`You won the game!`);
  }
  else {
    console.log(`You lost the game, with ${points}/5 points!`);
    alert('You lost the game!');
  }
}

game()