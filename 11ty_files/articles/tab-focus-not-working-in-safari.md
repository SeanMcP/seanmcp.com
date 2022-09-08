---
title: Tab focus not working in Safari?
description: For some unknown reason, you need to enable tab highlighting in the browser's settings.
date: 2020-08-04
tags:
    - browsers
    - accessibility
    - safari
verse: Psalm 2:6
# /img/<IMAGE>.min.jpg
image:
---

While doing some cross-browser testing in Safari, I noted that <kbd>tab</kbd> was not working as expected. I was looking at a focus-managed component, so my first thought was that I had done something in my JavaScript that did not work in Safari.

After trying to debug the issue for a few minutes, I finally noticed that **<kbd>tab</kbd> wasn't working anywhere**, not just my component. This was both a relief (it wasn't me!) and a mystery. How could tab not work?

A quick Google search for "Safari tab order" lead me to this StackOverflow question and answer: [_Safari ignoring tabindex_](https://stackoverflow.com/questions/1848390/safari-ignoring-tabindex).

As it turns out, Safari does not enable tab highlighting by default. To turn it on:

1. Go to "Preferences"
2. Select the "Advanced" tab
3. Check "Press Tab to highlight each item on a webpage"

With that setting enabled, <kbd>tab</kbd> worked as I expected. [Thanks `graphicdivine`](https://stackoverflow.com/a/1914496/8486161)!

While you're fiddling with settings, the A11y Project has a guide for [enabling browser keyboard navigation on macOS](https://www.a11yproject.com/posts/2017-12-29-macos-browser-keyboard-navigation/) that is worth checking out.

Setting you computer up for accessibility testing makes it that much easier to ensure that you're building a product that will work for everyone.

Happy tabbing!
