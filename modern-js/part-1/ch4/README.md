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

When copying values, it is different for objects vs. primitives e.g. strings. For example:

```js
let message = "Hello!";
let phrase = message;
```

Both `message` and `phrase` store their own copy of `"Hello!"`.

However, with objects, it stores by reference. So, when one variable tries to "copy" another variable
that stores an object, it is actually pointing to that same object instead of having its own copy.

```js
let user = { name: "John" };

let admin = user; // 'admin' points to the same object as 'user'; there's still only one object existing
```

This is what it looks like under the hood:

![alt text](assets/img/objref.png)

### Comparison by Reference

Two objects are equal only if they are the same object. Different objects will
obviously be not equal.

```js
let a = {};
let b = a;

alert( a == b );
alert( a === b ); // true, both variables reference the same object

let c = {};

alert( a == c ); // false, they both reference their own independent objects
```

`const` variables with objects can still be modified because it only keeps the
variable `const` to that object. The insides are still changeable.

```js
const user = {
  name: "John"
}

user.name = "Pete";

alert(user.name); // Pete
```

### Cloning and Merging, Object.assign

We can clone new objects in a certain way:

```js
let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}
```

Above, `user` and `clone` are now independent objects and do not affect each other.

We can also use the method `Object.assign` by:

```js
Object.assign(dest, ...sources);
```

It copies the properties of all source objects into the target `dest`, and then returns
it as the result.

For example:

```js
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30
```

### Nested Cloning

So far, we have only talked about primitive properties. But what about properties that are
objects?

If we try to copy, we will see that nested objects will be shared even though there'd be
independent outer objects:

```js
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  },
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object
```

To fix nested object cloning, we can call `structuredClone(object)`, which will clone `object`
will all nested properties:

```js
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects
```

`structuredClone(object)` can clone most data types like objects and aarays as well as circular
references.

However, it cannot clone function properties:

```js
// error
structuredClone({
  f: function() {}
});
```

## 4.3 Garbage Collection

Memory management in JavaScript is automatically. The "garbage collection" will remove any unwanted data/variables/etc.
whenever it's not used anymore.

The main points are:

- Garbage collection is automatic. It cannot be forced or prevented.
- Objects are retained in memory while they are reachable.
- Being referenced is not the same as being reachable (from a root).

## 4.4 Object Methods, "this"

Objects can have methods, to be run when called. For example:

```js

```

## 4.5 Constructor, Operator "new"


## 4.6 Optional Chaining '?.'


## 4.7 Symbol Type


## 4.8 Object to Primitive Conversion

