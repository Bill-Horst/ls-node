// 1
// const repeater = (str) => {
//   let newStr = '';
//   for (let idx = 0; idx < str.length; idx++) {
//     newStr += `${str[idx]}${str[idx]}`;
//   }
//   return newStr;
// };
// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

// 2
// const doubleConsonants = (str) => {
//   let newStr = '';
//   const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
//   for (let idx = 0; idx < str.length; idx++) {
//     if (consonants.includes(str[idx])) {
//       newStr += `${str[idx]}${str[idx]}`;
//     } else {
//       newStr += str[idx];
//     }
//   }
//   return newStr;
// };
// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""

// 3
// const reverseNumber = (num) => {
//   // change it to string
//   num = num.toString();
//   // change it to array
//   let arr = num.split('');
//   // reverse array
//   arr = arr.reverse();
//   // join to string
//   let newStr = arr.join('');
//   // turn into number
//   return Number(newStr);
//   // return number
// };
// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1));        // 1

// 4
// const centerOf = (str) => {
//   let len = str.length;
//   if (len % 2 === 0) {
//     return `${str[(len / 2) - 1]}${str[len / 2]}`;
//   } else {
//     return `${str[Math.floor(len / 2)]}`;
//   }
// };
// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

// 5
// const negative = (num) => {
//   return -Math.abs(num);
// };
// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0

// 6
// const sequence = (num) => {
//   const arr = [];
//   for (let idx = 1; idx <= num; idx++) {
//     arr.push(idx);
//   }
//   return arr;
// };
// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

// 7
// const swapName = (str) => {
//   return str.split(' ').reverse().join(', ');
// };
// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// 8
// const sequence = (count, num) => {
//   const arr = [];
//   let currentNum = num;
//   for (let idx = 0; idx < count; idx++) {
//     arr.push(currentNum);
//     currentNum += num;
//   }
//   return arr;
// };
// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

// 9
// const reverseSentence = (str) => {
//   return str.split(' ').reverse().join(' ');
// };
// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

// 10
// const reverseWords = (str) => {
//   let arr = str.split(' ');
//   return arr.map(el => {
//     if (el.length < 5) {
//       return el;
//     } else {
//       return el.split('').reverse().join('');
//     }
//   });
// };
// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

// 11
// const reverse = (arr) => {
//   let arr2 = [...arr];
//   for (let idx = 0; idx < arr.length; idx++) {
//     arr[idx] = arr2[arr.length - (idx + 1)];
//   }
//   return arr;
// };

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true

// 12
const isBalanced = (str) => {
  let balanced = 0;

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === '(') {
      balanced += 1;
    }
    if (str[idx] === ')') {
      balanced -= 1;
    }
    if (balanced === -1) break; // if ) comes before (, break and return false
  }

  return balanced === 0;
};
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced("(())()((()))()((())())()"));