---
title: 'Create a "Dave Rupert"-inspired activity graph'
description: A little code walk through a the new Activity Graph on my homepage.
tags:
  - Articles
  - Astro
  - Meta
date: 2022-11-23T14:48-0400
---

<call-out type="warn">

This article was written when seanmcp.com was powered by Astro. I have left the
content in place, but the activity graph described no longer renders.

</call-out>

I noticed on [Dave Rupert's website](https://daverupert.com/archive/) that he
had a little activity graph to illustrate how many articles he has written per
year over time.

That seemed like a nice little feature, so I decided to try to recreate it for
my site. This is a little code walk through how I made it using in a custom
Astro component.

First, I needed to grab all of the data to count. I have two main forms of
content on this site, [articles](/articles) and [notes](/notes). Using Astro's
`glob()` method, I was able to get that data and pass it into a sorting
function:

```ts
const articles = getSortedContent(
  await Astro.glob("../pages/articles/*.{md,mdx}")
);
const notes = getSortedContent(
  await Astro.glob("../../content/notes/*.{md,mdx}")
);
```

<call-out type="info">

This code is all subject to change, so for the latest
[checkout the source on GitHub](https://github.com/SeanMcP/seanmcp.com/blob/master/src/components/ActivityGraph.astro)

</call-out>

Next, I knew that I needed to keep a record of some totals, so I created an
object to track the totals for each content-type by the year:

```ts
const yearCount: Record<number, { articles: number; notes: number }> = {};
```

With that in place, I could loop through `articles` and `notes` and start
counting:

```ts
articles.forEach((article) => {
  const year = new Date(article.frontmatter.pubDate).getFullYear();
  if (!yearCount[year]) yearCount[year] = { articles: 0, notes: 0 };
  yearCount[year].articles++;
});

notes.forEach((note) => {
  const year = new Date(note.frontmatter.pubDate).getFullYear();
  if (!yearCount[year]) yearCount[year] = { articles: 0, notes: 0 };
  yearCount[year].notes++;
});
```

This was far from DRY, but I didn't think it was worth refactoring at this
point.

With the data ready, it was time to start rendering. I went with an ordered
list, `ol`, with list items for each year. Within each `li`, I have a label, and
two `span`s to represent articles and notes.

I tried to label things in a helpful manner, but I'm sure there are
accessibility improvements to be made.

The last bit of magic was finding a decent height for the most prolific year,
and then use that when calculating the individual `span` heights. And thanks to
`Math.max()`'s API, this was pretty nice:

```ts
const highest = Math.max(
  ...Object.values(yearCount).map((record) => record.articles + record.notes)
);
// 16 * 4 or 64 is the maximum height for a year
const multiplier = (16 * 4) / highest;
```

With all that set up, all I needed to do was iterate:

{% raw %}

```astro
<ol>
  {
    Object.entries(yearCount).map(([year, { articles, notes }]) => {
      const articlesLabel = `${articles} articles`;
      const notesLabel = `${notes} notes`;
      return (
        <li>
          <div title={String(articles + notes)}>{year}</div>
          <span
            class="articles"
            style={{ height: articles * multiplier + "px" }}
            title={articlesLabel}
          >
            <span class="--visually-hidden">{articlesLabel}</span>
          </span>
          <span
            class="notes"
            style={{ height: notes * multiplier + "px" }}
            title={notesLabel}
          >
            <span class="--visually-hidden">{notesLabel}</span>
          </span>
        </li>
      );
    })
  }
</ol>
```

{% endraw %}

There is certainly room for improvement, but I'm happy with how it turned out.
Here it is in all its glory:

<ActivityGraph />

Happy coding!
