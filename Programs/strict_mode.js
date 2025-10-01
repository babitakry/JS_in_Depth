// ---------- Strict Mode ------------


// i = 0;
// console.log(i);  // 0



// "use strict"
// i = 0;
// console.log(i); // Error


// "use strict"
// let i = 0
// console.log(i); // 0



// function f1(){
//     a = 0;
//     console.log(a); // Error
// }
// f1();



i = 0
console.log(i); // 0

function f1(){
    "use strict"
    a = 0;
    console.log(a); // Error
}
f1();