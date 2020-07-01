---
title: Why I switched from Gatsby to Eleventy
description: 
date: 2019-04-12
tags:
  - eleventy
  - meta
layout: article
---

I spent the last few weeks exploring Eleventy, a simpler static-site generator. After tinkering for a few days, I decided to transition this website from Gatsby to Eleventy.

I'm going to take the opportunity explain my decision for the benefit of myself and others who are looking for a static-site generator.

## Disclaimer

Before I dive into my reasons for switching from Gatsby to Eleventy, I would like to state: **I like Gatsby**. I have no major criticisms of the project and would turn to it first if I were making a rich static site for a small business or enterprise. All of the following are not reasons why Gatsby is bad but rather why I preferred Eleventy for this blog.

<!-- 
### Gatsby

In case you haven't heard of it, Gatsby is one of the fastest-growing static site generators. The project was started by [Kyle Mathews](https://github.com/kyleamathews) way back in 2015 and has grown into a "free and open source framework based on React that helps developers build blazing fast websites and apps".

For this reason (and others), Gatsby has become the first choice for React developers looking to create a static site with a growing ecosystem of powerful plugins.

### Eleventy

While some folks may have heard of Gatsby before, fewer will be familiar Eleventy. Created by [Zach Leatherman](https://github.com/zachleat) in November 2017, Eleventy bills itself as "a simpler static site generator." In a directory with only a single markdown file, Eleventy can generate a static site with one command:

```bash
eleventy
```

Folks at CERN, Google, Netlify, CSS-Tricks, and [loads of others](https://www.11ty.io/docs/sites/) are using Eleventy to generate static sites. -->

## The initial decision

After kicking around the idea of moving off Medium to a personal blog, I decided to take the plunge in the Fall of 2018. After a quick survey of the options, I settled on Gatsby for the following reasons:

- **React based**: I am a React developer and loved the idea of using a familiar library for creating the components of my personal website.
- **GraphQL powered**: I didn't know much about GraphQL at the time, but everything I heard was positive.
- **Growing popularity**: It seemed that everyone in the React community was launching a new Gatsby site. All aboard the hype train!

I tinkered around with the setup for a few weeks, then launched the site late in 2018.

## Honeymoon

Gatsby has a bit of a learning curve, but after the first few weeks I felt comfortable working in their environment. Whenever I wanted to tweak the layout, design, and/or functionality of the site, I felt comfortable diving into the JavaScript to make the change.

Gatsby's integration with Netlify was seamless as well^[In retrospect, I think this has more to do with Netlify's amazing service than Gatsby.], which made pushing changes to production as easy as pushing code.

With my Gatsby personal site and blog, I was riding high with the cool kids.

## Cracks start to form

As the months rolled by, however, I started to struggle with my Gatsby-powered site. There were a few specific ways where those manifested themselves.

### Tinker temptation

I found myself spending significantly more time making minor tweaks to the site than I did writing. This is partly a personal problem; I have a fixed mindset about writing that can throw significant blocks. I'm working on valuing production over perfection in that error.

And the fact that my site was written in React provided me ample temptation to postpone writing in favor of tinkering. Whenever I found it difficult to write, I would create, then refactor, then recreate, then refactor components _ad nauseam_.

It was not uncommon for me to have over a dozen commits on my blog a week, but no article to show for it. Gatsby's strength of using React ended up a weakness for me as a writer.

### Modern complication

Gatsby's surge in popularity at the end of 2018 drew criticism from certain sections of the web. The criticism usually centered around Gatsby's modern tooling, which is more advanced than some of its competitors.

Mark Dalgleish, one of my funniest follows on Twitter, shared that sentiment with this gem of a meme:

<!-- EMBED THE MEME, DOG -->

I think this criticism is a little misguided, but there is a truth to the implied question: "Why do you need to use all these fancy tools for a simple blog?"

As I struggled with the aforementioned temptation to tinker instead of write, that question was left ringing in my ears. Maybe there was a simpler system for my site?

### The final straw

I have a 2010 MacBook Pro on which I occasionally do some work. Despite it's age, the computer still does a great job keeping up with the modern development environment. Up until recently, I used that laptop exclusively for personal projects, and it never had a problem (besides speed).

That is, until it met Gatsby.

Try as I might, I could not get my Gatsby site to run on that computer. I changed Node versions, updated `gatsby-cli`, and cloned and re-cloned the repository, but to no avail.

I just resigned myself to not using that computer (it _is_ almost ten years old). But then, a two months ago out of the blue, I had the same problem with my work computer (2015 MacBook Pro). Try as I might, I couldn't get Gatsby running.

Now there is almost certainly a solution to the problem on both of my computers. But I searched for a while, tried a few workarounds, and couldn't find it. At some point, you need to ask: is it worth it?

I decided that, instead of sinking more time tracking down this problem, I would instead investigate different generator solutions.

## Investigating alternatives



## Making the switch

- Simplicity
  - Meme
  - Diagnosing Gatsby problems
  - Gatsby problems on older systems
- Not React
  - React === reusability
  - Felt wrong creating 90+% single-use components