---
title: Set innerHTML of an element in Svelte
description: You can use an HTML expression to add valid markup to an element
pubDate: 2021-02-25
tags:
  - Svelte
# /img/<IMAGE>.min.jpg
image:
---

When working on a Svelte application, I wanted to replace newline characters in a string with `<br>` elements and render the result as HTML. If you do the replace in your component markup, then the rendered output has escaped angle brackets:

```html
<!-- Component.svelte -->
<p>{notes.replace(/\n/g, '<br />')}</p>

<!-- Output markup -->
<p>Line one&lt;br&gt;Line two</p>
```

From previous experience, I know that we're not rendering the replaced string as HTML, so I tried searching online for a solution involving `innerHTML`.

In the Svelte API docs, there are only three mentions of `innerHTML`, two of which refer to bindings with `contenteditable` elements. But I wanted to set the `innerHTML` of an element that would never change.

While searching through the Svelte Discord for `innerHTML`, I came across an unrelated post that mentioned `{@html}`. I had never encountered this before, so I looked it up in the Svelte docs^[https://svelte.dev/docs#html]:

> In a text expression, characters like `<` and `>` are escaped; however, with HTML expressions, they're not.

Not the longest explanation, but that sounds like my problem. Back in my code, I tried wrapping the replaced text with `{@html}`:

```html
<!-- Component.svelte -->
<p>{@html notes.replace(/\n/g, '<br />')}</p>

<p></p>
```

With that, everything rendered as expected:

```html
<!-- Output markup -->
<p>
  Line one<br />
  Line two
</p>
```

So next time you want to set the `innerHTML` of an element in Svelte, use an HTML express with `{@html}`.

Happy escaping!
