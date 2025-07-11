---
title: Rebuilding with Astro
description: Detailing why and how I rebuilt this site with Astro.
tags:
  - Articles
  - Astro
  - Eleventy
  - Meta
date: 2022-10-13T12:00-0400
verse: Psalm 19:1
---

<call-out type="warn">

This article was written when seanmcp.com was powered by Astro. I have left the
content in place, but the component described no longer renders.

</call-out>

After almost four years of [Eleventy](https://11ty.dev), I recently completed a
rebuild of this site with [Astro](https://astro.build).

## Why leave Eleventy?

I think that Eleventy is a really neat project and that Zach Leatherman is doing
a great job with it. My main reason for wanting to move to a different solution
was the inability to use components to build pages.

That may sound silly, but I've found components to be a helpful conceptual model
for building user interfaces. When I look at a webpage now, I visualize
components. When I think about building a webpage, I plan in components. And for
my personal site, I want to be able to build in components.

To be fair to Eleventy, there is a plugin to "use Vue", but
[the missing features](https://github.com/11ty/eleventy-plugin-vue#not-yet-available)
and
[de-prioritized development](https://github.com/11ty/eleventy-plugin-vue/commits/master)
make it an unappealing option.

In 2022 and beyond, I don't want to be limited to templating languages and
partials when building pages. I want to be able to use components big and small
across the site to compose interfaces.

## Why Astro?

I've been interested in Astro since it launched and am generally excited by the
"framework to build modern websites" trend. Three things stood out the most to
be when choosing Astro for this project:

1. Components-based layouts
1. Island architecture for interactive articles
1. Familiarity and complexity

### Components!

I want to be able to build my user interfaces with components. It's as simple as
that, and Astro enables you to use components from any of your favorite
JavaScript libraries.

For this site, I stuck with
[Astro's own components](https://docs.astro.build/en/core-concepts/astro-components/),
which feel like a combination of stateless React and Svelte. It was super easy
to pick up and build all of the layouts and components I needed.

The only real issue that I encounted with Astro components was the scoped
styles. Conceptually I love the idea, but in practice it applies styles using
the
[`:where()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)
which has 0 specificity. As a result, I frequently encountered instances where
my component styles were overridden by global styles.

For an example, the global selector `body > main` has a greater specificity than
the scoped component selector `main:where(.astro-S3KS4JBQ)`. I would expect
component styles to override global styles.

<call-out type="info">

If there is a setting to make Astro apply generated classes directly to the
element, _e.g._ `main.astro-S3KS4JBQ`, please let me know!

</call-out>

This isn't an insurmountable issue, but I would love to find a workaround (and
avoid changing my mental model!).

### Islands

I previously tried to add interactive elements to my articles through the use of
good ol' HTML, CSS, and JavaScript. And for the use cases that I had, this was
usually sufficient. But authoring and maintenance were painful, and the lack of
standardization made each interactive a bit of a headache.

What I really wanted was a way to write little self-contained "applets"[^1] that
I could drop into any page/article. And that is exactly what
[Astro Islands are](https://docs.astro.build/en/concepts/islands/): "an
interactive UI component on an otherwise static page of HTML."

The best part is: you can author these islands using whatever JavaScript library
you want. I'm a big fan of Svelte, and I'm excited to be able to drop a Svelte
component into any article that I'm writing.

This counter here? A Svelte component!

<br />

```
<Counter client:only="svelte" />
```

<br />

And with
[client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives),
you have control over when the component are hydrated on the page.
<e-moji>🚰</e-moji>

### Familiarity

The above features are great, but I don't think I would have used a new system
if it was more complex than the _status quo_. That was my favorite part about
Eleventy: it used a familiar language to take text files and generate a website.

Thankfully, Astro feels cut from the same cloth. Add a bunch of markdown files
to the `src/pages/` directory, create a few layouts, and the `astro` CLI will do
the rest. In practice it feels simpler than Eleventy, but maybe that is just a
symptom of being more opinionated.

After years working on a site with Eleventy, I found switching to Astro a very
confortable transition. And thanks to the new features like components and
[MDX](https://mdxjs.com/) support, I enjoyed working on the site for the first
time in a while.

## Cons of Astro

In addition to some of the styling specificity issue mentioned above, there are
two other features that I lost in the transtion from Eleventy to Astro:

1. **Line highlights in code blocks**. Eleventy provided easy access to the
   markdown parser and I was able to configure things to my liking with Markdown
   It. Astro uses remark to parse markdown, and I haven't found a good way to
   add line highlights to code blocks.
2. **Detailed RSS feed**. Astro does provide a plugin for generating an RSS
   feed, but the resulting output does not have much detail. I would like to
   include at least a snippet of the article's content, but that doesn't appear
   to be an option with the plugin.

## Wrapping it up

Overall, I'm really happy with the rebuild. It was a good opportunity to
evaluate the feature that my site needed and architect it in a way that would be
easy to maintain.

Looking forward, I think Astro's island's architecture is going to help me
create the content that I want to publish. And hopefully that's good new for
everyone.

Happy reading!

[^1]: Is it safe to reclaim that word from Java yet?
