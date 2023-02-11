---
title: "What default parameters do (and don't do)"
description: Correcting my mental model
pubDate: 2020-01-13
tags:
  - JavaScript
verse: Micah 7:8
---

Default parameters are a handy feature in JavaScript. [MDN has a more thorough explanation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), but imagine a function that greets a user:

```js
function greetUser(name) {
  return `Hello ${name}!`;
}
```

When we call our function and pass a name, we get the expected log:

```js
greetUser("Abby");
// Hello Abby!
```

But what about when we don't pass a name? **Quiz time**: What is going to log?

```js
greetUser();
// Hello undefined!
```

Is that what you expected? Since we passed no argument, the `name` parameter is `undefined`.

JavaScript — ever the helpful friend — sees that we want to include that value in a string, so it [coerces it into the correct type](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion), and then logs it.

You probably don't want your function to return `Hello undefined!`, so let's try a default parameter.

## What default parameters do

Add the following to the declaration line of `greetUser()`:

<!-- ```js/0 -->
```js
function greetUser(name = "there") {
    return `Hello ${name}!`
}
```

Now we're saying to our function, "if you don't receive an argument, set the value of the `name` parameter to be `"there"`." When we call our function and pass an argument, we get the same result:

```js
greetUser("Abby");
// Hello Abby!
```

However, when we call this updated function without passing an argument, the default parameter kicks in:

```js
greetUser();
// Hello there!
```

Bingo! Now if our function is called without an argument, then the resulting log still makes sense.

In this situation, the default parameter is working as a fallback value. This is probably the most common use case. But you will also find default parameters useful to reduce existential checking.

### Reduce checks

Imagine a user object with a `name` key that we want to log. In order to update our original function to handle this use case, I might do something like this:

```js
function greetUser(user) {
  if (user && user.name) {
    console.log(`Hello ${user.name}!`);
  } else {
    console.log("Hello there!");
  }
}
```

You can imagine the complexity of this dive check growing with the size of the user object. Instead, we can save ourselves some trouble by defaulting that parameter to something that we can use right away:

<!-- ```js/0 -->
```js
function greetUser(user = { name: 'there' }) {
    console.log(`Hello ${user.name}!`)
}
```

We set the default value of the `user` parameter to be an object with a `name` key that we could access.

I use this pattern often; default props make it easier to see what types and shapes of arguments that any given function or component is expecting.

## What default parameters don't do

**A parameter will only default to a given value if it the argument passed is `undefined`**. So either no argument is passed, or the function specifically receives `undefined` as an argument.

When I first learned about default parameters, I developed the wrong mental model — associating them with falsy values in JavaScript. My incorrect thinking went like this:

> When ever I pass an argument that evaluates to false, the default parameter will kick in and save me from errors!
> <br>— Sean, being wrong

I ran into this problem at work when I expected a function to return the default parameter when passed a `null` argument.

```js
function favoriteAnimal(animal = "wolf") {
  console.log("Favorite animal:", animal);
}

favoriteAnimal("manatee");
// Favorite animal: manatee

favoriteAnimal();
// Favorite animal: wolf

favoriteAnimal(null);
// Favorite animal: null
```

That's because `null` is a deliberately passed value (even if I didn't know that I was deliberately passing it). Default parameters will only kick in if that argument is omitted or passed as `undefined`.

To state it plainly: **falsy values do NOT become default parameters**. It only works for `undefined`.

So the above code is worked as designed, even if it's not what I expected. Time to update that mental model!

Hopefully that clears up the mystery of default parameters for you. Happy coding!
