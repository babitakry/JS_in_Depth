// const a = [11, 34, 25];
// console.log(a); // [ 11, 34, 25 ]
// a.push(50); // add in last position
// a.unshift(40); //add in first position

// console.log(a); // [ 40, 11, 34, 25, 50 ]

// a.pop(); // delete last element
// a.shift(); // delete first element
// console.log(a); // [ 11, 34, 25 ]

//---------------------------------------------------------------------------------------
// All in one function (add, replace or remove)
// // splice() 

// const a = [11, 34, 25];
// console.log(a);

// a.splice(1, 0, 60);
// console.log(a); //[ 11, 60, 34, 25 ]

// a.splice(1,0,70,80);
// console.log(a); // [ 11, 70, 80, 60, 34, 25 ]

// a.splice(1, 3);
// console.log(a); // [ 11, 34, 25 ]

// a.splice(1, 3);
// console.log(a); // [ 11 ]

////---------------------------------------------------------------------------------------
////for replace
// const a = [11, 34, 25];
// a.splice(0, 1, 30);
// console.log(a); // [ 30, 34, 25 ]

////---------------------------------------------------------------------------------------
// const a = [11, 34, 25];
// a.splice(0, 2, 30, 40, 50);
// console.log(a); // [ 30, 40, 50, 25 ]

////---------------------------------------------------------------------------------------
// // ForEach()

//const a = [25, 50, 12, 46];

// a.forEach((element , index, a) => {
//     console.log(index, element, a);
// }) ;
// console.log(a);

// a.forEach((element, index, a) => {
//     a[index] = element + 2;
// });
// console.log(a); //[ 27, 52, 14, 48 ]

////---------------------------------------------------------------------------------------
// // Map method: It creates another array

// const a = [11, 2, 7, 4, 6, 15, 9];
// let b = a.map((e) => e + 1);

// console.log(a);
// console.log(b);

////---------------------------------------------------------------------------------------
// const a = [11, 2, 7, 4, 6, 15, 9];
// let b = a.filter((e) => e > 7);

// console.log(a); //[ 11, 2, 7, 4, 6, 15, 9 ]
// console.log(b); // [ 11, 15, 9 ]

//---------------------------------------------------------------------------------------
// // reduce()
// const a = [11, 2, 7, 4, 6, 15, 9];
// let r = a.reduce((sum, e) => {
//     return sum + e
// }, 0);
// console.log(r);

//---------------------------------------------------------------------------------------
// const a = [23, 56, 11];
// console.log(a.indexOf(23)); // 0
// console.log(a.indexOf(24)); // -1

//---------------------------------------------------------------------------------------
// const a = [23, 56, 11, 23];

// console.log(a.indexOf(23));// 0
// console.log(a.lastIndexOf(23));
// console.log(a.includes(11));
// console.log(a.join()); // 23,56,11,23
// console.log(a.join(' ')); // 23 56 11 23
// console.log(a.join('-')); // 23-56-11-23


//---------------------------------------------------------------------------------------
// const a = [23, 56, 11, 23, 10, 5, 7];
// let b = a.slice(2, 6);
// console.log(b); // [ 11, 23, 10, 5 ]

//---------------------------------------------------------------------------------------
let a = [1, 2, 3];
let b = [4, 5];
let c = [6, 7, 8];

let d = [...a, ...b, ...c];
// console.log(d);

// console.log(d.reverse());

//---------------------------------------------------------------------------------------
// // shallow copy

const arr1 = [10, 30, 20];
const arr2 = arr1;

arr1[0] = 19;
console.log(arr1); // [ 19, 30, 20 ]
console.log(arr2); // [ 19, 30, 20 ]

// deep copy
const arr3 = [19, 38, 57]
const arr4 = [...arr3];

arr3[0] = 55;
console.log(arr3);
console.log(arr4);
