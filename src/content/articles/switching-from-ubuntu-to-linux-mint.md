---
title: "Switching from Ubuntu to Linux Mint"
description:
  I switched for performance reasons on an older device, and so far Linux Mint
  seems to be an improvement
tags:
  - Linux
  - Linux Mint
  - Ubuntu
pubDate: 2024-03-06T13:24-0400
verse: Matthew 23:23
---

Ubuntu was running slow on my old personal laptop. Previously I had turned to
Lubuntu, but I read online that Linux Mint has slighly better performance on
low-powered devices. So with a free morning I decided to give that a go.

Setup steps:

1. Customized the colors and wallpaper
1. Switched trackpad scroll from "Reversed" to normal (_i.e._ down goes down)
1. Installed some key programs with Software Manager
1. Removed some bundled software that I won't need
1. Set up a custom search engine in the browser
1. Installed git with `apt`
1. Installed Node with `nvm`
1. Set up SSH for GitHub
1. Cloned this repo and started writing

First impressions:

- It seems to run faster than Ubuntu
- It generally looks good (though I'm not sold on the "LM" icon)
- The window management is nice

Issues:

- I first installed VS Code with Software Manager, but 1) the terminal was not
  loading the correct shell, and 2) the icon was non standard. I downloaded the
  `.deb` directly from VS Code and installed to fix those problems.

Open questions:

- How can I get an emoji picker?
- How do I configure the panel clock to use 12-hour time?

Notes on improving the process for me:

- I haven't setup settings sync for VS Code, and getting everything running from
  scratch isn't fun. Figure out how to do that for the future.
