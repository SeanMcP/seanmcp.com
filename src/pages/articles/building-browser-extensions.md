---
layout: "../../layouts/ArticleLayout.astro"
title: Building browser extensions
description: Some resources and guides for making browser add-ons/extensions
date: 2021-02-23
tags:
  - Garden
  - Chrome
  - Firefox
  - Extensions
verse:
# /img/<IMAGE>.min.jpg
image:
---

These are resources that I reference and guides that I follow while developing browser add-ons/extensions. Hopefully this garden will be helpful to you along the way!

## Resources

- [How to install temporary add-ons in Firefox (MDN)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing)
- [Icons for Chrome extensions (chrome.com)](https://developer.chrome.com/docs/extensions/mv2/manifest/icons/)
- [`manifest.json` documentation (MDN)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Sample build script (GitHub)](https://raw.githubusercontent.com/SeanMcP/popsicle-sticks-mini/master/build.sh)

## Guides

### How to add to browser while developing

#### Chrome

1. Go to [`chrome://extensions`](chrome://extensions)
2. Enable "Developer mode"
3. Select "Load unpacked"
4. Select the project directory

#### Firefox

1. Go to [`about:debugging#/runtime/this-firefox`](about:debugging#/runtime/this-firefox)
2. Select "Load Temporary Add-on..."
3. Select the project directory

---

Happy extending!
