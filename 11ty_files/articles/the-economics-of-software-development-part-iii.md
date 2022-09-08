---
title: The Economics of Software Development, Part III
description: Demand inelasticity in web development, why its bad, and what we can do about it.
date: 2020-07-29
tags:
    - software-engineering
    - economics
verse: Psalm 102:27
# /img/<IMAGE>.min.jpg
image: 
---

_This is the third post in a series on how economics helps explain the decisions we make when developing software. It is a response to "Summer School", a series from [NPR's Planet Money](https://www.npr.org/sections/money/)._

---

This week's [episode from Planet Money's "Summer School"](https://www.npr.org/2020/07/22/894368822/summer-school-3-profit-cocaine) was about **elastic and inelastic demand**. The elasticity of demand refers to how responsive consumers are to changes in price. If a small change in price has a big impact on demand, then it is considered elastic. If the consumer will buy the good no matter the price, then it is inelastic.

The best example of this I can think of is sitting on the desk in front of me.

## Case study: the MacBook Pro

Apple has done a fantastic job of creating inelastic demand for their laptops. While it is by no means a monopoly, the popularity of the MacBook Pro in developer circles cannot be overstated. If you are developer, some people argue, you need to use a MacBook.

But Apple computers are very expensive, and they seem to grow more so every release. The [latest iMac is priced between **$6,000 and $50,000**](https://www.businessinsider.com/apple-50000-mac-pro-price-not-for-you-2019-12), depending on the features. Most people would never pay that much, but the fact that Apple can even consider charging that much illustrates the inelasticity of the demand.

Recent releases of the MacBook, however, have received mixed reviews. Apple's transition to the butterfly keyboard was largely unpopular, and [seems to have resulted in hardware issues](https://www.wsj.com/graphics/apple-still-hasnt-fixed-its-macbook-keyboard-problem/). I am typing this on a MacBook Pro that regularly has issues with overheating, visual bugs, and display inconsistencies.

Despite this, many developers (myself included) are still convinced that they need to have a MacBook to do their work. So the demand for the product remains fixed, regardless of rising prices or falling quality.

## How to encourage elasticity

Whenever possible, we as consumers need to push back against inelastic demand. As developers, we can structure our tools and processes in a way that one could easily be exchanged for another.

If you are using a cloud provider, write a wrapper interface than can be switched from AWS to Google Cloud Platform or Microsoft Azure without touching any business logic. Architect your products so that they run on multiple platforms, environments, and browsers.

In JavaScript land, that can be as simple as using double quotes in Node.js scripts so that they work on Windows.

By embracing the inevitability of future change and planning for it, we will be in a better position to stay ahead of the competition.
