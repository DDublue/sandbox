# Objects: The Basics

Notes, links, etc. for part 1 section 4. Objects and related.

## 4.1 Objects

Objects are used to store keyed collections of all types of data, and it's everywhere. This is an empty object:

```js
let user = new Object(); // "object constructor" syntax
let user = {};
```

### Literals and Properties

We can put properties into `{...}` as "key: value" pairs:

```js
let user = {
  name: "John",
  age: 30
}
```

We can access the values using dot notation. We can add and remove properties too:

```js
alert( user.name ); // John
alert( user.age ); // 30

user.isAdmin = true;
delete user.age;
```

Multiword properties can be added too:

```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true,
}

alert( user.["likes birds"] ); // true
```

### Square Brackets

The square brackets can be used to utilize variables (but not dot notation):

```js
let key = "likes birds";
let key2 = name;
let key3 = age;

alert( user[key] );
alert( user[key2] );
alert( user.key3 ); // undefined
```

### Property Names Limitations

For an object property, it can be any name, even reserved words. Non-strings are automatically convert to strings:

```js
let obj = {
  for: 1,
  let: 2,
  return: 3,
  0: "test", // same as "0": "test"
}
```

There's a special case with the special property, `__proto__`, which can't be set to a non-object value:

```js
let obj = {};
obj.__proto__ = 5;
alert(obj.__proto__); // [object Object] - still an object
```

### Property Existence Test, "in" Operator

We can check a property in an object with two ways (`in` is best recommended):

```js
let user = {
  name: "John",
  age: 30,
};

alert( user.noSuchProperty === undefined ); // true means "no such property"

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

### The "for..in" loop

This loop goes through each key of an object:

```js
for (key in object) {
  // executes the body for each key among object properties
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```

Note: if properties are integer properties, they will be sorted first before being looped through via `for..in`.
Non-integer keys will be listed in creation order:

```js
// Integers

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

// Strings

codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
```

### Exercises

#### Hello, object

Write the code, one line for each action:

1. Create an empty object `user`.
2. Add the property `name` with the value `John`.
3. Add the property `surname` with the value `Smith`.
4. Change the value of the `name` to `Pete`.
5. Remove the property `name` from the object.

#### Check for emptiness

Write the function `isEmpty(obj)` which returns `true` if the object has no properties, `false` otherwise.

Should work like that:

```js
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
```

#### Sum object properties

We have an object storing salaries of our team:

```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```

Write the code to sum all salaries and store in the variable `sum`. Should be `390` in the example above.

If `salaries` is empty, then the result must be `0`.

#### Multiply numeric property values by 2

Create a function `multiplyNumeric(obj)` that multiplies all numeric property values of `obj` by `2`.

For instance:

```js
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```

Please note that `multiplyNumeric` does not need to return anything. It should modify the object in-place.

P.S. Use `typeof` to check for a number here.

### Related Files

- js/objects.js
- objects.html

## 4.2 Object References and Copying


## 4.3 Garbage Collection


## 4.4 Object Methods, "this"


## 4.5 Constructor, Operator "new"


## 4.6 Optional Chaining '?.'


## 4.7 Symbol Type


## 4.8 Object to Primitive Conversion

