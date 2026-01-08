# JavaScript Fundementals

Notes, links, etc. for part 1 section 2. Getting into the language itself and syntax.

## 2.1 Hello, world

*Browsers are simple to run JS scripts, but server-side environments can execute scripts through command (e.g.* `node my.js` *for Node.js) For now, the browser will be our main way to run Javascript scripts.*

In HTML, the `<script>` tag is used to inject JavaScript code. `type` and `langauge` attributes are not required due to the modern HTML standard.

```html
<script> alert("Hello, world!"); </script>

<!-- Non-modern version -->
<script type="text/javascript"> alert("wompwomp"); </script>
```

To insert an external script, the `src` attribute is used, and can be used in different ways:

```html
<script src="/path/to/script.js"></script>

<!-- Full URL to script -->
<script src="/url/of/scripturl.js"></script>

<!-- Multiple tags for multiple scripts -->
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
```

If `src` is used, the inside of the `script` tag won't execute- only the external script:

```html
<script src="/js/script.js">
  alert("am i here?"); // this is ignored because of the 'src' attribute
</script>

<!-- It will work like this when split into two separate tags -->
<script src="/js/script.js>"></script>
<script>
  alert("am i here>?");
</script>
```

The main rule for scripts is to put more complex ones in separate files, very simple ones into HTML. By doing this, the browser takes advantage of caching the file and makes pages faster.

### Exercises

- Create a page that shows a message "I'm JavaScript!"
- Modify the solution above by extracting the script content into an external file `alert.js`.

### Related Files

- helloworld.html
- imjavascript.html
- imjavascript2.html
- js/helloworld.js
- js/alert.js

## 2.2 Code Structure

Building blocks of code is important.

### Statements

Statements are usually separated by a semicolon. They are usually on their own lines to enhance readability.

```js
alert("Hello"); alert("World"); // still works

alert("line 3"); // but this is more readable
alert("line 4");
```

### Semicolons

Semicolons can be omitted for linebreaks, usually. There are some exceptions:

```js
alert("line") // this works
alert("break")

alert("but not this") // but not this
[1, 2].forEach(alert);
```

In the example above (and many absent examples), the engine sees it as:

```js
alert("but not this")[1, 2].forEach(alert);
```

This is because JavaScript does not assume a semicolon before square brackets.

In other words, always use semicolons regardless.

### Comments

These are used to describe what code does and why, or it can be used to temporarily disable parts of code. JavaScript uses `//` for one-line comments and `/* ... */` for multiline comments.

```js
// One-liner

/* Multiliner

Anything in here will be a comment
efefefef

this is disabled
alert("hello");
*/
alert("world"); // but not this
```

Nested comments do not work:

```js
/*
  /* nested comment ?!? */
*/
alert("World");
```

### Related Files

- js/structure.js

## 2.3 The Modern Mode, "use strict"

Before 2009, JavaScript was able to grow with new features without destroying old ones. But that made any imperfect feature stuck in the language forever.

In 2009, ECMAScript 5 (ES5) was released which added new features and modified some of the existing ones. They are enabled using `use strict` at the top of JS scripts:

```js
"use strict";

// this code works the modern way
...
```

### Related Files

- js/usestrict.js

## 2.4 Variables

Variables is a "named storage" for data. We use `let` to declare variables in JavaScript:

```js
let message; // declare it

message = "Hello!"; // then assign it data
```

There are multiple ways to declare variables:

```js
let message = "Hello!"; // declare and assign at the same time

let user = "John", age = 25; // multiple variables in one line

let user2 = "Mary",
  age2 = 25; // this works

let user3 = "Doe"
  , age3 = 25; // and this too
```

You can also declare variables using `var` instead of `let`, but it's the old version. There are subtle differences between them.

Only declare variables once, not twice. Otherwise, it is an error:

```js
let message = "This";

let message = "That"; // SyntaxError: 'message' has already been declared
```

### Variable Naming

Limitations

- The name can only have letters, digits, `$`, or `_`.
- The first character cannot be a digit.

```js
let userName;
let test123;
let $ = 1;
let _ = 2; // these work

let 3four;
let hello-world; // but these don't
```

Cases also matter. `apple` is different from `APPLE`.

