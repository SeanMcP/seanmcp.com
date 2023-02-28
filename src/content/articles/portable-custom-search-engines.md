---
title: Portable custom search engines
description: Custom search engines (sometimes called site search) are a great
  browser feature, but they aren't easily ported from one browser to the next. I
  created a portable web app to handle your custom search engines from any
  browser.
pubDate: 2022-12-05T16:49:10.952Z
tags:
  - Product
  - Browsers
---
Custom search engines (or site search) are [a useful tool for improving your workflow in the browser](https://zapier.com/blog/add-search-engine-to-chrome/). By configuring shortcuts and URLs, you're able to search sites or complete paths quickly and efficiently. Plus, it's totally customizable.

I﻿ have a few setup to query common documentation sites or complete common URLs. They save me time, clicks, and/or cognitive load and are an important part of my workflow.

E﻿ven though Chrome browsers and Firefox all support custom search engines, there isn't a good way to port your settings from one browser to the next. They're hidden away in a special settings location which doesn't get exported alongside history and bookmarks when you move.

A﻿s a front-end developer, I spend a lot of time hoping between browsers. And the inability to use my custom search engines everywhere has been a point of frustration. To solve this, I created a web-based solution that gives me the features I want from custom search engines without getting locked in to any particular browser.

[﻿Jean is a portable custom search engine](https://github.com/seanmcp/jean) that you control. Search engines are added to a simple file using a CSV-like syntax for labels, shortcuts, and URLs. Then load the page in your browser and get searching!

Jean was designed to work with GitHub Pages, but for a little more privacy you can load it directly from your computer – no HTTP server required! Just copy the whole path into your browser and bookmark it.

[﻿You can checkout a live version of Jean here](https://seanmcp.github.io/jean/).

F﻿or a little extra power, you can use Jean's query API to forward shortcuts through Jean. Just add a single custom search engine to your browser:
-﻿ Label: "Jean"
-﻿ Shortcut: "j" (or whatever you want)
-﻿ URL: "<your-jean-location>/?q=%s"

N﻿ow you can search using any of your custom search engines by using Jean as a proxy:

> j wk Search engines

A﻿fter porting all of my custom search engines over to Jean, I was able to switch my Chrome work setup to Edge in about two minutes. Blazin'!

T﻿o create your own portable custom search engine, [fork the Jean repository](https://github.com/seanmcp/jean/fork) and add your favorites to `engines.js`. And that's it; you're read to start searching.

L﻿et me know what you think, and [file an issue if you find a bug](https://github.com/seanmcp/jean/issues).

H﻿appy searching!