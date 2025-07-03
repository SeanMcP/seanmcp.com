---
title: How to remove duplicates from an object array?
description: Not as easy as we'd like it, but not as hard as it could be
date: 2020-02-03T12:00-0400
tags:
  - Articles
  - JavaScript
verse: Job 23:13
---

Reviewing a recent code exercise at work, we came across a situation where a
candidate wanted to ensure that there were no duplicates in an array of objects.

The solution, which seemed to have been cobbled together from
[suggestions in this Stack Overflow thread](https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript),
included `Array.from()`, `new Set`, `Array.map()`, and `Array.find()`.

It worked, but it definitely fulfilled the definition of
["frankencode"](https://www.urbandictionary.com/define.php?term=Frankencode).

Let's look at a simpler solution to this common problem with
[a simple _O(n)_ complexity](https://en.wikipedia.org/wiki/Big_O_notation).

## Setup

The data here could be pretty complicated, so I'm going to reduce it to the
simplest form. We have an array of possibly duplicate objects, and we'll know
that they're duplicated based on the `name` key:

```js
const listWithDups = [
  { name: "one" },
  { name: "two" },
  { name: "one" }, // <-- Duplicate
  { name: "three" },
];
```

We want to be able to loop through this data as few times as possible in order
to remove that duplicate entry.

## Steps

There are a few things that we are going to need in order to solve this problem.
First, we're going to need a new array to which we'll add unique items. Second,
we're going to need a way to keep track of the items that we have already seen.
And third, we're going to need a way to iterate through the data.

Let's look at those one at a time.

## New array

For this process, we want this to create a new unique array without modifying
the original. This is a good practice, because it gives you the ability to
compare your data down the road.

```js
const uniqueList = [];
```

When we are iterating through our original array and come across a unique
object, we'll add it to `uniqueList` with `Array.push()`.

## Unique key tracker

In order to know if an object is unique, we need to know all of the keys that we
have seen before.

There are a few different data types that we could use, but the best option here
is an object; they're perfect for looking up information based on a known key.

This object only exists to track those keys. It will not be returned and no
other process depends on its information. That makes it a
[temporary variable](https://en.wikipedia.org/wiki/Temporary_variable), and we
should name it as such:

```js
const temp = {};
```

For every object in our list, we'll check to see if their `name` key exists on
our temp object. If it does not, then we'll add it to the object and then add
the object to the unique list. If it does not, then we know that it is a
duplicate and can move on.

## Iterate

Since we are going to be iterating through data, the easiest[^1] way to do that
is with a `for` loop. We're going to use a
[`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
here because we don't care about the index number:

```js
for (let item of listWithDups) {
  // TODO: Check if item is unique.
  // If so, add it to the list and remember it's name.
  // If not, pass over; it's a duplicate.
}
```

Now we can go about implementing the steps above.

Since we're using our `temp` object to track all of the items that we have
already encountered, we can check to see if each item's `name` exists as a key
on `temp`.

Note: We haven't written the logic to add items to `temp` yet, but we know that
this is how we want the application to work.

<!-- ```js/2 -->

```js
for (let item of listWithDups) {
  // If we haven't seen this name before...
  if (!temp[item.name]) {
  }
}
```

Within this `if` block, we'll do our "unique name" logic. We want to add the
item to our unique list and remember the name for next time.

<!-- ```js/3-4 -->

```js
for (let item of listWithDups) {
  // If we haven't seen this name before...
  if (!temp[item.name]) {
    uniqueItems.push(item); // Add to unique list
    temp[item.name] = true; // Remember the name
  }
}
```

Once that loop has run, we will have built our `uniqueItems` array without
duplicating any values. We have successfully de-duped our array with only a
single iteration!

## Sample

Here is a Repl of the solution. Feel free to fork it, make improvements, and
[share your code with me](#comment-link).

<iframe height="400px" width="100%" src="https://repl.it/@SeanMcP/Unique-items-in-array?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Happy coding!

[^1]: YMMV
