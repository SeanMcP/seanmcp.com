---
title: "CSS nesting is (almost) ready"
description:
  It's not quite ready for production use, but we are very close to getting
  native CSS nesting
tags:
  - Articles
  - CSS
date: 2024-05-27T20:50-0400
verse: Psalm 104:16-17
---

I've been hearing a lot about CSS nesting, but I figured that it was still years
away from being ready for use even on a site like this.

But a quick check of [Can I Use](https://caniuse.com/css-nesting) shows that it
is ready in all major browsers. Even more if you make sure to use the `&`
nesting selector.

Try it out for yourself:

<a href="/articles/css-nesting-is-almost-ready" style="display: none">View this
interactive on seanmcp.com</a>

<style style="background-color: var(--inline-code-background); color: var(--inline-code-color); display:block; font-family: var(--mono-font); padding: 1em; white-space: preserve;" contenteditable>main {
    & time {
        display: block;
        text-align: center;
    }

    & h1 {
        color: red;
    }

    & p:first-of-type {
        font-style: italic;
    }

    & p {
        & code {
            outline: 2px dotted currentColor;
        }
    }

    & style + p:has(em) {
        border: 1px solid currentColor;
        padding: 1em;
    }

    & p:last-child {
        text-decoration: double underline;
    }
}
</style>

So should you start using CSS nesting today? Probably not. But it is _almost_
ready, and that's exciting. Variables and nesting are the two features that
would still draw me to a preprocessor like Sass or Less. We've had native custom
properties for years, and now we are so close to being able to use nesting.

Exciting times!
