---
title: Check npm scripts in current directory
description: 
date: 2020-02-06
tags:
    - scripting
    - javascript
verse:
layout: article
---

```
#!/bin/bash

if [[ -f "package.json" ]]; then
    node -pe "JSON.parse(require('fs').readFileSync('package.json').toString()).scripts"
else
    echo "There is no `package.json` in this directory"
fi
```

One liner alias:

```
alias ns="if [[ -f \"package.json\" ]]; then node -pe \"JSON.parse(require('fs').readFileSync('package.json').toString()).scripts\"; else echo \"There is no package.json in this directory\"; fi"
```