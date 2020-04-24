let rl = require('readline-sync');
// // 1
// let age = Math.floor(Math.random() * (120 - 20 + 1)) + 20;
// console.log(`Teddy is ${age} years old!`);

// // 2
// let n1 = rl.question('Enter the 1st number: ');
// let n2 = rl.question('Enter the 2nd number: ');
// let n3 = rl.question('Enter the 3rd number: ');
// let n4 = rl.question('Enter the 4th number: ');
// let n5 = rl.question('Enter the 5th number: ');
// let n6 = rl.question('Enter the last number: ');

// let arr = [n1, n2, n3, n4, n5];

// if (arr.find((num) => num === n6)) {
//   console.log(`The number ${n6} appears in ${arr.toString()}.`);
// } else {
//   console.log(`The number ${n6} does not appear in ${arr.toString()}.`);
// }

// // 3
// let age = rl.question('What is your age? ');
// let ret = rl.question('At what age would you like to retire? ');
// let span = ret - age;

// let currentYear = new Date().getFullYear();
// let retireYear = currentYear + span;

// console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
// console.log(`You only have ${span} years of work to go!`);

// // 4
// const isPalindrome = (str) => {
//   return str.split('').reverse().join('') === str;
// }

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

// // 5
// const isRealPalindrome = (str) => {
//   let arr = str.split('');
//   stripNonAlphas(arr);
//   return arr.join('').toLowerCase() === arr.reverse().join('').toLowerCase();
// }

// function stripNonAlphas(arr) {
//   let removeIndexes = [];
//   arr.forEach((el, idx) => {
//     if ((el < 'A' || el > 'z') && (el < '0' || el > '9')) {
//       removeIndexes.push(idx);
//     }
//   });
//   while (removeIndexes.length > 0) {
//     arr.splice(removeIndexes.pop(), 1);
//   }
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

// this is neat:
// string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
// this replaces all chars in the lowercased string that are not a - z and 0 - 9 with an empty string

// // 6
// const isPalindromicNumber = (num) => {
//   return num.toString().split('').reverse().join('') === num.toString();
// };

// console.log(isPalindromicNumber(5));            // true
// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true

// // 7
// const runningTotal = (arr) => {
//   let totalArr = [];
//   let total = 0;
//   arr.forEach(el => {
//     total += el;
//     totalArr.push(total);
//   });
//   return totalArr;
// };

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

// // 8
// const wordSizes = (str) => {
//   // replace all non-alpha chars with empty string
//   str = str.replace(/[^A-z0-9\s]/g, "");
//   // console.log(str)
//   // split into array of words
//   let arr = str.split(' ');
//   // console.log(arr);
//   let maxLength = getMaxLength(arr);
//   // console.log('max length: ', maxLength);
//   let countObject = {};
//   for (let idx = 0; idx < maxLength; idx++) {
//     console.log(str[idx])

//     // if (arr[idx] && countObject.hasOwnProperty(arr[idx].length)) {
//     //   countObject[arr[idx].length] += 1;
//     // } else {
//     //   countObject[arr[idx].length] = 1;
//     // }

//     // if (countObject.hasOwnProperty(arr[idx].length)) {
//     //   countObject[arr[idx].length] += 1;
//     // } else {
//     //   countObject[arr[idx].length] = 1;
//     // }
//   }
//   return countObject;
//   // iterate over that array and write the report to the object
// };

// function getMaxLength(arr) {
//   let maxLength = 0;
//   arr.forEach(el => {
//     if (el.length > maxLength) maxLength = el.length;
//   });
//   return maxLength;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}
// // string = string.toLowerCase().replace(/[^a-z0-9]/g, "");

// 8 again on 4/19
// const wordSizes = (str) => {

//   let arr = str.split(' ');

//   let countObject = {};

//   if (str === '') return {}; // if it's an empty string, return {};

//   for (let idx = 0; idx < arr.length; idx++) {

//     countObject[arr[idx].length] = countObject[arr[idx].length] ? countObject[arr[idx].length] + 1 : 1;

//   }

//   return countObject;
// };

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}

// 9
// const wordSizes = (str) => {

//   str = str.replace(/[^A-z0-9\s]/g, ""); // replace all non-alpha chars with empty string

//   let arr = str.split(' ');

//   let countObject = {};

//   if (str === '') return {}; // if it's an empty string, return {};

//   for (let idx = 0; idx < arr.length; idx++) {

//     countObject[arr[idx].length] = countObject[arr[idx].length] ? countObject[arr[idx].length] + 1 : 1;

//   }

//   return countObject;
// };

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes(''));

// 10
// const swap = (str) => {
//   const arr = str.split(' ');


//   return arr.map(word => {
//     const firstLetter = word.substring(0, 1);
//     const lastLetter = word.substring(word.length - 1);
//     const inside = word.substring(1, word.length - 1);

//     return word.length > 1 ? lastLetter + inside + firstLetter : word;
//   });
// };
// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"