"use strict";

// Task 1
alert( "task 1" );

let user = {};

user.name = "John";
alert( user.name );

user.surname = "Smith";
alert( user.surname );

user.name = "Pete";
alert( user );

delete user.name;
alert( user );

// Task 2
alert( "task 2" );

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// Task 3
alert( "task 3" );

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;

for (let name in salaries) {
  sum += salaries[name];
}

alert( sum );


// Task 4
alert( "task 4" );

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof(obj[key]) === "number") {
      obj[key] *= 2;
    }
  }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

for (let key in menu) {
  alert( `${key}: ${menu[key]}` );
}
