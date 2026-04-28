---
title: What is VS Code doing?
# A description should spoil the content with a complete sentence.
description:
  VS Code broke Intellisense and started misattributing commits to Copilot. I
  fear for the future of my once-favorite editor.
date: 2026-04-28T15:47-0400
tags:
  - Articles
  - VS Code
  - Lament
flags:
verse: Daniel 5:16
prose: false
---

I have been a VS Code user for many years now. It was a soft landing from Atom
(RIP), and there haven't been any significant features from other editors that
have tempted me away. I have never experienced the performance issues that
others have cited. It wasn't always as cool as the competitors, but it worked
and worked well. Until recently.

[This week VS Code started adding](https://github.com/orgs/community/discussions/194075)
`Co-authored-by: Copilot <copilot@github.com>` to my commit messages
_automatically_ when commiting from the UI. In two instances that I documented
at work, the commits included zero generative AI. But Copilot got the
attribution anyway. In a world with increasing contributions from AI, it is
important to me that any messaging about AI use is clear and accurate. This is
not, and I'm disappointed that any decision makers working on VS Code thought
that this was a reasonable default.

Then VS Code broke Intellisense – far and away its most valuable feature.
Instead of providing the fast and intuitive help that users have come to expect,
they have conceded to AI-powered Inline Suggestions. Previously the two systems
were battling for supremacy, but the result was usually reasonable: Intellisense
when it detected something and Inline Suggestions when it couldn't. It was a
_détente_ that I could live with. But now Inline Suggestions seem to have won
the war at the expense of users. Most painful to me are the loss of snippets and
automatic imports.

At one point in time VS Code was the undeniable king of cross-platform code
editors. Then AI took over the engineering world and forks drew some folks away.
I've enjoyed a lot of the AI-focused features that VS Code has implemented over
the years – he first few generations of GitHub Copilot were truly magic and
transformative for my work. But these most recent changes feel like crossing
the Rubicon. The progress _ad cacatum_ has begun and there is no going back.

I'm writing this in exile from Zed. I don't want to be here; I want my editor
back. But I'm afraid that the writing is on the wall. /Lamentation
