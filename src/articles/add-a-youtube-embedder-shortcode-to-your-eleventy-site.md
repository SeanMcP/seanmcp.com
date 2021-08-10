---
title: Add a YouTube-embedder shortcode to your Eleventy site
description: A quick guide to writing a time-saving shortcode to create the embeddable code from a YouTube url
date: 2021-08-10
tags:
  - eleventy
  - youtube
verse: Isaiah 59:1
# /img/<IMAGE>.min.jpg
image:
---

For a recent article, I wanted to add some embedded YouTube videos. Through the share menu beneath the video, you can select "Embed" to copy and paste the code for an `iframe` that will load the YouTube video.

That works well, but if you want to customize that code at all for embedded videos, you need to remember to do that every time you copy and paste it into one of your pages. Rather than fiddling with that, I decided to create a custom shortcode to handle all of that for me.

Here is the code for my Eleventy site, but with a little tweaking you could make this work for any static-site generator:

```js
// .eleventy.js
module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("youtube", (videoURL, title) => {
    const url = new URL(videoURL);
    const id = url.searchParams.get("v");
    return `
<iframe class="yt-shortcode" src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player${
      title ? ` for ${title}` : ""
    }" frameborder="0" allowfullscreen></iframe>
`;
  });
};
```

I removed a lot of the default permissions from the YouTube embed code, and opted for `youtube-nocookie.com` instead to save my visitors from some tracking. You can [read more about that on Dries Buytaert's blog](https://dri.es/how-to-remove-youtube-tracking).

With that shortcode added, you can use it in any of your template files with the {% raw %}`{% youtube %}`{% endraw %} syntax:

{% raw %}

```md
<!-- With title -->
{% youtube "https://www.youtube.com/watch?v=DhKHAopx7D0", "'Time Bomb' by
Rancid" %}
<!-- Without title -->
{% youtube "https://www.youtube.com/watch?v=LnaeImQ0TSg" %}
```

{% endraw %}

Finally, I added a bit of CSS to help the videos look good on my site. These styles might be different for your site:

```css
iframe.yt-shortcode {
  height: 50vw;
  margin: 1rem 0;
  width: 100%;
}
```

Now if I want to change the way I handle YouTube embeds, I need only to change the code in one place. Hope that helps!

Happy embedding!