There are also reserved names; these are used as keywords in JavaScript. Some examples include `let`, `class`, `return`, and `function`.

```js
let let = 5; // error
```

Without `use strict`, variables can be declared without `let` or `var`. But with it, it would be an error.

```js
"use strict";

num = 5; // error: num is not defined
```

### Constants

Using `const` instead of `let` makes the variable unchangeable:

```js
const myBirthday = "18.04.1982";
```

Trying to change a `const` variable will cause an error. Programmers use it to tell that it is a variable that will never change.

### Naming Practices

Some rules to follow are:

- Use human-readable names like `userName` or `shoppingCart`.
- Limit use of abbreviatios or short names like `a` or `b` unless it's simple.
- Make names descriptive and concise.
- Make related variables name-related like `newUser` and `currentUser`.

### Exercises

*(Note: these are verbatim from the website)*

#### Working with Variables

- Declare two variables: `admin` and `name`.
- Assign the value `"John"` to `name`.
- Copy the value from `name` to `admin`.
- Show the value of `admin` using `alert` (which should output "John").

#### Giving the right name

- Create a variable with the name of our planet. How would you ame such a variable?
- Create a variable to store the name of a current visitor to a website. How would you name that variables?

**Uppercase const?**

Look at this code:

```js
const birthday = '18.04.1982';

const age = someCode(birthday);
```

Here we have a constant `birthday` for the date, and also the `age` constant.

The `age` is calculated from `birthday` using `someCode()`, which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that `age` is calculated somehow based on the `birthday`.

Would it be right to use upper case for `birthday`? For `age`? Or even for both?

```js
const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?
solution
```

### Related Files

- js/variables.js

## 2.5 Data Types

JavaScript has eight basic data types:

- `number`
- `bigint`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `object`

JavaScript is *dynamically typed*, meaning its variables are not bound by a specific data type (use TypeScript for that).

```js
let message = "hello";
message = 123456; // was a string, now a number
```

### Number

The `number` type include integer and floating point numbers.

```js
let n = 123;
n = 12.345;
```

Numbers can perform math operations like `*`, `/`, `+`, and `-`.

There are also special `number` values: `Infinity`, `-Infinity`, and `NaN`.

We can get `Infinity` through division by zero or directly:

```js
alert( 1 / 0 ); // Infinity

alert( Infinity ); // Infinity
```

`NaN` represents a computational error, as a result of an incorrect or an undefined math operation. It is also sticky (any futher math operation on `NaN` returns `NaN`):

```js
alert ( "not a number" / 2 ); // NaN
alert ( NaN + 1 ); // NaN
alert ( 3 * NaN ); // NaN
alert ( "not a number" / 2 - 1 ) // NaN
```

Only exception is `NaN ** 0 = 1`. Regardless, any math is "safe" in JavaScript. The worst the script can result in is `NaN`.

### BigInt

The `number` type cannot represent integers larger than `(2^53-1)`, or less than `-(2^53)`
for negatives.

So, `BigInt` is used to represent these larger numbers, by appending `n` at the end:

```js
const bigInt = 123456789012345678901234567890123456789012345678901234567890n;
```

`BigInt` are seldom used, like in cryptography or microsecond-precision timestamps.

### String

JavaScript strings is surrounded by quotes, either: double quotes, single quotes, or backticks:

```js
let str1 = "Hello";
let str2 = 'World';
let str3 = `I wanted to say ${str1} ${str2}!`;
```

Double quotes and single quotes behave the same, but backticks allow for `${...}` to be used to embed variables/expressions.

### Boolean (logical type)

Booleans can either be `true` or `false`. They can also come as a result of comparisons:

```js
let isCurrentUser = true;
let isOlderThan67 = false;

let isGreater = 6 > 7;
alert ( isGreater ); // false
```

### "null" value

`null` is a special value that does not belong to any of the types above. It essentially means "nothing", "empty" or "value unknown".

Below means `age` is unknown:

```js
let age = null;
```

### "undefined" value

The `undefined` type is similar to `null`, but it means that a "value is not assigned", not nothing/unknown.

```js

let age;
alert(age); // shows "undefined"

age = 100;
alert(age); // age = 100

age = undefined;
alert(age); // shows "undefined" again
```

