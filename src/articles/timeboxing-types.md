---
title: Timeboxing types
description:
  In order to maximize the value of types and your time, consider timeboxing the
  amount of time that you spend writing any given type
tags:
  - Articles
  - Programming
  - Type Systems
  - TypeScript
date: 2023-08-02T06:14-0400
verse: Romans 5:14-15
image: /img/value-of-writing-types.png
---

Two things that I currently believe:

1. There is a lot of value in statically typed code
2. Writing types is a potential time sink with diminishing returns

I don't feel like I need to justify the first belief. The trend in the front-end
industry towards TypeScript illustrates that there is a growing consensus that
types are a net positive.

That second belief probably needs more of a defense. I think there is a general
maximum value for any given type, and the additional value derived from writing
a type decrease over timer. Plotted on a chart, I think it looks something like
this:

![A chart showing the value of writing types decreasing over time](/img/value-of-writing-types.png)

Despite this knowledge, my brain is still tempted to spend significant amounts
of time writing the "perfect" type. I find myself giving away a lot of
additional time while deriving little to no additional value.
[Chris Krycho, an engineer at LinkedIn, puts it this way](https://v5.chriskrycho.com/journal/is-typescript-good/):

> Type systems very often do mash a puzzle-solving button in our brains.
> Figuring out how to get the types _just right_ for a given design can lead an
> unwary developer (reader: I mean myself) into an hours-long maze. Getting out
> of one of those mazes with a good solution feels incredibly satisfying. But it
> is not always _worth_ it.

The puzzle metaphor rings true for me. As with other puzzles, we want to spend
the time to "solve" them. And as the types grow more complex, so too does the
amount of time required for the "solution". I don't know if I can say
exponentially, but that doesn't feel far off.

The reality is that a basic type written quickly will probably get you 90+% of
the benefits of the "perfect" type. Chris continues:

> A simpler type might be a little less precise, might catch a couple fewer
> errors, might make the system mildly less robust at runtime, might make it
> possible for there to be runtime bugs the system could in principle have ruled
> out entirely by clever use of the type system… and be 100% worth those
> tradeoffs given the context.

I think the solution to marry beliefs 1 and 2 is to **timebox the amount of time
that you spend writing any given type**. Give yourself 5 minutes to write the
best type that you can, and then move on.

If you can write the perfect type--"solve" that puzzle--then great! But if not,
that's okay too. You surely have enough value in the type to justify the time
you spent writing it.

This timeboxed writing should be in combination with an effort to master the
type system you are using. As you grow in your understanding of the system, the
quality of the types that you can write within your timebox will increase.

Is 5 minutes enough time? That depends. If you are new to the type system, you
might need a little more time to write a valuable type. Or if you are dealing
with a mission-critical type, it might be worthwhile to invest more time. If you
are authoring a library that will be shared widely with the organization or
world, then a more-perfect type will probably be worth the time (if only to save
yourself future support work).

But for the average developer with some experience writing types, I think 5
minutes is a good starting point.

Try it out, and
[let me know what you think](mailto:sean@seanmcp.com?subject=I%20tried%20timeboxing%20types).
