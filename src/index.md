---
layout: page.liquid
title: Sean McPherson
prose: true
head: >-
  <style> h1 {
    text-align: center;
  } nav {
    background-color: var(--off-bg);
    display: flex;
    font-family: var(--sans);
    gap: 1rem;
    justify-content: center;
    padding: 0.5rem;
  } nav > p {
    display: contents;
  }</style>
---

<nav>

[About](/) [Articles](/articles) [Search](/search)

</nav>

## About

### Professionally

I work as a software engineer at [Khan Academy](https://khanacademy.org)
building AI-powered activities for students and teachers like
[Writing Coach](https://www.khanmigo.ai/writingcoach).

I have previously worked as a software engineer for Niche.com in Pittsburgh and
[TSYS](https://www.tsys.com/) in Atlanta. And before that I was a teacher at
Gwinnett County Public Schools, AmeriCorps, and a juvenile detention center.

I graduated from Edinboro University with a degree in middle-level education and
later The Iron Yard Coding Bootcamp.

### Personally

I live in Pittsburgh, PA with my wife and two sons. I serve as a deacon at my
local presbyterian church, and volunteer on the
[Wilkinsburg Public Library](https://wilkinsburglibrary.org) Board of Directors.

I watch, read about, and play soccer; and play [board](/board-games) and
[adventure](/adventure-games) games.

## Recent articles

{%- assign pages = collections.articles | exclude_index | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse | slice: 0, 5 -%}
{% include "page-list" %}
