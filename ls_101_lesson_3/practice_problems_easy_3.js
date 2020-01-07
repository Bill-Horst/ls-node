// 1
// let numbers = [1, 2, 3, 4];

// a // reassign it to a new empty array
//  numbers = [];
// b // pop the array the number of times equal to its length
//  let numLength = numbers.length;
//  for (let idx = 0; idx < numLength; idx++) {
//    numbers.pop();
//  }
// c // set its length to 0, emptying it
//  numbers.length = 0;
// d // splice it - start with the first index and pull out the number of elements equal to its length
//  numbers.splice(0, numbers.length);

// console.log(numbers);

// 2
// console.log([1, 2, 3] + [4, 5]); // + operator converts arrays to string and then concatenates them

// 3

// // 4
// // Array.prototype.slice() makes a shallow copy of an array
// // a shallow copy means that the elements that are objects in the array are pointers to the objects... 
// // it's not a deep copy that actually creates new objects
// let arr = [{ hey: 'hey' }, 1, 2, 3, () => console.log('hey')];
// let sliceCopy = arr.slice(0);
// let spreadCopy = [...arr];
// let jsonCopy = JSON.parse(JSON.stringify(arr));
// let mapCopy = arr.map(a => Object.assign({}, a));
// console.log('+++++++++++++BEFORE CHANGING++++++++++++++');
// console.log('arr: ', arr);
// console.log('sliceCopy: ', sliceCopy);
// console.log('spreadCopy: ', spreadCopy);
// console.log('jsonCopy: ', jsonCopy);
// console.log('mapcopy: ', mapCopy);
// // change the object in the array and see which copies changed...
// arr[0].hey = 'CHANGED';
// console.log('+++++++++++++AFTER CHANGING++++++++++++++');
// console.log('arr: ', arr);
// console.log('sliceCopy: ', sliceCopy);
// console.log('spreadCopy: ', spreadCopy);
// console.log('jsonCopy: ', jsonCopy);
// console.log('mapcopy: ', mapCopy);

// // 5
// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// const isColorValid1 = (color) => {
//   return color === 'blue' || color === 'green';
// };

// const isColorValid2 = (color) => {
//   let valid = false;
//   if (color === 'blue' || color === 'green') {
//     valid = true;
//   }
//   return valid;
// };

// console.log(isColorValid("green")); // true
// console.log(isColorValid1("green")); // true
// console.log(isColorValid2("green")); // true
// console.log(isColorValid("no")); // false
// console.log(isColorValid1("no")); // false
// console.log(isColorValid2("no")); // false