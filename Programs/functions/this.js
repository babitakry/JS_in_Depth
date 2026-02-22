/** 
console.log(this); 
// Browser: {}
// NodeJS: Window

let a = 10;
function f1(){
    console.log(this);
}
f1(); //<ref *1> Object [global] { }

var a1 = 10;
console.log(this.a1) ; // a1 variable associated with window object that's why in browser it prints
// Browser Output -- 10
// NodeJS Output -- undefined

let a2 = 20;
console.log(this);
console.log(this.a2); // here 'a' neither associated with global object nor window object as 'let' keyword
//Browser: undefined
//NodeJS: undefined

*/

// let a3 = 10;
// function f2(){
//     "use strict"
//     b = 6;
//     console.log(this);
// }
// f2(); // ReferenceError: b is not defined

// let a3 = 10;
// function f2(){
//     b = 6;
//     console.log(this);
// }
// f2(); // <ref *1> Object [global] {


let a3 = 10;
function f2(){
    "use strict"
    console.log(this);
}
f2(); // undefined [ Browser as well as NodeJS ]

const obj = {
    name: 'Saurabh',
    age: 44,
    sayHi: function(){
        console.log(this);
        console.log("I am ", this.name);
    }
};

obj.sayHi(); 
// { name: 'Saurabh', age: 44, SayHi: [Function: SayHi] }
// I am  Saurabh

const funcRef = obj.sayHi;
funcRef();
//<ref *1> Object [global] {.... }
// I am  undefined


const anotherObj = {
    name: 'Aditya'
};

anotherObj.sayHi = obj.sayHi;
anotherObj.sayHi();
// { name: 'Aditya', sayHi: [Function: sayHi] }
// I am Adiya

obj.sayHi(); 
// { name: 'Saurabh', age: 44, sayHi: [Function: sayHi] }
// I am  Saurabh



// ---------------- CONSTRUCTOR FUNCTION --------------
//
//
function Book(id, title, price){
    this.id = id;
    this.title = title;
    this.price = price;
    console.log(this);
}
Book(); 
// <ref *1> Object [global] {... } ---- NODE JS
// Window { } ------------------ BROWSER

const b1 = new Book(1, "JS in Depth", 400);
// -----BROWSER AS WELL AS NODE-JS--------
// Book { id: 1, title: 'JS in Depth', price: 400 }



// ------------ ANOTHER USE OF THIS IN DOM --------------------
//
//
// let btn = document.getElementById("btn");
// btn.addEventListener('click',function(){
//     console.log(this); //<button id="btn">Click me</button>
// });      


// -------------------------------------------------------------
// In arrow function when it call then in call stack a function execution context created but there is no this block there.
// In normal function this block present in created function execution context.

// ......let's check......
// const arrow = () => {
//     console.log(this);
// };
// arrow(); // {} ----> NodeJS
         // Window ----> Browser

// function f3(){
//     let a = 10;
//     const arrow = () => {
//         console.log(a); 
//         console.log(this);
//     };
//     arrow();
// }
// f3();  // 10
          // <ref *1> Object [global] { }

function f3(){
    let a = 10;
    const arrow = () => {
        console.log(a);
        console.log(this);
    }
    arrow();
};
const o1 = new f3();
// 10
// f3 {}
// console.log(o1.a); // undefined



// const obj2 = {
//     a: 10,
//     f1: function(){
//         console.log(this.a); // this == obj2
//         setTimeout(function(){
//             console.log(this); // this == window / global obj
//         }, 2000);
//     },
//     f2: function(){
//         console.log(this.a); // this == obj2
//         setTimeout(() => {
//             console.log(this); // this == obj2
//         }, 2000);
//     }
// };
// obj2.f1(); 
// obj2.f2();


// NOTE: NORMAL FUNCTION KE CONSTRUCTOR BNA SAKTE HAI
// NOTE: ARROW FUNCTION KE CONSTRUCTOR NHI BNA SAKTE 

function normalFunc(id, name){
    this.id = id;
    this.name = name;
    console.log(this);
}
const nObj = new normalFunc(1, "normal function");

// const arrowFunc = (id, name) => {
//     this.id = id;
//     this.name = name;
//     console.log(this);
// }
// const aObj = new arrowFunc(2, "arrow function"); //TypeError: arrowFunc is not a constructor
