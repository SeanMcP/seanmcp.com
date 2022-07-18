---
title: Change extensions of all files in a directory
description: A little Bash script to rename all files from `.jsx` to `.tsx`
date: 2020-12-17
tags:
    - wip
verse:
# /img/<IMAGE>.min.jpg
image:
---

```shell
for f in *.jsx; do mv -- "$f" "${f%.jsx}.tsx"; done
```
