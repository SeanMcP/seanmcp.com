---
layout: "../../layouts/ArticleLayout.astro"
title: Read a json file in Deno
description: How to use Deno's standard library to read and parse data from a json file.
pubDate: 2020-05-28
tags:
  - Deno
  - JavaScript
  - TypeScript
verse: 2 Kings 22:8
---

Deno is a **secure** runtine for JavaScript, so to read a file the program needs explicit permissions. We can enable file reading with the `--allow-read` flag in the command line:

```bash
deno run --allow-read read-json.ts
```

Once the permissions are straight, we need to read the file. There are a few methods on the `Deno` module to use, so let's look at two options: `readFile`, and `readTextFile`.

Let's take a look at them separately.

## `readFile`

Deno's `readFile` method returns a Promise resolves with a Uint8Array. You can call the method like this:

```js
console.log(await Deno.readFile("data.json"));
```

So if we run the following code in a directory with a `data.json` file, you would see a log like this:

```
Uint8Array(29) [
  123,  10,  32,  32,  32, 32,  34, 115,
  111, 117, 114,  99, 101, 34,  58,  32,
   34, 100,  97, 116,  97, 46, 106, 115,
  111, 110,  34,  10, 125
]
```

In order to read this, we need a new text decoder decoder with and pass the file's encoding:

```js
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("data.json");
console.log(decoder.decode(data));
```

Now when we run the code, we see the contents of `data.json` logged in the console:

```
{
    "source": "data.json"
}
```

This looks good, but it is just a formatted string. To consume this data, we need to use the global `JSON` object's `parse` method to get a usuable json object.

```js/2
const decoder = new TextDecoder('utf-8')
const data = await Deno.readFile('data.json')
console.log(JSON.parse(decoder.decode(data)))
```

Run it again, and you will see whatever data you had stored in your json file logged to the console. You have successfully read a json file in Deno with `readFile`!

If you know that your data is utf8 encoded, you can skip a step with the next Deno method.

## `readTextFile`

Deno's `readTextFile` method returns a Promise that resolves to a utf8 decoded string. You can call the method like this:

```js
console.log(await Deno.readTextFile("data.json"));
```

Once again, if we run this code in a directory with a `data.json` file, you would see the file's contents logged in the console:

```
{
    "source": "data.json"
}
```

This looks good, but just like before it is only a formatted string. To consume this data, we need to use the global `JSON` object's `parse` method again to get a usuable json object.

```js
const text = await Deno.readTextFile("data.json");
console.log(JSON.parse(text));
```

Run it again, and you will see whatever data you had stored in your json file logged to the console. You have successfully read a json file in Deno with `readTextFile`!

## Conclusion

If you know that your file is utf8 encoded, using `Deno.readTextFile` is an easy way to grab the contents of a file. Otherwise, `Deno.readFile` and a decoder can get you on your way.

Whichever method you choose, just remember to parse the json data before trying to consume it.

Happy coding!
