---
title: Create Axios-style articles with CSS
description:
  We can use inline blocks to bring subheadings on the same line as the
  following text while preserving the visual spacing
tags:
  - CSS
pubDate: 2023-03-06T19:52:34.564Z
foot: <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
---

You can style heading elements to look like the axioms in Axios articles with
CSS.

**Step by step:**

1. Start with the following HTML markup for this example:

   ```html
   <article>
     <p>Paragraph 1</p>
     <h2>Why it matters</h2>
     <p>Paragraph 2 should be inline with the heading</p>
   </article>
   ```

2. Turning over to CSS, add
   [stack styles](https://every-layout.dev/layouts/stack/) the container
   element:

   ```css
   article * + * {
     margin-block-start: 1.5rem;
   }
   ```

   This positions all of our block elements within an `article` with a
   consistent gap.

3. Move the `h2` and following `p` elements onto the same line:

   ```css
   article h2,
   article h2 + p {
     display: inline-block;
   }
   ```

   This positions those element correctly, but creates a problem. The block
   start margin of the `h2` element isn’t collapsing with the block end margin
   of the first paragraph.

4. Remove block end margins for everything within our article:

   ```css
   article * {
     margin-block-end: 0;
   }
   ```

5. Add a colon using a pseudo-element:

   ```css
   article h2::after {
     content: ":";
   }
   ```

With those styles in place, we have a semantic and accessible Axios article.

**Try it out:**

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="yLxXoxN" data-user="SeanMcP" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/SeanMcP/pen/yLxXoxN">
  Axios-style articles with h2 headings</a> by Sean McPherson (<a href="https://codepen.io/SeanMcP">@SeanMcP</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

**Takeaway:** This solution is better than Axios’ markup because it uses the
heading hierarchy. They use `strong` elements which aren’t navigable by
screenreaders.
