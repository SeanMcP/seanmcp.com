---
layout: "@layouts/ArticleLayout.astro"
title: Add text to the beginning of every file
description: Using a shell script to add a line to every file with a given extension
pubDate: 2020-12-18
tags:
    - Scripting
    - Shell
verse: Genesis 1:1
# /img/<IMAGE>.min.jpg
image:
---

While converting a JavaScript `create-react-app` project to TypeScript, I wanted a single line of text to every `.tsx` file. Searching for an answer brought me to [this question on StackExchange](https://superuser.com/questions/246837/how-do-i-add-text-to-the-beginning-of-a-file-in-bash), specifically [this answer](https://superuser.com/a/521654).

Using `echo` and `cat`, you can add new text to the old file's contents and send it to the original file. Combined with a `for` loop to iterate over the matching files, I came up with a one-liner^[Okay, with the newline it's kind of a two-liner, but you can copy and paste it directly into the command line.] that saved me a lot of time:

```shell
for f in **/*.tsx; do echo "// @ts-nocheck
$(cat "$f")" > "$f"; done
```

This script looks for all `.tsx` files in any directory, then adds `// @ts-nocheck` and a newline to the beginning of the file. But there is nothing magic about the selector or added text; you can use whatever you want for those values.

Hope that saves you a bit of time too!

Happy scripting!