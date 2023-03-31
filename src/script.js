let rounds = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerChoice, computerChoice) {
  rounds++;
  if (playerChoice === computerChoice) {
    return "Tie!";
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      return "You Lose! Paper beats Rock";
    } else {
      playerScore++;
      return "You Win! Rock beats Scissors";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      return "You Lose! Scissors beats Paper";
    } else {
      playerScore++;
      return "You Win! Paper beats Rock";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    } else {
      playerScore++;
      return "You Win! Scissors beats Paper";
    }
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (
      playerChoice != "rock" &&
      playerChoice != "paper" &&
      playerChoice != "scissors"
    ) {
      console.log("Invalid input");
      console.log("Round Skipped: " + rounds);
    } else {
      const computerChoice = getComputerChoice();
      console.log("Player: " + playerChoice);
      console.log("Computer: " + computerChoice);
      console.log(playRound(playerChoice, computerChoice));
      console.log("Round: " + rounds);
      console.log("Player Score: " + playerScore);
      console.log("Computer Score: " + computerScore);
    }
  }
}

game();
