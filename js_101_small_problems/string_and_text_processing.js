// 1
// const isUppercase = (str) => {
//   return str.toUpperCase() === str;
// };
// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true

// 2
// const removeVowels = (arr) => {
//   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   let newArr = [];
//   arr.forEach(el => {
//     let newStr = '';
//     for (let idx = 0; idx < el.length; idx++) {
//       if (!vowels.includes(el[idx])) {
//         newStr += el[idx];
//       }
//     }
//     newArr.push(newStr);
//   });
//   return newArr;
// };
// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// 3
// const letterCaseCount = (str) => {
//   let obj = {lowercase: 0, uppercase: 0, neither: 0};
//   for (let idx = 0; idx < str.length; idx++) {
//     if (isAlphabet(str[idx])) {
//       if (str[idx] === str[idx].toLowerCase()) {
//         obj.lowercase += 1;
//       } else {
//         obj.uppercase += 1;
//       }
//     } else {
//       obj.neither += 1;
//     }
//   }
//   return obj;
// };
// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
// function isAlphabet(char) {
//   return char.toLowerCase() !== char.toUpperCase();
// }

// 4
// const wordCap = (str) => {
//   // break out into array
//   let arr = str.split(' ');
//   // capitalize each word (map)
//   arr = arr.map(el => {
//     return capitalize(el);
//   });
//   // join back to string
//   return arr.join(' ');
// };
// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
// function capitalize(str) {
//   return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
// }

// 5
// const swapCase = (str) => {
//   let newStr = '';
//   for (let idx = 0; idx < str.length; idx++) {
//     if (str[idx].toLowerCase() === str[idx]) {
//       newStr += str[idx].toUpperCase();
//     } else {
//       newStr += str[idx].toLowerCase();
//     }
//   }
//   return newStr;
// };
// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

// 6
// const staggeredCase = (str) => {
//   let newStr = '';
//   for (let idx = 0; idx < str.length; idx++) {
//     if (idx % 2 === 0) {
//       newStr += str[idx].toUpperCase();
//     } else {
//       newStr += str[idx].toLowerCase();
//     }
//   }
//   return newStr;
// };
// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"

// 7
// const staggeredCase = (str) => {
//   let newStr = '';
//   let opposite = false;
//   for (let idx = 0; idx < str.length; idx++) {
//     if (str[idx].toLowerCase() === str[idx].toUpperCase()) opposite = !opposite;
//     if (idx % 2 === 0) {
//       newStr += !opposite ? str[idx].toUpperCase() : str[idx].toLowerCase();
//     } else {
//       newStr += !opposite ? str[idx].toLowerCase() : str[idx].toUpperCase();
//     }
//   }
//   return newStr;
// };
// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

// 8
// const wordLengths = (str) => {
//   if (!str) return [];
//   const arr = str.split(' ');
//   return arr.map(el => {
//     return `${el} ${el.length}`;
//   });
// };
// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []

// 9
// const searchWord = (word, str) => {
//   return str.toLowerCase().split(word.toLowerCase()).length - 1;
// };
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      // 3

// 10
// const searchWord = (word, str) => {
//   const arr = str.toLowerCase().split(word.toLowerCase());
//   // console.log(arr);
//   for (let idx = arr.length - 1; idx > 0; idx--) {
//     arr.splice(idx, 0, `**${word.toUpperCase()}**`);
//   }
//   // console.log(arr);
//   return arr.join('');
// };
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));
// // returns
// // "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"




// neat way to check if it's alphabet:
// function isAlphabet(char) {
//   return char.toLowerCase() !== char.toUpperCase();
// }

// neat way to count occurrences of text set in string:
// string.toLowerCase().split(text_set).length - 1 // split array on word and count elements (minus 1)