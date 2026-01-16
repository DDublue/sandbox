"use strict";

// task 1
alert( "task 1" );

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

// alert( user.ref.name ); // What's the result? -> error

// task 2
alert( "task 2" );

let calculator = {
  a: 0,
  b: 0,
  read() {
    do {
      this.a = +prompt("Enter first number into 'a': ", "");
    } while (isNaN(this.a));

    do {
      this.b = +prompt("Enter second number into 'b': ", "");
    } while (isNaN(this.b));

    return;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// task 3

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
