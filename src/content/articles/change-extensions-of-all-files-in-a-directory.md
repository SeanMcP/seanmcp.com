---
title: Change extensions of all files in a directory
description: A little Bash script to rename all files from `.jsx` to `.tsx`
pubDate: 2020-12-17
tags:
    - WIP
---

```shell
for f in *.jsx; do mv -- "$f" "${f%.jsx}.tsx"; done
```
