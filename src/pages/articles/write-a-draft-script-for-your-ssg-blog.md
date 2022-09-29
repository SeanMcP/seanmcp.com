---
layout: "../../layouts/ArticleLayout.astro"
title: Write a draft script for your SSG blog
description: Easily spin up a new article when you don't have a CMS
pubDate: 2020-01-31
tags:
  - Bash
  - Node.js
  - Blogging
  - Static-site Generator
  - WIP
---

This site is powered by Eleventy, a simple static-site generator. All of the pages and articles exists as markdown files that are converted into HTML files via Nunjuck templates at build time.

For a blogging platform, it's pretty neat. I enjoy being able to run the whole site from the comfort of my text editor and the command line (with a little help from Netlify for continual deployments).

The secret sauce behind markdown-based sites is the frontmatter: specially formatted content at the top of a markdown file that is read by the generator. Here's what the frontmatter for a typical article looks like:

```markdown
---
layout: "../../layouts/ArticleLayout.astro"
title: Add event listener for class change
description: How to create a custom event listener for class names using the MutationObserver API
date: 2019-05-10
tags:
  - JavaScript
  - Web
---

<!-- Start writing your article here -->
```

When I want to write a new article, I need to make sure I have all of those fields populated in a particular way in order for Eleventy to generate the page correctly.

Formatting and required fields are not something that I care to remember, so I wanted to develop an easier method for generating a draft for this blog. This is my journey.

## Setup

Most static-site generators will have a directory for you to store some files that are excluded from the build process. For Eleventy, that default directory is `_includes/`. I added a subdirectory for `templates/` and added an `article.md`. All it contains is the bare-bones frontmatter for a new article:

```markdown
---
title:
description:
date: 2020-01-01
tags:
  - SAMPLE_TAG
---
```

I hard coded the date because I have a hard time remembering the YYYY-MM-DD format. It would be cool for the script to generate that for me.

## Solution 1: Bash script

Now that I have a template to reference, all I really need to do is write a simple script to copy that file to the `articles/` directory. I added the following code to a `create-draft.sh` file in the root directory:

```bash
#!/usr/bin/env bash

title=draft

if [ "$1" ]
then
    title=$1
fi

cp "_includes/templates/article.md" "articles/_$title.md"
```

This script declares a variable `title` and sets the value to the string `"draft"`. Then it checks to see if another argument is passed. If so, then it reassigns `title` to that value.

Then it copies the article template to the `articles/` directory with the filename title.

**Note**: I am prepending an underscore to the name of the file because I have configured Eleventy to ignore markdown files that begin with an underscore from the build. [The solution got Eleventy's stamp of approval.](https://github.com/11ty/eleventy/issues/188#issuecomment-488350222)

I added a `draft` script to packages.json:

```json
{
  "scripts": {
    "draft": "sh create-draft.sh"
  }
}
```

Once that was in place, I could call my script by running:

```
npm run draft my-new-article
```

This worked, but it was pretty simple. I needed to remember to use kebab case for the title of the article so that the file name would work. It didn't add the title to the copied file, nor set a date.

It served me well for a while, but eventually time came for a change.

## Solution 2: node.js script

To be fair, the original bash script could have been improved to meet all of my needs. But I'm not as comfortable with Bash as I am with JavaScript, and I jump at every opportunity to work in node.js.
