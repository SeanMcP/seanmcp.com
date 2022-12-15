---
layout: "@layouts/ArticleLayout.astro"
title: New command palette
description: I added a new new command/control K command palette to my site. You
  can use the keyboard shortcut or activate it by clicking the magnifying glass
  in the header.
pubDate: 2022-12-15T12:17:33.865Z
draft: true
tags:
  - Astro
  - Meta
  - UI
image:
---
![Command Palette V1](/images/command-palette.png)

[﻿Last month, I wrote about the new "command bars" UI pattern](/articles/are-command-bars-the-future/), and ever since the idea of adding one to this site has been kicking around my head. The design doesn't support lots of links in the header, so an "over UI" for navigating seemed like a decent choice.

Y﻿esterday I added a new <kbd>command/control</kbd> <kbd>k</kbd> command palette to this site. You can activate it by typing the keyboard shortcut or clicking the magnifying-glass icon in the header. You can exit the palette by pressing "Escape" or tapping on the overlay.

The component is built using Astro and some styles and TypeScript, which should make it portable to other sites once I iron out all of the bugs. I still get a kick out of how easy it is to build UI with Astro components. Well done, Astro team!

C﻿urrently your query has to directly match the content available, but I'm planning to add fuzzy matching in the future. In the meantime, I'm hoping that it simplifies the process of surfacing content on my site.

H﻿appy commanding!