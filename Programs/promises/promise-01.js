// // Producer Code
// let p1 = new Promise(function(){
//     console.log("Mein Promise Hun");
// });

// // console.log(p1);
//----------------------------------------------------------------------------------------

// Producer Code [Assume Razorpay payement gateway api]
function someAPI() {
    let p1 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Mein Promise Hun");
            let x = Math.round(Math.random()*10+1);
            if (x % 2 == 0) {
                resolve(x);
            }
            else {
                reject(x);
            }
        }, 3000);

    });

    return p1;
}
// console.log(p1);

// Consumer Code
let p1 = someAPI();
p1.then((result) => {
    console.log("Promise Fulfilled "+result);
}, (error) => {
    console.log("Promise Rejected "+error);
});

// when reject only then it runs
p1.catch(() => {
    console.log("In Catch");
});

