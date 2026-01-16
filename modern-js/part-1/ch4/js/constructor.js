"use strict";

// task 1
alert( "task 1" );

const obj = {};

function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

alert( a == b ); // true

// task 2
alert( "task 2" );

function Calculator() {
  this.a = 0;
  this.b = 0;
  this.read = function() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


// task 3
alert( "task 3" );

function Accumulator(num) {
  this.value = num;
  this.read = function() {
    const x = +prompt("Type a number:", 0);
    this.value += x;
  }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
