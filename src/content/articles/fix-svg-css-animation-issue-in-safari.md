---
title: Fix SVG CSS animation issue in Safari
description:
  Safari 16 has trouble with CSS animations on SVG child elements, but you can
  resolve them by using a combined transform property.
tags:
  - Debugging
  - Safari
pubDate: 2023-03-10T06:45-0400
foot:
  <script async
  src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
---

Safari 16 has trouble with CSS animations on SVG child elements, but you can
resolve them by using a combined `transform` property.

**Setup:** You have an SVG that needs separate animations for its `path` and
`rect` elements. Applying a single transform to the elements works, but
combining multiple transforms results in nondeterministic animation bugs:

```css
@keyframes worksInSafari {
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
}

@keyframes brokenInSafari {
  from {
    rotate: 0deg;
    scale: 0;
  }
  to {
    rotate: 20deg;
    scale: 1;
  }
}
```

**The fix:** You can fix this by combining your transformations into multiple
functions on a single `transform` property:

```css
@keyframes fixedInSafari {
  from {
    transform: rotate(0deg) scale(0);
  }
  to {
    transform: rotate(20deg) scale(1);
  }
}
```

**Try it out:**

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="dyqVxvY" data-user="SeanMcP" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/SeanMcP/pen/dyqVxvY">
  Safari CSS animation SVG bug</a> by Sean McPherson (<a href="https://codepen.io/SeanMcP">@SeanMcP</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

**Takeaway:** Individual properties for CSS transforms are nice, but they can
cause issues with SVG animations in Safari. The safer option seems to be
sticking with a single `transform` property for now.

**Read more:**

- [https://stackoverflow.com/a/72022385/8486161](https://stackoverflow.com/a/72022385/8486161)
- [https://developer.mozilla.org/en-US/docs/Web/CSS/transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
