---
title: Remove duplicates from an array in JavaScript
description: Using sets to de-dupe arrays of primitive and object-like values
tags:
  - JavaScript
pubDate: 2023-08-24T06:06-0400
verse:
flags:
  - DRAFT
---

Removing duplicates, sometimes called de-duplicating or de-duping, is a common
task in programming. There are many ways for removing duplicates from an array
in JavaScript, and here I am going to share two scenarios and strategies.

## Array of primitive values

In JavaScript,
[primitive values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values)
are the simplest form of data like strings and numbers. Let's say you have an
array of strings:

```js
const original = ["u1", "u2", "u3", "u2"];
```

We can de-duplicate this array by using it to create a set, a special object
that only stores unique values. We'll pass it to the `Set` constructor, and then
compare the two by looking at how many items they contain:

```js
const original = ["u1", "u2", "u3", "u2"];
const set = new Set(original);

console.log(original.length + " vs " + set.size);
// "4 vs 3"
```

The final step is to convert this new set back into an array. We can do this
with the `Array.from` method:

```js
const original = ["u1", "u2", "u3", "u2"];
const set = new Set(original);
const deDuped = Array.from(set);

console.log(original); // ["u1", "u2", "u3", "u2"]
console.log(deDuped); // ["u1", "u2", "u3"]
```

With that strategy, we could write a one-liner or create a helper function for
reuse later:

```js
const original = ["u1", "u2", "u3", "u2"];
const deDuped = Array.from(new Set(original));

const deDupePrimitiveArray = (arr) => Array.from(new Set(arr));
deDupePrimitiveArray(original); // ["u1", "u2", "u3"]
```

I think this is a nice and modern solution to remove duplicates from simple
arrays, but _it will not work_ when you have an array of objects. For that,
we'll need a different strategy.

## Array of objects

In JavaScript, object-like values like objects and arrays need a different
strategy for removing duplicates. Let's say you have an array of objects with a
unique `id` property:

```js
const original = [{ id: "u1" }, { id: "u2" }, { id: "u3" }, { id: "u2" }];
```

We can use this `id` to keep track of which objects we have already seen. There
are multiple options to do this, but let's stick with sets since we used that in
the last example. We'll create a new set to keep track of ids that we've already
seen:

```js
const original = [{ id: "u1" }, { id: "u2" }, { id: "u3" }, { id: "u2" }];
const seen = new Set();
```

Next, we filter the original array by checking if the current object's id is in
the set. If it is, then we know that this object is a duplicate and can be
filtered out:

```js
const original = [{ id: "u1" }, { id: "u2" }, { id: "u3" }, { id: "u2" }];
const seen = new Set();

const deDuped = original.filter((current) => {
  if (seen.has(current.id)) {
    return false;
  }
  seen.add(current.id);
  return true;
});
// [{ id: "u1" }, { id: "u2" }, { id: "u3" }]
```

We can't write a one-liner for this, but we can create a helper function. In
addition to the array, we'll need to accept a function that maps an item in the
array to the unique property that we'll use for comparison:

```js
const original = [{ id: "u1" }, { id: "u2" }, { id: "u3" }, { id: "u2" }];

const deDupeObjectArray = (arr, mapper) => {
  const seen = new Set();

  return arr.filter((current) => {
    const key = mapper(current);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

deDupeObjectArray(original, (item) => item.id);
// [{ id: "u1" }, { id: "u2" }, { id: "u3" }]
```

Now that we have a mapper function, we can combine this with the previous
strategy to create a single function that can de-dupe both primitive and object
arrays.

## Bringing it all together

To create a function that will remove duplicates from an array of primitive or
object-like values, we can take the solution for object arrays and modify it
slightly with a default mapper function:

```js
const deDupe = (arr, mapper = (item) => item) => {
  const seen = new Set();

  return arr.filter((current) => {
    const key = mapper(current);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};
```

Now we can use this function to remove duplicates from primitive or object
arrays:

```js
console.log(deDupe(["u1", "u2", "u3", "u2"]));
// ["u1", "u2", "u3"]
console.log(
  deDupe(
    [{ id: "u1" }, { id: "u2" }, { id: "u3" }, { id: "u2" }],
    (item) => item.id
  )
);
// [{ id: "u1" }, { id: "u2" }, { id: "u3" }]
```

You can see all of the examples above in this REPL: https://replit.com/@SeanMcP/removing-duplicates-in-arrays#index.ts
