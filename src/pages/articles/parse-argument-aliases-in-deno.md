---
layout: "../../layouts/ArticleLayout.astro"
title: Parse argument aliases in Deno
description: Using Deno's standard flags module to parse command-line arguments with aliases
date: 2020-06-26
tags:
    - CLI
    - Deno
verse: Job 23:4
---

You can parse command-line arguments in Deno with the [standard `flags` module](https://deno.land/std/flags):

```js
import { parse } from "https://deno.land/std/flags/mod.ts";

console.dir(parse(Deno.args));
```

```shell
deno run https://deno.land/std/examples/flags.ts -a beep -b boop

{ _: [], a: 'beep', b: 'boop' }
```

The `parse` function has a second options argument where you can assign aliases. Before we do that, let's use a more description example.

## Example scenario

Say you have a script, `log.ts`, that takes a message to display in the terminal. We would use our script like this:

```shell
deno run log.ts --message "Hello world"

Hello world
```

Now let's alias the `--message` flag to `-M` for ease of use.

## Alias option

When we call `parse` in our script on `Deno.args`, we want to provide an additional options object with a key `aliases`.

That will be assigned to another object that will map flags to their aliases:

```js
// log.ts
import { parse } from "https://deno.land/std/flags/mod.ts";

const flagToAliasMap = {
    message: 'M'
}

const parsedArgs = parse(Deno.args, { aliases: flagToAliasMap })

console.log(parsedArgs.message)
```

Now we can call our script with those aliases:

```shell
deno run log.ts -M "That's better"

That's better
```

With that, the `flags` module does all of the hard lifting for you!

## Wrap up

Two things to note about aliases:

1. `flags` doesn't care whether you use one or two hyphens for aliases, so `-M` and `--M` will both work.
2. Aliases **are** case sensitive, so you'll have to map `m` and `M` separately.

Happy coding!
