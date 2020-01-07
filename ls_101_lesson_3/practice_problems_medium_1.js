// // 1
// const flint = 'TheFlintstonesRock';

// for (let idx = 0; idx < 10; idx++) {
//   console.log(flint.padStart(flint.length + idx, ' '));
// }

// // 2
// const changeCase = (char) => {
//   let letter;
//   if (char === char.toUpperCase()) {
//     letter = char.toLowerCase();
//   } else if (char === char.toLowerCase()) {
//     letter = char.toUpperCase();
//   }
//   return letter;
// };

// let munsters = `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;
// let invertedMunsters = '';
// for (let idx = 0; idx < munsters.length; idx++) {
//   invertedMunsters += changeCase(munsters[idx]);
// }
// console.log(invertedMunsters);

// let munstersDescription = "The Munsters are creepy and spooky.";

// munstersDescription.split("").map(function(char) { // LS's solution: split string into array and map the array, switching the letters as I did above
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join("");

// // 3
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) { // if number isn't greater than 0, empty factors gets returned
//     if (number % divisor === 0) { // if 'divisor' really is a divisor of number...
//       factors.push(number / divisor); // push its inverse to factors array (inverse so list is ascending)
//     }
//     divisor -= 1; // decrement 'divisor'
//   }
//   return factors;
// }

// console.log(factors(3));
// console.log(factors(12));
// console.log(factors(17));
// console.log(factors(96));
// console.log(factors(0));

// // 5
// console.log(0.3 + 0.6); // 0.899999999999
// console.log(0.3 + 0.6 === 0.9); // false
// // WHY? JavaScript uses floating point numbers for all numeric operations. Most floating point representations used on computers lack a certain amount of precision, and that can yield unexpected results like these.

// // 6
// let nanArray = [NaN];

// console.log(nanArray[0] === NaN);

// console.log(Number.isNaN('3'));
// console.log(Number.isNaN(3));
// console.log(isNaN('3'));
// console.log(isNaN(3));

// const nanTest = (num) => {
//   if (isNaN(num)) console.log('not a number');
//   if (!isNaN(num)) console.log('it\'s a number');
// };

// nanTest(3);
// nanTest('3');
// nanTest('F');

// function milliseconds(x) {
//   if (isNaN(x)) {
//     return 'Not a Number!';
//   }
//   return x * 1000;
// }

// console.log(milliseconds('100F'));
// // expected output: "Not a Number!"

// console.log(milliseconds('0.0314E+2'));
// // expected output: 3140

// 7
