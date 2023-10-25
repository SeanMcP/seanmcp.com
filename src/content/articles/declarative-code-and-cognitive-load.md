---
title: Declarative code and cognitive load
description:
  Maxi Ferreira in Frontend At Scale on how declarative code can reduce
  cognitive load.
tags:
  - Cognitive Load
  - Declarative Code
  - Software Engineering
pubDate: 2023-10-25T11:03-0400
verse: Isaiah 46:9
---

If you had asked me ten years ago about my ability to handle cognitive load, I
would have said that I was above average. Today? I would say that I am pretty
bad at holding multiple things in my head at once. Whether that is due to aging,
fatherhood, multiple-bouts of COVID, humility, or any combination of those, I
can’t say.

What I do know is that I am now very interested in reducing cognitive load so
that I can do my best work.

In a recent issue of [Frontend At Scale](https://frontendatscale.com/issues/8/),
Maxi Ferreira wrote about how declarative code can reduce cognitive load. Giving
an example service for file uploading with user permissions, Ferreira proposes a
simple list of maps for file extensions and permissions:

> This [declarative code solution] doesn't simplify the relationship between our
> services in any way, but it does wonders for reducing cognitive load. We might
> still have some complicated logic between our different services, but now we
> don't need to concern ourselves with it. We can now *declare* our updated
> rules without having to load a bunch of information in our heads.

This feels like a significant insight and is a great solution to the example
problem. You don’t need to know _how_ the system works (at least, not at first),
but you can quickly understand _what_ the system does by looking at the
validation rules.

Now I’m off to brainstorm about how declarative code could reduce some of the
cognitive load in systems I’m working on at Khan Academy. Give the full article
a look and let me know what you think.
