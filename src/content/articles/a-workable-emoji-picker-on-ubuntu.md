---
title: A workable emoji picker on Ubuntu
description:
  The default GNOME emoji picker is limited to certain applications, but you can
  find copyable emojis in the Activities view
tags:
  - Linux
  - Ubuntu
pubDate: 2023-07-05T11:25:00.554Z
verse: Luke 5:24
---

[I like to use emojis](https://github.com/SeanMcP?tab=repositories&q=emoji&sort=stargazers)
and have missed them since moving to Linux/Ubuntu. They render fine, but there
isn’t a good way to input emojis into a field like on macOS and Windows.

Technically there is a native GNOME emoji picker, but it only works with
“[supported GTK 3 applications](https://itsfoss.com/ubuntu-emojis/)” and I don’t
use
[any of those regularly](https://en.wikipedia.org/wiki/List_of_GTK_applications).
I tried installing a few third-party options, but none of them worked well.

I thought that I was resigned to not using emojis often on Linux, when one day I
discovered suggested emojis in the
[Activities overview’s](https://help.ubuntu.com/stable/ubuntu-help/shell-introduction.html.he#activities)
search results.

Here are the steps that work for me:

1. Press the super key (formerly Windows)
2. Type the name of the emoji: _e.g._ turtle
3. Select the emoji result from the Characters application to copy to clipboard
   - In addition to your mouse, you can use <kbd>tab</kbd> and the up/down arrow
     keys to navigate the options 🙌
4. Paste the emoji in your application

This process is not perfect: there are some emojis that are hard to find by
name, and the lack of browsing makes discoverability a challenge. However, it’s
definitely good enough for me for now.

It would be nice if all applications could use the GNOME emoji picker, but I’m
too new here to know if that is even possible. A man can dream.
