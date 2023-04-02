let rounds = 0;
let playerScore = 0;
let computerScore = 0;
const sel_rock = document.querySelector("#selectRock");
const sel_paper = document.querySelector("#selectPaper");
const sel_scissors = document.querySelector("#selectScissors");
let result = "";

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
    return "tie!";
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      return "you lose!";
    } else {
      playerScore++;
      return "you win!";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      return "you lose!";
    } else {
      playerScore++;
      return "you win!";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      return "you lose!";
    } else {
      playerScore++;
      return "you win!";
    }
  }
}

function report_result(player, comp, result) {
  document.getElementById("results__text").innerHTML =
    "Round: " + rounds + "<br>" + player + " vs " + comp + " - " + result;
  document.getElementById("scores__player-score").innerHTML = playerScore;
  document.getElementById("scores__ai-score").innerHTML = computerScore;
  if (rounds >= 5) {
    document.getElementById("results-final").innerHTML = display_winner();
  } else {
    document.getElementById("results-final").innerHTML = "";
  }
}

function display_winner() {
  if (playerScore > computerScore) {
    reset();
    return "That makes you the winner!<br>Hit a button to try again";
  } else if (playerScore < computerScore) {
    reset();
    return "You LOST!?<br>Ok, let's renegotiate<br>Hit a button to try again";
  } else {
    reset();
    return "It's a tie..<br>I guess we're both winners?<br>Hit a button to try again";
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  rounds = 0;
}

sel_rock.addEventListener("click", () => {
  const playerChoice = "rock";
  const c_choice = getComputerChoice();
  report_result(playerChoice, c_choice, playRound(playerChoice, c_choice));
});
sel_paper.addEventListener("click", () => {
  const playerChoice = "paper";
  const c_choice = getComputerChoice();
  report_result(playerChoice, c_choice, playRound(playerChoice, c_choice));
});
sel_scissors.addEventListener("click", () => {
  const playerChoice = "scissors";
  const c_choice = getComputerChoice();
  report_result(playerChoice, c_choice, playRound(playerChoice, c_choice));
});
