---
title: Staring content
description: A write-up on the new star feature on seanmcp.com
date: 2022-07-13T15:49:15.021Z
tags:
  - meta
  - javascript
image: https://im3.ezgif.com/tmp/ezgif-3-bd084e1dff.jpg
---
In June, I added a new feature to this site: stars. Now whenever you <kbd>command</kbd> or <kbd>windows</kbd> click anywhere on the site, a little star emoji ⭐️ is added. When you navigate to that page again, the star will be there waiting for you. If you ever want to remove a star, click it and it will vanish.

Try it out by adding a new star here 👉

My thought was that stars could mark specific portions of an article or page that were helpful so that you can quickly find that location again. This is similar to Medium's highlight feature, but the data is saved to `localStorage` instead of an external database. As a result, stars are for your eyes only.

To implement this feature, I added a new `localStorage` key called `com.seanmcp.stars` where I keep a map of pathnames and an array of star coordinates. Whenever you navigate on my site, `stars.js` looks to see if there are any stars for that pathname and renders them if present.

I added a new click event listener that handles the logic of adding and removing stars. To check to see if the <kbd>command</kbd> or <kbd>windows</kbd> key is pressed, you can [reference the readonly `metaKey` property on the event](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/metaKey). You can see all of [the source code for this feature on GitHub](https://github.com/SeanMcP/seanmcp.com/blob/master/src/js/stars.js).

It was fun to add a new feature, but I'm realistic about how popular it will be. The meta + click combination is not discoverable, so it will remain a fun surprise for readers who find it.

Let me know if you have any thoughts about the feature or how to improve it.

Happy starring!
