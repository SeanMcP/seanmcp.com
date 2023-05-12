---
title: What is nullish in JavaScript?
description:
  Nullish values are null and undefined, and it's important to thing of them
  separately from falsy values
tags:
  - JavaScript
pubDate: 2023-05-12T00:22:37.769Z
verse: Genesis 1:2
---

[Nullish-coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
(`??` or double question mark) is a handy tool that returns the right-hand
operand when the left-hand is nullish. In JavaScript, nullish is defined as
`null` or `undefined`.

I enjoy using the nullish coalescing operator in my code, especially combined
with optional chaining:

```js
const name = response?.user?.name ?? "Anonymous";
```

This code will return the user's name if `user` and `name` exist on the
`response` variable, or fallback to "Anonymous" if not.

However, I tend to get nullish confused with falsy in JavaScript. And while
there is some overlap, it is important to know and remember the difference
between the two.

Common [falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
are `null`, `undefined`, `0`, `""`, `false`, and `NaN`.

Nullish values are a subset of that at just `null` and `undefined`.

![Nullish values as a subset of falsy values](/img/falsy-nullish-js.png)

If you try to use the nullish-coalescing operator with a falsy value, it will
return the left-hand operand:

```js
false ?? "fallback"; // false
```

To state it one more time, nullish in JavaScript is `null` or `undefined`. All
other values, even if they are falsy, are excluded. So reach for nullish
coalescing only when dealing with `null` or `undefined`. Otherwise use logical
OR (`||`) or a ternary operator (`? :`).
