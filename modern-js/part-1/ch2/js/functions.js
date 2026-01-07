"use strict";

// Task 1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// No difference

// Task 2
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

function checkAge1(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

function checkAge2(age) {
  return age > 18 || confirm("Did parents allow you?");
}

// Task 3
function min(a, b) {
  return a < b ? a : b;
}

// Task 4
function pow(x, n) {
  let product = 1;
  
  for (let i = 0; i < n; i++) {
    product *= x;
  }

  return product;
}
