---
title: "Align content in Markdown tables"
description:
  You can use colons in the header row separator to align content in a Markdown
  table
tags:
- Markdown
date: 2024-06-07T06:47-0400
verse: Exodus 25:30
---

You can set the `align` attribute on a table column in Markdown by using a colon
in the header row separator.

A typical table looks like this:

```md
| A   | B   | C   |
| --- | --- | --- |
|     |     |     |
```

To align the content, add colons to the separator row--`:-` for left, `:-:` for
center, and `-:` for right:

```md
| A    |   B    |     C |
| :--- | :----: | ----: |
| Left | Center | Right |
```

That Markdown will render a `table` with the `align` attribute set on the header
and body cells:

| A    |   B    |     C |
| :--- | :----: | ----: |
| Left | Center | Right |

[Read more about Markdown tables](https://www.markdownguide.org/extended-syntax/#tables)
