// // 1
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// console.log(advice.replace('important', 'urgent'));

// const replaceWords = (str) => {
//   while (str.includes('important')) {
//     str = str.replace('important', 'urgent');
//   }
//   return str;
// }

// let advice2 = "Few things in life are as important as house training your important pet important dinosaur.";
// console.log(replaceWords(advice2));

// 2
// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// /* ****************************** */

// const customReverse = (arr) => {
//   let newArr = [];
//   for (let idx = arr.length - 1; idx >= 0; idx--) {
//     newArr.push(arr[idx]);
//   }
//   return newArr;
// };
// const customSort = (arr, direction = 'desc') => {
//   let newArr = [];
//   for (let idx = 0; idx < arr.length; idx++) {
//     newArr.push(arr[idx]);
//   }
//   // set numbers in descending order
//   while (!arrayIsDescending(newArr)) {
//     for (let idx = 0; idx < newArr.length; idx++) {
//       if (newArr[idx] < newArr[idx + 1]) {
//         let tempValue = newArr[idx];
//         newArr[idx] = newArr[idx + 1];
//         newArr[idx + 1] = tempValue;
//       }
//     }
//   }
//   if (direction === 'desc') return newArr;
//   else if (direction === 'asc') return newArr.reverse();
//   else return {message: 'something wrong with argument', array: arr};
// };
// let numbers2 = [1, 2, 3, 4, 5];
// console.log(customReverse(numbers2)); // [ 5, 4, 3, 2, 1 ]
// console.log(numbers2); // [ 1, 2, 3, 4, 5 ]

// numbers2 = [1, 2, 3, 4, 5];
// console.log(customSort(numbers2)); // [ 5, 4, 3, 2, 1 ]
// console.log(numbers2); // [ 1, 2, 3, 4, 5 ]

// function arrayIsDescending(arr) {
//   let isDescending = true;
//   for (let idx = 0; idx < arr.length; idx++) {
//     if (arr[idx] < arr[idx + 1]) {
//       isDescending = false;
//       break;
//     }
//   }
//   return isDescending;
// }

// // test that arrayIsDescending works...
// // console.log(arrayIsDescending([1,2,3]));
// // console.log(arrayIsDescending([3,2,1]));
// // console.log(arrayIsDescending([1,3,2]));
// // console.log(arrayIsDescending([5,4,3,2,1]));

// wow, I totally misunderstood what was required...

// // 3
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// // 4
// let famousWords = "seven years ago...";

// console.log('Four score '.concat(famousWords));
// console.log('Four score ' + famousWords);
// console.log(`Four score ${famousWords}`);

// 5
// splice: mutates array and optionally adds something to it
// months.splice(4, 1, 'May'); -> at index 4, remove 1 element and replace with 'May'

// let arr = [1, 2, 3, 4, 5];

// arr.splice(2, 1); // at index 2, remove 1 element

// console.log(arr);

// // 6
// let flintstones = ["Fred", "Wilma"];
// flintstones.push("Barney", "Betty");
// flintstones.push("Bambam", "Pebbles");
// let flintstones = ["Fred", "Wilma"];
// let bb = ["Barney", "Betty"];
// let bp = ["Bambam", "Pebbles"];

// flintstones.push(...bb);
// flintstones.push(...bp);

// console.log(flintstones);

// console.log(...['one', 'two', 'three'])

// let flintstones = ["Fred", "Wilma"];
// let bb = ["Barney", "Betty"];
// let bp = ["Bambam", "Pebbles"];

// console.log(flintstones.concat(bb).concat(bp));

// // 7
// let flintstones = {
//   Fred: 0,
//   Wilma: 1,
//   Barney: 2,
//   Betty: 3,
//   Bambam: 4,
//   Pebbles: 5
// };

// let barney = [];
// let key = Object.keys(flintstones).find(key => key === 'Barney');
// barney.push(key, flintstones[key]);

// console.log(barney);

// // 8
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// //9
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log((statement1.match(/t/g) || []).length);
// console.log((statement2.match(/t/g) || []).length);

// String.prototype.match() takes a regex and returns an array of all the matches in the string
// 'Hi'.match(/i/g) -> ['i']

// // 10
// let title = "Flintstone Family Members";

// let padding = Math.floor((40 - title.length) / 2);

// console.log(title.padStart(padding + title.length));
// // String.prototype.padStart() takes a number and prepends that number of spaces to the caller

// // NOTES
// // Array.prototype.reduce()
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator * currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// // console.log(array1.reduce(reducer, 5));
// // expected output: 15