---
title: TypeScript is misleading you about String.split
description:
  TypeScript thinks String.prototype.split returns an array of strings, but the
  reality is that.
date: 2026-01-08T16:18-0400
tags:
  - Articles
  - TypeScript
  - JavaScript
flags:
  - DRAFT
verse: Mark 1:10
prose: false
---

TypeScript will tell you that `String.prototype.split` returns a `string[]`.
When destructuring the returned value, it will indicate that
[all values are strings](https://www.typescriptlang.org/play/?#code/MYewdgzgLgBA2gQwDQwEYF0YF4YCIoCm0uAdBAA4A2AllABS4D0uAlANwBQHokIlBJSiADmdKAE9yBEADMYCFt3AQ+AoaIlTZaFkA):

```ts
const [a, b] = "test".split("/");
// a: string
// b: string
```

When executing the code, `a` is a `string` but `b` is... `undefined`.
[Run this example](https://www.typescriptlang.org/play/?#code/MYewdgzgLgBA2gQwDQwEYF0YF4YCIoCm0uAdBAA4A2AllABS4D0uAlANwBQHokIlBJSiADmdKAE9yBEADMYCFt3AQ+AoaIlTZaFkA)
and look at the logs. If you were depending on `b` to be a `string` at runtime,
you will run into a `TypeError`.

```
[LOG]: "string"
[LOG]: "undefined"
```

This was surprise number one^[Shoutout to Kamran for the quality code review].
The second was
[MDN seeming to confirm](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#return_value)
that `String.prototype.split` returns a `string[]`. It does mention `undefined`
as possible return value when using a regex separator.

Huh. Most of the "JS is weird" discourse online is overblown, but this one is
truly strange. Am I missing something?
