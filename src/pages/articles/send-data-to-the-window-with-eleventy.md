---
layout: "../../layouts/ArticleLayout.astro"
title: Send data to the window with Eleventy
description: How to create a shortcode to expose data for client-side scripts
date: 2021-01-25
tags:
  - Eleventy
verse: Joshua 2:15
# /img/<IMAGE>.min.jpg
image:
---

Static-site generators like Eleventy are great at building websites. But when you want to add additional functionality, like a search feature, it might feel like they fall short.

All the data to generate your site exists at build time, how can you access that with some client-side JavaScript?

Here we'll look at one solution with Eleventy to expose data on the global `window` object to add interactive elements to your static site.

Besides familiarity with Eleventy, the only prerequisite here is [creating custom shortcodes](https://www.11ty.dev/docs/shortcodes/#universal-shortcodes).

## Nunjucks

Out-of-the-box, you can use Nunjucks' `dump` and `safe` filters to stringify data and leave it unescaped, respectively. Put that all within a `script` tag, and you have a simple method for exposing data:



```html
<!-- index.njk -->
<script>
  window.__DATA__ = {{ ['hello', 'there'] | dump | safe }};
</script>
```



This works but is a little fiddly and limited to Nunjucks. For a more universal solution, let's create a custom shortcode.

## Shortcode

A better solution to send data to the client is with a reusable shortcode. Let's add a it to `.eleventy.js`:

```js
// .eleventy.js
module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("expose", (data) => {
    return `<script>
            window.__DATA__=JSON.parse(${JSON.stringify(data)});
        </script>`;
  });

  return {
    /* ... */
  };
};
```

Then use the new shortcode like so:



```html
<!-- index.njk -->
{% expose ['hello', 'there'] %}
```



Nice and simple! I'm going to offer an optional improvement to cleanup after exposing the data:

```js/1,3
eleventyConfig.addShortcode("expose", data => {
    return `<script id="__EXPOSE__">
        window.__DATA__=JSON.parse(${JSON.stringify(data)});
        document.getElementById("__EXPOSE__").remove();
    </script>`;
})
```

With those changes, the script will execute on the client, add the data to the `window`, and then remove the `script` tag.

---

Hope that helps! Let me know if you have a better method of exposing data on the `window`, or how you can accomplish this with your favorite static-site generator.

Happy scripting!
