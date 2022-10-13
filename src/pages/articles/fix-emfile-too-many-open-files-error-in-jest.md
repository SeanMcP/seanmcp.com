---
layout: "@layouts/ArticleLayout.astro"
title: "Fix 'EMFILE: too many open files' error in Jest"
description: When trying to run Jest in watch mode, this error may mean that you are missing a dependency.
pubDate: 2020-07-29
tags:
    - Debugging
    - Error
    - Jest
verse: Psalm 127:1
# /img/<IMAGE>.min.jpg
image:
---

When I tried to run `jest --watch` in a codebase, I received the following error:

```shell
Error: EMFILE: too many open files, watch
    at FSEvent.FSWatcher._handle.onchange (fs.js:1372:28)
Emitted 'error' event at:
    at NodeWatcher.checkedEmitError (/Users/seanmcp/dev/REPO/node_modules/sane/src/node_watcher.js:143:12)
    at FSWatcher.emit (events.js:182:13)
    at FSEvent.FSWatcher._handle.onchange (fs.js:1378:12)
```

A Google search of the error message produced three (!) results. [The second was a PDF from Mozilla](https://buildmedia.readthedocs.org/media/pdf/delivery-console/stable/delivery-console.pdf) that recommended installing [`watchman`](https://facebook.github.io/watchman/).

## Why `watchman`?

Watchman is a file-watching service from Facebook that will respond to changes in your files. Jest (also by Facebook) [default to using watchman in `--watch` mode](https://jestjs.io/docs/en/cli#--watchman).

[Watchman is available on all major platforms](https://facebook.github.io/watchman/docs/install.html). On a Mac or Linux with Homebrew installed, you can run:

```shell
brew install watchman
```

With that installed, Jest's `--watch` flag works as expected.

I hope that works for you (and saves you some valuable time)!

Happy testing!