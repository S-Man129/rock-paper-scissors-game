let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) return "Rock";
  else if (random === 2) return "Paper";
  else return "Scissors";
}

function getHumanChoice() {
  const userField = prompt(
    "Select you choice between ('Rock', 'Paper', and 'Scissors')",
  );

  if (userField === null) {
    return null;
  }
  const userInput =
    userField.slice(0, 1).toUpperCase() + userField.slice(1).toLowerCase();
  return userInput;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  console.log("Computer chose: " + computerChoice);
  console.log("You chose: " + humanChoice);

  if (humanChoice == computerChoice) {
    console.log("it is a tie");
    console.log("Computer: " + computerScore, "\n" + "Human: " + humanScore);
  } else if (humanChoice == "Rock") {
    if (computerChoice == "Scissors") {
      humanScore += 1;
      console.log("Computer: " + computerScore, "\n" + "Human: " + humanScore);
    } else {
      computerScore += 1;
      console.log("Computer: " + computerScore, "\n" + "Human: " + humanScore);
    }
  } else if (humanChoice == "Paper") {
    if (computerChoice == "Rock") {
      humanScore += 1;
      console.log("Computer: " + computerScore, "\n" + "Human: " + humanScore);
    } else {
      computerScore += 1;
      console.log("Computer: " + computerScore, "\n" + "Human: " + humanScore);
    }
  } else if (humanChoice == "Scissors") {
    if (computerChoice == "Paper") {
      humanScore += 1;
      console.log("Computer: " + computerScore, "\n" + "Human: " + humanScore);
    } else {
      computerScore += 1;
      console.log("Computer: " + computerScore, "\n" + "Human: " + humanScore);
    }
  } else {
    console.log("Invalid entries");
  }
}

function playGame() {
  for (i = 1; i <= 5; i++) {
    playRound(humanSelection, computerSelection);
  }
}

playGame();
