---
title: Handy git commands
description: A curated collection of git commands that help me do my job better
date: 2021-05-04T12:00-0400
tags:
  - Garden
  - Git
verse: Hebrews 5:9
---

Here are some of the git commands that I find useful when doing by work as a software engineer. Hopefully you will find them helpful too!

## Commands

### `git checkout -`

Quick: Checkout the previous branch

This is super handy when working with long or unwieldy branch names. With the `-` reference, you can convert the following set of commands into a reusable alias:

```shell
git checkout dev && git pull && git checkout - && git merge dev
```

### `git checkout -- .`

Quick: Delete all changes in the current branch

When you just want to start from scratch on the current branch, this command is a huge timesaver. The `--` refers to the current branch, while the `.` refers to all files. If you want to reset a particular file, you could swap the name with the `.`.

### `git commit -m "init" --allow-empty`

Quick: Create a commit with no changes

When starting on a development task, sometimes it's nice to set up branches and PRs before getting started on the work. The `--allow-empty` flag enables you to create commits without changing any files.

I use this when I have a feature branch that will be the target of bunch of smaller branches. Initializing a those with an empty commit helps be get organized in the beginning. 

### `git diff branch_name -S "TODO:"`

Quick: Search the diff between the current branch and `branch_name` for all strings matching `TODO:`

When working on a new feature, I like to leave myself todos to address before the branch is merged. Tracking these down can be tricky because there are other `TODO:`s in the codebase. I used to `grep` through the diff, but git's `-S` flag is much easier.

### `git diff branch_name -G "/*-action"`

Quick: Search the diff between the current branch and `branch_name` for all strings matching the `/*-action` RegEx pattern

Similar to the `-S` flag, `-G` lets you search through the diff using RegEx. I don't know too much about regular expressions, but it's nice to have the option in your toolbelt.

### `git log --before="2021-01-01 00:00"`

Quick: Limit the log output to all commits before the provided date.

This is handy when you want to look at commits from a particular date or before a date (and/or after with `--after=`).

---

Let me know if you have [any commands to add to the list](#comment-link).

Happy versioning!
