// const a = [10, 20, 30, 40];
// console.log(a); [ 10, 20, 30, 40 ]
// console.log(a[3]); // 40
// console.log(a[-1]); // undefined
// console.log(a[4]); // undefined

//---------------------------------------------------------------------------------------

const p1 = {
    name: 'Rahul',
    age: 23
};

// console.log(p1.name, p1.age); // Rahul 23

//---------------------------------------------------------------------------------------

// const a = [10, 20, 30, 40];
// console.log(a); // [ 10, 20, 30, 40 ]
// a[5] = 50;
// console.log(a); // [ 10, 20, 30, 40, <1 empty item>, 50 ]


// const b = [11, 22,  , 44, 55, , 77];
// console.log(b); // [ 11, 22, <1 empty item>, 44, 55, 77 ]

// console.log(a.length); // 6
// console.log(b.length); // 7

//---------------------------------------------------------------------------------------

// const c = [45, 4.6, true, 'mysirg']; // Heterogeneous array
// console.log(c); // [ 45, 4.6, true, 'mysirg' ]

//---------------------------------------------------------------------------------------

// const a = [];
// console.log(a.length); // 0
// a[0] = 23;
// a[1] = 34;
// console.log(a.length); // 2


//---------------------------------------------------------------------------------------

const b = new Array();
const c = new Array(3);

// console.log(b, b.length); // [] 0
// console.log(c, c.length); // [ <3 empty items> ] 3

// const d = new Array('bhopal', 'indore', 'jaipur');
// console.log(d, d.length); // [ 'bhopal', 'indore', 'jaipur' ] 3

//---------------------------------------------------------------------------------------

// Accessing Array Elements using loop

// let a = [23, 34, 65, 78, 11, 14, 27, 30];

// // using while loop
// let i = 0;
// while(i < a.length){
//     console.log(a[i]);
//     i++;
// }

// // using for loop
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

// // using in operator 
// for(let k in a){
//     console.log(k, a[k]);
// }

// // using of operator
// for(let v of a){
//     console.log(v);
// }

//---------------------------------------------------------------------------------------
// // Modify array elements
// const a = [23, 34, 65, 78, 11, 14, 27, 30];
// console.log(a);

// a[2] = 78;
// console.log(a);

// a[a.length] = 112;
// console.log(a);

//---------------------------------------------------------------------------------------
// // using 'of' operator

// const a = [23, 34, 65, 78, 11, 14, 27, 30];
// console.log(a);
// for(let v of a){
//     v = v+5;
//     console.log(v);
// }
// console.log(a);

//---------------------------------------------------------------------------------------
// // using 'in' operator

// const a = [23, 34, 65, 78, 11, 14, 27, 30];
// console.log(a);
// for(let k in a){
//     a[k] = a[k]+5;
// }
// console.log(a);