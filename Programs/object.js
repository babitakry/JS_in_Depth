const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.
// console.log(o2); // { b: 2 }
// console.log(o3); // { c: 3 }


// 4. mergeDailySpecials(regularMenu, specialsMenu)
//  *      - Spread operator {...regularMenu, ...specialsMenu} se merge karo
//  *      - specialsMenu ki values override karengi agar same key ho
//  *      - Return: NEW merged object
//  *      - Agar koi bhi object nahi hai, usse empty {} maan lo
//  *      - Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
//  *                 => {meetha:40, chocolate:60}

const regularMenu = {
    meetha: 30
}

const specialsMenu = {
    chocolate: 60, 
    meetha: 40
}

function mergeDailySpecials(regularMenu, specialsMenu) {
    if( typeof regularMenu !== "object"){
        regularMenu = {};
    }
    else if(typeof specialsMenu !== "object"){
        specialsMenu = {};
    }
    return  {...regularMenu, ...specialsMenu};
}

// console.log(mergeDailySpecials(regularMenu, specialsMenu)); //{ meetha: 40, chocolate: 60 }
// console.log(Array.isArray("Ravi")); // false





// ------------- OBJECT BASICS ---------------------