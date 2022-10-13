---
layout: "@layouts/ArticleLayout.astro"
title: Read a json file in Node.js
description: How to use Node.js's file system to read and parse data from a json file.
pubDate: 2020-05-27
tags:
  - Node.js
  - JavaScript
verse: Nehemiah 8:3
---

To read any file in Node.js, you need to import the `fs` or file system module. From there, you have two methods from which to choose: `readFile`, and `readFileSync`.

Both are similar in that they return [a Buffer of binary data](https://nodejs.org/dist/latest-v14.x/docs/api/buffer.html#buffer_buffer) from a file. `readFile` accepts a callback that will receive the Buffer, while `readFileSync` returns it synchronously.

In action, they look like:

```js
const fs = require("fs");

fs.readFile("./data.json", (error, data) =>
  error ? console.error(error) : console.log(data)
);

try {
  console.log(fs.readFileSync("./data.json"));
} catch (error) {
  console.error(error);
}
```

If you run this code in a directory with a `data.json` file, boths methods will log something like:

```
<Buffer 7b 0a 20 20 22 64 61 74 61 22 3a 20 74 72 75 65 0a 7d>
```

Both are returning the same data, but it isn't consumable. In most instances, you will need to do one more operation in order to use the data that you have read from a file.

Since we are working with a json file, we can use the global `JSON` object to read the data. The `parse` method will convert this Buffer into a usuable JSON object:

<!-- ```js/3,7 -->
```js
const fs = require('fs')

fs.readFile('./data.json', (error, data) => (
    error ? console.error(error) : console.log(JSON.parse(data))
))

try {
    console.log(JSON.parse(fs.readFileSync('./data.json')))
} catch (error) {
    console.error(error)
}
```

Run it again, and you will see whatever data you had stored in your json file logged to the console. You have successfully read a json file in Node.js!

You can see the code in action here:

<iframe height="500px" width="100%" src="https://repl.it/@SeanMcP/Read-json-file-in-Nodejs?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Happy coding!
