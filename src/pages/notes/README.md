# Notes

Use this when creating a new note from GitHub.

## Format

```md
---
layout: "@layouts/NoteLayout.astro"
number:
pubDate:
---
```

## Script

In the console, run the following and paste into a new note file:

```js
copy(`---\nlayout: "@layouts/NoteLayout.astro"
number: \npubDate: ${new Date().toISOString()}\n---\n`)
```
