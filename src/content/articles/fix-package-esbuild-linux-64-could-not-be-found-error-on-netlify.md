---
title: Fix "package esbuild-linux-64 could not be found" error on Netlify
description: I don't know how applicable this solution will be to your
  situation, but it worked for me!
pubDate: 2022-12-14T15:37:56.186Z
tags:
  - Debugging
  - Netlify
  - Error
---
This morning my website's builds started failing on Netlify. Checking the deploy logs, I saw the following error:

```
10:29:09 AM: [astro:jsx] The package "esbuild-linux-64" could not be found, and is needed by esbuild.
10:29:09 AM: If you are installing esbuild with npm, make sure that you don't specify the
"--no-optional" flag. The "optionalDependencies" package.json feature is used
10:29:09 AM: by esbuild to install the correct binary executable for your current platform.
```

[There is a closed issue about it in `esbuild`](https://github.com/evanw/esbuild/issues/1819), but there wasn't a definite fix. Seems to be a problem related to dependencies built for different platforms.

I had recently encountered some merge conflicts in `package-lock.json` (RIP) and thought that might have been it. But generating the file again had no effect on the error, and neither did running `npm audit fix`.

The last thing I tried was to delete `package-lock.json` entirely and commit that. Without the lock file, Netlify was able to install the correct dependencies and deploy the site. So... solved?

That will work for me and my personal site, but if you are working on project with multiple developers in a more high-stakes environment, then you'll probably want to keep looking for a more permanent solution.

I'll make sure to update this article if the issue arises again.

Happy debugging!