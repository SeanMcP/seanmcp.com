---
title: "Astro and release velocity"
description:
  Astro is a great framework, but it's frequent updates are overwhelming
tags:
  - Astro
  - Software Engineering
pubDate: 2024-05-17T21:12-0400
verse:
---

This website is built with [Astro](https://astro.build), and overall I've been
happy with my choice. The framework model makes sense to me, and I really enjoy
using their templating language for building UI. If I were to start over today,
I would still choose Astro.

But I've had an unsettled feeling about Astro and this site, and I think I've
finally put my finger on it: Astro is moving too quickly. It feels like every
few weeks they're putting out a new version with new features and new patterns
to build new websites.

And as exciting as that is (I'm sure the maintainers are thrilled to be able to
ship new things so quickly), it's overwhelming for me as a user. I feel like I'm
always behind because I am. I updated the Astro dependencies on this site two
months ago, and I'm already four minor versions behind. That's two minor
versions per month!

Now full credit should go to the Astro team for working to make updates
relatively painless. I haven't encountered any particularly difficult breaking
changes, and they have tooling that helps make the process simpler. But a simple
process is still a process, and it's one that users have to do a lot to keep
their Astro sites up to date.

I know that no one is forcing me keep my dependencies on latest; that pressure
is internal. But it's real, and it impacts how I feel about working with Astro.

Given two identical frameworks, my preference would be for one that updated
_regularly_ but less frequently. Quarterly or even twice-yearly updates would be
perfect (patches excluded). Enough to keep you thinking about updating
dependencies but not so often that you're always behind.

Sadly for me, that isn't the reality with Astro. Is that enough to drive me to
choose a different framework? No. But release velocity was not something I
considered when choosing Astro. Now with a little more experience it is
something that I will think about in the future.
