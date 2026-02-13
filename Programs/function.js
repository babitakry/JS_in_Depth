// console.log("Hello 1");
// console.log("Hello 2");
// f1();
// console.log("Hello 3");

// function f1(){
//     console.log("Hello");
// }
// f1();

// console.log("Hello 4");
// f1();
// console.log("Hello 5");


//----------- types of function ---------

// Callback Function: -> A callback function is a function that is passed as an argument 
//                       to another function and is executed later, typically 
//                       after a specific task or an asynchronous operation is completed.
//
//                    -> The function that accepts the callback as an argument 
//                       is called a higher-order function.

f2(function(){
    console.log("Hello");
});

function f2(func){
    console.log("I am in f2");
    func();
}

// --------- example-1 --------------

// console.log("1");
// setTimeout(function(){console.log("A");}, 3000);

// console.log("2");
// console.log("3");

// f1();
// console.log("4");
// console.log("5");
// f1();
// console.log("6");

// function f1(){
//     console.log("Hello");
// }

// --------------- example-2 ---------------

// console.log("1");
// setTimeout(function () {
//     console.log("A");
// }, 3000);

// console.log("2")
// setTimeout(function () {
//     console.log("B");
// }, 1000);

// console.log("3");
// f1();

// console.log("4");
// setTimeout(function () {
//     console.log("C");
// }, 2000);

// console.log("5");
// f1();

// console.log("6");
// function f1() {
//     console.log("Hello");
// }