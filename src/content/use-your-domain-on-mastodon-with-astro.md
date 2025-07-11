---
title: Use your domain on Mastodon with Astro
description:
  A quick guide on using an Astro endpoint to generate the webfinger you need to
  use your domain on Mastodon.
tags:
  - Articles
  - Astro
  - Mastodon
date: 2022-11-18T09:29-0400
---

**Update**: The solution in this article still works, but I think using a
[redirect as described here](https://www.hawksworx.com/blog/alias-your-mastodon-username-to-your-domain-with-one-netlify-config-setting/)
is probably a better option.

Maarten Balliauw shared a cool strategy for using your own custom domain as a
reference to your Mastodon account. He explains it better than I can summarize,
[so take a look at his article first](https://blog.maartenballiauw.be/post/2022/11/05/mastodon-own-donain-without-hosting-server.html).

I wanted to try it out, but I'd prefer if the process was automated in my site's
build process. Thankfully, [Astro](https://astro.build) has an API for
generating arbitrary files on build with
[endpoints](https://docs.astro.build/en/core-concepts/endpoints/).

In your Astro site, create a new file called
`src/pages/.well-known/webfinger.ts` and paste the following code block

```ts
const INSTANCE = "indieweb.social";
const USERNAME = "seanmcp";

/**
 * This endpoint adds a webfinger JSON file to your site so that you can use
 * your domain as a reference to your Mastodon account.
 */
export async function get() {
  const response = await fetch(
    `https://${INSTANCE}/.well-known/webfinger?resource=acct:${USERNAME}@${INSTANCE}`
  );
  const data = await response.json();
  return { body: JSON.stringify(data, null, 2) };
}
```

<call-out type="info">

Make sure to swap out the values for your Mastodon instance and username!

</call-out>

When you trigger a build, Astro will run the `get()` function which grabs the
webfinger information from your Mastodon instance and outputs it in the correct
`/.well-known/webfinger` location.

With that in place, you can now use your domain as a reference to your Mastodon
account.

Enjoy!
