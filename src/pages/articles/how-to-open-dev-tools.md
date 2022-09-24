---
layout: "../../layouts/ArticleLayout.astro"
title: How to open the Dev Tools
description: A comprehensive guide for opening the dev tools in Chrome and Firefox
pubDate: 2020-04-15
tags:
    - Dev Tools
    - Chrome
    - Firefox
verse: Psalm 118:19
---

As a web developer, one of the most powerful tools in your arsenal is the browser's developer tools.

Here is a list of all the ways to access the dev tools for your browser and operating system.

---

## With your mouse

### In the window

You can enter the dev tools with the mouse by right clicking on any element. In the menu that appears, select "Inspect" or "Inspect Element":

- **Chrome**: `Right click > Inspect`
- **Firefox**: `Right click > Inspect Element`

### Through settings

You can also enter the dev tools through your browser's settings menu.

- **Chrome**: `Three dot menu > More tools > Developer tools`
- **Firefox**: `Three bar menu > Web Developer > Toggle Tools`

---

## Keyboard shortcuts

Beyond the mouse, there are shortcuts that you can use to open the dev tools without leaving your keyboard.

The shortcuts differ by browser and operating system, so I've tried to group them logically below.[^1] Windows and Linux commands are the same, so I've comibined them into "Win/Lin".

### Elements/Inspector

The default tab, it allows you to inspect and edit the elements in the DOM, their properties, and styles.

#### Chrome & Firefox

- **macOS**: <kbd>command</kbd> + <kbd>option</kbd> + <kbd>c</kbd>
- **Win/Lin**: <kbd>control</kbd> + <kbd>shift</kbd> + <kbd>c</kbd> **OR** <kbd>F12</kbd>

### Console

This tab prints the console calls from your code and allows you to write JavaScript that interacts with the current web page.

#### Chrome

- **macOS**: <kbd>command</kbd> + <kbd>option</kbd> + <kbd>j</kbd>
- **Win/Lin**: <kbd>control</kbd> + <kbd>shift</kbd> + <kbd>j</kbd>

#### Firefox

- **macOS**: <kbd>command</kbd> + <kbd>option</kbd> + <kbd>k</kbd>
- **Win/Lin**: <kbd>control</kbd> + <kbd>shift</kbd> + <kbd>k</kbd>

### Debugger

This tab shows all the source code for your project and allows you to debug with breakpoints.

#### Firefox

- **macOS**: <kbd>command</kbd> + <kbd>option</kbd> + <kbd>z</kbd>
- **Win/Lin**: <kbd>control</kbd> + <kbd>shift</kbd> + <kbd>z</kbd>

### Network

This tab logs all network requests and provides detailed information about the responses.

#### Firefox

- **macOS**: <kbd>command</kbd> + <kbd>option</kbd> + <kbd>e</kbd>
- **Win/Lin**: <kbd>control</kbd> + <kbd>shift</kbd> + <kbd>e</kbd>

### Most recent

This will open the most recently opened tab. In my experience, it's the shortcut that I reach for most often.

#### Chrome & Firefox

- **macOS**: <kbd>command</kbd> + <kbd>option</kbd> + <kbd>i</kbd>
- **Win/Lin**: <kbd>control</kbd> + <kbd>shift</kbd> + <kbd>i</kbd>

---

Phew! That was a bigger undertaking than I first imagined. If I made any mistakes, [please let me know](#comment-link).

I hope that helps! Happy tooling!

[^1]: I spent a good deal of time debating how to outline this article. I eventually decided to group things by dev tool tab instead of browser or operating system. There is more in common than not, so this seemed the simplest.
