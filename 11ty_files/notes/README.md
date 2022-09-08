# Notes

Use this when creating a new note from GitHub.

## Format

```md
---
number:
date:
---
```

## Script

In the console, run the following and paste into a new note file:

```js
copy(`---\nnumber: \ndate: ${new Date().toISOString()}\n---\n`)
```
