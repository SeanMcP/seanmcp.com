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
      background-color: var(--accent-color);
      color: var(--bg);
      display: block;
      padding: 0.75rem 1rem;
    }
  </style>
---

My name is Sean McPherson or seanmcp, and I'm a software engineer from
Pittsburgh.

This website is a poorly-organized collection of articles that I have written
over the years about programming, adventure games, and miscellany. Someday I may
find a good organization system for it all.

<hr/>

<section aria-label="Categories" id="categories">
<a href="/articles">Software Engineering</a>
<a href="/resources" style="--accent-color: var(--resources-color)">Resources</a>
<a href="/adventure-games" style="--accent-color: var(--adventure-games-color)">Adventure Games</a>
<a href="/board-games" style="--accent-color: var(--board-games-color)">Board Games</a>
<a href="/web" style="--accent-color: var(--web-color)">Web</a>
<a href="/local" style="--accent-color: var(--local-color)">Local</a>
</section>
