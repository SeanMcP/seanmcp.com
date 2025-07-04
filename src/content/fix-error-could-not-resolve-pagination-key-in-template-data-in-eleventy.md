---
title:
  'Fix "Error: Could not resolve pagination key in template data" in Eleventy'
description:
  Not a true fix, but a decent workaround when paginating collections in
  Eleventy
date: 2021-02-06T12:00-0400
tags:
  - Articles
  - Debugging
  - Eleventy
verse: Matthew 16:19
---

In a recent Eleventy project, I wanted to create a single collection for tags
with two keys: `alphabetical` for an array of all tags, and `popular` for an
array of arrays with the tag and number of times it was used.

To access either "sub-collection", I could dive into the object like
`collections.tagList.alphabetical`. This worked like a dream in my template and
markdown files, and I thought maybe I was on to a new cool pattern for Eleventy.

But when I tried to paginate the sub-collection, everything fell apart. Eleventy
errored with the following message:

```shell
Problem writing Eleventy templates: (more in DEBUG output)
> Could not resolve pagination key in template data: collections.tagList.alphabetical

`Error` was thrown:
    Error: Could not resolve pagination key in template data: collections.tagList.alphabetical
```

The pagination code in question looked like:

```md
---
pagination:
  data: collections.tagList.alphabetical
  alias: tag
permalink: /tag/{{ tag }}/
---
```

Interesting. Maybe the collection hasn't been created by the time the pagination
code runs, I guessed. To test this, I tried paginating `collections.tagList` to
see if the `alphabetical` key was present:

```md
---
pagination:
  data: collections.tagList
  alias: tag
permalink: /tag/{{ tag }}/
---
```

This created pages for `alphabetical` and `popular`, which proved my hypothesis
wrong: the alphabetical data does exist when the pagination occurs.

Maybe it had something to do with paginating nested objects? To confirm, I added
a test object to the frontmatter and tried to paginate it:

```md
---
pagination:
  data: test.test.test
  alias: tag
permalink: /tag/{{ tag }}/
test:
  test:
    test: ["a", "b", "c"]
---
```

This worked as expected, creating pages for a, b, and c. So it isn't an issue
with paginating deep objects.

With two incorrect hypotheses, it was time to look for outside help. I
[posted in 11ty Discord](https://discord.com/channels/741017160297611315/741017160297611319/807589091814146060)
and did some searching. My initial queries brought up two issues:
[an actual bug from 2018](https://github.com/11ty/eleventy/issues/171) and
[some invalid JSON from 2019](https://github.com/11ty/eleventy/issues/690).
Neither of which provided the solution here.

Feeling at a dead end, I decided to rethink the problem. I couldn't paginate
over a nested collection object, but normal collections work just fine. If I
could flatten my clever `tagsList` into multiple collections, the problem would
be solved.

Instead of `collections.tagList.alphabetical` and `collections.tagList.popular`,
I created two collections: `collections.tagsAll` and `collections.tagsPopular`.
This required an addition iteration over the post data (one for each
collection), but that small increase in build time isn't an issue for this
project.

The final code to fix the "Error: could not resolve pagination key in template
data" is a flattened collection:

```md
---
pagination:
  data: collections.tagsAll
  alias: tag
permalink: /tag/{{ tag }}/
---
```

This works well, but I would still love to find a way to get the original
solution to work. Let me know if you have a better way to solve this problem.
<e-moji>👍</e-moji>

Happy paginating!
