---
title: "Fix Netlify Dev's 'Multiple possible start commands found' issue"
description:
  You need to include additional properties in your netlify.toml to get it
  working correctly.
image:
tags:
  - Debugging
  - Netlify
pubDate: 2022-11-29T11:40:33.833Z
---

Netlify Dev attempts to guess what framework your project is using and what
commands it should run in development.

```shell
$ netlify dev

◈ Netlify Dev ◈
◈ Ignored general context env var: LANG (defined in process)
◈ Ignored general context env var: LC_ALL (defined in process)
? Multiple possible start commands found (Use arrow keys or type to search)
❯ [Astro] 'npm run dev'
  [Svelte] 'npm run dev'
  [Svelte] 'npm run build'
```

[Reading the Netlify documentation](https://docs.netlify.com/configure-builds/file-based-configuration/#netlify-dev),
it seems like you should be able to resolve this by adding a `[dev]` section to
your `netlify.toml` file.

```toml
<!-- This doesn't work -->
[dev]
    command = "npm run dev"
```

However, that alone **does not work**.
[There is a "closed" issued that describes the behavior](https://github.com/netlify/cli/issues/410),
but essentially the Netlify CLI doesn't read the `command` even though you've
set it.

Thankfully,
[someone contributed an actual solution](https://github.com/netlify/cli/issues/410#issuecomment-1046147453)
that only requires a few more details:

```toml
[dev]
    command = "npm run dev"
    framework = "#custom"
    targetPort = 3000
```

`framework` needs to be set to `"#custom"` and you need to manually set the port
that your dev server typically runs on. With Astro, that is port `3000`.

With that configured, everything works as expected:

```shell
$ npx netlify dev

◈ Netlify Dev ◈
◈ Ignored general context env var: LANG (defined in process)
◈ Ignored general context env var: LC_ALL (defined in process)
◈ Setting up local development server
```

Happy coding!