`undefined` can be assigned but not recommended. `null` is normally used to show empty values, while `undefined` is for default initial values for unassigned things.

### Objects and Symbols

The `object` is different from the other "primitive" types because they contain only a single value. `object` types can contain multiple values.

The `symbol` type is use to create unique identifiers for objects.

### typeof Operator

The `typeof` operator returns the type of the operand, useful for processing values of different types differently or just want to check it.

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object": Math is a built-in object for more math operations

typeof null // "object": this was an error back then and kept for compatibility; it is clearly not an "object"

typeof alert // "function": alert is a function
```

`typeof` can also be written as `typeof(x)`. It is an operator, not a function.

### Exercises

**String quotes**

*(Note: these are verbatim from the website)*

What is the output of the script?

```js
let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
```

### Related Files

- js/datatypes.js
- datatypes.html

## 2.6 Interaction: alert, prompt, confirm

Some functions for user interaction include `alert`, `prompt`, and `confirm`.

### alert

This function (as seen earlier) shows a message and waits for the user to press "OK".

```js
alert("Hello");
```

The small window is called a *modal* window, meaning the user can't interact with the rest of the page, press other buttons, etc., until they have dealt with the window.

### prompt

The function `prompt` accepts two arguments: `title` as text to show the user, and `default` as the initial value for the input field.

```js
result = prompt(title, [default]);
```

A modal window pops up with a text message, an input field, and buttons OK/Cancel. If the user presses OK, `result` will get it. Otherwise, the user can press Cancel or hit the `esc` key to get `null` as the result.

It is recommended to always set a default value.

### confirm

The function `confirm` shows a modal window with a question and two buttons: OK and Cancel. If OK is pressed, then the result is `true` and `false` otherwise.

```js
let result = confirm(question);

let isBoss = confirm("Are you the boss?");

alert ( isBoss ) // true if OK is pressed;
```

### Exercises

*(Note: these are verbatim from the website)*

#### A Simple Page

- Create a web-page that asks for a name and outputs it.

### Related Files

- interactions.html
- js/prompt.js

## 2.7 Type Conversions

Usually, operators and functions automatically convert values to the right type, e.g. `alert` already converts any value to a string to show it.

### String Conversion

This occurs when we output something, done with `String(value)`.

```js
let value = false;
alert (typeof value); // boolean

value = String(value);
alert (typeof value); // string
```

### Numeric Conversion

This occurs in math operations, done with `Number(value)`. The rules are:

- if `undefined`, then `Number(undefined)` becomes `NaN`.
- if `null`, then `Number(null)` becomes `0`.
- if `true/false`, then `Number(true)` becomes `1` and `Number(false)` becomes `0`.
- if `string`, then it is read "as is" and whitespace from both sides are ignored. An empty string becomes `0`, and an error gives `NaN`.

```js
alert( "6" / "2" ); // 3, strings are converted to numbers

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123
alert(typeof num); // num
```

### Boolean Conversion

This occurs in logical operations, done with `Boolean(value)`. The rules are:

- if `0`, `null`, `undefined`, `NaN`, or `""`, then `Boolean(...)` becomes `false`.
- if it is any other value, then `Boolean(...)` becomes `true`.

```js
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // also true
```

## 2.8 Basic Operators, Maths

There are the simple math operations like addition and multiplication, but JavaScript also includes more specific operations.

### Unary, Binary, Operand

*Operand* - what we apply operators to. `5 * 2` has a left operand `5` and a right operand `2`. They can also be called "arguments".

*Unary* - an operator with a single operand.

```js
let x = 1;

