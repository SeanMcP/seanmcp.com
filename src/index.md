---
layout: page.liquid
title: Hey neighbor
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
      gap: 2rem;
      margin-block-start: 1rem;
    }
    .category > a {
      background-color: var(--accent-color);
      color: var(--bg);
      display: block;
      padding: 0.75rem 1rem;
    }
    .category ol {
      margin-block-end: 0;
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

<article class="category">
<a href="/articles">Software Engineering</a>

{%- assign pages = collections.Articles | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse | slice: 0, 3 -%}
{% include "page-list" %}

</article>

<article class="category">
<a href="/resources">Resources</a>

{%- assign pages = collections.Resources | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse | slice: 0, 3 -%}
{% include "page-list" %}

</article>

<article class="category">
<a href="/adventure-games">Adventure Games</a>

{%- assign pages = collections["Adventure Games"] | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse | slice: 0, 3 -%}
{% include "page-list" %}

</article>

<article class="category">
<a href="/board-games">Board Games</a>

{%- assign pages = collections["Board Games"] | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse | slice: 0, 3 -%}
{% include "page-list" %}

</article>

<article class="category">
<a href="/web">Web</a>

{%- assign pages = collections.Web | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse | slice: 0, 3 -%}
{% include "page-list" %}

</article>

<article class="category">
<a href="/local">Local</a>

{%- assign pages = collections.Local | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse | slice: 0, 3 -%}
{% include "page-list" %}

</article>

</section>
