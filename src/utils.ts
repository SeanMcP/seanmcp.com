import _slugify from "slugify";

export function slugify(text: string) {
  return _slugify(text, { lower: true });
}

export function getTags(articles: any[]): Record<string, number> {
  const tags = {};

  articles.forEach((article) => {
    article.frontmatter.tags &&
      article.frontmatter.tags.forEach((tag) => {
        if (!tags[tag]) {
          tags[tag] = 0;
        }

        tags[tag]++;
      });
  });

  return tags;
}

export function getSortedContent(content: any[]) {
  let filteredContent = content.filter((item) => !item.file.includes("README"));
  if (!import.meta.env.DEV) {
    // Remove drafts in non-DEV environments
    filteredContent = content.filter((c) => !c.frontmatter.draft);
  }
  return filteredContent.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
}

export function readableDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
