---
title: Finding a Linux distro and software that work
description:
  After a lot of trial an error, I settled on Raspberry Pi OS and Firefox for my
  little Linux-powered computer.
tags:
  - Computing
  - Linux
series: Trying Linux 2022
pubDate: 2022-11-02T08:55-0400
---

I wrote
[yesterday's article about giving Linux another try](/articles/giving-linux-another-try)
while things were still installing, _i.e._ too soon. Here is everything that I
tried:

- **Ubuntu Mate 22.04**: Installed but setup wouldn't complete (I probably tried
  3-4 times).
- **Ubunutu 22.04**: Installed and setup, but it was very slow and crashed
  multiple times.
- **Ubuntu Mate 22.04 (attempt 2)**: Installed and setup, but I was unable to
  open Firefox.
- **Lubuntu 20.04.5**: Couldn't get it to install on the microSD card. Maybe
  because I renamed an `.iso` file to `.img`?
  ([Following this recommendation](https://askubuntu.com/questions/1205768/how-to-convert-an-iso-file-to-img-format-in-linux))
- **Raspberry Pi OS**: It worked! 🎉

With the OS up and running, I moved on to installing software. Git was included
already, and I used `apt` to install `nodejs` and `vim`. Brew doesn't work with
ARM devices, so I need to manage some software manually.

I decided that it would probably be a good idea to use pnpm instead of npm on a
low-memory device. It required at least Node.js 14, but the latest version
available from `apt` was 12.

After going through the usual journey of trying to update Node.js, I ended up
[installing NVM](https://github.com/nvm-sh/nvm) and going with the new 18 LTS.
With that updated, I could install pnpm with: `npm i -g pnpm`

The included version of Chromium struggled to render emojis correctly, so I
opted for Firefox instead. I used the Raspberry Pi's package manager to install
`firefox-esr` and it worked great. I made sure to install
[uBlock Origin](/articles/awesome-browser-extensions) to hopefully help a bit
with performance.

With all that in place, I now have a serviceable Linux machine for tinkering! It
still struggles a bit running multiple processes at the same time, but it's
definitely good enough for now.
