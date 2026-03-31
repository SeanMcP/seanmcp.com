---
title: Valid JavaScript variable names
description:
  Mathias Bynen has a handy tool for determining what characters are allowed in
  a JS variable name.
tags:
  - Articles
  - JavaScript
  - Tools
date: 2023-02-25T07:15-0400
---

I’ve been working on a little library to help build little JavaScript
applications. Something to fill the gap for me between little scripts and
reaching for a framework like Svelte.

While designing the API, I’ve found myself searching for obscure but technically
valid JS variable names to distinguish my library from the standard HTML element
properties. Is `@id` valid? What about `$id`? Can I use a `:`?

These questions are easy to answer by opening the console, but wouldn’t it be
nice to have a little tool to validate JavaScript variable names? Thankfully it
already exists:
[Mathias Bynen’s](https://mathiasbynens.be/)[JavaScript variable name validator](https://mothereff.in/js-variables).

With it you can quickly validate a variable while maintaining your flow. And if
you’re curious as to why,
[he has an article explaining the specifications](https://mathiasbynens.be/notes/javascript-identifiers-es6).
While writing this, I noticed that
[the main site has a bunch of other little tools](https://mothereff.in/) for you
to checkout. (Pardon the name 🙊)

Up the web!
