import rss from "@astrojs/rss";
import metadata from "../data/metadata.json";

type Item = {
  compiledContent: () => string;
  file: string;
  frontmatter: {
    description: string;
    flags?: string[];
    pubDate: Date;
    title: string;
  };
};

const items = Object.values(
  import.meta.glob<Item>("../content/articles/*.{md,mdx}", { eager: true })
).filter((item) => !item.frontmatter.flags?.includes("DRAFT"));

function fileToSlug(file: string) {
  return file.slice(file.indexOf("/articles"), file.lastIndexOf("."));
}

export function get() {
  return rss({
    title: metadata.author.name,
    description: metadata.description,
    site: import.meta.env.SITE,
    // pagesGlobToRssItems didn't include content
    items: items.map((item) => {
      return {
        content:
          item.file.slice(-3) === ".md" ? item.compiledContent() : undefined,
        description: item.frontmatter.description,
        link: fileToSlug(item.file),
        pubDate: item.frontmatter.pubDate,
        title: item.frontmatter.title,
      };
    }),
  });
}
