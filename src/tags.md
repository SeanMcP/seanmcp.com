---
layout: page.liquid
prose: false
leaf: false
title: Tags
description: Browse articles by tag
head: >-
  <style>
      .tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          list-style-type: none;

          li+li {
            margin-block-start: 0;
          }

          .tags-list__count {
            color: var(--faint-text);
          }
      }
  </style>
---

<p>Browse articles by their tags:</p>

<ol class="tags-list">
{%- for tag in collections.tags -%}
  {%- assign publicItems = collections[tag] | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" -%}
  {%- if publicItems.size > 0 -%}
    <li>
      <a href="/tags/{{ tag | slug }}/">{{ tag }}</a>
      <span class="tags-list__count">({{ publicItems.size }})</span>
    </li>
  {%- endif -%}
{%- endfor -%}
</ol>
