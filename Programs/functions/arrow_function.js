// ======================================================
// 1) Function Declaration (Named Function)
// ======================================================

/*
Example 1: Normal Usage

- The function is defined first.
- Then it is called.
- This works as expected.
*/

function f1() {
    console.log("I am F1");
}
// f1();  // Output: I am F1



/*
Example 2: Hoisting in Function Declaration

- Function declarations are fully hoisted.
- This means we can call the function before its definition.
- JavaScript moves the entire function definition to the top during execution.
*/

// f1();  // Output: I am F1

function f1() {
    console.log("I am F1");
}



// ======================================================
// 2) Function Expression
// ======================================================

/*
Example 1: Using const (Called before definition)

- Function expressions are not hoisted like function declarations.
- Calling the function before initialization causes an error.
*/

// f2();  // Error: Cannot access 'f2' before initialization

const f2 = function () {
    console.log("I am F2");
};



/*
Example 2: Using const (Correct Usage)

- Define the function expression first.
- Then call it.
*/

const f3 = function () {
    console.log("I am F3");
};
// f3();  // Output: I am F3



/*
Example 3: Using let (Called before definition)

- Similar behavior to const.
- Cannot access the function before initialization.
- Results in a ReferenceError.
*/

// f4();  // Error: Cannot access 'f4' before initialization

let f4 = function () {
    console.log("I am F4");
};



/*
Example 4: Using var (Called before definition)

- Variables declared with var are hoisted.
- But they are initialized as undefined.
- So calling it before assignment gives a TypeError.
*/

// f5();  // TypeError: f5 is not a function

var f5 = function () {
    console.log("I am F5");
};



// ======================================================
// Important Summary
// ======================================================

/*
Function Declarations:
- Fully hoisted.
- Can be called before definition.

Function Expressions:
- Not fully hoisted.
- Cannot be called before assignment.
- With var: hoisted as undefined (TypeError if called early).
- With let/const: ReferenceError due to Temporal Dead Zone.
*/

// -------------Arrow function (Lambda Expression)------------- :

// take something return nothing arrow function
const f6 = (username) => {
    console.log("I am arrow function F6", username);
}
// f6("Babita");

// take something return nothing function expression
const f7 = function (username) {
    console.log("I am function expression F7", username );
}
// f7("Babita");

// take something return something arrow function
const f8 = (username) => {
    return "hello " + username;
}

const str = f8("MySirG");
// console.log(str);

// As a callback inside function 

function sayHi(func){
    return func('Amit');
}

var s1 = sayHi((username) => {
    return "Hi " + username;
});
// console.log(s1);



// ----------------------- DEFAULT PARAMETERS ----------------------------

function f9(username = 'unknown'){
    console.log("Hello "+ username);
}
// f9();
// f9('babita');


// ------------------- ANONYMOUS FUNCTION ---------------------------------
// A function without name is known as anonymous function.
// Anonymous function is used as either as an callback function or an function expression.

function func(f){
    f();
}

func(function (){
    console.log("I am Anonymous Function");
});

// ----------------- IIFE - Immediately Invoked Function Expression ----------------------
(function() {
    console.log("I am Immediately Invoked Function ........");
})();

// ------------------ Argument Object --------------------------------
function f10(){
    console.log(arguments);
    console.log(arguments['0'], arguments['1']);
}
f10(10, 20);

function f11(){
    for(let k in arguments){
        console.log(k, arguments[k]);
    }
}
f11(10, 20, 30, 40, 50);


// ----------------- Constructor Function -----------------------
// function Person(name, age){
//     console.log(this);
//     this.name = name;
//     this.age = age;
// }
// Person('Amit', 23);

function Person(name, age){
    this.name = name;
    this.age = age;
    console.log(this);
}

let p1 = new Person('Ajay', 20);


// --------------- Generator Function -------------------
function* counter(){
    yield 1;
    yield 2;
    yield 3;
}

const g = counter(); // returns generator object
// console.log(g); // Object [Generator] {}

console.log(g.next()); //{ value: 1, done: false }
console.log(g.next()); //{ value: 2, done: false }
console.log(g.next()); //{ value: 3, done: false }
console.log(g.next()); //{ value: undefined, done: true }