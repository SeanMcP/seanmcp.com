---
layout: page.liquid
prose: false
pagination:
  data: collections.tags
  size: 1
  alias: tag
eleventyComputed:
  title: 'Tagged "{{ tag }}"'
permalink: /tags/{{ tag | slug }}/
---

{%- assign pages = collections[tag] | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" -%}
{% include "page-list" %}
