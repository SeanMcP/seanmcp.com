---
title: How to check npm scripts in current directory
description: Writing a script to read the package.json for you
date: 2020-02-06T12:00-0400
update: 2020-04-14
tags:
  - JavaScript
  - Scripting
verse: "1 Timothy 2:5"
image: /img/screenplay.min.jpg
---

As a front-end engineer, I spend a lot of time jumping in-between JavaScript projects. Often times I want to run a command from those projects to start watchmode or spin up a service.

The commands that I want to use are in the `package.json` under `"scripts"`. When I haven't memorized the common commands, I need to either open the file in my editor or use a Unix utility like `cat`.

```bash
# In my editor
code package.json

# In the terminal
cat package.json
```

Both of these commands work, but they are slow. `package.json` files can be massive, including dozens of dependencies, dev depenendencies, and other fields. To find the scripts, I need to sort through the cruft to find the information that I want. This isn't very efficient.

Instead, I wrote a short bash scripts to quickly do the work for me. Here is the code in all of its glory:

```bash
#!/bin/bash

if [[ -f "package.json" ]]; then
    node -pe "JSON.parse(require('fs').readFileSync('package.json').toString()).scripts"
else
    echo "There is no `package.json` in this directory"
fi
```

First, I let the computer know to run this file with bash. Then I set up an `if` block: if there is a `package.json` file in this directory, then run the following code; if not, then print a "can't find it" message.

The code to run, inspired by [a StackOverflow comment](https://stackoverflow.com/questions/1955505/parsing-json-with-unix-tools#comment36088507_18469304), is a node process with two flags:

- `-e` tells node to evaluate the script that you pass
- `-p` tells node to print the results to the console

Within the script, I am using `JSON` to parse the results of a `fs.readFileSync()` of the `package.json`, then diving down to the `scripts` key.

I set it up by running `chmod` with two flags on the file in a `scripts/` directory:

```bash
chmod u+x ~/scripts/npm-scripts
```

Then I could resource my terminal and run the command with `npm-scripts`. Bish bash bosh.

Everything worked fine, but I wanted an easier way to share my script with others. The `chmod` command and flags are hard to remember, so it would be easier if the script could be compressed into a one-liner that could be aliased in their `~/.bash_profile`.

To do that, I removed all the new lines and added semicolons to separate the statements. The alias needed to be wrapped in quotes, so I escaped all the double quotes within the script.

Now I had a handy alias to share:

```bash
alias ns="if [[ -f \"package.json\" ]]; then node -pe \"JSON.parse(require('fs').readFileSync('package.json').toString()).scripts\"; else echo \"There is no package.json in this directory\"; fi"
```

Overall, I'm pretty happy with this utility. Going forward, I would like to extend it so that you can lookup and key on `package.json` by passing an argument.

## Update – Apr 4, 2020

I created a new script to which you could pass an argument to pick a key from the `package.json`. This script is in zsh, but I think it ports to bash:

```bash
# rpj - Read package.json
function rpj () {
  if [[ -f "package.json" ]]; then
      node -pe "JSON.parse(require('fs').readFileSync('package.json').toString())['$1' || 'scripts']"
  else
      echo "There is no `package.json` in this directory"
  fi
}
```

Note how the shell arguments need to be wrapped in `''` in order to work. Otherwise JavaScript thinkgs that it is looking for a variable, which is undefined.

If no argument is provided, then it falls back to printing the scripts which is probably the most common use case for me.

I also named the new function `rpj` for "Read `package.json`" to avoid any [confusion with name servers](https://en.wikipedia.org/wiki/Name_server).

For the next iteration, I would like to handle errors, but that is a project for another day.