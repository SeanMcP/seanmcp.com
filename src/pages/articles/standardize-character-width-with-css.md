---
layout: "../../layouts/ArticleLayout.astro"
title: Standardize character width with CSS
description: Two CSS properties that make letters and numbers the same width.
pubDate: 2020-12-09
tags:
  - CSS
  - Typography
verse: Romans 5:3-5
# /img/<IMAGE>.min.jpg
image:
---

**Authors note**: Before you read this article, you will want to click the "Start timer" button below to enable the live demos. You can cancel it at any time by clicking "Stop timer".

<div class="button-container">
    <button onclick="startTimer()">Start timer</button>
    <button onclick="stopTimer()">Stop timer</button>
</div>

---

The width of a character is the amount of horizontal space that it occupies. This width varies between characters, weights, and typefaces. In Lato, for example, the letter **W** is wider than the letter **I**.

For most use cases, the varied width of characters isn't an issue. However, when you are creating an component like a timer, the differences in width can produce some undesirable movements as the numbers change.

Take a look at this example when timer running. Since the characters are all different widths, the number "jitters" around as it increments:

<div aria-label="Default" class="example">
    <span class="count">0</span>
</div>

This isn't the end of the world, but it's not preferable.

To alleviate this, I have in the past turned to monospace typefaces. These allocate the same width for each character, regardless of the space that the stroke needs.

In this example, we can see that the jittering is resolved and the timer increments smoothly:

<div aria-label="Monospaced" class="example">
    <span class="count">0</span>
</div>

However, altering the typeface might not be the best solution for your product. Especially when the change was only made to prevent the jittering.

Instead, we can use two CSS properties^[I first saw this solution from [Tomek Sułkowski (@sulco) on Twitter](https://twitter.com/sulco/status/1293862293139337217). He shares lots of great tips like this and is worth the follow.] to standardize the character width of an element:

```css
.standardize-character-width {
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
```

With those two in place, we can preserve the original typeface and avoid visual jittering:

<div aria-label="Standardized" class="example">
    <span class="count">0</span>
</div>

A few things to note:

1. Adding these properties changes the [tracking](https://en.wikipedia.org/wiki/Letter-spacing), or letter spacing, of the characters. This is necessary to standardize widths but might be undesirable for typography aficionados.
2. `font-variant-numeric` does not work in Internet Explorer
3. `font-feature-settings` supports IE but only works with [OpenType fonts](https://en.wikipedia.org/wiki/OpenType)

That being said, this is CSS progressive enhancement: for whom it works, it improves the experience. I'm pretty happy with this solution, and I have used it in production with [Contraction Tracker](https://seanmcp.github.io/contractions).

For more information about the CSS properties, you can read about [`font-feature-settings`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings) and [`font-variant-numetric`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric) on MDN.

Happy standardizing!

<style>
.button-container {
    text-align: center;
}

.button-container button {
    background-color: var(--primary);
    border: none;
    border-radius: 2px;
    color: white;
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
}

.button-container button:focus,
.button-container button:hover {
    box-shadow: 0 2px 4px hsla(0, 0%, 0%, 25%);
    filter: brightness(1.2);
}

.example {
    background-color: var(--off-background);
    padding: 1rem;
    margin: 1rem 0;
    position: relative;
    text-align: center;
}

.example::before {
    content: attr(aria-label);
    font-size: 0.75rem;
    left: 0;
    padding: 5px;
    position: absolute;
    top: 0;
}

.example .count {
    font-size: 3rem;
}

.example[aria-label="Monospaced"] .count {
    font-family: Menlo, Monaco, Fira Code, monospace;
}

.example[aria-label="Standardized"] .count {
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
}
</style>

<script>
let countEls = document.querySelectorAll('.count')
function incrementCount() {
    let nextNumber
    countEls.forEach(el => {
        if (!nextNumber) nextNumber = Number(el.textContent) + 1
        if (nextNumber > 10000) stopTimer() 
        el.textContent = nextNumber
    })
}
function startTimer() {
    window._interval = setInterval(incrementCount, 100)
}
function stopTimer() {
    clearInterval(window._interval)
}
</script>