x = -x; // -1, unary negation was applied
```

*Binary* - an operator with two operands.

```js
let x = 1, y = 3;
alert( y - x ); // 2
```

### Maths

The supported math operations are:

- Addition `+`,
- Subtraction `-`,
- Multiplication `*`,
- Division `/`,
- Remainder `%`,
- Exponentiation `**`.

#### Remainder %

This operator is the *remainder* of the integer division of `a` by `b`. It is not related to percents.

```js
alert( 5 % 2 ); // 1
alert( 8 % 3 ); // 2
alert( 8 % 4 ); // 0
```

#### Exponentiation **

This operator raises `a` to the power of `b`.

```js
alert( 2 ** 2 ) // 2**2 = 4
alert( 2 ** 3 ) // 2**3 = 8
alert( 4 ** (1/2) ) // 2
alert( 8 ** (1/3) ) // 2
```

### String Concatenation w/Binary +

When `+` is used on strings, it merges them:

```js
let s = "my" + "string";
alert(s); // mystring
```

It will convert non-strings to strings if one of the operands is a string. If there's more than two operands, it will add them from left to right:

```js
alert( '1' + 2 ); // "12"
alert ('1' + 2 + 2 ) // "122" and not "14"
```

It is *not* the same with subtraction and division:

```js
alert( 6 - '2' ); // 4
alert ( '6' / '2' ); // 3
```

### Numeric Conversion, Unary +

When `+` is applied to a single value, it does nothing to numbers. However, it will convert non-numbers to numbers.

```js
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

alert( +true ); // 1
alert( +"" ); // 0
```

Sometimes, we'll have to convert strings to numbers before "operating" them, e.g. HTML form fields as strings.

```js
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23"

alert( +apples + +oranges ); // 5
// this also works: alert( Number(apples) + Numbers(oranges) ); // 5
```

### Operator Precedence

"PEMDAS" applies here, but it's also important to note that unary operators have higher precedence (than binary operators) and assignment has lower precedence (than binary operators).

### Assignment

Assignment `=` is also an operator.

```js
let x = 2 * 2 + 1;
alert( x ); // 5
```

It also returns a value: `x = value` writes the `value` into `x` then returns it. It is not recommended to write like this:

```js
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
```

#### Chaining Assignments

Assignments can be chained where it is evaluated from right to left:

```js
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
```

But due to readability, it's better to split it:

```js
c = 2 + 2;
b = c;
a = c;
```

### Modify-in-place

We can modify the same variable with `+=`, `-=`, etc. for all arithmetical and bitwise operators.

```js
let n = 2;
n += 5; // n = 7
n *= 2; // n = 14

alert( n ); // 14

n * = 1 + 2; // 1 + 2 = 3 * n = 42
```

### Increment/decrement

There are special operators for incrementing and decrementing (variables only):

```js
let counter = 2;

counter++; // adds 1 to counter
alert( counter ); // 3

counter--; // subtracts 1 to counter
alert( counter ); // 2
```

`++` and `--` can be placed before or after a variable.

- `counter++` means it is in "postfix form"
- `++counter` means it is in "prefix form"

The difference is noticed when we use the returned value:

```js
let counter = 1;
let a = ++counter; // a = 2; 'counter' is incremented, then 'a' is assigned the value of 'counter'

counter = 1;
a = counter++; // a = 1; value of 'a' is 'counter', then we increment 'counter'
```

Its precedence is higher than most operations.

### Bitwise Operators

There are bitwise operators that work on the level of numbers' binary representation, not specific to JavaScript:

- AND ( `&` )
- OR ( `|` )
- XOR ( `^` )
- NOT ( `~` )
- LEFT SHIFT ( `<<` )
- RIGHT SHIFT ( `>>` )
- ZERO-FILL RIGHT SHIFT ( `>>>` )

### Comma

This is one of the rarest operators. It is used to evaluate several expressions, but only the result of the last one is returned.

```js
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
```

Here is a good example:

```js
for (a = 1, b = 3, c = a * b; a < 10; a++) {
  ...
}
```

Above, the first two expressions won't be used anyways outside of the comma, but it is still used within for `c`.

### Exercises

#### The postfix and prefix forms

What are the final values of all variables `a`, `b`, `c`, and `d` after code below?

```js
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
```

#### Assignment Result

What are the values `a` and `x` after code below?

```js
let a = 2;

let x = 1 + (a *= 2);
```

#### Type Conversions

What are results of these expressions?

```js
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
```

#### Fix the Addition

Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.

```js
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
```

### Related Files

- js/mathops.js

## 2.9 Comparisons

There are math comparison operators available in JavaScript:

- Greater/less than: `a > b`, `a < b`.
- Greater/less than or equals: `a >= b`, `a <= b`.
- Equals: `a == b` (note two `=`'s).
- Not equals: `a != b`.

### Boolean is the Result

All comparison operators return a boolean value, which can also be stored:

- `true` - means "yes", "correct" or "the truth".
- `false` - means "no", "wrong" or "not the truth".

```js
alert( 2 > 1 ); // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

