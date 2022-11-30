---
layout: "@layouts/ArticleLayout.astro"
title: Add Static CMS to an Astro site
description: A first (failed) attempt at using Static CMS, the Netlify CMS successor
pubDate: 2022-11-29T20:43:17.582-05:00
draft: false
tags:
  - Astro
  - Netlify
  - Static CMS
---
The first version of [Static CMS](https://staticjscms.netlify.app), a community fork of [Netlify CMS](https://netlifycms.org), is scheduled to drop today. As a Netlify user and a general fan of Netlify CMS, I am excited to see what the community can do iterate on a useful product.

While we wait for that initial release, I wanted to explore what it would take to switch this [Astro](https://astro.build) site from Netlify CMS to Static CMS.

First, I created a new admin route within the `public/` directory with `index.html` and `config.yml` files:

```shell
mkdir public/x-admin
touch public/x-admin/index.html public/x-admin/config.yml
```

I opted for [the CDN hosting option](https://staticjscms.netlify.app/docs/add-to-your-site-cdn) (mostly because it was simpler), which involved pasting the following code block into `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Static CMS -->
    <script src="https://unpkg.com/@staticcms/core@%5E1.0.0/dist/static-cms-core.js"></script>
    <script>
      window.CMS.init();
    </script>
  </body>
</html>
```

Loading the route, and I hit issues where `window.CMS` was undefined. I tried tweaking the version of the script from the snippet and eventually got it working:

```html
<script src="https://unpkg.com/@staticcms/core@latest/dist/static-cms-core.js"></script>
```

With that updated, I moved on to configuration. I tried copying my Netlify CMS `config.yml` into the new admin directory, and it loaded right up! It's nice when things go smoothly.

I was able to view all of my articles and create a new draft (I'm using Static CMS to write this article right now). The only configuration that didn't obviously work was the "list" widget. I use this to set the tags for an article, but there was nothing rendered in the UI.

I tweaked the config a little for "list" and got _something_ to render, though I'm not sure it would work correctly for me:

```yaml
- label: "Tags"
  name: "tags"
  widget: "list"
  fields:
    - label: "Tag"
      name: "tag"
      widget: "string"
```

I tried to test what the resulting data would look like, but when I attempted to publish I got the following error:

> Failed to persist entry: API_ERROR: "params.options.useWorkflow" is required

There isn't any reference to that in the documentation or [GitHub issues](https://github.com/StaticJsCMS/static-cms/issues?q=is%3Aissue+params.options.useWorkflow+), so I was feeling kind of stuck. But after a little digging, I found [this comment in one of the example templates](https://github.com/StaticJsCMS/static-cms-eleventy-netlify-template/blob/main/src/admin/config.yml#L11):

```yaml
# Please run "npx static-cms-proxy-server" for local backend
```

I didn't see a reference to that in the documentation, so I ran that in the terminal and received the following:

```shell
$ npx static-cms-proxy-server
npm ERR! Cannot convert undefined or null to object
```

Turns out [that package does not exist yet](https://www.npmjs.com/package/static-cms-proxy-server). There is a reason why they call it the "bleeding edge."

I could go on, but this felt like a fair enough attempt at getting it to work.

## Conclusion

I'm excited to see what the maintainers of Static CMS can do to carry the torch of Netlify CMS. But at this stage, it still feels very raw. To illustrate that point, I started writing this article in Static CMS but am finishing it in Netlify CMS.

Maybe if you use one of the starter templates you will have more success. For now, I'm going to be watching the development from the sidelines.

Happy coding!
