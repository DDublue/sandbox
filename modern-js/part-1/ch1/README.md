# An Introduction

Notes, links, etc. for part 1 section 1. All about JavaScript lore and nuances.

## 1.1 An Introduction to JavaScript

JavaScript programs are *scripts*, provided and executed as plain text. They do not need prep or compiling to run.

### Engines

The language can execute on the browser and on the server i.e. JS-supported engines.

- Browsers have an embedded engine with their own codename (V8 in Chrome, SpiderMonkey in Firefox).
- Engine's basic flow: parses the script, converts the script to machine code, then the machine code runs. (*It also optimizes during each process*)

### Cans and Cannots

JavaScript is a "safe" language with no low-level access to memory or the CPU. It's dependent on its current environment e.g. Node.js.

It can:

- Manipulate webpages
- Interact with the user
- Interact with the webserver

JavaScript is limited to protect the user's safety e.g. can't access provide info or harm user data.

It can't (for example):

- Have direct access to OS functions
- Allow different windows to know about each other unless granted permission (*Same Origin Policy*)
- Allow immediate communication over the net unless agreed by the remote side

### Uniqueness

JavaScript allows for full integration with HTML/CSS, supported by all major browsers, and allows things to be done simply. That's why it's the most adopted for browsers.

### Other Languages

Derivatives of/alternatives to JavaScript have been created to suit different syntax needs, e.g. TypeScript for type safety or Brython for transpiling Python to JavaScript without needing to write any JavaScript.

## 1.2 Manuals and Specifications

There are other resources besides this guide:

- [ECMA-262 specification](https://ecma-international.org/publications-and-standards/standards/ecma-262/) - most detailed, formal information about JavaScript
- [MDN (Mozilla) JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) - main manual with examples; contains in-depth info about functions, methods, etc.
- [caniuse.com](https://caniuse.com/) - per-feature tables of support
- [kangax.github.io/compat-table](https://kangax.github.io/compat-table) - table w/language features and engine, supported or not

## 1.3 Code Editors

All programmers will spend most of their time here. Either, they will use an IDE or a lightweight editor.

### IDE (Integrated Development Environment)

IDEs are powerful editors, allowing for full-scale development. It loads the project with easy file navigation alongside autocompletion, version management (git), testing, etc.

[Visual Studio Code](https://code.visualstudio.com/) is what everyone mostly uses. It is different from [Visual Studio](https://visualstudio.microsoft.com/).

### Lightweight Editor

These are less powerful but simpler code editors used to mainly open and edit files. It is faster for single file editing.

Some of these include, [Sublime Text](https://www.sublimetext.com/download), [Notepad++](https://notepad-plus-plus.org/downloads/), [Vim](https://www.vim.org/download.php), or [Emacs](https://www.gnu.org/software/emacs/download.html).

## 1.4 Developer Console

Browsers have embedded developer tools that developers find useful. Chrome and Firefox have the best ones.

Pressing `F12` in [here](https://javascript.info/article/devtools/bug.html) and going to the console, it should look like this (for Chrome): 

![alt text](assets/img/bug.png)

Other browsers should be similar.
