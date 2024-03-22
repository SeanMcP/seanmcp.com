---
title: "Create a custom search for a static site"
description:
  A high-level overview of why and how I built a URL-powered fuzzy search
  feature for this site
tags:
  - Astro
  - Search
  - Static Sites
pubDate: 2024-03-22T15:08-0400
verse: Ezekiel 34:11
---

There are out-of-the-box solutions for searching on a static site. I previously
used [Pagefind](https://pagefind.app/) for this site which remains a great
option. But if you want fully control of the behavior and appearance of your
search feature, then you might have to build your own.

After thinking through how I wanted to use a search feature, I came up with
these acceptance criteria:

- **Query and filter by type, year, and tag**: I want to be able to view all
  Articles from 2023 tagged JavaScript with the text “class”.
- **Fuzzy search**: Before Pagefind I had a search that used strict string
  matching, but the experience was poor.
- **URL-powered**: I want to use it as a custom search engine in the browser and
  be able to link directly to filtered search results.

With those criteria established, I could move on to designing and building the
solution.

## Solution

Without going into too many details about
[how I accomplished this in Astro](https://github.com/SeanMcP/seanmcp.com/blob/bf0792380cc13f6c3b79d30121a78c9c5548f225/src/pages/search.astro),
here are the high-level steps I followed to build a custom search:

1. **Gather all of my content into a normalized array:** As I’ve written
   previously,
   [normalizing data is a good idea](https://www.seanmcp.com/articles/normalizing-data-is-a-good-idea/).
2. **Expose the data to client-side JavaScript:**
   1. Astro has a helpful `define:vars` directive for this, but your static-site
      generator has some kind of solution for hand off data with a `script` tag.
   2. The important part for me was to avoid network requests for the content
      data; I wanted this to be available at build time.
3. **In JS sync HTML with URL:** Read the search parameters and then update the
   in-page form elements with the data. For this solution, the URL is the source
   of truth.
4. **Create a function to search and render:** I wanted the results to render on
   load and whenever there was a change to the search form. By encapsulating
   that logic in a function, I was able to call it whenever I wanted.
5. **Use [Fuse.js](https://www.fusejs.io/) to search through content:** This is
   the first time I’ve used Fuse and it was awesome. I added it from a CDN with
   a script tag, and it worked without any issues.
6. **Render:** Take the results from Fuse and add some markup to an `output`
   element.
7. **Add event listeners for `change`, `input`, and `submit`:** These were all
   added to the `form` element to a) sync URL with form state, and b) render
   updated results.

You can view the finished product at
[seanmcp.com/search](https://seanmcp.com/search).

- [seanmcp.com/search/?q=JavaScript](https://seanmcp.com/search/?q=JavaScript)
- [seanmcp.com/search/?type=note](https://seanmcp.com/search/?type=note)
- [seanmcp.com/search/?tag=A+Few+Things](https://seanmcp.com/search/?tag=A+Few+Things)
- [seanmcp.com/search/?year=2024](https://seanmcp.com/search/?year=2024)
- [seanmcp.com/search/?q=class&type=article&year=2023&tag=JavaScript](https://seanmcp.com/search/?q=class&type=article&year=2023&tag=JavaScript)

## Lessons learned

- Pushing search parameters to the URL without reloading is easier than I
  thought. I really like the idea of using the URL as the state for a feature
  like this.
- The default `select[multiple]` UI is difficult to design around. I ended up
  limiting the filters to a single selection because I couldn’t find a layout
  that I liked with multiple.
- Fuse.js was a delight, and I look forward to more opportunities to use it.
- I thought that I would need to debounce changes from the form, but in my
  testing it handled individual keypresses without any issue.
- Astro will scope styles for you, but you can only reference elements that are
  currently in the file. This is a problem when you will be building a UI with
  client JavaScript. Thankfully Astro works with `template`s, so you can style a
  sample response element and style it without resorting to `:global()` calls.
