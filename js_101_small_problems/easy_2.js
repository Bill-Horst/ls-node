// const rl = require('readline-sync');

// // 1
// const greetings = (nameArray, occupationObject) => {
//   return `Hello, ${nameArray.join(' ')}! Nice to have a ${occupationObject.title} ${occupationObject.occupation} around!`;
// }
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// // 2
// let name = rl.question('What is your name?\n');
// if (name.substring(name.length - 1) !== '!') {
//   console.log(`Hello, ${name.substring(0, name.length)}.`);
// } else {
//   console.log(`HELLO, ${name.substring(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
// }

// // 3
// const multiply = (a, b) => a * b;

// console.log(multiply(5, 3) === 15); // logs true

// // 4
// const square = num => num * num;

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// // 5
// let firstNumber = Number(rl.question('Enter the first number:\n'));
// let secondNumber = Number(rl.question('Enter the second number:\n'));

// console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
// console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
// console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);

// // 6
// const penultimate = str => {
//   let arr = str.split(' ');
//   return arr[arr.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// // 7
// const xor = (a, b) => (!a && b) || (a && !b);

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);
// console.log(xor(false, false) === false);

// // 8
// const oddities = (arr) => {
//   let newArr = [];
//   arr.forEach((el, idx) => {
//     if (idx % 2 === 0) newArr.push(el);
//   });
//   return newArr;
// };

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// // 9
// const stringToInteger = (str) => {
//   let returnValue = 0; // set return value
//   let newArr = str.split(''); // split string into array
//   for (let idx = 0; idx < newArr.length; idx++) { // loop through array
//     let tempStringValue = newArr[idx]; // extract string value of current index
//     let tempNumberValue = getValueFromChar(tempStringValue); // get the number value of that string
//     let power = newArr.length - (idx + 1); // determine which keta number belongs to
//     returnValue += tempNumberValue * (10 ** power); // add number times that keta to return value
//   }
//   function getValueFromChar(char) {
//     const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let returnDigit = 0;
//     digits.forEach(dig => {
//       if (char == dig) returnDigit = dig;
//     });
//     return returnDigit;
//   }
//   return returnValue;
// };

// console.log(stringToInteger("4321")); // logs true
// console.log(stringToInteger("570")); // logs true
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true
// console.log(stringToInteger("1") === 1); // logs true

// // 10
// const stringToSignedInteger = (str) => {
//   let returnValue = 0; // set return value
//   let newArr = str.split(''); // split string into array
//   for (let idx = 0; idx < newArr.length; idx++) { // loop through array
//     let tempStringValue = newArr[idx]; // extract string value of current index
//     let tempNumberValue = getValueFromChar(tempStringValue); // get the number value of that string
//     let power = newArr.length - (idx + 1); // determine which keta number belongs to
//     returnValue += tempNumberValue * (10 ** power); // add number times that keta to return value
//   }
//   function getValueFromChar(char) {
//     const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let returnDigit = 0;
//     digits.forEach(dig => {
//       if (char == dig) returnDigit = dig;
//     });
//     return returnDigit;
//   }
//   if (str.charAt(0) === '-') returnValue = -Math.abs(returnValue); // if negative, turn number negative
//   return returnValue;
// };

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true


// // 11
// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // lookup with string numbers inside their corresponding indexes

// function integerToString(number) {
//   let result = '';

//   do {
//     let remainder = number % 10; // isolates and gets number in right-most keta (4321 -> 1)
//     number = Math.floor(number / 10); // reassigns number to itself divided by 10 (4321 -> 432)

//     result = DIGITS[remainder] + result; // concatenates (by prepending) the number that was pulled off the end above
//   } while (number > 0);
//   return result;
// }

// console.log(integerToString(4321));      // "4321"
// console.log(integerToString(0));         // "0"
// console.log(integerToString(5000));      // "5000"
// console.log(integerToString(1234567890));      // "1234567890"

// // 12
// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // lookup with string numbers inside their corresponding indexes

// function integerToString(number) {
//   let result = '';

//   do {
//     let remainder = number % 10; // isolates and gets number in right-most keta (4321 -> 1)
//     number = Math.floor(number / 10); // reassigns number to itself divided by 10 (4321 -> 432)

//     result = DIGITS[remainder] + result; // concatenates (by prepending) the number that was pulled off the end above
//   } while (number > 0);
//   return result;
// }

// const signedIntegerToString = (num) => {
//   if (num < 0) {
//     return `-${integerToString(Math.abs(num))}`;
//   } else if (num > 0) {
//     return `+${integerToString(num)}`;
//   } else {
//     return '0';
//   }
// };

// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");