let result = 5 > 4;
alert( result ); // true
```

### String Comparison

Strings are compared letter-by-letter, lexicographically.

```js
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

For two strings `A` and `B`:

1. Compare the first character of `A` and `B`.
2. If the `A`'s first character is `>`/`<` than `B`'s, then `A` is `>`/`<` than `B`.
3. Otherwise, they are the same, so we compare the next.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

### Comparison of Different Types

JavaScript converts values to numbers for different types:

```js
alert( "2" > 1 ); // true, '2' becomes 2
alert( "01" == 1 ); // true, '01' becomes 1

alert ( true == 1 ); // true
alert ( false == 0 ); // true
```

It is possible to have two equal values but they have different boolean values,
which is due to different `Boolean` conversion rules:

```js
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true
```

### Strict Equality

`===` is used for strict equality **without type conversion**, because `==` will do that first before checking:

```js
alert( 0 == false ); // true
alert( '' == false ); // true

alert( 0 === false ); // false, because types are different
```

Strict non-equality is `!==`.

### Comparison w/null and undefined

With `null` or `undefined`, it's different behavior.

```js
alert( null === undefined ); // false, because different types

alert( null == undefined ); // true, because special rule
```

Here's `null` compared with zero:

```js
alert( null > 0 ); // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
```

Comparisons e.g `>=/>` will convert `null` to 0, whereas `==` will not. That's why (3) is `true` but (2) is not.

Here is `undefined` compared with zero:

```js
alert( undefined > 0 ); // (1) false
alert( undefined < 0 ); // (2) false
alert( undefined == 0 ); // (3) false
```

(1) and (2) convert `undefined` to `NaN`, which returns false for all comparisons. (3) only equals `null`, `undefined`, and no other value.

If a variable may be `null/undefined`, it is better to check for them separately instead of using comparisons.

### Exercises

#### Comparisons

What will be the result for these expressions?

```js
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
```

### Related Files

- js/comparisons.js

## 2.10 Conditional Branching: if, '?'

### The "if" Statement

`if(...)` evaluates the condition in parentheses and executes the code block if `true`.

```js
if (year == 2015) alert( "You are right!" ); // Basic syntax

if (year == 2015) { // Allows >1 statements + more readable
  alert( "That's so correct!" );
  alert( "You're so smart!" );
}
```

### Boolean Conversion

The `if` statement will convert its expression into a boolean result.

```js
if (0) { ... } // 0 is falsy; will always fail

if (1) { ... } // 1 is truthy; will always pass

let cond = (year == 2015);
if (cond) { ... }; // can pass a pre-evaluated boolean as well
```

### The "else" Clause

An `if` statement can have an optional `else` block which executes when the condition is falsy.

```js
let a = 10, b = 0;

if (b > a) { // 0 > 10 ?
  ...
} else { // triggers
  ...
}
```

### Several Conditions: "else if"

A `if` statement can have multiple conditions to check, using `else if`:

```js
let a = 10, b = 0, c = -55;

if (a > 99) {
  alert( "Wrong!" );
} else if (a > b) {
  alert( "Right!" );
} else {
  alert( "idk bro" );
}
```

### Conditional Operator '?'

There is a simpler way to assign a variable based on a yes/no condition, using `?`. It is also called a *ternary* since the expressions takes three operands. Here is the formula:

```js
let result = condition ? value1 : value2;
```

```js
let accessAllowed;
let age = 19;

// 'if' method
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// ternary method
accessAllowed = age > 18 ? true : false;
```

`?` has lower precedence, so we can omit the parentheses (if we want).

### Multiple '?'

Multiple `?`'s can be used, similar to multiple `else if` statements:

