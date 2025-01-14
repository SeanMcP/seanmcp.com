---
title: Checkout the previous git branch
description: Using a git shorthand to checkout the most recent branch
date: 2021-01-22T12:00-0400
tags:
  - Git
  - Productivity
  - TIL
verse: Daniel 6:10
---

Today I needed to checkout a branch, pull the latest, then checkout `dev`, pull the latest, and merge `dev` into my branch.

This flow is pretty typical of my work, but I wondered: is there an easier way to go back to the previous branch in git?

Turns out there is, and [StackOverflow came to the rescue](https://stackoverflow.com/a/7207542/8486161):

```shell
git checkout -
```

This command will checkout the most recent branch. For more of an explanation, read the full response on StackOverflow.

To complete the steps above, I could run the following commands:

```shell
git checkout feature/branch-with-a-long-name
git pull
git checkout dev
git pull
git checkout -
git merge dev
```

If I can remember that command, it will be more efficient that going back through my command history. Hope that helps you too!

Happy version controlling!