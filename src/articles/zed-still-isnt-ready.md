---
title: Zed still isn't ready
description:
  Zed is a nice light-weight editor, but the slow searching and memory issues
  make it a non-option for my work.
date: 2025-01-15T20:30-0400
tags:
  - Review
  - Zed
flags:
verse: Matthew 24:44
---

VS Code started acting up after a recent update, so I took the opportunity to
[try Zed again](/articles/zed-is-a-rocket-powered-skateboard). It has improved
since my last attempt and was a perfectly workable editor for small stuff.

The cracks started to show when I used it with a large codebase. The search was
incredibly slow—much slower than VS Code. And since it doesn't preserve filter
settings between queries, every subsequent search was slow too.

I liked some of the code actions like autofix imports, but I never felt
confident that Zed would select the right file. At work we have some duplicate
file names and exports, so it is important to be able to choose which `View`
component to import.

The biggest issue I encountered was around memory and possible leaks. Zed (for
some reason) supports looking up all references for primatives like `false`,
which would crash my M2 Mac by scouring the whole codebase for every instance of
`false`. Today it crashed when I searched for a term with too many matches.

I couldn't get AI completions working correctly (despite installing and
registering with GitHub Copilot) nor the unit test runner.

Zed is promising, and I think they nail a lot of the intangibles that make a
product desirable. But it still isn't ready for full-time development work.