```js
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

### Non-traditional Use of '?'

Sometimes, `?` can be used to replace `if`:

```js
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
```

Instead of assigning a value to a variable, we execute a statement based on the condition. However, it is not recommended to do it like this.

### Exercises

#### if (a string with zero)

Will `alert` be shown?

```js
if ("0") {
  alert( 'Hello' );
}
```

#### The name of JavaScript

Using the `if..else` construct, write the code which asks: "What is the *official* name of JavaScript?"

If the visitor enters *ECMAScript*, then output "Right!", otherwise - output: "You don't know? ECMAScript!"

![alt text](assets/img/ifdiagram.png)

#### Show the Sign

Using `if..else`, write the code which gets a number via `prompt` and then shows in `alert`:

- `1`, if the value is greater than zero,
- `-1`, if less than zero,
- `0`, if equals zero.

In this task we assume that the input is always a number.

#### Rewrite 'if' into '?'

Rewrite this `if` using the conditional operator `'?'`:

```js
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
```

#### Rewrite 'if..else' into '?'

Rewrite `if..else` using multiple ternary operators `'?'`.

For readability, it’s recommended to split the code into multiple lines.

```js
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
```

### Related Files

- js/conditionals.js
- conditionals.html

## 2.11 Logical Operators

JavaScript has four logical operators: `||` (OR), `&&` (AND), `!` (NOT), `??` (Nullish Coalescing).

### || (OR)

In an expression with an `||` (OR), if any arguments are true, then the expression returns true, otherwise false.
It is meant to manipulate boolean values only, so non-boolean values are converted first into boolean.

```js
let a = true, b = false;
let result = a || b; // true

// Four possible logical combinations
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0) { // similar to if( true || false )
  alert( "truthy!" );
}
```

The OR `||` operator also finds the first truthy value. If none of the values are truthy, it returns the last value.

```js
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous" );
// If nickName was falsy, then 'Anonymous' would be chosen
```

It is also useful for short-circuit evaluation:

```js
true || alert("not printed");
false || alert("printed");
```

### && (AND)

In an expression with an `&&` (AND), if all arguments all true, then the expression returns true, otherwise false.

```js
let a = true, b = true;
let result = a && b; // true

// Four possible logical combinations
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

if (1 && 0) { // 'true' && 'false'
  alert( "won't work, because the result is falsy" );
}
```

The AND `&&` operator also finds the first falsy value. If none of the values are falsy, it returns the last value.

```js
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3, the last one
```

AND `&&` has higher precedence than OR `||`. Also, do not replace `if` with `||` or `&&`

### ! (NOT)

The NOT operator converts the operand to a boolean then takes the inverse.

```js
let a = true;
let result = !a; // false
```

A double NOT `!!` is used to convert a value to boolean type. The first NOT converts and returns the inverse boolean, and the second NOT inverses it again.

```js
alert( !!"non-empty string" ); // true
alert( !!null ); // false

