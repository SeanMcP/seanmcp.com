---
title: "Fix missing Astro files on GitHub pages"
description:
  Astro generated CSS files start with an underscore which causes them to be
  ignored by GitHub Pages
tags:
- Astro
- Fix
- GitHub
- GitHub Actions
- GitHub Pages
date: 2024-03-19T21:12-0400
verse: Isaiah 40:26
---

I'm in the middle of a long project to migrate my projects from Netlify to
GitHub pages. I was working on the GitHub actions for
[an Astro project](https://shama.seanmcp.com) and noticed that most of the CSS
files were missing from the assets directory.

When I built the project locally, I saw the following:

```
_book_.95a15f93.css
_book_.ef58a27b.css
_chapter_.02b05af9.css
index.3e3ecbbf.css
```

The `index.3e3ecbbf.css` file was the only CSS one that was successfully
deployed. That led me to think that there was something about the underscore
prefix that was causing the other files to be ignored.

GitHub Pages uses Jekyll behind the scenes, even if your site doesn't use it.
And
[Jekyll ignores files and directories that start with an underscore](https://github.com/jekyll/jekyll/issues/55).
So the solution is to tell GitHub to skip Jekyll processing of your build
directory with a `.nojekyll` file.

In the GitHub Action for the Astro project, I added the following line to the
build step:

```yaml
touch dist/.nojekyll
```

Once that was added, all of the generated CSS files were successfully deployed
to GitHub Pages.

There is also an
[official action for Astro projects](https://github.com/withastro/action) that
probably handles that for you.
