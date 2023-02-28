---
title: Setup Netlify CMS with Eleventy
description: This is a WIP that I probably will never finish.
pubDate: 2021-02-08
tags:
  - WIP
  - Eleventy
  - Netlify
image:
---

Netlify's guide for [adding Netlify CMS to your site](https://www.netlifycms.org/docs/add-to-your-site/) was really helpful. Consider this a supplemental guide to getting your Eleventy site up and running with Netlify CMS.

---

Your posts will probably have tags, or a list of strings for organizing content. Netlify CMS has a [list widget type](https://www.netlifycms.org/docs/widgets/#list) that will work nicely:

```yaml
# admin/config.yml
collections:
  - name: "blog"
    fields:
      - { label: "Tags", name: "tags", widget: "list" }
```

If you want editors to select from a specific set of options, the [select widget type](https://www.netlifycms.org/docs/widgets/#select) should work for you.

---

Eleventy will ignore Netlify CMS' `config.yml` when building your site, so you'll need to tell it to copy the file into your build directory:

```js
// .eleventy.js
config.addPassthroughCopy("src/admin/config.yml");
```

**Note**: The actual path may vary based on your project structure.
