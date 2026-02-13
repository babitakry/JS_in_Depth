// ---- 1. compound assignment operator || compound concatenation operator
let a = "abc";
let b = "def";
a += b;
// console.log(a);

// ----- 2. typeof operator ----------
let s = "MySirG";
// console.log(typeof s); //string

let arr = [10, 20, 30];
// console.log(typeof arr); //object
// console.log(Array.isArray(arr)); //true
// console.log(arr instanceof Array); //true
// console.log(arr instanceof Object); //true

// --------- 3. in operator ----------------
let p1 = {
    name: 'Sujata',
    age: 22
};
// console.log('name' in p1); // true

// -------- 4. delete operator -----------------
// let p2 = {
//     name: 'Sujata', 
//     age: 24
// }
// console.log(p2);
// delete p2.age;
// console.log(p2);

// let arr1 = [10, 20,  , 40, 50];
// console.log(arr1);
// delete arr1[0];
// console.log(arr1);

// ---------- 5. Conditional Operator -----------

// let x = 5;
// let y = x > 0 ? "Positive" : "Non Positive";
// console.log(y);

// --------- 6. comma operator (,) ----------
let a1 = (1, 2, 3, 10);
// console.log(a1);

// ------- 7. Spread Operator (...) ---------

// Ex-1
// let a2 = [10, 20, 30];
// let b2 = [...a2];
// console.log(b2); // 10, 20, 30

// let c2 = [...a2, 40, 50];
// console.log(c2); // 10, 20, 30, 40, 50

// let d2 = [40, 50 , ...a2];
// console.log(d2); // 40, 50, 10, 20, 30

// let e2 = [...a2, 40, 50 , ...a2];
// console.log(e2); // 10, 20, 30, 40, 50, 10, 20, 30

// Ex-2
// function f1(x, y , z){
//     return x + y + z;
// }

// let a3 = [10, 20, 30];

// console.log(f1(a3[0], a3[1], a3[2]));

// console.log(f1(...a3));

// Ex-3
// let p2 = {
//     name: 'saurabh',
//     age: 25
// }
// let p3 = {
//     ...p2, 
//     city: 'bhopal'
// }

// console.log(p2);
// console.log(p3);


// ------- 8. Nullish Operator ( ?? ) -----------
let n1 = 35;
let n2 = 'kuchh bhi';
let n3;

// if(n1 === null || n2 === undefined)
//     n3 = n2;
// else
//     n3 = n1;
// console.log(n3);

n3 = n1 ?? n2;
// console.log(n3);

// ------- 9. Optional Chaining Operator (?.) ------------
// Ex-1
let o1 = {
    name: 'saurabh',
    age: 25,
    address: {
        firstline: 'flat no 31',
        secondline: 'RSS Market',
        city: 'Bhopal',
        pin: 345678
    },
    greet(){
        return 'Hello';
    }
};

// console.log(o1.address.city); // Bhopal [--------this is wrong way to access --------]
// console.log(o1?.address?.city); // Bhopal [-----Right way to access -------]
// console.log(o1?.greet?.()); // Hello [---Right way to access -------]

// Ex-2
let o2 = {
    name: 'saurabh',
    age: 25,
    greet(){
        return 'Hello';
    }
};
// console.log(o2.address);// undefined
// console.log(o2?.address);// undefined

// console.log(o2?.address?.city);// undefined
// console.log(o2?.address.city);// error
// console.log(o2?.address.pin); // error
// console.log(o2?.address?.pin); // undefined


// Ex-3
let arr2 = null;
// console.log(arr2?.[0]); //undefined
// console.log(arr2?.[4]); //undefined
// console.log(arr2[4]); //error 

let arr3 = [10, 20, 30];
// console.log(arr3[3]); //undefined
// console.log(arr3?.[3]); //undefined