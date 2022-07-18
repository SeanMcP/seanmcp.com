---
title: How to replace Math.random with crypto in JavaScript
description: A drop-in replacement for Math.random that generates
  cryptographically strong random values
date: 2022-07-18T18:15:00.707Z
tags:
  - javascript
verse: Proverbs 16:33
---
 JavaScript has a method for generating random numbers from 0 to less than 1: `Math.random()`. If you've ever been working on an app that selects a random item from a list, chances are that you've done something like this:

```js
const randomItem = list[
    Math.floor(Math.random() * list.length)
]
```

This will probably work for 99% of the use cases of a random number. However, numbers generated from `Math.random` are **not** cryptographically secure. That means that the "random" values are guessable by a computer and therefore not suitable for use in cryptography.

Thankfully, we have other methods of generating random numbers in the browser: `crypto`. [This global object has a `getRandomValues` method](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) that we can use to recreate the functionality above. The method needs to be called with an typed array, so we'll create one with the `Uint8Array` constructor with a length of 1:

```js
const typedArray = new Uint8Array(1)
```

Now we pass this to `getRandomValues` and select the first (and only) item from the returned array.

```js/1
const typedArray = new Uint8Array(1)
const randomValue = crypto.getRandomValues(typedArray)[0]
// E.g. 122
```

Since we used an `Uint8Array`, all of the numbers generated will from 0 to 255. To convert that into the same float returned from `Math.random`, we need to divide the value by the total number of possible numbers: 256 or 2<sup>8</sup>.

```js/2
const typedArray = new Uint8Array(1)
const randomValue = crypto.getRandomValues(typedArray)[0]
const randomFloat = randomValue / Math.pow(2, 8)
// E.g. 0.4765625
```

With these steps in place, we can create a function that is a drop-in replacement for `Math.random` called `cryptoRandom`.

```js
function cryptoRandom() {
    const typedArray = new Uint8Array(1)
    const randomValue = crypto.getRandomValues(typedArray)[0]
    const randomFloat = randomValue / Math.pow(2, 8)
    return randomFloat
}
```

A few things to note:
1. **You'll (probably) never need this**. Reach for `Math.random` unless you have a very specific reason for cryptographic security.
2. **The floats from this method are shorter**. `Math.random` pretty consistently returns floats that are 10+ decimal places long. If you are depending on a long tail of numbers, then consider switching to `Uint32Array` and dividing by `Math.pow(2, 32)`.
3. **I'm not a security expert**. All of the information in this article was from a quick Google search; make sure to consult people who know what they're talking about before copying and pasting code from a random website.

I hope that helps and as always: let me know if you have any corrections to the article.

Happy randomizing!