---
title: Access the home directory in Deno
description: Using Deno's environment to determine your computer's home directory
pubDate: 2020-07-17
tags:
    - Deno
image:
---

If you want to access the home directory from you Deno program, you can use the `Deno.env`'s `get` method with `"HOME"`:

```js
Deno.env.get("HOME")
```

In unix environments, returns a string along the lines of `"/home/USER"`.

So if you want to write a script that accesses a configuration file like `.bashrc`, you could read the file with:

<!-- ```js/2 -->
```js
// read-bashrc.ts
const bashConfig = Deno.readTextFileSync(
    Deno.env.get("HOME") + "/.bashrc"
);
```

Since we are accessing `Deno.env`, we need to run the program with the `env` permission:

```shell
deno run --allow-env read-bashrc.ts
```

Here is a Repl where you can [play around with accessing the home directory in Deno](https://repl.it/@SeanMcP/deno-access-home-directory).

Happy coding!