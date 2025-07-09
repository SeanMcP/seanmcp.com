---
title: Writing code was never the bottleneck in software engineering
description:
  In "Writing Code Was Never the Bottleneck", Pedro Tavares challenges a common
  assumption in the LLM age. I agree and add some thoughts based on my
  experience in software-development environments.
date: 2025-07-09T07:05-0400
tags:
  - Articles
  - Software Engineering
  - AI
flags:
verse: Proverbs 25:19
prose: true
---

_Writing Code Was Never the Bottleneck_ by Pedro Tavares makes an important
observation about using LLMs when writing software. The problem as stated by the
solution is that writing code is primarily the bottleneck in development. "If
only we could write code faster, then we'd be able to ship more features."

[Tavares challenges that presupposition](https://ordep.dev/posts/writing-code-was-never-the-bottleneck):

> The actual bottlenecks were, and still are, code reviews, knowledge transfer
> through mentoring and pairing, testing, debugging, and the human overhead of
> coordination and communication. All of this wrapped inside the labyrinth of
> tickets, planning meetings, and agile rituals.<br/><br/>These processes, meant
> to drive quality, often slow us down more than the act of writing code itself
> because they require thought, shared understanding, and sound
> judgment.<br/><br/>...<br/><br/> The marginal cost of adding new software is
> approaching zero, especially with LLMs. But what is the price of
> understanding, testing, and trusting that code? Higher than ever.

When engineering software for an organization, writing code is rarely the hard
part. It's everything that precedes and follows writing code that slows you
down: gathering requirements, exploring existing patterns, reviewing pull
requests, testing solutions, sharing knowledge. LLMs can supercharge the
generation of code, but they make the rest of the process slower.

Judicious use can result in modest productivity improvements. But stray too far
and suddenly you're spending more time to assure quality or waving it away with
"vibes".

Tavares' observation also explains why using LLMs in greenfield or prototype
environments feels so different. In those situations, writing code _is_ the
bottleneck and generating code with an LLM blows it wide open. The tech debt
created by using LLM code takes time to be noticed and may never come up (_e.g._
sacrificial prototypes).

But in a software-development environment, the equation changes. Requirements,
understanding, reviews, and testing take priority. In that world, generating
huge swaths of code with LLMs only exacerbates the true bottlenecks of software
engineering. The craft becomes learning how to use them well without creating
more problems for your team down the road.

---

Hat tip to [Rendezvous with Cassidoo](https://cassidoo.co/newsletter/) for
sharing the article.
