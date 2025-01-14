---
title: Free to grow
description: Why tests (should) free you to grow with confidence
date: 2020-02-17T12:00-0400
image: /img/redwood.min.jpg
verse: Isaiah 53:2
tags:
  - Testing
---
<!-- Outline

- Holds up to refactoring
- Promotes iteration
- Confidence to grow
-->

![a photograph of an upward shot of redwood trees](/img/redwood.min.jpg)

I previously [wrote about testing UI components](../snapshot_test_ui_components), and why I recommend that you don't use snapshots. I finished that article with this line:

> Your tests should give me the confidence to refactor any component to your heart's content. They should fail if you change functionality, not structure.

Instead, I advocate for writing entirely [functional tests](https://en.wikipedia.org/wiki/Functional_testing), asserting based on the required functionality of the component.

This type of testing is certainly more difficult and time-consuming (especially compared to snapshots). But I think the benefits are clear: they hold up under **refactoring**, promote **iteration**, and gives you the confidence to **grow**.

## Refactoring

I have yet to come across a component or complex function I've written that couldn't use refactoring. Maybe it's a new technique that is perfect for these situation, or perhaps it's logic that appeared logical at the time that isn't on a second look.

Whatever the case, refactoring code is a constant in this profession, and tests (should) help you embrace it.

When you write a functional test, you start with a statement like "With `A` input, my function should output `B`." Then you write a test that covers that condition. Your test doesn't care how you get from `A` to `B`, just that you always do.

Maybe the first time through you take a long an circuitous path with lots of conditional logic. Next time you refactor, you take a more direct route. Then you decide that some of those conditions were necessary. The test doesn't care, so long as `fn(A) = B`.

<!-- <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Refactoring ones own code, and watching the tests continue to pass, is both a humbling and an enriching experience.</p>&mdash; Venkat Subramaniam (@venkat_s) <a href="https://twitter.com/venkat_s/status/1176386197641412608?ref_src=twsrc%5Etfw">September 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->

## Iteration

Refactoring is looking back at code, while iterating is looking ahead. Our goal as software engineers should be to continuously deliver incremental improvements on our active products. This means slowing building on what we already have.

Maybe you designed a function with situation A in mind, but notice that with a minor adjustment it can easily handle B and C. Once you are done making that change, the functional test that you wrote for situation A should be the barometer for moving forward.

If the test passes, then you're good to proceed. If not, then you've made a breaking change; go back and rethink your approach.

When you're looking to add a new feature to your product, a passing test suite should give you full confidence that all of your changes are backwards compatible.

## Free to grow

A redwood tree doesn't grow to 300 feet over night. Rather, a journey of a thousand miles begins with a single step[^1].

Great software is not written in one sitting. It is fine tuned and improved slowly over the lifespan of the product.

This means a regular cycle of refactoring and iteration–improving and expanding. The more your software is able to do this, the healthier it is and the better it will become over time.

A functional test suite enables and encourages your software to grow this way. You can make improvements to your code and verify that it still functions. You can add more features while being assured that there are no breaking changes.

To set your team or product up on a thousand-mile journey, start with your best foot forward. Write the kind of tests that enable you to take each successive step with confidence.

Write functional tests.

[^1]: Paraphrased from Laozi's [_Tao Te Ching_](https://en.wikipedia.org/wiki/Tao_Te_Ching)
