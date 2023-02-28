---
title: Node.js is great for scripting
description:
  Node.js and JavaScript are a great option for scripting for the language
  features and the large ecosystem. Oh, and it's pretty fast too!
image:
tags:
  - JavaScript
  - Node.js
  - Scripting
pubDate: 2022-11-16T15:21:46.240Z
---

This week I was working on a project that reads 6.4 MB of text files (the
complete English Bible), does some processing and computation, and then outputs
JSON data. You can see
[result of that work on GitHub](https://github.com/seanmcp/shama).

In times past, I've felt pressure to reach for a "proper scripting language"
like Python or a more performant one like Go. But I feel like we've reached the
point where Node.js is a great choice for scripting.

- **JavaScript is everywhere**. You can find tutorials and examples for every
  conceivable task for JS. And by and large, the code that works in the browser
  will work in Node.js too.
- **JavaScript is forgiving**. When I'm writing a script, it's usually for a
  specific and personal use case. I don't want to spend a lot of time writing
  syntax or worrying about types. And thankfully, JavaScript doesn't care about
  that either.
- **The ecosystem is huge**. There are over one million npm packages, so the
  chances are good that there is a solution available for whatever problem you
  have. And thanks to JS being everywhere, there are countless guides to adding
  dependencies to your project.
- **Node.js is readable**. Thanks to JS' async/await and sync functions from
  Node.js' standard libraries, writing a script that reads multiple
  files/directories and then writes to others is pretty straightforward. No more
  chaining callbacks!
- **Node.js supports ESM**. Node.js supports ES modules with either the
  `type: module` flag in `package.json` or the `.mjs` extension. Maybe this is a
  bigger deal for me personally, but the ability to import and export modules
  without needing to think about `require()` or `module.exports` is pretty nice.
- **Node.js is fast**. That project I mentioned at the top? The Node.js script
  that I wrote (which was not optimized for performance) ran in less than a
  second. 6.4 MB in < 1 second! I'm not saying that Node.js is the fastest
  option, but for your typical scripting needs: it's more than fast enough.

I'm not arguing that everyone should be using Node.js for scripting, nor that it
is the best solution for every problem in every environment. And if you prefer
Rust or Go or Ruby or WhatEver, go for it!

But if you're a developer who is comfortable working in the JavaScript
ecosystem, don't be hesitant to reach for Node.js. It's a great option for your
next script.

Happy coding!
