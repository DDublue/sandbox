"use strict";

// Task 1

let a = 1, b = 1;

let c = ++a; // a = 2, c = 2
let d = b++; // b = 2, d = 1

console.log(`a,b,c,d = ${a},${b},${c},${d}`)

// Task 2

a = 2;

let x = 1 + (a *= 2); // a = 4, x = 5

console.log(`a,x = ${a},${x}`)

// Task 3

console.log("" + 1 + 0) // "10"
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // "9px"
console.log("$" + 4 + 5) // "$45"
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log("  -9  " + 5) // "  -9  5"
console.log("  -9  " - 5) // -14
console.log(null + 1) // 1
console.log(undefined + 1) // NaN
console.log(" \t \n" - 2) // -2

// Task 4

a = prompt("First number?", 1);
b = prompt("Second number?", 2);

alert(a + b); // 12

// Fix:

alert( +a + +b); // 3
