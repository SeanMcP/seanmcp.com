---
layout: "../../layouts/ArticleLayout.astro"
title: Add Heroicons to an Eleventy site
description: A guide to using the eleventy-plugin-heroicons package in your Eleventy projects
date: 2021-03-09
tags:
  - Eleventy
  - Icons
verse:
# /img/<IMAGE>.min.jpg
image:
---

In a recent [Eleventy](https://11ty.dev) project, I wanted an easy way to add [Heroicons](https://heroicons.com). That lead me to creating an Eleventy plugin that adds some handy Heroicon shortcodes. Here's how to get started:

First, install [`eleventy-plugin-heroicons`](https://npm.im/eleventy-plugin-heroicons):

```shell
npm i -D eleventy-plugin-heroicons
```

Then, add the plugin to your `.eleventy.js` settings file with any other plugins:

```js
// .eleventy.js

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(require("eleventy-plugin-heroicons"));
};
```

With that in place, you are ready to use the `heroicon` shortcode. Head over to a markdown or template file and try it out:


```md
<!-- contact.md -->

- {% heroicon "outline", "mail" %} Send me an email
```


**Note**: These examples are using Nunjucks syntax. If you are using Liquid, you can reference the official documentation for examples.

The `heroicon` shortcode takes a few arguments:

1. The style of icon (outline or solid)
2. The name of the icon
3. An optional alt tag for the SVG

To save yourself a bit of time, you can use the `heroicon_outline` or `heroicon_solid` shortcodes which pass the style automatically. We could replace the previous example with:


```md
<!-- contact.md -->

- {% heroicon_outline "mail" %} Send me an email
```


And it would work the same.

If you use the shortcode without alt text, and `aria-hidden="true"` attribute is applied to the `svg` element. When alt text is provided, a `title` element is added as the first child to the `svg`:


```html
<!-- Input -->
{% heroicon_outline "heart", "Love" %}

<!-- Output -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  data-heroicon-name="heart"
  data-heroicon-style="outline"
>
  <title>Love</title>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  />
</svg>
```


This will enable screen-reader and other assistive technology users to understand what the icon represents. Without an alt tag, you'll want to make sure that the meaning can be derived from context:


```html
<button>
  {% heroicon_solid "plus" %}
  <span>Add item</span>
</button>

<button>
  {% heroicon_solid "x" %}
  <span class="visually-hidden">Close menu</span>
</button>
```


All of the icons have `data-heroicon-name` and `data-heroicon-style` attributes applied to the `svg` that you can use for styling:

```css
[data-heroicon-style="outline"] {
    width: 24px;
}

[data-heroicon-style="solid"] {
    width: 20px;
}

[data-heroicon-name] {
    padding: 2px;
}
```

If you'd prefer to use a class name, you can pass one on a configuration object while adding the plugin:

```js
// .eleventy.js

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(require("eleventy-plugin-heroicons"), {
      className: 'icon'
  });
};
```

There is also [an option to `errorOnMissing` icons](https://github.com/SeanMcP/eleventy-plugin-heroicons#configuration), which might be nice to ensure that all icons display as intended.

Hopefully that helps! Let me know if you have any suggestions for the package. [PRs are most welcome {% emoji "😊" %}](https://github.com/SeanMcP/eleventy-plugin-heroicons/pulls).

Happy coding!
