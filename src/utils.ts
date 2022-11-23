import _slugify from "slugify";

export function slugify(text: string) {
  return _slugify(text, { lower: true });
}

export function getNoteNumberFromFilePath(url: string) {
  return url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
}

export function getTags(articles: any[]): Record<string, number> {
  const tags = {};

  articles.forEach((article) => {
    article.frontmatter.tags &&
      article.frontmatter.tags.forEach((tag) => {
        if (article.frontmatter.draft && import.meta.env.PROD) {
          // Ignore drafts in production
          return;
        }

        if (!tags[tag]) {
          tags[tag] = 0;
        }

        tags[tag]++;
      });
  });

  return tags;
}

export function getSortedContent(content: any[]) {
  const filteredContent = content.filter((item) => {
    if (item.file.includes("/README.")) {
      return false;
    }
    if (import.meta.env.PROD && item.frontmatter.draft) {
      return false;
    }
    return true;
  });
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
