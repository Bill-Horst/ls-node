// 3
// function messWithVars(one, two, three) {
//   one = two; // reassigns variables to something else, so it doesn't affect original objects
//   two = three; // reassigns variables to something else, so it doesn't affect original objects
//   three = one; // reassigns variables to something else, so it doesn't affect original objects
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // one
// console.log(`two is: ${two}`); // two
// console.log(`three is: ${three}`); // three

// function messWithVars(one, two, three) {
//   one = ["two"]; // reassigns variables to something else, so it doesn't affect original objects
//   two = ["three"]; // reassigns variables to something else, so it doesn't affect original objects
//   three = ["one"]; // reassigns variables to something else, so it doesn't affect original objects
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // one
// console.log(`two is: ${two}`); // two
// console.log(`three is: ${three}`); // three

// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two"); // modifies original object via its pointer so original object is modified
//   two.splice(0, 1, "three"); // modifies original object via its pointer so original object is modified
//   three.splice(0, 1, "one"); // modifies original object via its pointer so original object is modified
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // two
// console.log(`two is: ${two}`); // three
// console.log(`three is: ${three}`); // one

// 4
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(word) {
  word = Number(word);
  return word <= 255 && word >= 0;
}

console.log(isDotSeparatedIpAddress('12.12.12.12')); // true
console.log(isDotSeparatedIpAddress('1222.12.12.12')); // false
console.log(isDotSeparatedIpAddress('12.12.12')); // false
console.log(isDotSeparatedIpAddress('12.12.12.12.12')); // false