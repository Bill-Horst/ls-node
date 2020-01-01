const readline = require('readline-sync');
const VALID_CHOICES = [
  { number: 1, word: 'rock', defeats: ['scissors', 'lizard'] },
  { number: 2, word: 'paper', defeats: ['rock', 'spock'] },
  { number: 3, word: 'scissors', defeats: ['paper', 'lizard'] },
  { number: 4, word: 'lizard', defeats: ['spock', 'paper'] },
  { number: 5, word: 'spock', defeats: ['scissors', 'rock'] }
];

let userChoice = {};
let computerChoice = {};
let userScore = 0;
let computerScore = 0;

prompt('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
prompt('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');

while (true) {

  performRound();

  if (userScore === 3 || computerScore === 3) {
    displayGameWinner();
    clearScores();
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') break;
    else clearPrompt();
  }
}

function performRound() {
  userChooses();
  computerChooses();
  displayRoundWinner();
}

function solicitUserChoice(choice) {
  let uChoice = {};
  let valid = false;
  while (!valid) {
    uChoice = getUserChoiceFromValidChoices(choice);
    if (uChoice) {
      valid = true;
    } else {
      prompt("That's not a valid choice");
      choice = readline.question();
    }
  }

  function getUserChoiceFromValidChoices(choice) {
    return VALID_CHOICES.find(vChoice => vChoice.number === Number(choice));
  }
  return uChoice;
}

function processResult(choice, computerChoice) {
  if (choice.number === computerChoice.number) {
    return 'tie';
  } else if (choice.defeats.includes(computerChoice.word)) {
    userScore += 1;
    return 'player';
  } else {
    computerScore += 1;
    return 'computer';
  }
}

function displayRoundWinner() {
  prompt(`**You chose ${userChoice.word}, computer chose ${computerChoice.word}**`);
  let result = processResult(userChoice, computerChoice);

  if (result === 'tie') {
    prompt('-----It\'s a tie.-----');
  } else if (result === 'player') {
    prompt('-----You won this round.-----');
  } else {
    prompt('-----You lost this round.-----');
  }
  prompt(`
  ---Scores:---
  ***You: ${userScore}***
  ***Comp: ${computerScore}***
  ****************************`);
}

function displayGameWinner() {
  if (userScore === 3) {
    prompt('***************************');
    prompt('You won the game!');
    prompt(`
    Your score: ${userScore}
    Comp score: ${computerScore}
    `);
    prompt('***************************');
  } else {
    prompt('***************************');
    prompt('You lost the game!');
    prompt(`
    Your score: ${userScore}
    Comp score: ${computerScore}
    `);
    prompt('***************************');
  }
}

function clearScores() {
  userScore = 0;
  computerScore = 0;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function clearPrompt() {
  process.stdout.write("\u001b[2J\u001b[0;0H");
}

function userChooses() {
  prompt(`Choose one:`);
  VALID_CHOICES.forEach(vChoice => {
    prompt(`${vChoice.number}: ${vChoice.word}`);
  });
  let choice = readline.question();
  userChoice = solicitUserChoice(choice);
}

function computerChooses() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  computerChoice = VALID_CHOICES[randomIndex];
}