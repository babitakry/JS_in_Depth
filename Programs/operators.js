let a;
a = 3/4; // 0.75
// console.log(Math.floor(a)); // 0

a = 10%4; //2
a = 10%5; //0

let x;
x = 7%5; //2
x = (-7)%5; //-2
x = (7)%-5; //2
x = (-7)%(-5); //-2


// #NOTE: According to numerator sign result sign decided

// last digit
y = 213;
last_digit = y % 10; //3
last_two_digit = y % 100; //13


let z;
z = 2**3; //8
z = 2**(-3); //0.125
// z = -2**2; // Error
z = (-2)**2; //4
z = -(2**2); //-4
// console.log(z);

let p = 5;
let t;
t = p++; // 5
// console.log(p, t); // 6 5

p = 5;
t = ++p;
// console.log(p, t); // 6 6

p = 5;
t = p--;
// console.log(p, t); // 4 5

p = 5;
t = --p;
// console.log(p, t); // 4 4

// #NOTE: Post Increment (p++) ---->   Returns the value first, then increment
//        Pre Increment (++p) ---->    Increment first, then return
//        Post Decrement (p--) ---->   Returns the value first, then decrement
//        Pre Decrement (--p) ---->    decrement first, then return

let s = 5;
let w;
w += 2;
// console.log(w); // NaN

s = 5;
w = undefined;
w += 2;
// console.log(w); // NaN

// -----------------#Strict Operator-----------------

s = 4 == '4';
// console.log(s); // true

s = 4 === '4';
// console.log(s); // false

s = 4*'5';
// console.log(s); // 20

s = 4*'5a';
// console.log(s); // NaN

s = 4 != '4';
// console.log(s); // false

s = 4 !== '4';
// console.log(s); // true


let obj1 = {name: "Arun", age: 25};
let obj2 = obj1;
// console.log(obj1 == obj2); // true
// console.log(obj1 === obj2); // true

let obj3 = {name: "Arun", age: 25};
// console.log(obj1 == obj3); // false
// console.log(obj1 === obj3); // false

// console.log(0 == false); // true
// console.log(0 === false); // false
// console.log(0 == ''); // true
// console.log(0 === ''); // false
// console.log(0 == undefined); // false
// console.log(0 === undefined); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(0 == false); // true
// console.log(0 === false); // false
// console.log('' == false); // true
// console.log('' === false); // false
// console.log(NaN == false); // false
// console.log(null == false); // false
// console.log(undefined == false); // false


// ---------------- Logical Operator ----------
let s1 = 'mysirg';
let s2 = !s1;
// console.log(s1, s2); // mysirg false

s1 = undefined;
s2 = !s1;
// console.log(s1, s2); // undefined true

s1 = NaN;
s2 = !s1;
// console.log(s1, s2); // NaN true

s1 = null;
s2 = !s1;
// console.log(s1, s2); // null true

// let n1 = 5;
// let n2 = 6;
// let c = n1>0 && ++n2;
// // console.log(c, n2); // 7 7

let n1 = 5;
let n2 = 6;
let c = n1<0 && ++n2;
console.log(c, n2); // false 6

// AND (&&) and OR (||) examples in JavaScript

let temp = 0 && 5;
console.log(temp); // 0

temp = 2 && 5;
console.log(temp); // 5

temp = 5 || null;
console.log(temp); // 5

temp = null || 5;
console.log(temp); // 5

temp = null || undefined;
console.log(temp); // undefined

temp = 1 && 42;
console.log(temp); // 42

temp = false || 'Hello';
console.log(temp); // "Hello"

temp = (true && false) || 'true';
console.log(temp); // "true"

temp = (5 && null) || 'true';
console.log(temp); // "true"

temp = 5 && null || 10;
console.log(temp); // 10

temp = 1 && null;
console.log(temp); // null

// ---------converting non-boolean to boolean------------
// let b = 10;
// b = !!b;
// console.log(b);