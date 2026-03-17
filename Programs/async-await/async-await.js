// function f1(){
//     console.log("I am a normal functioin");
// }
// f1();

// -----------------------------------------------------------------------------------
// NOTE:- ASYNC METHOD always return a promise;

// let p1 = async function f1(){
//     console.log("I am a normal functioin");
// }
// f1(); // ReferenceError: f1 is not defined

// Solution: Since the above one is function expression and we call this function out of the given 
// function expression only by the p1(). So, why the name f1 is used in this function expression ???.........
// To recursively call the f1 method 

// let p1 = async function f1() {
//     console.log("I am a normal function");
//     f1();
// }

// -----------------------------------------------------------------------------------
// let p1 = async function f1() {
//     console.log("I am a normal function");
// }
// p1();  //I am a normal function

// // -----------------------------------------------------------------------------------
// function someAPI1() {
//     let p1 = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log("Mein Promise 1 Hun");
//             let x = Math.round(Math.random() * 10 + 1);
//             if (x % 2 == 0) {
//                 resolve(x);
//             }
//             else {
//                 reject(x);
//             }
//         }, 5000);

//     });
//     return p1;
// }

// function someAPI2() {
//     let p2 = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log("Mein Promise 2 Hun");
//             let x = Math.round(Math.random() * 10 + 1);
//             if (x % 2 == 0) {
//                 resolve(x);
//             }
//             else {
//                 reject(x);
//             }
//         }, 3000);

//     });

//     return p2;
// }

// async function f1() {
//     console.log("I am a normal function");
//     await someAPI1();
//     await someAPI2();
// }
// let p1 = f1();

// -----------------------------------------------------------------------------------
function someAPI1() {
    let p1 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Mein Promise 1 Hun");
            let x = Math.round(Math.random() * 10 + 1);
            if (x % 2 == 0) {
                resolve(x);
            }
            else {
                reject(x);
            }
        }, 5000);

    });
    return p1;
}

function someAPI2() {
    let p2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Mein Promise 2 Hun");
            let x = Math.round(Math.random() * 10 + 1);
            if (x % 2 == 0) {
                resolve(x);
            }
            else {
                reject(x);
            }
        }, 3000);

    });

    return p2;
}

async function f1() {
    console.log("I am a normal function");
    await someAPI1()
        .then((result) => {
            console.log("Promise Fulfilled " + result);
        }, (error) => {
            console.log("Promise Rejected " + error);
        })
    await someAPI2()
        .then((result) => {
            console.log("Promise Fulfilled " + result);
        }, (error) => {
            console.log("Promise Rejected " + error);
        })
}
let p1 = f1();