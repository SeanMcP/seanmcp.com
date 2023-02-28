---
title: Fix Astro dev server hanging with new collections API
description:
  The issue for me was calling useCollection on an entry with a layout.
tags:
  - Astro
  - Debugging
pubDate: 2023-02-11T18:08:48.815Z
---

This week I was in the process of upgrading this site to
[Astro v2](https://astro.build/blog/astro-2/) and its new features. Upgrading to
version 2 went smoothly, but I encountered a frustrating problem adopting the
[new content collections API](https://docs.astro.build/en/guides/content-collections/).

I repeatedly hit an issue where the Astro dev server will hang after calling
`getCollection` from `astro:content`. The hardest part is that there are no
errors in the browser or console – just an endless spinner when you try to load
the page.

I though that maybe a solution was to
[manually clear Vite’s cache](https://vitejs.dev/guide/dep-pre-bundling.html#caching)
before restarting the dev server, which was as sophisticated as
`rm -rf node_modules/.vite`. This _may have_ resolved the issue a few times, but
everything was so intermittent that I can’t say for sure.

On the Astro Discord, I posed a question to see if anyone else had encountered a
similar issue. One of the devs linked to
[this issue on GitHub](https://github.com/withastro/astro/issues/6173) which
described a similar scenario. The problem there is a page _and_ its layout
calling the same collection.

Looking back to my code, I couldn’t see where that was happening, but I decided
to remove all the `layout` prop from the entries in that collection. (I wanted
to do this anyway, since moving to content collections made a separate layout
unnecessary.)

After those changes, the hanging dev server issue resolved itself. I’m glad to
have found a fix, thought it would probably be good for Astro to recommend _not_
using layouts for content collections.

Onward!
