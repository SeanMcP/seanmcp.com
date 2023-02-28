---
title: Be careful parsing formatted numbers in JavaScript
description:
  JavaScript's parseInt, parseFloat, and Number constructors struggle with
  comma-separated number strings.
image: caution.jpg
tags:
  - JavaScript
pubDate: 2022-12-20T15:14:30.409Z
---

I was working on a script recently and ran into an unexpected issue. The work
involved parsing a number-range string into an array of numbers, _e.g._ "1-100"
into `[1,100]`.

My first instinct was to reach for `parseInt` with something like:

```js
"1-100".split("-").map((string) => parseInt(string));
// [1, 100]
```

This worked nicely until I rant into formatted numbers in the dataset:
"1,000-2,000". Instead of parsing the strings into the expected numbers,
`parseInt` seems to treat the commas as decimals:

```js
"1,000-2,000".split("-").map((string) => parseInt(string));
// [1, 2]
```

Unfortunately, `parseFloat` and the `Number` constructor similarly struggle with
formatted numbers:

```js
"1,000-2,000".split("-").map((string) => parseFloat(string));
// [1, 2]
"1,000-2,000".split("-").map((string) => Number(string));
// [NaN, NaN]
```

It's interesting to me that `Number` returns `NaN`, but
[MDN says you probably shouldn't be using it like this anyway](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number#return_value).

The solution is to remove the commas before parsing. There are a few methods to
do this, but `String.replace` will work nicely:

```js
"1,000-2,000"
  .replace(",", "")
  .split("-")
  .map((string) => parseInt(string));
```

If you're curious, swapping the commas for underscores –
[the approved numeric separator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators)
– doesn't work either:

```js
parseInt("1_000");
// 1
```

There might be an optimal solution that handles numbers formatted for different
locales, _e.g._ "1.000,00" and "1,000.00", so
[please send me a message if you know of one](#comment-link).

Happy coding!
