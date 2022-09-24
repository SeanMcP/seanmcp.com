---
layout: "../../layouts/ArticleLayout.astro"
title: Adding images to my articles
description: How the right design and process for sourcing images made all the difference for me
pubDate: 2020-06-30
tags:
    - Blogging
    - Meta
verse: Colossians 1:15
image: /img/photograph.min.jpg
---

Back in February, I [set up post images to this blog](https://github.com/SeanMcP/seanmcp.com/commit/b33b30ea11a8fbcf4e4f1753df5ce325ee39917d). Very few of my articles had images, so you may not have noticed.

In the original design, an image spanned the width of the window, replacing the blue gradient on most pages.

This was problematic, because I needed to find large images for it to look decent on big screens. But I also needed to compress those huge images so that the file sizes weren't massive.

I don't know how to do the file sizing and compression during a build step, so instead I avoided added images to any future articles.

Fast forward a few months, and I wanted to take another crack at article images.

## Updating the design

I didn't realize it initially, but choosing a design with full-screen images set me down a path of no return. There isn't a good way to find and serve images that large.

So rather than searching for an impossible solution, I changed the design. By limitting the width of article images, I opened a world of possibilities.

I now have access to more images, because the only need to be 800 pixels by 400 pixels. At that size, cropped and compressed images are super reasonable.

## How to find images

When I want to find an image for an article, I can search the usual places: Unsplash, Pixabay, or an Google search. Then I can copy the image URL, and head over to ezgif.com.

From there, I will:
- Resize the image
- Crop it to 2:1
- Compress to < 30 kB

Once that's done, I can save the image to this repo's `img/` directory. The whole process takes about two minutes.

## Room for improvement

It would be great to automate the resize and compression steps with a build process, so I'll be on the lookout for solutions there.

I would also like to give attribution for the images, where applicable. That seems best served through frontmatter, but I will have to look into that too.

---

I hope that helps you when deciding how to add images to your articles!

Happy writing!
