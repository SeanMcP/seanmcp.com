---
title: Upgrading an Eleventy site to 1.0.0
description: Make sure the you are using Node.js version 12 or later
date: 2022-01-18T12:00-0400
tags:
  - Articles
  - Eleventy
---

I initially published a [note](/notes) about how easy it was to upgrade to
Eleventy `1.0.0`, but I hit a snag which warrants a quick article. Here are the
two steps that I needed to complete to update this website to the latest version
of Eleventy.

First, update `@11ty/eleventy` with the following command:

```shell
npm i -D @11ty/eleventy@latest
```

After updating that, both the `start` and `build` scripts for the site worked as
expected.
[There are breaking changes to be aware of](https://github.com/11ty/eleventy/releases/tag/v1.0.0),
so your mileage may vary.

I took the time to update some other dependencies and pushed the changes to
GitHub. I have the repo connected to Netlify for CI/CD, which usually works
without a hitch. Today, however, I noticed that the build failed with the
following log:

```
10:03:16 AM: $ eleventy
10:03:16 AM: Eleventy requires Node 12. You will need to upgrade Node to use Eleventy!
10:03:16 AM: ​
10:03:16 AM: ────────────────────────────────────────────────────────────────
10:03:16 AM:   "build.command" failed
10:03:16 AM: ────────────────────────────────────────────────────────────────
10:03:16 AM: ​
10:03:16 AM:   Error message
10:03:16 AM:   Command failed with exit code 1: eleventy
```

There weren't any build configurations in Netlify for Node.js version, but a
quick search led me to
[this guide on managing build dependencies](https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript).
Good documentation; another reason to use Netlify!

I added an environment variable for `NODE_VERSION` and set it to the current
Node.js LTS (`16.13.2` as of writing), and the build was successful.

Regardless of your setup, just make sure that you are using Node.js version `12`
or later and you should be good to go. <e-moji>🚀</e-moji>

Happy upgrading!
