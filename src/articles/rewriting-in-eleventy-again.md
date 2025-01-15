---
title: Rewriting in Eleventy (again)
date: 2025-01-14T06:50-0400
description:
  Why I rewrote this site with Eleventy after a two-year sojourn with Astro.
tags:
  - Eleventy
  - Astro
  - Meta
verse: Isaiah 40:8
---

After
[growing disillusioned with Astro in 2024](/articles/astro-and-release-velocity),
I rewrote this site in Eleventy.
[Again](/articles/why-i-switched-from-gatsby-to-eleventy).

I want a library with features that are laser-focused on my project's needs.
Astro is an awesome framework for building complex content sites, but I no
longer believe that it is the right tool for a static site like this.

Eleventy is focused on crawling through a directory and converting markdown
files into a HTML. And it has stayed the course over many years of regular
updates from its maintainer.

That gives me the freedom to reorganize my site based on what works for me (and
not what the collections API wants). As a result, some pages have moved and
others disappeared.
[That used to bother me](https://www.w3.org/Provider/Style/URI), but I can't be
on the hook for preserving all content forever. The grass withers and the
flowers fade.

Last time I built this site with Eleventy,
[I got bogged down](/articles/rebuilding-with-astro) with tons of filters,
shortcodes, and partials that made working on pages difficult. This time around,
I wanted to take care to avoid unnecessary complexity.

For templating, I tried WebC but it felt too niche. I wanted to choose boring
technology for this site, and the uncommon errors with limited online resources
were not going to be helpful. I opted for Liquid because it has support for all
of Eleventy's internal features and the best documentation/support resources.

This time I have five filters: two for debugging, one for formatting dates, and
two for handling RSS-ONLY and DRAFT articles. I have two partials: one for a
list of articles, and one for a list item. These are used in the
[articles](/articles), [home](/), and [search](/search) pages to make sure that
everything renders consistently. I have no shortcodes.

A few articles had interactive components that were written in Svelte or used
Astro components. I rewrote those with web components, which I should have done
in the first place. It feels right to mix custom elements in markdown with
script tags to load the JavaScript.

The biggest tradeoff is the developer experience. Astro invests heavily in that
area. and it shows. Eleventy errors can be confusing and the documentation hard
to parse. And I miss the inline documentation in my editor that comes from a
fully-typed library^[JSDoc comment syntax can help a lot, but I struggle to get
it working correctly]. I think those tradeoffs are worth the simplicity of
Eleventy.

Going forward, I want to think less about maintaining this site. It exists as a
collection of resources for myself and others. And when I have something new
that I want to write or add, I have a place for that.

Here's to a few happy years before another rewrite.
