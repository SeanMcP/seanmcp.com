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

{%- assign tags = collections.tags -%}{% include "tag-list" %}
