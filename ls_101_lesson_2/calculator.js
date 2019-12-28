const readline = require('readline-sync');
const constants = require('./constants');

function prompt(message) {
  console.log(`=> ${message}`);
}

function inavlidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let languageChoice = '';
while (!['1', '2', '3'].includes(languageChoice)) {
  prompt(constants.GET_LANGUAGE);
  languageChoice = readline.question();
}

let chosenLanguage = setLanguage(languageChoice);

prompt(constants[chosenLanguage].WELCOME);

let continueGame = true;
while (continueGame) {
  performOperations();
  prompt(constants[chosenLanguage].CONTINUE_PROMPT);
  continueGame = readline.question() === 'y';
}

function performOperations() {
  prompt(constants[chosenLanguage].GET_FIRST_NUMBER);
  let number1 = readline.question();
  while (inavlidNumber(number1)) {
    prompt(constants[chosenLanguage].NOT_VALID_NUMBER);
    number1 = readline.question();
  }

  prompt(constants[chosenLanguage].GET_SECOND_NUMBER);
  let number2 = readline.question();
  while (inavlidNumber(number2)) {
    prompt(constants[chosenLanguage].NOT_VALID_NUMBER);
    number2 = readline.question();
  }

  prompt(constants[chosenLanguage].GET_OPERATION);
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(constants[chosenLanguage].MUST_CHOOSE_1234_MESSAGE);
    operation = readline.question();
  }

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

function setLanguage(lang) {
  switch (lang) {
    case '1':
      return 'ENGLISH';
    case '2':
      return 'SPANISH';
    case '3':
      return 'JAPANESE';
    default:
      return 'INVALID';
  }
}