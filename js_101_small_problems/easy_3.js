let rl = require('readline-sync');
// // 1
// const crunch = str => {
//   let arr = str.split('');
//   for (let idx = 0; idx < arr.length; idx++) {
//     arr[idx] = arr[idx] === arr[idx + 1] ? ';:' : arr[idx];
//   }
//   return (arr.filter(el => el !== ';:')).join('');
// };

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

// // 2
// const logInBox = (txt) => {
//   txt += '    ';
//   let tb = '';
//   let out = '';
//   for (let idx = 0; idx < txt.length; idx++) {
//     if (idx === 0 || idx === txt.length - 1) {
//       tb += '+';
//       out += '|';
//     } else {
//       tb += '-';
//       out += ' ';
//     }
//   }
//   console.log(tb);
//   console.log(out);
//   console.log(`| ${txt.slice(0, txt.length - 4)} |`);
//   console.log(out);
//   console.log(tb);
// };

// logInBox('To boldly go where no one has gone before.');
// logInBox('Hey');
// logInBox('');

// // 3
// const stringy = (num) => {
//   let str = '';
//   for (let idx = 0; idx < num; idx++) {
//     str += idx % 2 === 0 ? '1' : '0';
//   }
//   return str;
// };

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// // 4
// const findFibonacciIndexByLength = (num) => {
//   return num;
// };

// findFibonacciIndexByLength(2);       // 7
// findFibonacciIndexByLength(10);      // 45
// findFibonacciIndexByLength(16);      // 74

// // define a counter to be returned
// // find the fib number increasing one by one while "found" is not true
// // count the places each time and increment counter
// // if the length equals the passed number, return the counter

// misunderstood question...

// function findFibonacciIndexByLength(length) {
//   let first = 1;
//   let second = 1;
//   let index = 2;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     index += 1;
//     first = second;
//     second = fibonacci;
//     if (fibonacci > Number.MAX_SAFE_INTEGER) return 'error: number too large';
//   } while (String(fibonacci).length < length);

//   return index;
// }

// console.log(findFibonacciIndexByLength(2));       // 7
// console.log(findFibonacciIndexByLength(10));      // 45
// console.log(findFibonacciIndexByLength(16));      // 74
// console.log(findFibonacciIndexByLength(17));      // error: number too large

// // 5
// const triangle = (length) => {
//   for (let idx = 1; idx <= length; idx++) {
//     let currentLine = '';
//     currentLine += ' '.repeat(length - idx);
//     currentLine += '*'.repeat(idx);
//     console.log(currentLine);
//   }
// };

// triangle(3);
// triangle(6);

// // 6
// let noun = rl.question('Enter a noun: ');
// let verb = rl.question('Enter a verb: ');
// let adj = rl.question('Enter an adjective: ');
// let adv = rl.question('Enter an adverb: ');

// console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? I see.`);
// console.log(`The ${adj} ${noun} ${verb}s ${adv} over the lazy dog.`);
// console.log(`The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`);

// // 7
// const twice = (num) => {
//   return isDoubleNumber(num) ? num : num * 2;
// }

// function isDoubleNumber(num) { // is an even-lengthed number whose ls digits are same as rs digits
//   let arr = num.toString().split('');
//   if (arr.length % 2 !== 0) return false; // if it's not even length, it's not a double number
//   let halfway = arr.length / 2;
//   let secondHalf = halfway;
//   for (let firstHalf = 0; firstHalf < halfway; firstHalf++, secondHalf++) {
//     if (arr[firstHalf] !== arr[secondHalf]) {
//       return false; // if ls element is different than its coinciding rs element, it's not a double number
//     }
//   }
//   return true;
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

// // 8
// const getGrade = (a, b, c) => {
//   let average = (a + b + c) / 3;
//   let grade = '';
//   if (average < 60) {
//     grade = 'F';
//   } else if (average < 70) {
//     grade = 'D';
//   } else if (average < 80) {
//     grade = 'C';
//   } else if (average < 90) {
//     grade = 'B';
//   } else {
//     grade = 'A';
//   }
//   return grade;
// };

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D"

// // 9
// // replace all non-alpha chars with space
// // remove spaces that are next to other spaces
// const cleanUp = (str) => {
//   // replace non-alpha with ' '
//   let newStr = '';
//   for (let idx = 0; idx < str.length; idx++) {
//     let newChar = '';
//     if (str[idx] <= 'A' || str[idx] >= 'z') {
//       newChar = ' ';
//     } else {
//       newChar = str[idx];
//     }
//     newStr += newChar;
//   }
//   // clean up extra spaces:
//   // for (let idx = 0; idx < newStr.length; idx++) {
//   //   if (newStr[idx + 1] === ' ' && newStr[idx] === ' ') newStr.slice(newStr[idx], 1);
//   // }
//   // break into array
//   let newArr = newStr.split('');
//   console.log(newArr)
//   // remove spaces
//   for (let idx = 0; idx < newArr.length; idx++) {
//     if (newArr[idx] === ' ' && newArr[idx + 1] === ' ') {
//       console.log('supsuspups')
//       newArr.splice(idx, 2);
//     }
//   console.log(newArr)
// }
//   // put back into string
//   return newArr.join('');
// };

// console.log(cleanUp("---what's my +*& line?"));

// // 10
// const century = (year) => {
//   let ordinal = '';
//   let cardinalYear = year <= 100 ? 1 : Math.ceil(year / 100);
//   let onesDigit = cardinalYear.toString().split('').pop();

//   switch (Number(onesDigit)) {
//     case 1:
//       ordinal = cardinalYear + 'st';
//       break;
//     case 2:
//       ordinal = cardinalYear + 'nd';
//       break;
//     case 3:
//       ordinal = cardinalYear + 'rd';
//       break;
//     default:
//       ordinal = cardinalYear + 'th';
//   }

//   if (specialNumbers(cardinalYear)) ordinal = cardinalYear + 'th';

//   return ordinal;
// };

// function specialNumbers(num) {
//   let lastTwo = num % 100;
//   return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
// }

// console.log(century(2000));        // "20th"
// console.log(century(2001));        // "21st"
// console.log(century(1965));        // "20th"
// console.log(century(256));         // "3rd"
// console.log(century(5));           // "1st"
// console.log(century(10103));       // "102nd"
// console.log(century(1052));        // "11th"
// console.log(century(1127));        // "12th"
// console.log(century(11201));       // "113th"