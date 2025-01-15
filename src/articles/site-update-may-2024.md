---
title: "Site update May 2024"
description:
  tl;dr I removed dark mode, `/contact`, likes, analytics, Netlify, and changed
  random articles
tags:
- Meta
date: 2024-05-04T14:29-0400
verse: Hosea 6:3
---

I [just landed a PR](https://github.com/SeanMcP/seanmcp.com/pull/73) that made
some changes to this site. It started as an experiment to move from Netlify to
Cloudflare, but then turned into Spring cleaning. Here is a summary of all the
changes:

- **Removed dark mode**: I'm sorry if dark mode was your preference (it was mine
  too), but I didn't like the ongoing cost of maintaining multiple themes. Now
  it's just light mode, but that will change in the future.
- **Removed `/contact`**: No one used it, and my email address is in the footer
  of every page.
- **Removed likes**: It was an interesting experiment, but a) it wasn't valuable
  to me and b) it locked me in to specific platform features.
- **Removed analytics**: I hadn't checked the analytics in months, and even when
  I did it never had an impact on my decisions.
- **Removed Netlify**: This included Netlify CMS and an `/admin` route I never
  used, Netlify CLI, Netlify edge functions, and a single Netlify form.
- **Replaced `/fn/random` with [/articles/random](/articles/random)**: A feature
  for random articles is fun, and this iteration handles everything with
  client-side JavaScript.

Now that the work is done, I don't actually have plans to move off Netlify. I
didn't see the performance improvements that others have reported, so inertia
will keep me here for now[^1]. But I like the idea that I could move quickly
if/when the need arises.

[^1]:
    [Hopefully I don't live to regret that decision](https://www.reddit.com/r/webdev/comments/1b14bty/netlify_just_sent_me_a_104k_bill_for_a_simple/).
