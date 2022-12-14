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

export const get = () =>
  rss({
    // `<title>` field in output xml
    title: metadata.title,
    // `<description>` field in output xml
    description: metadata.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: items.map((item) => ({
      content:
        item.file.slice(-3) === ".md" ? item.compiledContent() : undefined,
      description: item.frontmatter.description,
      link: item.url,
      pubDate: item.frontmatter.pubDate,
      title: item.frontmatter.title,
    })),
    // (optional) inject custom xml
    // customData: `<language>en-us</language>`,
  });
