---
title: Axe DevTools doesn't flag multiple h1 elements on a page
description:
  Rendering multiple h1 elements on a page isn't technically an issue, but you
  probably want to avoid it anyway. Here I explain how to configure a snippet in
  your browser to check the heading levels on a webpage.
date: 2025-07-16T14:40-0400
tags:
  - Articles
  - A11y
  - DevTools
flags:
verse:
prose: true
---

The
[axe DevTools extension](https://www.deque.com/get-started-axe-devtools-browser-extension/)
is valuable for testing the quality of your work. I use it multiple times per
day when working on frontend tasks. So I was surprised today when I learned that
axe does not consider multiple `h1` elements on a page an issue.

It turns out that this is intentional. There is no rule stating that pages
cannot have more than one `h1`–even if it is widely considered best
practice^[Axe's has a "Best Practices" option, but that doesn't flag it
either.].
[The A11y Project has a nice write up on the topic](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/#one-h1).

Even though axe doesn't consider it an issue, I still want to avoid rendering
more than one `h1` on a page.
[I previously wrote a little script to print all of a webpage's headings to the console](https://gist.github.com/SeanMcP/ed0ad9685b0a7aa78b457f4301fb37de),
and I wanted to make that as easy to use as axe. Thankfully we can do that with
[Chromium's snippets API](https://developer.chrome.com/docs/devtools/javascript/snippets)^[I
couldn't find an equivalent for Firefox (and didn't check Safari). If I've
missed it, let me know and I'll update this article to include information for
other browsers.].

1. Open the browser devtools
2. Select the "Sources" panel
3. In the left-hand panel, select the "Snippets" tab (it might be hidden in the
   caret menu)
4. Select "New snippet"
5. Name it something like "Print headings"
6. Paste the code from my gist:
   ```js
   document
     .querySelectorAll("h1,h2,h3,h4,h5,h6,[role=heading][aria-level]")
     .forEach((node) => {
       let level = node.getAttribute("aria-level") || node.tagName[1];
       let prefix = " ".repeat(parseInt(level) - 1);
       console.log(`${prefix}${level}: ${node.textContent}`);
     });
   ```
7. Save the snippet

You can run snippets from the Sources panel, but the faster way is to use the
keyboard shortcut:

1. In the browser devtools, press <kbd>ctrl/cmd</kbd>+<kbd>o</kbd> to open the
   command menu
2. Type "!" to bring up the list of snippets
3. Select your snippet from the list
4. Press <kbd>enter/return</kbd> to run it

The snippet will execute and print all of the headings on the page to the
console.

You could do more in your version of the snippet like validating the existence
of a single `h1` or the heading order. For me, having it print the headings is
good enough to spot check my work.
