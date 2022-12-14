---
layout: "@layouts/ArticleLayout.astro"
title: There is no multi-tasking on the Raspberry Pi
description: Detailing some of the struggles that I've encountered while trying to do front-end development  on a Raspberry Pi. 
draft: false
image: 
tags:
  - Computing
  - Linux
  - Raspberry Pi
series: Trying Linux 2022
pubDate: 2022-11-03T11:14:41.189Z
verse: 
---

Maybe this isn't fair to file under the "Trying Linux 2022" series since it isn't commentary on the operating system writ large. However, it is a part of my journey trying Linux and worth documenting.

I have a Raspberry Pi 3 B+ (or something like that). I bought it about 4 years ago with the goal of using it as a RetroPie, and it did that pretty well. Now that I'm here in 2022 trying to use this as a developer compuer, however, I'm starting to see some of the strains.

With the Pi and Raspberry Pi OS, I can do approximately one tasks at the same time. I can use the browser (Firefox ESR), VS Code, **or** the Raspberry Pi package manager. If I try to use two of these things at the same time, however, the whole system grinds to a halt for minutes at a time. So I need to be really careful _not_ to multitask while I'm working.

You hear some developers complain about how resource intensive modern development has become. Browsers with all their extensions are big and bloated. Electron-powered programs are slow and resource intensive. Running all of the services locally takes more cores from your processor than computers had 20 years ago. I've been largely sympathetic to those criticisms, but I haven't really felt the pain because I've always had a high-powered computer from my employer that can manage the workload.

Now that I'm on a Raspberry Pi and trying to run a "simple" Node process _and_ view it in the browser... I feel it.

And maybe that is a good thing.
