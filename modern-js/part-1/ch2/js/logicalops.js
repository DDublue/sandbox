"use strict";

// Task 1
alert( null || 2 || undefined ); // 2

// Task 2
alert( alert(1) || 2 || alert(3) ); // 1, 2

// Task 3
alert( 1 && null && 2 ); // null

// Task 4
alert( alert(1) && alert(2) ); // 1, undefined

// Task 5
alert( null || 2 && 3 || 4 ); // 3

// Task 6
let age = +prompt("What is your age?", "");

if (age >= 14 && age <= 90) {
  alert( "You ain't a kid no more!" );
}

// Task 7
age = +prompt("What is your age again?", "");

if (!(age >= 14 && age <= 90)) {
  alert( "You old as hell...or young like a duck!" );
}

if (age < 14 || age > 90) {
  alert( "Sorry, I gotta repeat myself: you old as hell...or young like a duck!" );
}

// Task 8
if (-1 || 0) alert( 'first' ); // "first"
if (-1 && 0) alert( 'second' ); // condition falsy
if (null || -1 && 1) alert( 'third' ); // "third"

// Task 9
let login, password;

login = prompt("Who's there?", "");
if (!login) {
  alert( "Canceled" );
} else if (login !== "Admin") {
  alert( "I don't know you" );
}

password = prompt("Password please.", "");
if (!password) {
  alert( "Canceled" );
} else if (password !== "TheMaster") {
  alert( "Wrong password" );
}
alert("Welcome!");
