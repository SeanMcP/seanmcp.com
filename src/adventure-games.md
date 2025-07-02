---
title: "Adventure games"
description: Resources for table-top adventure games
tagline: Resources for table-top adventure games
# date: 2024-05-23T11:33-0400
leaf: false
layout: page.liquid
---

This is a collection of resources for table-top adventure games like Dungeons &
Dragons. I prefer rules-light systems that focus on storytelling like:

- [Cairn](https://cairnrpg.com/): A minimal ruleset for playing any table-top
  adventure game
- [Shadowdark](https://www.thearcanelibrary.com/pages/shadowdark): Very similar
  to D&D but with fewer rules and more danger

Someday I would like to try: Mausritter, Into the Odd, Electric Bastionland,
Mythic Bastionland, and Knave.

## Pages

{%- assign pages = collections["Adventure Games"] | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse -%}
{% include "page-list" %}
