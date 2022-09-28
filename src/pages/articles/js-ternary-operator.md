---
layout: "../../layouts/ArticleLayout.astro"
title: "JS Basics: Ternary Operator"
description: Demystifying the inline if statement
pubDate: 2019-02-08
tags:
  - JavaScript
---

A ternary or conditional operator is like an inline if statement. In JavaScript, you can identify them by their unique use of a question mark, `?`, and colon, `:`.

When I first started coding, I found ternary operators more than a little confusing, so let's try to unpack them. Look at this common example:

<!-- ```js/1 -->
```js
<span
    className={`Todo ${props.isDone ? 'Todo--done' : ''}`}
>
    {props.text}
</span>
```

Here we have a snippet from a React to-do app with a ternary operator. The class ( `className` in JSX) is being set based on a condition in our `props` object. Here’s how to read a ternary operator:

> If `props.isDone` is true/truthy, then return the string "Todo--done"; otherwise return an empty string.

Written out, a ternary operator looks like an `if` statement. We could express the same code like this:

```js
if (props.isDone === true) {
  return "Todo--done";
} else {
  return "";
}
```

That looks more familiar! Ternary operators are useful because they allow you to add inline conditions to your code. Compare the original code to our final if statement. The ternary operator is shorter, cleaner, and more efficient.

MDN has a great list of other examples for you to reference. You can check them out here: [Conditional (ternary) operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

Happy coding!
