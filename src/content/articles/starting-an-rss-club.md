---
title: Starting an RSS Club
description:
  I can publish an article exclusively to the RSS feed with a special flag in
  the frontmatter
tags:
  - Astro
  - RSS
pubDate: 2023-02-28T15:42:16.949Z
---

I added the ability to publish articles exclusively to the RSS feed. The idea
for an RSS Club comes from
[Dave Rupert and friends](https://daverupert.com/rss-club/).

To accomplish this, I added a new data field to the frontmatter of articles for
`flags`. This is an enumerated array of special conditions for each entry. With
Astro collections and Zod, the configuration looks like this:

```tsx
flags: z.array(z.enum(["DRAFT", "RSS-ONLY"])).optional(),
```

I had previously built in logic to handle drafts with a boolean in the
frontmatter, but I wasn’t interested in adding another `z.boolean().optional()`
to the configuration. Flags gives me a pattern to quickly add additional
conditions for instances like this.

To publish an article for the RSS Club, I just add this line to its frontmatter:

```yaml
flags:
    - RSS-ONLY
```

Dave’s RSS Club creates pages for entries online – the links are just hidden
from site navigation. My implementation differs in that the articles only exist
within the `rss.xml` file. If you want to read that content, the only way to do
so is with an RSS reader.

Join the club by subscribing to https://seanmcp.com/rss.xml
