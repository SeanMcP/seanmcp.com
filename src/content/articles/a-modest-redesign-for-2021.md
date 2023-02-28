---
title: A modest redesign for 2021
description: Freshening up SeanMcP.com for the new year
pubDate: 2021-06-15
tags:
  - Blogging
  - Design
  - Meta
verse: Ecclesiastes 1:9
image:
---

It had been a minute since I last worked on the design for this site, so I decided to make some changes for 2021. I didn't want to undertake anything major – just tweak a few things to freshen everything up.

A few of the changes are a return to previous designs: I brought the scroll progress bar (top of the screen) and centered the content. I lightened the default background color and reduced the size of the headings.

There are two new features that I added, and the most notable of which is the light/dark mode toggle in the header. Under the hood, this is a checkbox with a `change` event listener that persists state in `localStorage`. The boxes are 100% CSS with `::before` and `::after` pseudo elements with a small transition. Pretty neat what can be done with CSS and a teeny bit of JavaScript!

The other new feature is a search listbox on [/articles](/articles/). Rather than implement something super complex, I opted for a search `input` with a `datalist` of articles. I added an event listener that redirects when an article is selected. You can [view the implementation](/js/article-search.js) in `article-search.js`. This is a pattern that I've used twice now and might warrant its own article.

Beyond that, I updated some of the copy, changed the links in the header, included a picture to the [/about](/about/) page, and added a new page for my [work availability (hey recruiters!)](/are-you-looking-for-work/).

Overall, I'm pretty happy with how the redesign turned out. We'll see how long that contentedness lasts!

Happy reading!