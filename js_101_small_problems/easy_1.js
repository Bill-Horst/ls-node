// const rl = require('readline-sync');

// // 1
// const isOdd = num => ((Math.abs(num) + 1) % 2) === 0;

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// // 2
// for (let idx = 1; idx < 100; idx += 2) {
//   console.log(idx);
// }

// // 3
// for (let idx = 2; idx < 100; idx += 2) {
//   console.log(idx);
// }

// // 4
// const SQM_SQFT = 10.7639;

// console.log('Enter the length of the room in meters:');
// let length = rl.question();
// console.log('Enter the width of the room in meters:');
// let width = rl.question();

// let squareMeters = width * length;
// let squareFeet = squareMeters * SQM_SQFT;
// console.log(`The area of the room is ${squareMeters} square meters (${squareFeet.toFixed(2)} square feet).`);

// // 5
// let bill = Number(rl.question('What is the bill?\n'));
// let perc = Number(rl.question('What is the tip percentage?\n'));

// let tip = bill * perc / 100;
// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);

// // 6
// let num = 0;
// let ops = '';
// while (!Number.isInteger(Number(num)) || Number(num) <= 0) {
//   num = Number(rl.question('Please enter an integer greater than 0:\n'));
// }
// while (!['s', 'p'].includes(ops)) {
//   ops = (rl.question('Enter "s" to compute the sum, or "p" to compute the product.\n'));
// }

// let ans = 1;
// for (let idx = 2; idx <= num; idx++) {
//   ans = ops === 's' ? ans + idx : ans * idx;
// }

// console.log(`The ${ops === 's' ? 'sum' : 'product'} of the integers between 1 and ${num} is ${ans}`);

// // 7
// const shortLongShort = (str1, str2) => {
//   if (str1.length > str2.length) {
//     return str2 + str1 + str2;
//   } else {
//     return str1 + str2 + str1;
//   }
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// // 8
// const isLeapYear = year => {
//   if (year % 4 !== 0 ) return false;
//   if (year % 100 === 0 && year % 400 !== 0) return false;
//   return true;
// };

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

// // 9
// const isLeapYear = year => {
//   if (year >= 1752) {
//     if (year % 4 !== 0 ) return false;
//     if (year % 100 === 0 && year % 400 !== 0) return false;
//     return true;
//   } else {
//     return year % 4 === 0;
//   }
// };

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

// // 10
// const multisum = num => {
//   let ans = 0;
//   for (let idx = 1; idx <= num; idx++) {
//     ans += (idx % 3 === 0 || idx % 5 === 0) ? idx : 0;
//   }
//   return ans;
// };

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

// // 11
// const asciiValue = str => {
//   let value = 0;
//   for (let idx = 0; idx < str.length; idx++) {
//     value += str.charCodeAt(idx);
//   }
//   return value;
// };

// console.log(asciiValue('Four score'));         // 984
// console.log(asciiValue('Launch School'));      // 1251
// console.log(asciiValue('a'));                  // 97
// console.log(asciiValue(''));                   // 0