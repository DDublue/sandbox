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

**Working with Variables**

- Declare two variables: `admin` and `name`.
- Assign the value `"John"` to `name`.
- Copy the value from `name` to `admin`.
- Show the value of `admin` using `alert` (which should output "John").

**Giving the right name**

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

**A Simple Page**

- Create a web-page that asks for a name and outputs it.

### Related Files

- interactions.html
- js/prompt.js