alert( Boolean("non-empty string") ); // same thing
alert( Boolean(null) );
```

The NOT `!` operator has the highest precedence of all logical operators (before `&&` or `||`).

### Exercises

#### What's the result of OR?

What is the code below going to output?

```js
alert( null || 2 || undefined );
```

#### What's the result of OR'ed alerts?

What will the code below output?

```js
alert( alert(1) || 2 || alert(3) );
```

#### What is the result of AND?

What is this code going to show?

```js
alert( 1 && null && 2 );
```

#### What is the result of AND'ed alerts?

What will this code show?

```js
alert( alert(1) && alert(2) );
```

#### The result of OR AND OR

What will the result be?

```js
alert( null || 2 && 3 || 4 );
```

#### Check the range between

Write an `if` condition to check that `age` is between `14` and `90` inclusively.

“Inclusively” means that `age` can reach the edges `14` or `90`.

#### Check the range outside

Write an `if` condition to check that `age` is NOT between `14` and `90` inclusively.

Create two variants: the first one using NOT `!`, the second one – without it.

#### A question about "if"

Which of these `alert`s are going to execute?

What will the results of the expressions be inside `if(...)`?

```js
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
```

#### Check the login

Write the code which asks for a login with `prompt`.

If the visitor enters `"Admin"`, then `prompt` for a password, if the input is an empty line or *Esc* – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

- If it equals “TheMaster”, then show “Welcome!”,
- Another string – show “Wrong password”,
- For an empty string or cancelled input, show “Canceled”

The schema:

![alt text](assets/img/schema.png)

### Related Files

- js/logicalops.js
- logicalops.html

## 2.12 Nullish Coalescing Operator '??'

When an expression is `a ?? b`, it means:

- if `a` is defined, then `a` is the result.
- if `a` isn't defined, then `b` is the result.

This is just a nice syntax to return the first argument if it is not null/undefined, otherwise the second.

It is similar to this:

```js
result = (a !== null && a !== undefined) ? a : b;
```

The `??` operator has very low precedence, so it's recommended to add parentheses when using it
(thus, forbidden to use it with `||` or `&&` without parentheses.)

## 2.13 Loops: while and for

Loops are used to repeat the same code multiple times.

### The "while" Loop

The `while` loop iterates always while its condition is truthy:

```js
// Syntax
while (condition) {
  // "loop body"
}

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
```

### The "do...while" Loop

The `do..while` loop is similar to the `while` loop but it checks the condition after an iteration.

```js
do {
  // loop body
} while (condition);
```

It is useful if you want to execute the loop body at least once.

### The "for" Loop

The `for` loop looks like this:

```js
for (begin; condition; step) {
  // loop body
}
```

The `begin` executes once at the start. The `condition` is checked before every loop iteration, stopping the loop if false.
The `loop body` runs for the iteration. The `step` executes after each iteration.

Any of the parts can be skipped if you want.

`for` loops are best when you know how much you'll iterate a `loop body` for.

### Breaking the Loop

We can force to exit out of a loop using `break`. It is powerful in infinite loops, e.g. `while(true)`, where you'd want
to exit during the iteration.

```js
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break;
  sum += value;
}
alert( "Sum: " + sum );
```

### Continue to the Next Iteration

Instead of stopping the whole loop with `break`, `continue` can be used to skip the current iteration and starting the next.

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
```

### Labels for break/continue

Labels can be used to break out of nested loops (instead of using a variable).

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`,'');
    if (!input) break outer;

    // do something with the value
  }
}

alert("Done!");
```

Labels do not allow "jumping" to anywhere in the code.

### Exercises

#### Last loop value

What is the last value alerted by this code? Why?

```js
let i = 3;

while (i) {
  alert( i-- );
}
```

#### Which values does the while loop Show?

For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops `alert` the same values, or not?

- The prefix form `++i`:

```js
let i = 0;
while (++i < 5) alert( i );
```

- The postfix form `i++`:

```js
let i = 0;
while (i++ < 5) alert( i );
```

#### Which values get shown by the "for" loop?

For each loop write down which values it is going to show. Then compare with the answer.

Both loops `alert` same values or not?

- The postfix form:

```js
for (let i = 0; i < 5; i++) alert( i );
```

- The prefix form:

```js
for (let i = 0; i < 5; ++i) alert( i );
```

#### Output even numbers in the loop

Use the `for` loop to output even numbers from `2` to `10`.

#### Replace "for" with "while"

Rewrite the code changing the `for` loop to `while` without altering its behavior (the output should stay same).

```js
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
```

#### Repeat until the input is correct

Write a loop which prompts for a number greater than `100`. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than `100` or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

#### Output prime numbers

An integer number greater than `1` is called a *prime* if it cannot be divided without a remainder by anything except `1` and itself.

In other words, `n > 1` is a prime if it can’t be evenly divided by anything except `1` and `n`.

For example, `5` is a prime, because it cannot be divided without a remainder by `2`, `3` and `4`.

**Write the code which outputs prime numbers in the interval from `2` to `n`.**

For `n = 10` the result will be `2,3,5,7`.

P.S. The code should work for any `n`, not be hard-tuned for any fixed value.

### Related Files

- js/loops.js
- loops.html

## 2.14 The "switch" Statement

A `switch` statement can replace multiple `if` checks.

```js
switch(x) {
  case 'value1': // if (x === 'value1')
    ...
    [break]

  case 'value2': // if (x === 'value2')
    ...
    [break]
  
  default:
    ...
    [break]
}
```

It checks strict equality of `x` to each value. If it matches none, then the `default` case runs.
`break` is needed in each case because it runs in succession, into the next case. `break` will *break* out of the switch statement.

