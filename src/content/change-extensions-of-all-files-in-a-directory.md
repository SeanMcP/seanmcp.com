---
title: Change extensions of all files in a directory
description: A little Bash script to rename all files from `.jsx` to `.tsx`
date: 2020-12-17T12:00-0400
tags:
  - Articles
  - WIP
---

```shell
for f in *.jsx; do mv -- "$f" "${f%.jsx}.tsx"; done
```
