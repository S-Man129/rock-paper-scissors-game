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

function playRound(humanChoice, computerChoice) {
  console.log("Computer chose: " + computerChoice);
  console.log("You chose: " + humanChoice);

  if (humanChoice == computerChoice) {
    console.log("it is a tie");
  } else if (humanChoice == "Rock") {
    if (computerChoice == "Scissors") {
      humanScore += 1;
    } else {
      computerScore += 1;
    }
  } else if (humanChoice == "Paper") {
    if (computerChoice == "Rock") {
      humanScore += 1;
    } else {
      computerScore += 1;
    }
  } else if (humanChoice == "Scissors") {
    if (computerChoice == "Paper") {
      humanScore += 1;
    } else {
      computerScore += 1;
    }
  } else {
    console.log("Invalid entries");
  }

  console.log("Computer: " + computerScore, "\n" + "Human: " + humanScore);
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`------ Round ${i} ------`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("You loss to computer!");
  }

  console.log("Total Computer score  = " + computerScore);
  console.log("Total Human score  = " + humanScore);
}

playGame();