We can also group cases:

```js
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```

Types also matter, because it's strict equality:

```js
let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
```

### Exercises

#### Rewrite the "switch" into an "if"

Write the code using `if..else` which would correspond to the following `switch`:

```js
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```

#### Rewrite "if" into "switch"

Rewrite the code below using a single `switch` statement:

```js
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
```

### Related Files

- js/switch.js
- switch.html

## 2.15 Functions

Functions are used to perform repeated actions. `prompt`, `alert`, and `confirm` are examples of functions that we've been using so far.
We make them so we don't have to rewrite the same code.

### Function Declaration

To create a function, we do this:

```js
function name(parameter1, parameter2, ..., parameterN) {
  // body
}

function showMessage() {
  alert("Hello everyone!");
}
```

Then, we can call it whenever we want:

```js
showMessage();
showMessage();
```

### Local Variables

Functions can contain declared variables only visible within itself:

```js
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // "Hello, I'm JavaScript";

alert( message ); // <-- Error! It is a local variable to showMessage()
```

### Outer Variables

Functions can also access outside variables, but only if there is no local variable with the same name:

```js
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable
```

It is good practice to minimize variable "global-ness".

### Parameters

We can pass values through a function for it to use:

```js
function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann
```

### Default Values

A parameter can have a default value if there is no argument passed:

```js
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```

This is also possible:

```js
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
```

### Returning a Value

Functions can also return a value after its execution.

```js
function sum(a, b) {
  return a + b;
}
```

It can have more than one `return` statement, or even return nothing (which *returns* `undefined`):

```js
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission?");
  }
}

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert( "Showing you the movie" );
}
```

Remember to not add a newline for a `return` statement due to JavaScript's implicit semicolons.

### Naming a Function

A function's name should reflect what it does. It should be a verb (usually), brief, and accurate of its function.

```js
// Examples
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
```

A function should also do what its name does i.e. one action only.

### Functions == Comments

If there are multiple actions happening within one function, it is best to separate the other actions into their own functions.

```js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}
```

Instead of the above, it's best like this, for readability and modularity:

```js
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```

### Exercises

#### Is "else" required?

The following function returns `true` if the parameter `age` is greater than `18`.

Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
```

Will the function work different if `else` is removed?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
```

Is there any difference in the behavior of these two variants?

#### Rewrite the function using '?' or '||'

The following function returns `true` if the parameter `age` is greater than `18`.

Otherwise it asks for a confirmation and returns its result.

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```

Rewrite it, to perform the same, but without `if`, in a single line.

Make two variants of `checkAge`:

- Using a question mark operator `?`
- Using OR `||`

#### Function min(a,b)

Write a function `min(a,b)` which returns the least of two numbers `a` and `b`.

For instance:

```js
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```

#### Function pow(x,n)

Write a function `pow(x,n)` that returns `x` in power `n`. Or, in other words, multiplies `x` by itself `n` times and returns the result.

```js
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```

Create a web-page that prompts for `x` and `n`, and then shows the result of `pow(x,n)`.

### Related Files

- js/functions.js
- functions.html

## 2.16 Function Expression

We can create functions in the middle of any expression:

```js
let sayHi = function() {
  alert( "Hello" );
}
```

Function Declarations are processed before the code block is executed, visible everywhere.
Function Expressions are created when the execution flow reaches them.

## 2.17 Arrow Functions, the Basics

Arrow functions are an alternative way to create functions. It accepts arguments, evaluates the right expression with them,
then returns the result.

```js
let func = (arg1, arg2, ..., argN) => expression;

// Example
let sum = (a, b) => a + b;

alert( sum(1, 2) );
```

If there's one argument, then parentheses can be omitted. If there's none, they must be present:

```js
let double = n => n * 2;

let sayHi = () => alert("Hello!");
```

Arrow functions can be multiline, but they must `return` something:

```js
let sum = (a, b) => {
  let result = a + b;
  return result;
}

alert( sum(1, 2) ); // 3
```

### Exercises

#### Rewrite with arrow functions

```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

### Related Files

- js/arrowfunctions.js
- arrowfunctions.html
