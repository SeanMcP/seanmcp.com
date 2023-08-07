---
title: Run Netlify CMS and your dev server in one command
description: The npm-run-all package allows you to run multiple scripts from
  your package.json in parallel
pubDate: 2022-11-29T06:54-0400
tags:
  - Netlify
---
If you're using [Netlify CMS](https://netlifycms.org), there is a command that you can run to load it in development:

```shell
npx netlify-cms-proxy-server
```

This is useful, but it needs to be run in a separate terminal window to your development server. I use VS Code, which has easy split terminal windows, but it's still a little annoying to have to fire up two processes when you want to get to work.

```shell
# Window 1
npm run dev
```

```shell
# Window 2
npx netlify-cms-proxy-server
```

An ideal solution would be to run a single command that runs both scripts in parallel, so that you can focus on working as opposed to setting things up.

Thankfully for us, [`npm-run-all` is the perfect solution](https://npm.im/npm-run-all) for this. First we install it as a dev dependency:

```shell
npm i -D npm-run-all
```

Then add a new script to our `package.json`:

```json
{
    "scripts": {
        "cms": "npx netlify-cms-proxy-server",
        "dev": "astro dev",
        "dev:cms": "npm-run-all --parallel cms dev"
    }
}
```

Now when you want to run Netlify CMS alongside your development server, you just need to a single command:

```shell
npm run dev:cms
```

Happy coding!