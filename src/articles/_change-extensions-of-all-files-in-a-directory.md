---
title: Change extensions of all files in a directory
description: 
date: 2020-12-17
tags:
    - 
verse:
# /img/<IMAGE>.min.jpg
image:
---

```sh
for f in *.jsx; do mv -- "$f" "${f%.jsx}.tsx"; done
```