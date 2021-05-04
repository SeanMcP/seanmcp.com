---
title: Handy git commands
description: A curated collection of git commands that help me do my job better
date: 2021-05-04
tags:
    - garden
    - git
verse: Hebrews 5:9
# /img/<IMAGE>.min.jpg
image:
---

Here are some of the git commands that I find useful when doing by work as a software engineer. Hopefully you will find them helpful too!

## Commands

### `git checkout -`

Quick reference: Checkout the previous branch

This is super handy when working with long or unwieldy branch names. With the `-` reference, you can convert the following set of commands into a reusable alias:

```shell
git checkout dev && git pull && git checkout - && git merge dev
```

### `git diff branch_name -S "TODO:"`

Search the diff between the current branch and `branch_name` for all strings matching `TODO:`

When working on a new feature, I like to leave myself todos to address before the branch is merged. Tracking these down can be tricky because there are other `TODO:`s in the codebase. I used to `grep` through the diff, but git's `-S` flag is much easier.

### `git diff branch_name -G "/*-action"`

Search the diff between the current branch and `branch_name` for all strings matching the `/*-action` RegEx pattern

Similar to the `-S` flag, `-G` lets you search through the diff using RegEx. I don't know too much about regular expressions, but it's nice to have the option in your toolbelt.

---

Let me know if you have [any commands to add to the list](mailto:sean@seanmcp.com?subject=Git%20commands).

Happy versioning!