---
layout: page.liquid
title: Web
leaf: false
permalink: /web/
description:
  Web pages that should exist on the Internet but don't. Or didn't. Because now
  they do.
---

Web pages that should exist on the Internet but don't. Or didn't. Because now
they do.

---

{%- assign pages = collections.Web | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse -%}
{% include "page-list" %}
