import rss from "astro-rss-fork";
import metadata from "../data/metadata.json";

export const get = () =>
  rss({
    // `<title>` field in output xml
    title: "[v2.3] " + metadata.title,
    // `<description>` field in output xml
    description: metadata.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: import.meta.glob("./articles/*.{md,mdx}"),
    // (optional) inject custom xml
    // customData: `<language>en-us</language>`,
    // Begin use fork
    contentLength: "full",
    xmlns: {
      content: "http://purl.org/rss/1.0/modules/content/",
    },
    // End use fork
  });
