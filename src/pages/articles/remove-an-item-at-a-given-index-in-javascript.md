---
layout: "@layouts/ArticleLayout.astro"
title: Remove an item at a given index in JavaScript
description: Sidestep slicing and splicing and use Array's filter method for a no-hassle solution.
pubDate: 2020-08-05
tags:
  - JavaScript
verse: Matthew 23:24
# /img/<IMAGE>.min.jpg
image:
repl: https://repl.it/@SeanMcP/remove-an-item-at-a-given-index-js
---

Removing an item from an array at a given index is a pretty common task in programming. So it is a little disappointing that the Array prototype in JavaScript doesn't have a method for that exact task.

If you search for an answer, you'll find solutions that use `Array#slice`:

```js
function removeAtWithSlice(array, index) {
  return array.slice(index).contact(array.slice(index + 1));
}
```

And answers with `Array#splice` (which mutates the original array):

```js
function removeAtWithSplice(array, index) {
  const copy = [...array];
  copy.splice(index, 1);
  return copy;
}
```

Both of these require that you remember the difference between the two methods, their behavior, and the arguments they require.

Personally, neither of these solutions are memorable, so I often find myself searching "how to remove an item at a given index JS".

## Filtering

Instead of using `slice`/`splice`, I came upon a new method that is my favorite yet: `Array#filter`.

The `filter` method will iterate over your array and return a new one with values that pass a certain criterion. You have probably used `Array#filter` for a todo-like example before:

```js
const done = todos.filter((todo) => todo.isComplete === true);
```

Like other array methods, you also have access to the current index as a parameter. So to use `Array#filter` to remove an item from an array, check if the indices match:

```js
function removeAtWithFilter(array, index) {
  return array.filter((_, i) => i !== index);
}
```

**Note**: I'm using the `_` to indicate a parameter that I don't intend to reference and a non-description `i` variable because `index` is already in scope.

As I mentioned above, this is now my preferred method of removing an item from an array. I am more familiar with `Array#filter` and the idea of "filtering out" in the unwanted index makes sense. The other two methods are harder for me to conceptualize.

There are two objective benefits to this method as well. First, it doesn't mutate the array (unlike `Array#splice`), which allows for functional programming without an additional step. And second, it only iterates the length of the array once (vs a potential two iterations for `Array#slice`).

For all those reasons, I recommend you use `Array#filter` for removing an item from an array at a given index in JavaScript. Let me know if you have an even better method; I'd love to hear it!

Happy filtering!
