---
title: Jest tips & tricks
description: A growing list of little things that make working with Jest a little better
pubDate: 2022-10-06T15:58:09.243Z
draft: false
tags:
  - Garden
  - Jest
  - Testing
verse: null
image: null
---

Since 2017, I have only used Jest for JavaScript application testing. And while [Vitest does look exciting](https://vitest.dev/), I think that it's safe to say that Jest will be around for a good while longer.

Here are some of tips and tricks that I've learned that make working with Jest a little better. The headings are organized alphabetically for ease of reference.

## Aliases

Jest's global `test` method has an `it` alias that you might find useful. There is usually a standard in the codebase where I'm working, but I've found that tests can read a little more naturally with the alias:

```js
test("When a user is logged in, ...", () => {});
it("Logs an event on interaction", () => {});
```

## `expect`

There are a lot of matcher functions that are good to know, so I'll only list a few here.

One of the most useful matchers (and hardest to remember) is `expect.objectContaining()`. This allows you to assert that certain properties/values are present on the object without needing to mock all of them.

```js
expect(mockFn).toHaveBeenCalledWith(
  expect.objectContaining({
    example: true,
  })
);
```

Another handy matcher is `not()`, which gives you a simple way to negate any matcher:

```js
expect(sum).not.toBe(0);
expect(typeof readableTime).not.toBe("number");
```

I do recommend skimming the [Jest docs for `expect`](https://jestjs.io/docs/expect) occasionally to pick up some new matcher that might help in your next test.

## Flags

The Jest CLI has a number of flags that can be used to change the way that Jest runs. Here are some of the ones that I find most helpful:

- `--bail/-b`: Exits the test suite after a given number of failures (default 1)
- `--changedSince`: Only run tests related to files changed since a given point. I like to use this with the target branch as a quick check for regressions.
-﻿ `--findRelatedTests`: Runs tests related to changed files. Works well in a pre-commit hook.
- `--watch`: Run tests in watch mode. Great when running a small set of tests, but maybe omit if you're running the whole suite.

## Selective runs

When working in a large test file, it's nice to run only the cases that you care about. Sometimes that means selecting a specific test or block, and other times that means skipping anything that isn't necessary at the moment.

To just run a specific test, you can use the `only()` method on the global `describe`/`test` methods. This will ensure that only that code is run:

```js
test.only("This test will run", () => {});
test("This test will not", () => {});
```

To omit a test from the run, you can similarly use the `skip()` method:

```js
test("This test will run", () => {});
test.skip("This test will not", () => {});
```

For a smaller change to skip tests, you can add an `x` to the front of for the same behavior:

```js
test("This test will run", () => {});
xtest("This test will not", () => {});
```

If you're going to use this, I'd recommend [a linter rule to prevent you from committing skipped tests](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md).

---

I hope that helps! Let me know if you have any other tips and tricks that you have found helpful.

Happy testing!
