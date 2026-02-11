let d1 = new Date();
let d2 = new Date('2025-05-20');
let d3 = new Date(2025, 4, 20);
// console.log(d1);// 2026-02-11T17:44:17.231Z
// console.log(d2);// 2025-05-20T00:00:00.000Z
console.log(d3);// 2025-05-19T18:30:00.000Z

// console.log(d1.getFullYear()); // 2026
// console.log(d1.getMonth()); // 1 [---means february 0 based indexing-----]
// console.log(d1.getDate()); // 11 [---actual date-----]
// console.log(d1.getDay()); // 3 [----wednesday---]
// console.log(d1.getTime());
// console.log(d1.getHours());
// console.log(d1.getMinutes());
// console.log(d1.getSeconds());

// let seconds = d1.getTime()/1000;
// console.log("Seconds: ", seconds);

// let second_integer = Math.trunc(d1.getTime()/1000);
// console.log("Seconds-integer: ",second_integer);

// let minutes = Math.trunc(d1.getTime()/1000/60);
// console.log("Minutes: ", minutes)

// let hours = Math.trunc(d1.getTime()/1000/60/60);
// console.log("Hours: ", hours);

// let days = Math.trunc(d1.getTime()/1000/60/60/24);
// console.log("Days: ", days);

d3.setFullYear(2026);
d3.setMonth(1);
d3.setDate(11);

// console.log(d3.getDay(), d3.toDateString());

d3.setHours(10);
d3.setMinutes(45);

// console.log(d3.toDateString());
// console.log(d3.toTimeString());

// console.log(d1.toLocaleString());
// console.log(d1.toLocaleDateString());

console.log(d1.toLocaleString('default',
    {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }
))