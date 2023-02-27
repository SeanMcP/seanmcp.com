---
title: My writing process in February 2023
description:
  The process involves mostly manual steps, and I am looking for a better
  solution.
draft: false
image:
tags:
  - Meta
  - Writing
pubDate: 2023-02-27T16:22:02.440Z
verse:
---

Today my process for writing an article looks like this:

1. Get an idea
2. Add it to a Kanban board on Notion
3. Write/edit the article in a card
4. Run a script in my website repo to create a markdown file
5. Copy the contents from Notion into the created file
6. Update frontmatter, including description and tags
7. Commit and push
8. Netlify builds automatically

I would like to be able to write drafts and publish from one interface on
desktop and mobile. To date, I haven’t found a good CMS solution.

I had Netlify CMS configured, but a jumping cursor bug made it annoying to use.
I’m interested to see if [Static CMS](https://decapcms.org/) or
[Decap CMS](https://decapcms.org/), both successors, can address this and other
usability issues. In the meantime, my choices are to refine my current workflow
or look for alternatives.

**Update 1**: I originally misspelled February in the title and URL. Both have
been rectified (sorry permalink fans).

**Update 2**: I have added two Bash aliases to improve the process:

```bash
alias blog="node ~/seanmcp/seanmcp.com/src/draft-script.mjs"
alias publish="(cd ~/seanmcp/seanmcp.com && git add src/content/articles public/images && git commit -m 'publish article' && git push)"
```
