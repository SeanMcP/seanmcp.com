---
layout: page.liquid
title: Feed
description:
  The personal site of Sean McPherson (seanmcp), a software engineer in
  Pittsburgh, PA.
prose: false
head: >-
  <style>
    h1 {
      text-align: center;
    }
  </style>
---

All content on seanmcp.com

<hr/>

{%- assign showCategory = true -%}
{%- assign pages = collections.all | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | where: "data.tags" | where: "data.leaf" | reverse -%}
{% include "page-list" %}
