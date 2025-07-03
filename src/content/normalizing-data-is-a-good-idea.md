---
title: Normalizing data is a good idea
description:
  By transforming your data into a consistent structure, you can reduce the
  complexity of your code
tags:
  - Articles
  - Programming
date: 2023-12-20T09:47-0400
verse:
---

On this site I have a few different types of content: articles, notes, gardens,
and now art. There are subtle differences in the data structure for each content
type which come to a head whenever I try to combine them into a single list.

Previously, I merged all of the content into a single array and then had a bunch
of conditions when rendering for each type:

```js
[...articles, ...notes, ...gardens, ...art].map((item) => {
  return (
    <article>
      <h2>
        <a
          href={`/${item.collection}${
            item.collection === "art" ? `#${item.data.title}` : `/${item.slug}`
          }`}
        >
          {item.data.title || `Note #${item.slug}`}
        </a>
      </h2>
      <time>{item.data.pubDate || item.data.tendedDates[0]}</time>
      {item.data.description && <p>{item.data.description}</p>}
    </article>
  );
});
```

This works--the complexity needs to live somewhere. But adding new content types
with this setup requires additional conditions that increase the cognitive load
to work with this code.

An alternative to this is to normalize the data structure so that each content
type can be handled in a similar way. Each type has its own normalization
function, which helps reduce the complexity by addressing one content type at a
time:

```js
function normalizeNotes(notes) {
  return notes.map((note) => ({
    description: note.data.description,
    href: `/notes/${note.slug}`,
    title: `Note #${note.slug}`,
    pubData: note.data.pubDate,
  }));
}
```

Once all of the content is normalized, rendering is simpler:

```js
[...normalArticles, ...normalNotes, ...normalGarden, ...normalArt].map(
  (item) => {
    return (
      <article>
        <h2>
          <a href={item.href}>{item.title}</a>
        </h2>
        <time>{item.pubDate}</time>
        {item.description && <p>{item.description}</p>}
      </article>
    );
  }
);
```

The next time I need to add a content type, all I do is write a normalization
function and then slot it in alongside the existing content. That's scalability!

This is a personal example, but I think it illustrates the benefits of
normalizing data.

Normalization functions contain all of the logic to transform data into a
consistent structure. You can focus on one data type at a time, and convert it
into whatever structure makes sense for the current problem.

Once normalized, you can work with your data in a regular way without worrying
about conditional logic for each type. And down the road, it will be easier to
troubleshoot and develop further when everything is consistent and logic is
isolated.

Normalization is a good way to make your code more scalable and maintainable
while also reducing cognitive load. So anytime you're working with multiple
incoming data types, take the time to normalize them first.
