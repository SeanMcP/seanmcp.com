---
layout: "../../layouts/ArticleLayout.astro"
title: Before You Debug
description: An organized approach to debugging your code
pubDate: 2020-07-10
tags:
  - Garden
  - Debugging
  - Programming
verse: Proverbs 30:25
# /img/<IMAGE>.min.jpg
image: /img/beetle-on-flower.min.jpg
---

Debugging, "the process of finding and resolving defects within a computer system"^[https://en.wikipedia.org/wiki/Debugging], is a critical skill for software development. It's how we figure out what went wrong and how to fix it.

This can be as informal as throwing `* { outline: 1px solid red }` on all your elements or sophisticated as using an IDE's debugger.

But whatever your method, there are certain steps that you can follow to help yourself debug more logically and efficiently.

This garden aims to detail everything you should do _before you actually start debugging_. Think of this as the prep work before you start cooking.

## Pre-steps

1. **Relax**: Find a bug can be frustrating, and those emotions can impede the debugging process. Take a deep breath and dive in.
1. **Describe what happened**: Did the process exit? Did the page fail to render? Is there a message in the console? Does the UI not respond correctly? Understanding what happened is the first step to solving a problem. The "how" comes later.
1. **Read the error message**: Most errors will provide you useful information in the message. Some APIs provide a detailed explanation of what went wrong. So take the time and read it.
1. **Follow the stack trace**: If the error includes a stack, walk through each line. Where did the error originate? What it internal or external code?
1. **Pinpoint the error**: Try to isolate the exact point where something went wrong. In the stack trace, this will usually have a file name and a line number, _e.g._ `app.js:25`.
1. **Inspect the line**: Read the entire line where the error occurred. Is there anything that immediately jumps out to you? Sometimes the bug could be as simple as a typo or an unexpected type.
1. **Review the block**: Follow the block from start to finish, making note of the line in question. Try to get a good sense of how that code is working.
1. **Scan any higher scopes**: Make sure you understand at a high-level what the code is doing and what variables are needed/expected.
1. **Make a hypothesis**: You are a scientist, after all. Make an educated guess about what went wrong and what will fix it. Make sure to review your hypothesis while you're debugging.

## Note

This is a living document and will change as my approach to debugging grows over time. If you have any suggestions, [please let me know](#comment-link).

## Additional reading

- [_When debugging, your attitude matters_](https://jvns.ca/blog/debugging-attitude-matters/) by Julia Evans
