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
    return 'Even!';
  }
  else if (
  playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors'
  || playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock'
  || playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase()) {
    return win;
    }
  else {
    return loose;
  }
}
