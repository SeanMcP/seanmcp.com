import rss from "@astrojs/rss";
import metadata from "../data/metadata.json";

type Item = {
  compiledContent: () => string;
  file: string;
  frontmatter: {
    description: string;
    draft?: boolean;
    pubDate: Date;
    title: string;
  };
  url: string;
};

const items = Object.values(
  import.meta.glob<Item>("./articles/*.{md,mdx}", { eager: true })
).filter((item) => !item.frontmatter.draft);

export function get() {
  return rss({
    title: metadata.author.name,
    description: metadata.description,
    site: import.meta.env.SITE,
    // pagesGlobToRssItems didn't include content
    items: items.map((item) => ({
      content:
        item.file.slice(-3) === ".md" ? item.compiledContent() : undefined,
      description: item.frontmatter.description,
      link: item.url,
      pubDate: item.frontmatter.pubDate,
      title: item.frontmatter.title,
    })),
  });
}
