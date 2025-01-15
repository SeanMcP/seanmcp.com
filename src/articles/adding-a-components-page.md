---
title: "Adding a components page"
description:
  After a recommendation from Syntax.fm, I added a public page to see all of the
  components that I’ve created for this site
tags:
- Meta
- Storybook
- Testing
date: 2024-02-16T11:24-0400
verse: 1 Corinthians 12:17-18
---

[In episode 696 of Syntax](https://syntax.fm/show/696/), hosts Scott Tolinski
and Wes Bos discussed
[testing components when building websites](https://syntax.fm/show/696/how-to-build-a-website-or-app/transcript#testing-components)
and where fully-featured solutions like Storybook struggle:

> **Tolinski:** People often feel like if I wanna test these things or look at
> them in isolation, I now have to bring in some other dependency. And that's
> the whole thing with Storybook: it's its own process. It’s a whole entire app
> that runs within your app.

They instead proposed a simple page where you dump all of the components that
you’ve created. You can create individual scenarios for components that need it
without the complexity of another dependency.

> **Bos:** You can see them all at once, and you you're not playing whack-a-mole
> where you change one thing and you go, “Oh, shoot. That that broke it on this
> instance.”

[Their components page is public](https://syntax.fm/system/components), which
has inspired me to create one of my own:
[seanmcp.com/internal/components](https://seanmcp.com/internal/components)

It’s fun to see all of the components that I’ve created for this site on a
single page. And the pages combines nicely with
[a dev-only mock article](https://github.com/SeanMcP/seanmcp.com/blob/master/src/content/articles/000-it-has-everything.md)
to form a two-step testing process for making changes to this site.

I think `/components` pattern is a great solution for most sites, and I’m
excited to use it the next time I redesign or rebuild.
