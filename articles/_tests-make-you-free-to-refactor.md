---
title: Free to refactor
description: Why tests (should) free you to refactor with confidence
date: 2019-09-24
tags:
    - testing
layout: article
---
<!-- Outline

- Holds up to refactoring
- Promotes iteration
- Confidence to grow
-->

A few weeks ago [I wrote about testing UI components](../snapshot_test_ui_components), and why I recommend that you [don't use snapshots](https://jestjs.io/docs/en/snapshot-testing). I finished that article with this line:

> Your tests should give me the confidence to refactor any component to your heart's content. They should fail if you change functionality, not structure.

Since writing that, I have spent the last few days writing tests for some new UI components. I side-stepped snapshots and wrote entirely [functional tests](https://en.wikipedia.org/wiki/Functional_testing), asserting based on the required functionality of the component.

This type of testing is certainly difficult and time-consuming (especially compared to snapshots). But I think the benefits are clear: they hold up under refactoring, promotes iteration, and gives you the confidence to grow.

## Refactoring

I have yet to come across a component or complex function I've written that couldn't use refactoring. Maybe it's a new technique that I've learned that is perfect for this situation, or perhaps it's logic that appeared _*cough*_ logical at the time that isn't on a second look.

Whatever the case, refactoring code is a constant in this profession, and tests (should) help you embrace it.

When you write a functional test, you start with a statment like "With `A` input, my function should output `B`." Then you write a test that covers that condition. Your test doesn't care how you get from `A` to `B`, just that you always do.

Maybe the first time through you take a long an circuitous path with lots of conditional logic. Next time you refactor, you take a more direct route. Then you decide that some of those conditions were necessary. The test doesn't care, so long as `fn(A) = B`.

Today, I stumbled upon this tweet from Venkat Subramaniam:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Refactoring ones own code, and watching the tests continue to pass, is both a humbling and an enriching experience.</p>&mdash; Venkat Subramaniam (@venkat_s) <a href="https://twitter.com/venkat_s/status/1176386197641412608?ref_src=twsrc%5Etfw">September 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 