const readline = require('readline-sync');
const constants = require('./constants');

// SETUP LANGUAGE:
let chosenLanguage = chooseLanguage();

// WELCOME TO CALCULATOR:
prompt(constants[chosenLanguage].WELCOME);

// PLAY THE GAME:
let continueGame = true;
while (continueGame) {
  performOperations();
  prompt(constants[chosenLanguage].CONTINUE_PROMPT);
  continueGame = readline.question().toLowerCase() === 'y';
  if (continueGame) clearPrompt();
}

// SET UP FUNCTIONS:
function prompt(message) {
  console.log(`=> ${message}`);
}

function inavlidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function performOperations() {

  let number1 = getFirstNumber();

  let number2 = getSecondNumber();

  let operation = getOperation();

  operateAndOutput(number1, number2, operation);
  
}

function setLanguage(lang) {
  switch (lang) {
    case '1':
      return 'ENGLISH';
    case '2':
      return 'SPANISH';
    case '3':
      return 'JAPANESE';
    default:
      return 'ENGLISH';
  }
}

function clearPrompt() {
  process.stdout.write("\u001b[2J\u001b[0;0H");
}

function chooseLanguage() {
  let languageChoice = '';
  prompt(constants.CHOOSE_LANGUAGE);
  while (!['1', '2', '3'].includes(languageChoice)) {
    prompt(constants.GET_LANGUAGE);
    languageChoice = readline.question();
  }
  return setLanguage(languageChoice);
}

function getFirstNumber() {
  let num = 0;
  prompt(constants[chosenLanguage].GET_FIRST_NUMBER);
  num = readline.question();
  while (inavlidNumber(num)) {
    prompt(constants[chosenLanguage].NOT_VALID_NUMBER);
    num = readline.question();
  }
  return num;
}

function getSecondNumber() {
  let num = 0;
  prompt(constants[chosenLanguage].GET_SECOND_NUMBER);
  num = readline.question();
  while (inavlidNumber(num)) {
    prompt(constants[chosenLanguage].NOT_VALID_NUMBER);
    num = readline.question();
  }
  return num;
}

function getOperation() {
  let ops = '';
  prompt(constants[chosenLanguage].GET_OPERATION);
  ops = readline.question();
  while (!['1', '2', '3', '4'].includes(ops)) {
    prompt(constants[chosenLanguage].MUST_CHOOSE_1234_MESSAGE);
    ops = readline.question();
  }
  return ops;
}

function operateAndOutput(number1, number2, operation) {
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  prompt(`${constants[chosenLanguage].RESULT}: ${output}`);
}