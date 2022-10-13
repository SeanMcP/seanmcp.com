---
layout: "@layouts/ArticleLayout.astro"
title: "JS Basics: Generate a random number"
description: Using JavaScript's Math object to generate random numbers
pubDate: 2019-02-11
tags:
  - JavaScript
---

Whether you are simulating a die roll or pulling any index from an array, computers can be used to generate a random number. In JavaScript, random numbers require a combination of methods on the `Math` object that can be a little tricky to understand your first time through.

## Random die roll

Let’s say you want to create a digital six-sided die, which will give you a random number between one and six when called. Our function to simulate a die roll will look like this:

```js
const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

rollDie(6); // 1
```

Every time we call the function, it will return any number from one to six, inclusive. But why? To answer that question, we need to know more about the two methods on the `Math` object we called.

## Math methods

`Math.random()` is a method that generates an integer (number with a decimal) from zero to one, including zero but excluding one. The output of `Math.random()` could be 0, 0.1, 0.2, 0.3343424587866554652345, or 0.99. Anything from zero to nearly one is a possibility.

`Math.floor` is a method that rounds an integer down to the nearest whole number. Rounding down, 0.1 becomes 0, 3.6 becomes 3, and 5.4 becomes 5. Think of it as rounding all the way down to the floor. (Note: there is also a `Math.ceil` function for rounding up that I'll mention later).

By combining these two methods, we can generate the random number for our die. Starting on the inside of our function and working outward:

1. `Math.random()` returns an integer **between** zero and nearly one: `0.16`
2. Next we **multiply** that integer by the number of sides: `0.16 * 6 = 0.96`
3. Then we **round** that product up with `Math.floor`: `0.96 -> 0`
4. Finally, we **add** one to get our final random number: `0 + 1 = 1`

The result of our `rollDie(6)` function is `1`!

Our function allows for a varying number of sides, so you would only need to pass a different argument if you were rolling a different die (much to the satisfaction of all [D&D players](https://en.wikipedia.org/wiki/Dungeons_%26_Dragons#Game_mechanics) out there).

You might even create some help functions to simplify calling different sided dice:

```js
const rollD6 = () => rollDie(6);
const rollD12 = () => rollDie(12);
const rollD20 = () => rollDie(20);
// etc...
```

I used functions like these in Dice Roller, a handy dice rolling app for table-top gaming. You can [view the project's source code here](https://github.com/SeanMcP/dice-roller).

## Common questions

Here are some questions you may have (I know I did!) about our `rollDie` function:

### “Why did we need to add one to our number?”

`Math.floor(Math.random() * 6)` alone will generate a random number between 0 and 5. That is six options, but I've never seen a die numbered from zero to five. We add one to the output so that it makes sense for our situation.

### "Wouldn't using `Math.ceil` make the `+ 1` unnecessary?"

In the same manner that `Math.floor` rounded our integer down to the nearest whole number, `Math.ceil`--short for "ceiling"--rounds an integer up. At face value, this would simplify our solution--but for one issue:

```js
Math.ceil(0); // 0
```

Since `Math.random()` **can**[^1] return a `0`, using `Math.ceil` would on a rare instance return an unexpected value. So it's safer to use `Math.floor` and add one.

### "Does the math always work out?"

I’ve included a few additional examples at the bottom of this post[^2]. Try it out for yourself and see! <span role="img" aria-label="smiling face with squinting eyes emoji">😊</span>

## Random item from an array

The `rollDie` works well for our dice example, but what if you want to select a random item from an array? Remember, that [arrays are zero-indexed (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessing_array_elements), which means that the first item of an array is accessed with a zero (`0`):

```js
const myArray = ["first", "second", "third"];

myArray[0]; // 'first'
```

Our `rollDie` function will never return a `0` because we're always adding one. By removing that addition, we can create a new function that will work well with arrays. Let's use the code from the previous block and add:

```js
const randomIndex = (arrayLength) => Math.floor(Math.random() * arrayLength);

randomIndex(myArray.length); // 0
```

By calling our function and passing the length of our array, we can pull a random item from our array:

```js
myArray[randomIndex(myArray.length)]; // 'second'
myArray[randomIndex(myArray.length)]; // 'first'
myArray[randomIndex(myArray.length)]; // 'second'
```

Using our function in this manner is a little repetitive, so let's create another function that will simplify the process for us:

```js
const randomItemFrom = (array) => array[randomIndex(array.length)];

randomItemFrom(myArray); // 'third'
randomItemFrom(myArray); // 'second'
```

Now we have a few handy utility functions:

1. `rollDie` for simulating a die roll with a given number of sides,
2. `randomIndex` for getting a valid index from an array, and
3. `randomItemFrom` for returning a random item from an array

While building those, we learned about JavaScript's `Math` object and some of its methods: `random`, `floor`, and `ceil`.

Happy coding!

[^1]: I emphasize "can" because it is an [edge case (Wikipedia)](https://en.wikipedia.org/wiki/Edge_case): a statistically unlikely but possible event. Programmers need to be on the lookout and account for edge cases when possible.
[^2]: Additional examples stepping through the `rollDie` function:

    ```
    1. Math.random()    // 0.4
    2. Multiply by 6    // 2.4
    3. Math.floor       // 2
    4. Add one          // 3
    Random number: 3

    1. Math.random()    // 0.9
    2. Multiply by 6    // 5.4
    3. Math.floor       // 5
    4. Add one          // 6
    Random number: 6

    1. Math.random()    // 0.642
    2. Multiply by 6    // 3.8520000000000003
    3. Math.floor       // 3
    4. Add one          // 4
    Random number: 4
    ```
