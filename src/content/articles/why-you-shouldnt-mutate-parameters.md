---
title: Why you shouldn't mutate parameters
description: This is a WIP that I probably will never finish.
pubDate: 2020-08-05
tags:
  - JavaScript
  - WIP
image:
---

<!-- https://repl.it/@SeanMcP/why-you-shouldnt-mutate-parameters -->

When you pass an argument to a function, you can then access it as a parameter within the function.

## Value arguments

When you pass a value argument like `2`, `true`, or `hello`, you have access to that value within the function. As a result, you can mutate it like so:

```js
function double(number) {
  number = number * 2;
  return number;
}

double(2); // 4
```

1. A **value**, or
2. A **reference** to a value?

<!-- ## Values and references

When you declare a variable in JavaScript, you are doing two things: 1) storing a value in memory, and 2) creating a reference to that value. Take the following code:

```js
let name = 'sean'
```

With this expression, I am storing the string `'sean'` in memory, and then creating the variable `name` that references that value. -->

## Mutating parameters

When you pass a variable as an argument, you are handing a _reference_ to the function – not a value. So when the function references its parameter, JavaScript traces the reference chain to the stored value.

Let's look at an example:

```js
let colors = ["red", "orange", "yellow", "green"];

let warmColors = remove(colors, 3); // 'green' is not a warm color

function remove(array, index) {
  // 🎗 Remember: [] === [] is false
  console.log(array === colors);
}
```

What would you expect the console output to be? You might be surprised to see that the log is `true`. That's because we passed a _reference to_ `colors` and **not** the value.

So if we go on to mutate the `array` parameter, we will make changes to the value that it **and** `colors` reference:

```js
let colors = ["red", "orange", "yellow", "green"];

let warmColors = remove(colors, 3);

function remove(array, index) {
  array.splice(index);
  return array;
}

console.log(colors);
console.log(warmColors);
```

The log after running our `remove()` function shows that `colors` has been modified:

```shell
[ 'red', 'orange', 'yellow' ]
[ 'red', 'orange', 'yellow' ]
```
