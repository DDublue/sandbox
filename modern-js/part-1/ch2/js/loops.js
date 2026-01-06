"use strict";

// Task 1
alert("task 1");
let i = 3;

while (i) {
  alert( i-- ); // 3, 2, 1
}

// Task 2
alert("task 2");
i = 0;
while (++i < 5) alert( i ); // 1, 2, 3, 4

i = 0;
while (i++ < 5) alert( i ); // 1, 2, 3, 4, 5

// Task 3
alert("task 3");
for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4

// Task 4
alert("task 4");
for (let n = 2; n < 11; n += 2) alert( n ); // 2, 4, 6, 8, 10


// Task 5
alert("task 5");
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

i = 0
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

// Task 6
alert("task 6");

let num;
do {
  num = +prompt("Enter a number greater than 100", "");
} while (!num || num <= 100);

// Task 7
alert("task 7");

do {
  num = +prompt("Enter a number greater than 1", "");
} while (!num || num <= 1);

outer: for (let i = 2; i < num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue outer;
  }
  alert( i );
}
