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
foot: >-
  <script>
    (() => {
      const usp = new URLSearchParams(location.search);
      const category = usp.get("category");
      if (!category) return;
      document.body.setAttribute("data-category", category);
      document.querySelector("h1").textContent += ` in ${category}`;
      document.querySelectorAll(".page-list-item").forEach(el => {
        if (el.innerHTML.includes(`>${category}<`)) return;
        el.setAttribute("hidden", "");
      });
      document.querySelector("main a[hidden]").removeAttribute("hidden");
     })()
  </script>
---

<a hidden href="{{ page.url }}">View items in all categories</a>

{%- assign showCategory = true -%}
{%- assign pages = collections[tag] | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse -%}
{% include "page-list" %}
