---
layout: page
title: Notes
description: A feed of short notes, thoughts, or ideas, preserved here on SeanMcP.com
---

A feed of short notes, thoughts, or ideas, preserved here on SeanMcP.com.

---

{% set notes = collections.notes | reverse %}
{% include "partials/note-list.njk" %}