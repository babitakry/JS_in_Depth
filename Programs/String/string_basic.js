// let s1 = "Mysirg";
// let s2 = 'Mysirg';
let s3 = `Mysirg`;
let s4 = new String("Mysirg");
// console.log(s1, s2, s3, s4);

// console.log(typeof s1); //string
// console.log(typeof s2); //string
// console.log(typeof s3); //string
// console.log(typeof s4); //object

// console.log(s1 === s2); // true
// console.log(s1 === s3); // true
// console.log(s1 === s4); // false
// console.log(s1 == s4); // true [only value check which is same that's why true no type check]

// Access String elements
// console.log(s1[0]); // M
// console.log(s1[5]); // g
// console.log(s1[6]); // undefined
// console.log(s1.charAt(0)); // M

// s1[0] = 'A';
// console.log(s1.charAt(0)); // M [immutable no changes in string]

// s1 = s1 + " Education Services";
// console.log(s1); // Mysirg Education Services

// -----------------------------------------------------------------
// // String literals, string pool , string interning
// let s1 = "Mysirg";
// let s2 = "Mysirg";

// console.log(s1, s2);
// s2 = "Hello";
// console.log(s1, s2);

// ------------------------------------------------------------------
// Benifit of Backtack(``)
let s5 = `"Teacher's Day"`;
console.log(s5); // "Teacher's Day"

let a = 10;
let b = 20;
let c = a + b;

let result = `Sum of ${a} and ${b} is ${c}`; // Sum of 10 and 20 is 30
console.log(result); //

let result2 = `Square of ${a} is ${a*a}`;
console.log(result2); // Square of 10 is 100