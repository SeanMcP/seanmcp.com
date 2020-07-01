---
title: What to include in every node module
description: 
date: 2020-02-03
tags:
    - node-modules
layout: article
---

All that is required to publish a node module is a `package.json` file with a few fields. However, there are more components to a good package.

Here are a few things to include in every node module that you publish:

- [README.md](#readme.md)
- LICENSE
- CHANGELOG.md
- Scripts
    - postpublishOnly

## `README.md`

A README contains all the information necessary to use your node module. They come in all shapes and sizes: decorated, detailed, and simple. But they all need to include a one important detail: **how to use the package**.

There are many ways to create a good README, I like the format set out by ["Make a README"](https://www.makeareadme.com/).