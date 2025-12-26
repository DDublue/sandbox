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

## 2.3 The Modern Mode, "use strict"

Before 2009, JavaScript was able to grow with new features without destroying old ones. But that made any imperfect feature stuck in the language forever.

In 2009, ECMAScript 5 (ES5) was released which added new features and modified some of the existing ones. They are enabled using `use strict` at the top of JS scripts:

```js
"use strict";

// this code works the modern way
...
```

## 2.4 Variables
