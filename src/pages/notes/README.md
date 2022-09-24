# Notes

Use this when creating a new note from GitHub.

## Format

```md
---
layout: "../../layouts/NoteLayout.astro"
number:
date:
---
```

## Script

In the console, run the following and paste into a new note file:

```js
copy(`---\nlayout: "../../layouts/NoteLayout.astro"
number: \ndate: ${new Date().toISOString()}\n---\n`)
```
