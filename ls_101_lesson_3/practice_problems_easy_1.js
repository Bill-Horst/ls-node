// // 1
// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
// console.log(numbers.map((x) => x + 10));  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]

// // 2
// let str1 = 'jaj!';
// let str2 = 'jaj?';
// console.log(str1.endsWith("!")); // true
// console.log(str2.endsWith("!")); // false
// // also...
// console.log(str1.substring(str1.length - 1, str1.length) === '!');
// console.log(str2.substring(str2.length - 1, str2.length) === '!');

// // 3
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// let ages2 = { Herman: 32, Lily: 30, Grandpa: 402, Spot: 33, Eddie: 10 };

// console.log(Object.keys(ages).find(age => age === 'Spot') !== undefined);
// console.log(Object.keys(ages2).find(age => age === 'Spot') !== undefined);

// // oops ... or...

// console.log(ages.hasOwnProperty('Spot'));
// console.log(ages2.hasOwnProperty('Spot'));

// // 4
// let munstersDescription = "the Munsters are CREEPY and Spooky.";

// console.log(munstersDescription.toLowerCase().charAt(0).toUpperCase() + munstersDescription.toLowerCase().substring(1));

// // 5
// console.log(false == '0'); // true because '0' is converted to 0 and false is converted to 0
// console.log(false == 0) // true because false is converted to 0
// console.log(false === '0'); // false because no conversions happen and types are different

// // 6
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// ages = {...ages, ...additionalAges};
// console.log(ages);
// // or ...
// let ages2 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges2 = { Marilyn: 22, Spot: 237 };
// Object.assign(ages2, additionalAges2);
// console.log(ages2);

// // 7
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// // 8
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino');
// console.log(flintstones);

// // 9
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino', 'Hoppy');
// console.log(flintstones);

// 10
let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.substring(0, advice.indexOf('house')));