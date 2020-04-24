// 1
// const dms = (val) => {
//   let degVal = '';
//   let wholeNumber = Math.floor(val);
//   let rightNum = val - wholeNumber;
//   let minutes = (rightNum * 60);
//   let seconds = (minutes * .6);

//   degVal += wholeNumber + '°';
//   degVal += format(minutes) + '\'';
//   degVal += format(seconds) + '"';
//   return degVal;
// };
// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"

// function format(num) {
//   num = Math.floor(num);
//   num = num.toString();
//   if (num.length < 2) {
//     num = '0' + num;
//   }
//   return num;
// }

// 2
// const union = (arr1, arr2) => {
//   let newArr = arr1.concat(arr2);
//   // return newArr.filter((val, idx) => newArr.indexOf(val) === idx);
//   let filteredArray = [];
//   newArr.forEach(el => {
//     if (!filteredArray.includes(el)) {
//       filteredArray.push(el);
//     }
//   });
//   return filteredArray;
// };
// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// 3
// const halvsies = (arr) => {
//   const arr1 = [];
//   const arr2 = [];
//   for (let idx = 0; idx < arr.length; idx++) {
//     if (idx < arr.length / 2) {
//       arr1.push(arr[idx]);
//     } else {
//       arr2.push(arr[idx]);
//     }
//   }
//   return [arr1, arr2];
// };
// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

// 4
// const findDup = (arr) => {
//   const second = [];
//   let dup = -1;
//   arr.forEach(el => {
//     if (second.includes(el)) {
//       dup = el;
//     } else {
//       second.push(el);
//     }
//   });
//   return dup;
// };
// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

// 5
// const interleave = (arr1, arr2) => {
//   const newArr = [];
//   for (let idx = 0; idx < arr1.length; idx++) {
//     newArr.push(arr1[idx]);
//     newArr.push(arr2[idx]);
//   }
//   return newArr;
// };
// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// 6
// const multiplicativeAverage = (arr) => {
//   let val = 1;
//   arr.forEach(el => {
//     val *= el;
//   });
//   val /= arr.length;
//   return val;
// };
// console.log(multiplicativeAverage([3, 5]));                   // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

// 7
// const multiplyList = (arr1, arr2) => {
//   const newArr = [];
//   for (let idx = 0; idx < arr1.length; idx++) {
//     newArr.push(arr1[idx] * arr2[idx]);
//   }
//   return newArr;
// };
// console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

// 8
// const digitList = (num) => {
//   let strArr = num.toString().split('');
//   return strArr.map(el => {
//     return Number(el);
//   });
// };
// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

// 9
// const countOccurrences = (arr) => {
//   let obj = {};
//   arr.forEach(el => {
//     if (!obj[el]) {
//       obj[el] = 1;
//     } else {
//       obj[el] += 1;
//     }
//   });
//   Object.keys(obj).forEach(el => {
//     console.log(`${el} => ${obj[el]}`);
//   });
// };
// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'suv', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// 10
// const average = (arr) => {
//   let total = 0;
//   arr.forEach(el => {
//     total += el;
//   });
//   return Math.floor(total / arr.length);
// };
// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40

// 11
// const timeOfDay = (num) => {
//   while (num < 0 || num >= 1440) {
//     num = num < 0 ? num + 1440 : num;
//     num = num >= 1440 ? num - 1440 : num;
//   }
//   let hour = Math.floor(num / 60);
//   let minute = Math.floor(num - (hour * 60));

//   return `${format(hour)}:${format(minute)}`;
// };
// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

// function format(num) {
//   num = num.toString();
//   return num.length < 2 ? '0' + num : num;
// }

// 12
// const afterMidnight = (str) => {
//   let hours = str.split(':')[0];
//   let minutes = str.split(':')[1];
//   if (str === '24:00') return 0;
//   return ((Number(hours) * 60) + (Number(minutes)));
// };
// const beforeMidnight = (str) => {
//   if (str === '00:00' || str === '24:00') return 0;
//   return 1440 - afterMidnight(str);
// };
// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);