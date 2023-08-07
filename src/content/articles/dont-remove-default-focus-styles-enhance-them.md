---
title: Don't remove default focus styles, enhance them
description: This is a WIP that I probably will never finish.
pubDate: 2020-07-30T12:00-0400
tags:
    - CSS
    - A11y
    - WIP
---

<style>
.example {
    margin: 2rem 0;
}

.example > * {
    margin: 0 !important;
}

.live {
    background-color: hsl(0, 0%, 95%);
    box-shadow: inset 0 0 0.5rem hsla(0, 0%, 0%, 8%);
    display: grid;
    place-items: center;
    padding: 1rem;
}

@media screen and (min-width: 640px) {
    .example {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

.article input[class] {
    border: 1px solid hsla(0, 0%, 0%, 17.5%);
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: inherit;
    padding: 0.5rem;
}
</style>

I can't tell you how many times over the past fifteen years that I have searched "how to remove default focus styles". Something about that fuzzy blue glow around form elements has always looked terrible to me. So I, and countless other developers like me, have stumbled upon the code to remove focus styles:

```css
*:focus {
    /*
        I'm sharing this for an illustration;
        please don't use this code.
    */
    outline: none;
}
```

But by removing those styles, you are removing a key feature of user agent styles: the focus outline! Let's look at why they are so important and what you can do to make them look less ugly.

## Why focus styles?

That glowing blue outline lets you know when the browser is focused on a particular element. This is as necessary as having a `:hover` state for links; you shouldn't deploy without it.

Focus styles are also important for accessibility. Visual users who navigate by the keyboard need those distinct focus styles to indicate where they are on the page.

Imagine trying to navigate a webpage with an invisible mouse; it would be terrible. When you remove focus styles, you are doing the same thing to keyboard users.

Focus styles are a critical part of your website or applications design.

## Better focus styles

Just because these styles are necessary, doesn't mean that they have to be a chore. By using the same kind of CSS properties that you style a site, you can give your focus styles the love they deserve.

All of the examples below are interactive, so make sure to click inside the input box to see the focus styles illustrated.

For comparison, this is what your browser's default focus styles look like:

<div class="live">
<input
    aria-label="dummy input to illustrate focus styles"
    placeholder="Focus here..."
>
</div>

### `outline`

Instead of removing the outline with CSS, you can customize it. `outline` has accompanying `-weight`, `-style`, and `-color` properties that give you the same flexibility as `border`.

The one hangup is that it looks to the bounding box and ignores things like border radius:

<div class="example">
<style>
.example .outline:focus {
    outline: 2px solid red;
}
</style>

```css
input:focus {
    outline: 2px solid red;
}
```

<div class="live">
<input
    aria-label="dummy input to illustrate focus styles"
    class="outline"
    placeholder="Focus here..."
>
</div>

</div>

That doesn't look great for rounded buttons, so you can use the `outline-offset` style to give your outline some more character:


<div class="example">

<style>
.example .outline--character:focus {
    outline: 4px dotted red;
    outline-offset: 4px;
}
</style>

```css
input:focus {
    outline: 4px dotted red;
    outline-offset: 4px;
}
```

<div class="live">
<input
    aria-label="dummy input to illustrate focus styles"
    class="outline--character"
    placeholder="Focus here..."
>
</div>

</div>

Niche.com does this for their button focus styles, and I think it looks great. I matches the brand while clearly signifying that the button is focused.

### `box-shadow`

For a more flexible "outline", `box-shadow` is your probably your best option. You can dial down the "blur radius" and get an outline that honors the border radius of a button:

<div class="example">

<style>
.box-shadow:focus {
    box-shadow: 0 0 0 2px red;
    outline: 4px solid transparent;
}
</style>

```css
input:focus {
    box-shadow: 0 0 0 2px red;
    outline: 4px solid transparent;
}
```

<div class="live">
<input
    aria-label="dummy input to illustrate focus styles"
    class="box-shadow"
    placeholder="Focus here..."
>
</div>

</div>

Notice how I'm not removing the `outline` styles entirely. Some operating systems have a "high-contrast mode" that will alter the color of the outline, so leaving it as transparent will work for users with those settings.