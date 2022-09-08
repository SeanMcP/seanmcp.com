---
title: See all package versions in npm cli
description: How to use npm view to see all the published versions of a package on the registry.
date: 2020-12-09
tags:
    - npm
    - cli
verse: Psalm 34:8
# /img/<IMAGE>.min.jpg
image:
---

At work, I ran into an issue that may have been related to an external dependency. I wanted to update the package to see if a future release fixed the issue.

To get the latest version of a package, you can use the `@latest` tag:

```shell
npm i package-name@latest
```

But what if you need the next most recent release? Or five versions ago? I wanted to see a list of published versions without having to leave the command line.

A quick search led me to [_Viewing All Versions of an NPM Package (Including Pre-Release)_](https://willi.am/blog/2015/07/17/viewing-all-versions-of-an-npm-package-including-pre-release/) by Will Anderson. He pointed to the `npm view`^[Anderson used the alias `npm show`] command and illustrated how to use it:

```shell
npm view package-name versions
```

This will print all of the published versions of any package on the registry. Pretty handy!

Anderson mentions that this was undocumented in 2015, but today we have [a page dedicated to the `view` command on npm](https://docs.npmjs.com/cli/v6/commands/npm-view).