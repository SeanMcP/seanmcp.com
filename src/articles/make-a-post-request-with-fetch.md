---
title: Make a POST request with fetch
description: A sample POST with fetch for those of us who can never remember how.
date: 2020-08-07
tags:
    - javascript
    - web-development
verse: Ruth 3:11
# /img/<IMAGE>.min.jpg
image:
---

[`fetch` is utility for making HTTP requests](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) from the browser. It is [available in all modern browsers](https://caniuse.com/#feat=fetch) and has a [popular polyfill for older browsers](https://github.com/github/fetch).

To make a `GET` request, just pass the endpoint to the global `fetch` method:

```js
fetch('https://mirror-api.seanmcp.repl.co/get')
```

It returns a promise that will resolve with the server response. From there, you can convert the response to JSON and read the value in your code:

```js
;(async function() {
    const response = await fetch('https://mirror-api.seanmcp.repl.co/get')
    const data = await response.json()
    console.log(data)
})()
```

But `fetch` also handles other request methods. After `GET`, the first you will reach for is `POST`. But it isn't immediately apparent how to make a request with a different method.

## How to `POST` with `fetch`

The global `fetch` function accepts a second options argument. There you can set the method, add a body, and set headers.

Here is an example POST request that sends a JSON body:

```js
fetch('https://mirror-api.seanmcp.repl.co/post', {
    method: 'POST',
    body: JSON.stringify({ message: 'Hello API!' }),
    headers: {
        'Content-Type': 'application/json'
    }
})
```

Once you have the request in order, you can handle the promises and get the server response.

For more information on the available including examples with other methods, checkout [_Using Fetch_ on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

Happy fetching!