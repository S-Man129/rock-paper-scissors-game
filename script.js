let computerScore = 0;
let humanScore = 0;

const reset = document.createElement("button");
reset.textContent = "Reset";

const display = document.querySelector(".display");

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) return "Rock";
  else if (random === 2) return "Paper";
  else return "Scissors";
}

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(e.target.value);
    const humanChoice = e.target.value || e.target.textContent.trim();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  });
});

function playRound(humanChoice, computerChoice) {
  console.log("Computer chose: " + computerChoice);
  console.log("You chose: " + humanChoice);

  let roundResult = "";

  if (humanChoice == computerChoice) {
    // console.log("it is a tie");
    roundResult = `it is a tie, both choose ${humanChoice}`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore += 1;
    roundResult = `You win this round! ${humanChoice} beats ${computerChoice}`;
  } else if (
    humanChoice === "Rock" ||
    humanChoice === "Paper" ||
    humanChoice === "Scissors"
  ) {
    computerScore += 1;
    roundResult = `Computer wins this round! ${computerChoice} beats ${humanChoice}`;
  } else {
    roundResult = "Invalid entries";
  }

  display.innerHTML = `<p>${roundResult}</p> <p>Computer: <b>${computerScore}</b> | Human: <b>${humanScore}</b></p>`;

  if (humanScore === 5 || computerScore === 5) {
    gameOver();
  }
}

function gameOver() {
  const winnerMessage =
    humanScore === 5 ? `You win the game` : "Computer wins the game";
  display.innerHTML = `<h3>${winnerMessage}</h3>
    <p>Final Score - Computer: <b>${computerScore}</b> | Human: <b>${humanScore}</b></p>`;
  display.appendChild(reset);

  // disable each button individually
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

reset.addEventListener("click", function (e) {
  e.preventDefault();

  //Reset scores and clear display
  computerScore = 0;
  humanScore = 0;
  display.innerHTML = `<p>Choose Rock, Paper, or Scissors to Start! </p>`;

  // Re-enable each button individually
  buttons.forEach((btn) => {
    btn.disabled = false;
  });
});

// function playGame() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(`------ Round ${i} ------`);
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
//   }

//   if (humanScore > computerScore) {
//     console.log("You win!");
//   } else {
//     console.log("You loss to computer!");
//   }

//   console.log("Total Computer score  = " + computerScore);
//   console.log("Total Human score  = " + humanScore);
// }

// playGame();
