---
layout: page.liquid
title: Resources
leaf: false
permalink: /resources/
description:
  Resources and guides for all kinds of topics, including software engineering,
  and work.
---

{%- assign pages = collections.Resources | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse -%}
{% include "page-list" %}
