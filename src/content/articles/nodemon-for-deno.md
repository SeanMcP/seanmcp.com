---
title: Nodemon for Deno
description: Denon is a utility for Deno that provides source watching and process restarting just like Nodemon
pubDate: 2020-07-01
tags:
  - Deno
  - Tools
verse: Psalm 130:6
image: /img/watch.min.jpg
---

_UppubDate: As of Deno v1.4, there is a built in watch mode that you can enable with the `--watch` flag. [Read more about that here](https://deno.land/posts/v1.4#codedeno-run---watchcode)._

Nodemon, or as I read it in my head _Nodémon!_, is a utility for restarting Node.js processes when the source changes. It's is the first dev dependency I add when working in Node, because it is so handy!

Deno, the secure runtime for JavaScript and TypeScript, doesn't work with Nodemon. When I first started building with Deno, I was reminded just how annoying it is to stop and start your server whenever there is a change.

[Enter **denon**](https://deno.land/x/denon), the "replacement" for Nodemon in Deno land. As long as you're using `deno@^1.0.1`, you can get all the goodness of automattic restarting with denon.

## Install

You can install denon with Deno's `install` command:

```shell
deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@v2.2.0/denon.ts
```

That command installs denon version `2.2.0`, so reference [the documentation for the most up-to-date instructions](https://deno.land/x/denon#install).

## Simple usage

Once you have denon installed, you can use it as a straight replacement for all `deno` commands:

```shell
# With Deno
deno run --allow-net https://deno.land/std/examples/echo_server.ts

# With denon
denon run --allow-net https://deno.land/std/examples/echo_server.ts
```

This is the same behavior as `node/nodemon`. But running external code doesn't really illustrate the value of denon.

To see it in action, copy `echo_server.ts` locally and then run with denon:

```shell
denon run --allow-net echo_server.ts
```

Now when you make any changes to the source, you will see denon automatically restart the server.

## Configuration

My favorite feature of denon is its configuration file: `denon.json`. With it, you get some of the "scripts" features of Node.js's `package.json` that are currently missing in Deno.

To create a configuration file, you can call denon with the `--init` flag:

```shell
denon --init
```

This will create a `denon.json` file where you can include scripts with commands, permissions, and environment variables.

We can create a "start" script for the `echo_server.ts` like so:

```json
{
  "$schema": "https://deno.land/x/denon/schema.json",
  "scripts": {
    "start": {
      "cmd": "deno run echo_server.ts",
      "desc": "Start echo_server in watch mode",
      "allow": ["env", "net"],
      "env": {
        "PORT": "2525"
      }
    }
  }
}
```

Our "start" script has a command, description, permissions to allow, and an environment variable `PORT` that we are passing to our server.

To run the script, type:

```shell
denon start
```

And you're off to the races! I love the ability to start a Deno process without typing all those permissions. :chefs-kiss:

## Learn more

The [denon documentation](https://deno.land/x/denon) lists the full feature set and includes a bunch of helpful examples. Make sure to check that out when setting up denon on your next Deno project.

Happy coding!
