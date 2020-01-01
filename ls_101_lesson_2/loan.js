const rl = require('readline-sync');

prompt('Welcome to Loan Calculator');

let loanAmount = 0;
let apr = 0;
let loanDuration = 0;
let monthlyInterestRate = 0;
let monthlyPayments = 0;
let userCalculatesAgain = true;

while (userCalculatesAgain) {
  doCalculations();
  prompt('Do another calculation? \'a\' for "another calculation", anything else to quit.');
  userCalculatesAgain = rl.question().toLowerCase() === 'a';
  clearPrompt();
}

// FUNCTIONS

function doCalculations() { // orchestration function
  getLoanAmount();
  getAPR();
  getLoanDuration();
  calculateInterestRateAndPayments();
  printOutput();
}

function getLoanAmount() {
  prompt('What\'s the loan amount? (don\'t include characters like "$")');

  while (true) {
    loanAmount = rl.question();
    if (isValidNumber(loanAmount, true)) break;
    else prompt('That\'s not a valid loan amount... Input a number for loan amount.');
  }
}

function getAPR() {
  prompt('What\'s the APR? (don\'t include characters like "%")');
  prompt('For example, a 5% rate is input as "5", not "5%" or ".05".');

  while (true) {
    apr = rl.question();
    if (isValidNumber(apr)) break;
    else prompt('That\'s not a valid apr amount... Input a percentage number for the APR.');
  }
}

function getLoanDuration() {
  prompt('What\'s the loan duration in years? (don\'t include words like "years")');
  prompt('For example, a one year loan is input as "1". An 18 month loan is input as "1.5".');

  while (true) {
    loanDuration = rl.question();
    if (isValidNumber(loanDuration, true, true)) break;
    else prompt('That\'s not a valid duration... Input a whole number for duration in years.');
  }
}

function calculateInterestRateAndPayments() {

  monthlyInterestRate = calculateMonthlyInterestRate(apr);

  monthlyPayments = calculateMonthlyPayments(
    loanAmount,
    monthlyInterestRate,
    loanDuration * 12
  );
}

function printOutput() {
  console.log(`
  Loan amount: $${loanAmount}, 
  APR:         ${apr}%, 
  Duration:    ${loanDuration} year${Number(loanDuration) === 1 ? '' : 's'},
  Result:      $${Number(monthlyPayments).toFixed(2)} per month,
  
  (After ${loanDuration} year${Number(loanDuration) === 1 ? '' : 's'}, you'll have paid back a total of about $${Number(monthlyPayments * loanDuration * 12).toFixed(2)} and the interest paid will be about $${Number((monthlyPayments * loanDuration * 12) - loanAmount).toFixed()}!)
  `);
}

function calculateMonthlyPayments(amount, interest, duration) {
  return interest === 0
    ? (amount / duration)
    : amount * (interest / (1 - Math.pow((1 + interest), (-duration))));
}

function calculateMonthlyInterestRate(apr) {
  return apr / 1200;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function isValidNumber(num, gt0 = false, wholeNum = false) {
  if (num.trim() === '') return false; // trim spaces from both sides
  else if (Number.isNaN(Number(num))) return false; // validate number (not letter(s))
  else if ((!gt0 && num < 0) || (gt0 && num <= 0)) return false; // validate number is positive and greater than 0 if directed
  else if (wholeNum && num % 1 !== 0) return false;
  else return true; // passes all checks
}

function clearPrompt() {
  process.stdout.write("\u001b[2J\u001b[0;0H");
}