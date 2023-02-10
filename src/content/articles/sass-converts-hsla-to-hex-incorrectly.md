---
title: Sass converts hsla to hex incorrectly
description: A simple solution to stop Sass from transparent hsla colors to opaque hex colors.
pubDate: 2020-12-17
tags:
  - Sass
  - CSS
  - Styling
  - Bug
verse: Exodus 39:8
# /img/<IMAGE>.min.jpg
image:
---

I ran into an issue where Sass was converting `hsla()` values to hex incorrectly. It would take an input like this:

```css
/* input.scss */
.subtle-blue {
  background-color: hsla(212, 50%, 50%, 10%);
}
```

And convert it into:

```css
/* output.css */
.subtle-blue {
  background-color: #407bbf;
}
```

That is **not** the same color. When processing the input styles, Sass ignores the alpha (opacity) value and converts it into a standard hex.

You can see the different between the two values here:

<style>
.exs {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
    margin: 2rem 0;
}
.ex {
    padding: 4rem 0.5rem 0.5rem;
}
.ex code {
    background-color: black !important;
    color: white !important;
    padding: 2px 4px;
}
</style>

<div class="exs">
    <div class="ex" style="background-color:hsla(212, 50%, 50%, 10%)">
        <code>hsla(212, 50%, 50%, 10%)</code>
    </div>
    <div class="ex" style="background-color:#407bbf;">
        <code>#407bbf</code>
    </div>
</div>

If you search around for an answer, you will find a few suggestions to [use strings for `hsl` values](https://github.com/sass/sass/issues/469#issuecomment-461675216) or [recreating the `hsl` and `hsla` functions in Sass](https://github.com/sass/sass/issues/469#issuecomment-77290544). Neither of those seemed an idea solution.

Instead of changing how you declare `hsl` value or recreating the function, you can fix this issue by **using decimal alpha values instead of percent**. Going back to the original example, change `10%` to `0.1`:

<!-- ```css/2 -->
```css
/* Input Sass */
.subtle-blue {
  background-color: hsla(212, 50%, 50%, 0.1);
}
```

And Sass will convert it to alpha-supporting `rgba`:

<!-- ```css/2 -->
```css
/* Output css */
.subtle-blue {
  background-color: rgba(64, 123, 191, 0.1);
}
```

These values aren't identical because [math is required](https://stackoverflow.com/questions/31613667/hsl-to-rgb-conversion-math), but they're infinitely closer than the non-alpha hex value:

<div class="exs">
    <div class="ex" style="background-color:hsla(212, 50%, 50%, 0.1)">
        <code>hsla(212, 50%, 50%, 0.1)</code>
    </div>
    <div class="ex" style="background-color:rgba(64, 123, 191, 0.1);">
        <code>rgba(64, 123, 191, 0.1)</code>
    </div>
</div>

You can see this behavior for yourself in [this Sass playground](https://sass.js.org/) but not in [Sassmeister](https://www.sassmeister.com/). So it may depend on the flavor and version of Sass that you are using.

But for a quick fix that doesn't involve wading into the release notes of your dependencies, opt for decimal alpha values in `hsla`.

Happy styling!
