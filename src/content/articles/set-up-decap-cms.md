---
title: Set up Decap CMS
description: Decap CMS is the official successor to Netlify CMS and works well
  with the old tooling.
pubDate: 2023-04-18T21:02-0400
tags:
  - Decap
  - Netlify
verse: Isaiah 40:8
---
[Decap CMS](https://decapcms.org/) is the official [successor to Netlify CMS](https://www.netlify.com/blog/netlify-cms-to-become-decap-cms/) and works well with the old tooling. Here are the steps to get up and running with Decap.

**Step-by-step**:

1. Add a new page route for `/admin`
   - For me, this was `src/pages/admin.astro`
2. Copy and paste [the markup from the documentation](https://decapcms.org/docs/add-to-your-site/#app-file-structure)
3. Add [a `config.yml` file](https://decapcms.org/docs/configuration-options) to your public directory
4. Run `netlify-cms-proxy-server` alongside your dev server:
   ```
   npx netlify-cms-proxy-server
   ```
5. Access the content manager at `localhost:XXXX/admin/`

**Issues**: Decap CMS _still_ hasn't fixed [the jumping cursor issue when inserting within a textarea](https://github.com/netlify/netlify-cms/issues/5092). It makes writing content incredibly frustrating. Thankfully, there is a fix that requires some additional CSS (of all things):

```html
<!-- admin.html -->
<style>
  [data-slate-editor] {
    /* See https://github.com/netlify/netlify-cms/issues/5092 */
    -webkit-user-modify: read-write !important;
  }
</style>
```

With those style loaded, the issue is resolved.

**Takeaways**: Decap CMS is easy to set up and works well with all of Netlify CMS' old tooling. It's nice to hear that the project will live on with new maintainers, but it remains to be seen how invested they will be in development like fixing old bugs.