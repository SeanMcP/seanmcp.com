---
title: Read URL search parameters with JavaScript
description: How to use URLSearchParams to parse any search parameters string like window.location.search
date: 2021-05-01T12:00-0400
tags:
- JavaScript
verse: 2 Kings 22:8
head: >-
  <style>
      #params-message {
          border: 1px solid var(--off-background);
          padding: 1rem;
      }

      #params-message h2 {
          margin-top: 0;
      }

      #params-message p:last-of-type {
          margin-bottom: 0;
      }
  </style>
foot: >-
  <script>
      function readSearchParams() {
          let usp = new URLSearchParams(window.location.search)
          let params = {}
          usp.forEach((value, key) => {
              if (!params[key]) {
                  params[key] = []
              }
              params[key].push(value)
          })
          return params
      }
      let params = readSearchParams()
      let keys = Object.keys(params)
      
      if (keys.length > 0) {
          let paramsMessage = document.getElementById('params-message')
          let paramsList = document.getElementById('params-list')

          keys.forEach(key => {
              paramsList.innerHTML += `<li><b>${key}</b>: <code>${params[key].join('</code>&nbsp;<code>')}</code></li>`
          })

          paramsMessage.removeAttribute('hidden')
      }
  </script>
---

<div id="params-message" hidden>
    <h2>Hello search params!</h2>
    <p>The following parameters were detected on this page:</p>
    <ul id="params-list"></ul>
    <p>To learn how I did this, read on or inspect the source code for this page.</p>
</div>

Search parameters, or query strings, are handy ways to store data on URLs. JavaScript provides an interface for reading search parameters called `URLSearchParams`. To use it, create an instance with the `new` keyword and pass your search parameter string as an argument:

```js
let params = "?name=Sam&name=Ezra";
let usp = new URLSearchParams(params);
```

The returned `URLSearchParams` object has a few [a bunch of useful methods](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#methods), but we're going to focus on three:

- `get()`: Returns the first value for a particular key
- `getAll()`: Returns all of the values for a particular key
- `forEach()`: Iterates over keys with a callback that receives `value` and `key`

If I call the `get()` method for `name`, then it will return the first value from my search parameter string:

```js
usp.get("name");
// 'Sam'
```

When you are dealing with unique parameters, this method is all you need to get the job done. But in our example, there are multiple names being passed. To retrieve all of those values, we will call `getAll()` with `name`:

```js
usp.getAll("name");
// ['Sam', 'Ezra']
```

If you are working with a few exact keys, you can probably stop there. But if you are dealing with a lot of keys or just want an easier way to read search parameters, you can use a helper function that iterates over all of the keys and stores them in an object:

```js
/**
 * Read the search parameters from window location
 */
function readSearchParams() {
  let usp = new URLSearchParams(window.location.search);
  let params = {};
  usp.forEach((value, key) => {
    if (!params[key]) {
      params[key] = [];
    }
    params[key].push(value);
  });
  return params;
}
```

Then call the function whenever you need to reference the current location's search parameters:

```js
// https://seanmcp.com/articles/read-url-search-parameters-with-javascript/
// ?greeting=Hello&name=World
let params = readSearchParams();

params.greeting;
// ['Hello']
params.name;
//['World']
```

To see it in action, try going to [that url](./?greeting=Hello&name=World), or try adding your own search parameters.

Happy reading!
