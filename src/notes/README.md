# Notes

Use this when creating a new note from GitHub.

## Format

```md
---
date:
---
```

## Script

In the console, run the following and paste into a new note file:

```js
copy(`---\ndate: ${new Date().toISOString()}\n---\n`)
```
