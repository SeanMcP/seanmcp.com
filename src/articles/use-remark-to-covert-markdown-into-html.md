---
title: Use remark to covert markdown into HTML
description: The missing "hello world" example to get up and running with remark 
date: 2021-07-03
tags:
    - javascript
    - markdown
    - react
    - node.js
verse: Acts 12:25
# /img/<IMAGE>.min.jpg
image:
---

I've used [remark](https://npm.im/remark) in a few different projects, and each time I found it difficult to get started. For such a popular project, the [documentation is quite terse](https://remark.js.org/).

To save myself the trouble of looking up how to do it in the future, here are the basic steps you need to get started converting markdown to HTML with remark.

First, install remark dependencies:

```
npm i remark remark-html
```

We will need the core library and a plugin for generating HTML. Then, import your dependencies and use them like so:

```js
import remark from 'remark'
import remarkHTML from 'remark-html'

const html = remark()
    .use(remarkHTML)
    .processSync('Some **markdown** text')
```

That's all you need to get going. To help jump-start your progress, checkout this working [repl in Node.js](https://replit.com/@SeanMcP/remark-example#index.js) or [sandbox in React](https://codesandbox.io/s/react-remark-example-kofy0).

Hope this guide helps you get up and running too!

Happy coding!
