---
title: Adding images to articles (again)
description:
  I went through the process of adding images back to my articles with a helpful
  script to automate image processing for me.
image: /img/warm-mountains.jpg
tags:
  - Blogging
  - Meta
pubDate: 2022-12-13T06:52-0400
---

Back in 2020
[I wrote about adding images to articles](/articles/adding-images-to-my-articles),
but I broke all of that when I rewrote the site in September. At the time, I
wasn't too upset about the regression, because images had become a bit of a
painpoint for the site.

The reality is that I _want_ to add images to my articles, but I was paralyzed
by the process of optimizing images for the web. Between widths and aspect
ratios and new image formats that aren't support by all browsers, to `figure`
and `img` and `picture` elements and all their unique attributes... it is
overwhelming.

But images are helpful. Beyond adding a little visual interest to articles, they
can help explain things that are hard to put into words. For example, I have a
few articles talking about features within the browser's dev tools. I can try
and describe the toolbars of a panel's pane all I want, but a quick screenshot
is much more helpful.

So once more into the breach.

Astro, like other site-building frameworks, has
[a package for adding optimized images to your site](https://docs.astro.build/en/guides/integrations-guide/image/),
but that seems designed for known images on your site like a hero image. What
about arbitrary images within post content? I wasn't sold.

I wanted a solution that would work for all images, regardless of where they
were used in the site. I wanted the process of resizing them to be automatic,
with options to run in development or as part of the build process. That way I
can add images locally or via a CMS and they will be automatically optimized for
the site.

I started with a new Node script, that reads a directory of images and then runs
them through [sharp](https://sharp.pixelplumbing.com/) to resize. The script
overwrites the original file (so that references within Markdown files are
preserved), and stores the original for future reference. The changes are
automatically committed (though that part is a little hit or miss).

With the code in place, I added a `"prebuild"` script to the `package.json` to
run my script during a build. That way any images that were not resized when
added will be handled before they go into production.

There are some additional feature that I baked in, including a `--skip-git` flag
for running in CI/CD and an ability to regenerate all images when the width
settings change. That's a little in the weeds for this article, but you can
[view the source code on GitHub if you're interested](https://github.com/SeanMcP/seanmcp.com/commit/d42adf26c833642f8d8a47cc3fbc76e36db0b020#diff-978160e4c9d9c60603d05e6a05f4d9ef1ae15c9bdd4c2a39ae3049a5708f5649).

Hope that helps! With all of this in place, I'm looking forward to adding more
images to my articles in the future. So stay tuned for more!
