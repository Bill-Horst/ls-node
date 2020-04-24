// 1
// const sum = (num) => {
//   let strArr = num.toString().split('');
//   let numArr = strArr.map(el => Number(el));
//   return numArr.reduce((total, num) => {
//     return total + num;
//   });
// };
// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

// 2 COULD NOT FINISH
// 2 COULD NOT FINISH
// 2 COULD NOT FINISH
// 2 COULD NOT FINISH
// 2 COULD NOT FINISH
// 2 COULD NOT FINISH
// 2 COULD NOT FINISH
// const alphabeticNumberSort = (arr) => {
//   const alphaList = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};
//   return '';
// };
// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// 3
// const multiplyAllPairs = (arr1, arr2) => {
//   let newArr = [];
//   arr1.forEach(el => {
//     arr2.forEach(el2 => {
//       newArr.push(el * el2);
//     });
//   });
//   newArr.sort((a, b) => a - b);
//   return newArr;
// };
// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// 4
// const substringsAtStart = (str) => {
//   let arr = [];
//   for (let idx = 0; idx < str.length; idx++) {
//     arr.push(str.substring(0, idx + 1));
//   }
//   return arr;
// };
// console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
// console.log(substringsAtStart('a'));        // ["a"]
// console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// 5
// const substrings = (str) => {
//   let arr = [];
//   for (let idx1 = 0; idx1 < str.length; idx1++) {
//     for (let idx2 = idx1; idx2 < str.length; idx2++) {
//       arr.push(str.substring(idx1, idx2 + 1));
//     }
//   }
//   return arr;
// };
// console.log(substrings('abcde'));

// returns [ "a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde", "c", "cd", "cde", "d", "de", "e" ]

// 6
// const palindromes = (str) => {
//   let arr = [];
//   for (let idx1 = 0; idx1 < str.length; idx1++) {
//     for (let idx2 = idx1; idx2 < str.length; idx2++) {
//       if (isPalindrome(str.substring(idx1, idx2 + 1))) {
//         arr.push(str.substring(idx1, idx2 + 1));
//       }
//     }
//   }
//   return arr;
// };
// function isPalindrome(str) {
//   return str.length > 1 && str === str.split('').reverse().join('');
// }
// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// 7
// const sumOfSums = (arr) => {
//   let total = 0;
//   for (let idx = 0; idx < arr.length; idx++) {
//     for (let adder = 0; adder < arr.length - idx; adder++) {
//       total += arr[adder];
//     }
//   }
//   return total;
// };
// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// 8
// const buyFruit = (arr) => {
//   let fruits = [];
//   for (let idx = 0; idx < arr.length; idx++) {
//     for (let times = 0; times < arr[idx][1]; times++) {
//       fruits.push(arr[idx][0]);
//     }
//   }
//   return fruits;
// };
// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// 9
// const transactionsFor = (item, transactions) => {
//   return transactions.filter(it => it.id === item);
// };
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// // returns
// // [ { id: 101, movement: "in",  quantity:  5 },
// //   { id: 101, movement: "in",  quantity: 12 },
// //   { id: 101, movement: "out", quantity: 18 }, ]

// 10
// const isItemAvailable = (item, transactions) => {
//   let total = 0;
//   let filteredTs = transactions.filter(it => it.id === item);
//   filteredTs.forEach(trans => {
//     if (trans.movement === 'in') {
//       total += trans.quantity;
//     } else {
//       total -= trans.quantity;
//     }
//   });
//   return total > 0;
// };
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(isItemAvailable(101, transactions));     // false
// console.log(isItemAvailable(103, transactions));     // false
// console.log(isItemAvailable(105, transactions));     // true