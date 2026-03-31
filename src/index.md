---
layout: page.liquid
title: seanmcp.com
description:
  The personal site of Sean McPherson (seanmcp), a software engineer in
  Pittsburgh, PA.
prose: false
head: >-
  <style>
    h1 {
      text-align: center;
    }
    section[aria-label="Categories"] {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      gap: 1rem;
      margin-block-start: 1rem;
    }
    section[aria-label="Categories"] > a {
      align-items: center;
      background-color: var(--accent-color);
      block-size: 8rem;
      color: var(--bg);
      display: flex;
      justify-content: center;
      padding: 0.75rem 1rem;
    }
  </style>
---

My name is Sean McPherson or seanmcp, and I work as a software engineer at Khan
Academy from Pittsburgh, PA.

This website is a poorly-organized collection of articles that I have written
over the years about working in tech, RPGs, games, and miscellany. Someday I may
find a good organization system for it all.

<hr/>

<section aria-label="Categories" id="categories">
<a href="/articles">Tech</a>
<a href="/rpgs" style="--accent-color: var(--rpgs-color)">RPGs</a>
<a href="/games" style="--accent-color: var(--games-color)">Games</a>
<a href="/blog" style="--accent-color: var(--blog-color)">Blog</a>
</section>
