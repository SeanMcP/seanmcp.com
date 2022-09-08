---
title: Arguments or parameters?
description: An attempt to remember the difference between the two
date: 2019-07-30
tags:
  - programming
verse: Proverbs 4:13
---

I have a hard time remembering the difference between two common programming terms: arguments, and parameters.

This simple inability leads to real insecurity when I speak with coworkers with more education and experience. Nothing inspires imposter syndrome in a more than not remembering the fundamentals!

Here is the difference between the two similar terms:

## Arguments

Arguments are the data passed to a function. Think of something simple like `console.log()`. In order to get a message written to the console, you need to pass it some information.

```js
console.log('One', 2, false, null)
```

Every bit of information that you pass to a function is an argument. In the above example, we are assigning four arguments to `console.log()`: `"One"`, `2`, `false`, and `null`.

## Parameters

Parameters are the data that a function is expecting. Let's say you have a function that takes two numbers and returns the sum. It will look something like this:

```js
function sum(a, b) {
  return a + b
}
```

The variables that a function is expecting are its parameters. In our `sum()` function, we are expecting two parameters: `a`, and `b`.

## Remembering the difference

I've been wracking my brain for a [mnemonic device](https://en.wikipedia.org/wiki/Mnemonic) for remembering the difference, but have yet to come up with a great one. In the meantime, this will have to do:

> **Arguments** are data you **assign** to a function, while **parameters** are variables that the function is **prepared** to accept.

If I hear of or come up with a better one, I'll update this article.

I hope that helps!
