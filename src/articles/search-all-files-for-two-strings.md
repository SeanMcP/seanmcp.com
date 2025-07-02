---
title: Search all files for two strings
description:
  A terminal command to search for all the files in the current directory that
  contain two independent strings.
date: 2021-02-15T12:00-0400
tags:
  - Articles
  - Shell
---

To search the current directory for all files that contain two independent
strings, you can use the following terminal command:

```shell
grep -lr "common" $(grep -lr "rare" .)
```

In essence, this is saying "Recursively find all the files in the current
directory with the string `rare`, and then look through those files to find any
with the string `common`.

Depending on the directory, you may want to limit the number of directories that
`grep` has to inspect. For me, that often includes directories like
`node_modules/` and `cache`. Here's the same command with a few excluded
directories:

```shell
grep -lr "common" $(grep -lr --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=build --exclude-dir=cache "rare" .)
```

The order of the strings does matter, but putting the less commonly occurring
string second is a little more efficient.

Happy searching!
