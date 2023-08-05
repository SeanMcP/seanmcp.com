---
title: Copy the last git commit hash on macOS
description: A one liner to copy the last commit hash to the clipboard on a Mac
pubDate: 2021-03-24T12:00-0400
tags:
    - macOS
    - Shell
    - Terminal
verse: Hebrews 8:5
---

When responding to code-review requests, I like to point the reviewer to the specific commit where the issue was addressed with a message like:

> Fixed in 4908c91a06258814077b1358210eb78cc718609c

GitHub will automatically detect the hash, shorten it, and convert it into a link to the commit view.

Rather than going into `git log` and copying the hash manually, I use the following one-liner in the terminal on macOS:

```shell
git rev-parse HEAD | pbcopy
```

The first half of the command returns the last commit hash from [`HEAD`](https://git-scm.com/book/en/v2/Git-Internals-Git-References#ref_the_ref), which is a reference to the current branch. You could use `git rev-parse name_of_branch` too, but that is often longer to type.

The output of `git rev-parse` is then piped to [`pbcopy`](https://ss64.com/osx/pbcopy.html), the clipboard utility for macOS. If you were using a different platform like Unix or Windows, there are [other options for you](https://stackoverflow.com/questions/749544/pipe-to-from-the-clipboard-in-bash-script).

To save some more time, I added an alias my shell's rc file:

```shell
# git last commit (hash)
alias glc="git rev-parse HEAD | pbcopy"
```

Happy copying!
