---
title: Logging with Eleventy and Nunjucks
description: Adding a simple filter to save you a lot of grief.
date: 2020-05-12T12:00-0400
tags:
  - Articles
  - Eleventy
  - Nunjucks
verse: 1 Kings 5:10
---

This site was forked from the
[Eleventy base blog](https://github.com/11ty/eleventy-base-blog) and uses
[Nunjucks templates](https://mozilla.github.io/nunjucks/). When everything is
working, it is as smooth as can be. But when I run into an issue, I often find
it difficult to debug.

Recently I was trying to do some logical rendering based on article tags. I knew
the information was at my finger tips, but I couldn't guess the right key. **All
I need is a simple `console.log()`**!

I searched combinations like "debugging in eleventy" and "console logging in
nunjucks", but none of the suggestions quite worked. But they did give me an
idea: a custom filter for logging.

Opening up `.eleventy.js`, I added the following lines:

```js
eleventyConfig.addFilter("log", (value) => {
  console.log(value);
});
```

With that, I could then use the `log` filter in my Nunjuck template:

```
{{ article | log }}
<li class="article"> ... </li>
```

Now I had Eleventy logging the entire article object in the terminal! Exactly
what I needed.

I tinkered around with returning a `<script>` from the filter to log on the
client too, but that required `JSON.stringify()` and piping the result into the
`safe` filter. That was more than I wanted to mess with, but there might be a
solution there that works for you.

Happy coding!
