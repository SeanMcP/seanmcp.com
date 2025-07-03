---
title: CSS :empty pseudo class
description:
  Empty elements in a flex or grid container can result in double gaps, but CSS
  has an pseudo class to select and remove those elements
tags:
  - Articles
  - CSS
date: 2023-03-02T07:08-0400
foot:
  <script async
  src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
---

- `:empty` allows you to apply styles to an element when it has no child nodes
- This is useful for hiding empty elements to keep visual grids consistent
- It is supported in all major browsers

When building a user interface, it is common to have a container element that
conditionally contains content. A simple example is an element that displays
error information when a form field is invalid. To accomplish this, you have two
options:

1. Always render the container in the DOM and conditionally add children (_e.g._
   text, other nodes)
2. Conditionally render the container when needed.

There are use cases for both approaches. When working with vanilla JavaScript, I
typically reach for the former. If I were building the interface with a
front-end library, then I use the later.

A problem that arises with option 1 is spacing in between elements. If you are
using flex box or grid with a `gap` the empty element will be included in the
layout and will result in a double space between visible elements.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="KKxaQmo" data-user="SeanMcP" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/SeanMcP/pen/KKxaQmo">
  Removing extra flex/grid spacing with :empty</a> by Sean McPherson (<a href="https://codepen.io/SeanMcP">@SeanMcP</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

The solution is to use the :empty pseudo class to select the empty element and
hide it with display: none. Once the element is removed from the flex/grid, the
gap between elements are consistent.

It is worth noting that the double spacing is not an issue with patterns like
Every Layout’s stack, which uses the browser's collapsing margins. But if you
are using flexbox or grid, then the problem will eventually arise.
