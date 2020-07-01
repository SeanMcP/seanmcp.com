---
title: Await multiple promises in JavaScript
description: By calling your asynchronous functions before awaiting, you can save valuable time in your JavaScript programs
date: 2020-06-17
tags:
    - javascript
    - promises
    - await
verse: Isaiah 40:31
---

Let's say I have two promises: the former resolves in three seconds, while the latter resolves in five. I need to wait for both of these before moving on to the next code block.

Depending on how you structure your promises, you will either have to wait five seconds or eight seconds before moving on.

**What is the best way to await multiple promises?**

## Await happy

My first instinct in the above scenario was to use to await both promises. `await` is such a useful keyword in modern JS, that I tend to throw it places without a second thought:

```js
await promiseOne() // Resolves in three seconds
await promiseTwo() // Resolves in five seconds

console.log('done')
```

This looks neat and clean, but how long will it take to resolve? **8 seconds**.

Look back at the first line. We're asking the JavaScript engine to await the resolution of `promiseOne`. In effect, we're asking it to twiddle its thumbs for three seconds while we wait on the promise.

When the first resolves, then JavaScript quickly moves on to the next promise. After waiting for five seconds, it moves on to the log. 3 seconds + 5 seconds = 8 seconds.

Can we reduce that wait time by refactoring?

## Call then await

Instead of reaching straight for `await`, let's think this through: we want to **start** both promises, **then wait** for their resolution. So let's change it up:

```js
const promiseOnePromise = promiseOne()
const promiseTwoPromise = promiseOne()

await promiseOnePromise
await promiseTwoPromise

console.log('done')
```

How long will it take this code to resolve? **5 seconds** (roughly).

By calling the functions that return promises initially, we are "starting the timer" for both. So the three-second and five-second promises are resolving in tandem.

When we `await` **after calling the promises**, we'll only wait as long as the slowest promise: five seconds in this case.

This is great, but there is one more solution that might be easier.

## Promise.all

The `Promise` object has an `all` method that accepts any number of promises and resolves when all have been fulfilled. We just need to pass it an iterable like an array:

```js
await Promise.all([promiseOne(), promiseTwo()])

console.log('done')
```

This functions in a similar manner to the previous "call then await" example but is more succinct. In my tests, it was fractions of a millisecond slower, but your mileage may vary.

## Live example

You can view a [live example of this code on Repl](https://repl.it/@SeanMcP/await-multiple-promises):

<iframe height="500px" width="100%" src="https://repl.it/@SeanMcP/await-multiple-promises?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Conclusion

There we go! Two solutions for how to await multiple promises in JavaScript. Hope that helped!

Happy coding!