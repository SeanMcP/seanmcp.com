---
title: "Fix static file endpoints after Astro v4 upgrade"
description:
  I needed to change the name of the exported function and make sure that it was
  returning a Response or Promise<Response>.
tags:
  - Articles
  - Astro
  - Fix
date: 2024-03-19T06:03-0400
verse: Romans 3:23-24
---

Yesterday I
[upgraded to Astro v4 without any issues](/articles/upgrading-from-astro-v2-to-v4),
but this morning I noticed that my RSS feed was broken.

I have two static file endpoints that generate a file at build time, one for RSS
and the other for a webfinger. Both of these had two issues highlighted after
the upgrade:

1. The files did not export a `GET` function
2. The files did not return a `Response` or `Promise<Response>`

The first issue was resolved by capitalizing the previously-valid `get` function
to `GET`.

The second issue required an update to the `@astrojs/rss` dependency which now
returns a `Promise<Response>`. The webfinger endpoint is custom, but all I
needed to do was wrap my return value with a `Response` object:

```js
// Before
return { body: JSON.stringify(data, null, 2) };

// After
return new Response(JSON.stringify(data, null, 2));
```

The webfinger issue is easy to miss (and nonconsequential), but I should have
verified that the RSS feed was working before shipping the upgrade. Lessons
learned!
