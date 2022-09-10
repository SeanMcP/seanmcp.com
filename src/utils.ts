import _slugify from "slugify";

export function slugify(text: string) {
  return _slugify(text, { lower: true });
}

export function getTags(allPosts: any[]): Record<string, number> {
  const tags = {};

  allPosts.forEach((post) => {
    post.frontmatter.tags &&
      post.frontmatter.tags.forEach((tag) => {
        if (!tags[tag]) {
          tags[tag] = 0;
        }

        tags[tag]++;
      });
  });

  return tags;
}

export function getSortedArticles(allPosts: any[]) {
  return allPosts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
  );
}

export function readableDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}