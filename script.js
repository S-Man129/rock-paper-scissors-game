document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to the Rock Paper Scissors Game!");
});

function getComputerChoice(str) {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) return "Rock";
  else if (random === 2) return "Paper";
  else return "Scissors";
}

function str() {}

function getHumanChoice() {
  const userInput = prompt("Ro-Sham-Bo");
  console.log(userInput);
  return userInput;
}

getHumanChoice();

function playGame(getComputerChoice, getHumanChoice) {}
