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
  prompt('Do another calculation? \'y\' for yes, anything else for no.');
  userCalculatesAgain = rl.question().toLowerCase() === 'y';
}


// FUNCTIONS

function prompt(message) {
  console.log(`=> ${message}`);
}

function validateNumber(num, gt0 = false) {
  if (num.trim() === '') return false; // trim spaces from both sides
  else if (Number.isNaN(Number(num))) return false; // validate number (not letter(s))
  else if ((!gt0 && num < 0) || (gt0 && num <= 0)) return false; // validate number is positive and greater than 0 if directed
  else return true; // passes all checks
}

// eslint-disable-next-line
function calculateMonthlyPayments(p, j, n) {
  return j === 0 ? (p / n) : p * (j / (1 - Math.pow((1 + j), (-n))));
}

function calculateMonthlyInterestRate(apr) {
  return apr / 1200;
}

// eslint-disable-next-line
function doCalculations() {
  prompt('What\'s the loan amount? (don\'t include characters like "$")');
  while (true) {
    loanAmount = rl.question();
    if (validateNumber(loanAmount, true)) break;
    else prompt('That\'s not a valid loan amount... Input a number for loan amount.');
  }

  prompt('What\'s the APR? (don\'t include characters like "%")');
  prompt('For example, a 5% rate is input as "5", not "5%" or ".05".');
  while (true) {
    apr = rl.question();
    if (validateNumber(apr)) break;
    else prompt('That\'s not a valid apr amount... Input a percentage number for the APR.');
  }

  prompt('What\'s the loan duration in years? (don\'t include words like "years")');
  prompt('For example, a one year loan is input as "1". An 18 month loan is input as "1.5".');
  while (true) {
    loanDuration = rl.question();
    if (validateNumber(loanDuration, true)) break;
    else prompt('That\'s not a valid duration... Input a number for duration in years.');
  }

  monthlyInterestRate = calculateMonthlyInterestRate(apr);

  monthlyPayments = calculateMonthlyPayments(
    loanAmount,
    monthlyInterestRate,
    loanDuration * 12
  );

  console.log(`
  Loan amount: $${loanAmount}, 
  APR:         ${apr}%, 
  Duration:    ${loanDuration} year${Number(loanDuration) === 1 ? '' : 's'},
  Result:      $${Number(monthlyPayments).toFixed(2)} per month,
  
  (After ${loanDuration} year${Number(loanDuration) === 1 ? '' : 's'}, you'll have paid back a total of about $${Number(monthlyPayments * loanDuration * 12).toFixed(2)} and the interest paid will be about $${Number((monthlyPayments * loanDuration * 12) - loanAmount).toFixed()}!)
  `);
}