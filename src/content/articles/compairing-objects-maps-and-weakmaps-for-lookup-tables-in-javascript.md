---
title: Compairing Objects, Maps, and WeakMaps for lookup tables in JavaScript
description:
  You could use an Object, but Maps are probably best for lookup tables and
  WeakMaps are useful for memory performance    
tags:
  - JavaScript
pubDate: 2023-05-22T11:24:35.790Z
verse: Matthew 8:11
---

I use lookup tables/dictionaries/hashmaps/maps a lot when I’m coding. That’s a
data structure that stores key and value pairs that are easily retrievable. Here
is an example table for storing and looking up element names by their symbol
written in Python that uses a dictionary:

```python
periodic_table["H"] = "Hydrogen"

print(periodic_table["H"])
# Hydrogen
```

In JavaScript, we have three tools for this pattern—Objects, Maps, and
WeakMaps—each with strengths and weaknesses.

## Objects

Objects are the standard data type for dictionaries. They are so flexible that
they are, in a way, the base prototype for all values in JavaScript. Entries are
added and retrieved with dot or bracket notation, and then removed with the
`delete` keyword:

```js
// Declare
let periodicTable = {};

// Set
periodicTable.H = "Hydrogen"; // dot notation
periodicTable["He"] = "Helium"; // bracket notation

// Get
periodicTable.H; // "Hydrogen"
periodicTable["He"]; // "Helium"

// Delete
periodicTable.Li = "Lithium";
delete periodicTable.Li;
```

Object are not strictly iterable, but you can use `for...in` to access its keys
or the global Object’s methods to get an iterable array: `Object.keys()`,
`Object.values()`, and `Object.entries()`.

```js
for (let key in periodicTable) {
  console.log(key, periodicTable[key]);
}
// H Hydrogen
// He Helium

Object.keys(periodicTable); // ["H", "He"]
Object.values(periodicTable); // ["Hydrogen", "Helium"]
Object.entries(periodicTable); // [["H", "Hydrogen"], ["He", "Helium"]]
```

Objects will work as a data structure for every problem you encounter. So in
some ways, it is the best of the three options for lookup tables. Some
weaknesses of Objects are:

- Prototype properties can conflict with keys in table
- Key types limited to strings, numbers, and symbols
- No guaranteed entry order

## Maps

The `Map` object was added to JavaScript in ES2015 and provides a dedicated
native solution for lookup tables. Entries are added, retrieved, and removed
with dedicated methods:

```js
// Declare
let periodicTable = new Map();

// Set
periodicTable.set("H", "Hydrogen");
periodicTable.set("He", "Helium");

// Get
periodicTable.get("H"); // "Hydrogen"
periodicTable.get("He"); // "Helium"

// Delete
periodicTable.set("Li", "Lithium");
periodicTable.delete("Li");
```

Maps are iterable so you can access all of the entries with a `for...of` loop
(similar to Arrays). They also have a `Map.forEach()` method which provides the
same data but (curiously) in the reverse order:

```js
for (let entry of periodicTable) {
  console.log(entry);
}
// ["H", "Hydrogen"]
// ["He", "Helium"]

periodicTable.forEach((value, key) => {
  console.log(key, value);
});
// H Hydrogen
// He Helium
```

Maps also have `Map.keys()` and `Map.values()` methods that return iterators for
keys and values, but the use cases for those might be rare. More common are the
`Map.has()` method which returns a boolean of whether a key exists, and
`Map.size` getter which returns the number of key/value pairs.

```js
periodicTable.has("Li"); // false
periodicTable.size; // 2
```

Some other features that would take more time to illustrate:

- Preserved entry order
- More performant than objects for frequent additions and subtractions
- Support any data structure for keys, including objects and functions (this
  makes them a good choice for implementing memoization)

It is for these methods/features that Maps really shine as data types of lookup
tables. The main weaknesses for Maps are:

- Not serializable

## WeakMaps

`WeakMaps` were added to JavaScript along with `Maps` in ES2015. A noticeable
difference between the two is that keys in `WeakMaps` must be objects. Entries
are added, retrieved, and deleted with dedicated methods:

```js
// Declare
let periodicTable = new WeakMap();

// Set
let H = { symbol: "H" };
periodicTable.set(H, "Hydrogen");

// Get
periodicTable.get(H); // "Hydrogen"

// Delete
let He = { symbol: "He" };
periodicTable.set(He, "Helium");
periodicTable.delete(He);
```

**Note**: There is nothing special about the `{ symbol: "" }` syntax here. I’m
just creating an object for each key that makes sense for the periodic-table
example. You could use any object or object-like value for the key: `{}`, `[]`,
`() => {}`

Unlike Maps, WeakMaps are not iterable and there is no way to access its size.
The only method provided is `WeakMap.has()` to receive a boolean of whether that
key exists or not:

```js
periodicTable.has("He"); // false
```

All of these differences are due to a shift in focus. WeakMaps are special in
that they weakly reference the objects used as keys. This weak reference means
that JavaScript can garbage collect those objects sooner, which will improve the
memory performance of your application.

If you have a long-living lookup table, this memory-performance feature may be
the perfect solution. Some weaknesses of WeakMaps are:

- Limited key types
- No iteration or access to keys/values list
- Not serializable

## Try it out

I created a REPL that includes all of the code examples above for you to
explore:
[replit.com/@SeanMcP/JavaScript-lookup-tables](https://replit.com/@SeanMcP/JavaScript-lookup-tables#index.js)

## Conclusion

What is the best tool for implementing lookup tables in JavaScript? The answer
will vary depending on your specific use case, but here are some general
recommendations:

1. **`Map` is (probably) the best**: Between flexible key types, preserved
   order, easy iteration, and helpful methods, Maps have all of the features
   that you need for 90% of lookup tables that you will write in your code.
   Learning the syntax is a worthwhile investment over basic Objects.
2. **Otherwise use an `Object`**: That said, you could still implement every
   lookup table with an Object. One scenario where objects shine is for inline
   lookups:

   ```js
   function getElementName(symbol) {
     return {
       H: "Hydrogen",
       He: "Helium",
     }[symbol];
   }
   ```

3. **`WeakMap` for performance**: If you are working in a situation where memory
   performance is important, then WeakMap’s weakly referenced keys will be
   helpful. There are other programming problems where WeakMaps shine, but we’re
   looking specifically for lookup tables.

Now that you know the different tools that JavaScript offers for
dictionaries/hash maps/maps/lookup tables, you can choose the best solution in
your context.
