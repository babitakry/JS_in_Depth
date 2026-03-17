// suppose f1(), f2(), f3(), f4() is a method of web api like setTimeout().


//#region //*=============== ${1} ===============

// Ex-1
f1(function(value1){
    f2(value1, function(value2){
        f3(value2, function(value3){
            f4(value3, function(value4){
                console.log("All Done");
            })
        })
    })
})

function step1(value1){
    f2(value1, step2);
}

function step2(value2){
    f3(value2, step3);
}

function step3(value3){
    f4(value3, step4);
}

function step4(value4){
    console.log("All Done");
}

//#endregion // *=============== ${1} ===============
//-------------------------------------------------------------------------------------------------------

//#region // *=============== ${1} ===============

// Ex-2
function task1(callback) {
    setTimeout(() => {
        console.log("Task One completed");
        callback();
    },);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task Two completed");
        callback();
    },);
}

task1(function () {
    task2(function () {
        console.log("Both tasks completed");
    });
});

//#endregion // *=============== ${1} ===============
