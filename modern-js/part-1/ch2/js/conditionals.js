"use strict";

// Task 1

if ("0") { // truthy, because non-empty string
  alert( 'Hello' );
}

// Task 2

let officialName = prompt("What is the official name of JavaScript?", "");

if (officialName === "ECMAScript") {
  alert( "Right!" );
} else {
  alert( "You don't know? \"ECMAScript\"!" );
}

// Task 3

let number = +prompt("Give a number", "");

if (number > 0) {
  alert( 1 );
} else if (number < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

// Task 4

let a = 1, b = 2;
let result = (a + b < 4) ? "Below" : "Over";
alert( `result: ${result}` );

// Task 5

let login = ""
let message = (login == "Employee") ? "Hello" :
  (login == "Director") ? "Greetings" :
  (login == "") ? "No login" :
  "";

alert( message );
