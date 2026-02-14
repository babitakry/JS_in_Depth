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
f1();  // Output: I am F1



/*
Example 2: Hoisting in Function Declaration

- Function declarations are fully hoisted.
- This means we can call the function before its definition.
- JavaScript moves the entire function definition to the top during execution.
*/

f1();  // Output: I am F1

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

f2();  // Error: Cannot access 'f2' before initialization

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
f3();  // Output: I am F3



/*
Example 3: Using let (Called before definition)

- Similar behavior to const.
- Cannot access the function before initialization.
- Results in a ReferenceError.
*/

f4();  // Error: Cannot access 'f4' before initialization

let f4 = function () {
    console.log("I am F4");
};



/*
Example 4: Using var (Called before definition)

- Variables declared with var are hoisted.
- But they are initialized as undefined.
- So calling it before assignment gives a TypeError.
*/

f5();  // TypeError: f5 is not a function

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
