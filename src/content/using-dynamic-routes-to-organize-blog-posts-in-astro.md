---
title: Using dynamic routes to organize blog posts in Astro
description:
  If you want to display multiple blog posts on a single page, then you might
  want to use a dynamic route to generate pages for your content.
tags:
  - Articles
  - Astro
date: 2022-10-29T13:21-0400
---

If you create a new Astro project with the installer, it will organize blog
posts as markdown files in a `src/pages/blog/` directory. Each post will have
some frontmatter, including a `layout` field to set the frame in which the
content will render.

Astro will create a new page for every markdown file in the `src/pages/`
directory, so adding a new post is as simple as a creating a new markdown file
in the `blog/` subdirectory.

When you want to render blog content on another page, _e.g._ a homepage with the
last three posts, then you need to rely on two Astro APIs:
[`compiledContent`](https://docs.astro.build/en/guides/markdown-content/#compiledcontent)
and/or
[the `Content` component](https://docs.astro.build/en/guides/markdown-content/#content).
These will give you the Astro-rendered content for a post that you can then add
to another page.

There are two issues that I encountered using these APIs:

1. MDX does not support `compiledContent`, so you can either omit `.mdx` content
   or create your own workaround with
   [rehype plugins](https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins).

2. The `Content` component for a post **includes the markup for the layout**, so
   "embedding" it in another page results in a strange iframe-esque page within
   a page.

If you just want to render the content of md/mdx files, there doesn't seem to be
a workable solution with the current setup. But with a little refactor, you can
have your cake and eat it too!

## A new organization system

Rather than putting all of your content somewhere in the `src/pages/`, instead
let's create another directory at the same level as `src/` called `content/`.
This is where we will put all of our blog posts, maybe in a `blog/`
subdirectory:

```
content/
    blog/
        first-post.md
        second-post.md
        third-post.md
src/
astro.config.mjs
```

Now we'll create a dynamic route for all blog posts in the `src/pages/blog/`
directory. This file will gather all of the posts from your new `content/`
directory create static paths for each:

```astro
---
// src/pages/blog/[slug].astro

export function getStaticPaths() {
  const content = Astro.fetchContent("../../../content/blog/*.{md,mdx}");
  return content.map((item) => ({
    params: { slug: item.url.split("/").pop() },
    props: {
      ...item,
      // Any additional props
    },
  }));
}
---

<!-- Render your post -->
```

Astro will call
[the `getStaticPaths` function](https://docs.astro.build/en/core-concepts/routing/#static-ssg-mode)
and create a page for each item in the returned array with the given params.
We've added the `item` as props for the page, so we can access
[all of the data for each post](https://docs.astro.build/en/guides/markdown-content/#markdown-layout-props).

Finally, we can remove the `layout:` frontmatter from all of our posts in
`content/blog/` and set the markup in our new dynamic route:

```astro
---
// src/pages/blog/[slug].astro

export function getStaticPaths() {
  const content = Astro.fetchContent("../../../content/blog/*.{md,mdx}");
  return content.map((item) => ({
    params: { slug: item.url.split("/").pop() },
    props: {
      ...item,
      // Any additional props
    },
  }));
}

const {
  Content,
  frontmatter: { title },
} = Astro.props;
---

<h1>{title}</h1>
<Content />
```

<call-out type="info">

Make sure to include post content in the `<head>` element too, and add encoding
to ensure that it renders correctly.

</call-out>

With all of that in place, you are now able to render markdown or MDX blog post
content anywhere on your site with Astro's `Content` component; we're doing it
right here in our `[slug].astro` file!

In addition to resolving the issue above, I think I like this approach better
because it keeps the content separated from the code, which feel like different
concerns. As of publishing, I use it to organize notes, which are individuals
bits of md/mdx content that are [rendered on the notes page](/notes).

## tl;dr

Astro's default setup for organizing blog posts works well for a one-to-one
relationship between content and pages. But if you want to have a many-to-one
relationship with markdown and MDX, a better aproach may be layout-less posts
with a dynamic route.

I hope that helps! Happy blogging 🚀
