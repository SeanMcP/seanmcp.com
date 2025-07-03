---
layout: page.liquid
prose: false
title: Articles
leaf: false
permalink: /articles/
description: Articles about mostly about software engineering, work, and life.
---

To search for an article, use your browsers find feature or
[visit the search page](/search).

---

{%- assign pages = collections.Articles | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse %}
{% include "page-list" %}
