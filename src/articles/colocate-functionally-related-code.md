---
title: Colocate functionally-related code
description:
  My preference is to colocate code based on functional relation–what it
  does–and not domain relation–what it is.
date: 2025-06-30T14:30-0400
tags:
  - Software Engineering
  - Preferences
flags:
verse: Acts 2:44
prose: false
---

I read [_Colocation_ by Kent C. Dodds](https://kentcdodds.com/blog/colocation)
back in 2019 before I had an opinion on the topic. Six years later, I've come to
a similar conclusion. Generally speaking, we should keep related code as close
together as possible.

Common related code in my work are components, styles, tests, and stories. My
preference is to keep all of these files together in the same directory:

```
components/
    ├── my-component.tsx
    ├── my-component.css
    ├── my-component.test.tsx
    └── my-component.stories.tsx
```

A change to one will often require a change to one or more others. By keeping
the code together in your file system, you both remind yourself of that fact and
make it easier to find the other files that need to change.

The major alternative pattern I see are dedicated directories for each
"concern": `__tests__`, `__stories__`, _etc_. By one definition of related, this
is a method of colocating related code. Everything in those directories is
related to the same domain and has some things in common.

But rarely do I need to update "all test files." And when I do the filename
pattern is sufficient to find them. In contrast, every day I need to update
functionally-related code. So I want my organization system to prioritize the
work that occurs most frequently.

Colocate all of your functionally-related code.
