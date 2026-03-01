// // Ex-1
// // Producer Code
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
//             let x = Math.round(Math.random()*10+1);
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
// // console.log(p1);

// // Consumer Code [here p1 and p2 are two independent asynchronous api running]
// let p1 = someAPI1(); // weather api
// let p2 = someAPI2(); // gold rate 


// p1.then((result) => {
//     console.log("Promise Fulfilled " + result);
// }, (error) => {
//     console.log("Promise Rejected " + error);
// });

// p2.then((result) => {
//     console.log("Promise Fulfilled " + result);
// }, (error) => {
//     console.log("Promise Rejected " + error);
// });


// Ex-2
// Producer Code
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
// console.log(p1);

// Consumer Code [here p1 and p2 are two independent asynchronous api running]

// // looks very complicated
// let p1 = someAPI1();

// p1.then((result) => {
//     console.log("Promise Fulfilled " + result);
//     let p2 = someAPI2();
//     p2.then((result) => {
//         console.log("Promise Fulfilled " + result);
//     }, (error) => {
//         console.log("Promise Rejected " + error);
//     });
// }, (error) => {
//     console.log("Promise Rejected " + error);
// });


// // slightly better than above one
// someAPI1().then((result) => {
//     console.log("Promise Fulfilled " + result);
//     someAPI2().then((result) => {
//         console.log("Promise Fulfilled " + result);
//     }, (error) => {
//         console.log("Promise Rejected " + error);
//     });
// }, (error) => {
//     console.log("Promise Rejected " + error);
// });

// -------------- Promise Chaining ---------------------------------------------------
// best way [ function call cascading f1().f2().f3().f4() ]
someAPI1()
    .then((result) => {
        console.log("Promise Fulfilled " + result);
        return someAPI2();
    }, (error) => {
        console.log("Promise Rejected " + error);
    })
    .then((result) => {
        console.log("Promise Fulfilled " + result);
    }, (error) => {
        console.log("Promise Rejected " + error);
    });
