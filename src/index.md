---
layout: page.liquid
title: seanmcp.com
description:
  The personal site of Sean McPherson (seanmcp), a software engineer in
  Pittsburgh, PA.
prose: false
head: >-
  <style> h1 {
    text-align: center;
  } nav {
    background-color: var(--bg);
    background-image: var(--bg-image-diagonal-lines);
    display: flex;
    font-family: var(--sans);
    gap: 1rem;
    justify-content: center;
    padding: 0.5rem;
  } nav > p {
    display: contents;
  } nav a {
    text-decoration-color: hsla(0, 0%, 0%, 0.1);
  } section[aria-label="Categories"] {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 1rem;
    margin-block-start: 1rem;
  } .category > a {
    background-color: var(--accent-color);
    color: var(--bg);
    display: block;
    padding: 1rem;
  } .category ol {
    margin-block-end: 0;
  }</style>
---

<nav>

[Home](/) [About](/about) [Search](/search)

</nav>

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
