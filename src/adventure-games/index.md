---
title: "Adventure games"
description: Resources for table-top adventure games
date: 2024-05-23T11:33-0400
leaf: false
---

Resources for table-top adventure games like Dungeons & Dragons.

## Games/systems

- [Cairn](https://cairnrpg.com/): Have played and would recommend
- Mausritter
- [Into the Odd](https://freeleaguepublishing.com/games/into-the-odd/)
- [Electric Bastionland](https://bastionlandpress.com/products/electric-bastionland-hardback-book)
- [Mythic Bastionland](https://www.kickstarter.com/projects/bastionland/mythic-bastionland-rpg-before-into-the-odd/)
- [Knave](https://questingblog.com/knave-2e/)

## Tables

### Hazards

Lightly edited from Necropraxis Productions Hazard System v0.3 (2017)
http://www.necropraxis.com/hazard-system/

| d6  | Hazard                                          |
| --- | ----------------------------------------------- |
| 1   | **Setback**: Someone/thing impedes the players  |
| 2   | **Fatigue**: Players grow tired or suffer harm  |
| 3   | **Expiration**: Loss of a finite resource       |
| 4   | **Locality**: Environment changes in some way   |
| 5   | **Insight**: Gain information into the scenario |
| 6   | **Advantage**: Someone/thing helps the players  |

Questing Beast _Track everything in DnD with one die_ (2023)
https://www.youtube.com/watch?v=WhCulg30Zko

## Pages

{%- assign pages = collections["adventure-games"] | exclude_index | exclude_flag_in_prod: "RSS-ONLY", "DRAFT" | reverse -%}
{% include "page-list" %}
