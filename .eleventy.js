import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItFootnote from "markdown-it-footnote";

// Pulling this out improved the speed of the `readable_date` filter
const localeDateStringConfig = {
  day: "numeric",
  month: "long",
  timeZone: "America/New_York",
  year: "numeric",
};

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "/" });

  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      linkify: true,
    })
      .use(markdownItFootnote)
      .use(markdownItAnchor, {
        level: 2,
        permalink: markdownItAnchor.permalink.linkAfterHeader({
          style: "visually-hidden",
          assistiveText: (title) => `Permalink to “${title}”`,
          visuallyHiddenClass: "visually-hidden",
          wrapper: ['<div class="heading-container">', "</div>"],
        }),
      })
  );
  /** Collections */
  eleventyConfig.addCollection("rssArticles", function (collectionsAPI) {
    // QUESTION: Can we use filters here?
    return collectionsAPI.getFilteredByTag("Articles").filter((item) => {
      return (
        !(item.data.flags || []).includes("DRAFT") &&
        !item.inputPath.includes("index.md")
      );
    });
  });
  /** Plugins */
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/rss.xml",
    collection: {
      name: "rssArticles",
      limit: 0,
    },
    metadata: {
      language: "en",
      title: "seanmcp.com",
      subtitle:
        "The online home of Sean McPherson, an unremarkable man from Pittsburgh, PA",
      base: "https://seanmcp.com/",
      author: {
        name: "Sean McPherson",
        email: "sean@seanmcp.com",
      },
    },
  });

  /** Filters */
  eleventyConfig.addFilter("debug_log", (value) => {
    console.log("🪲 DBG:", value);
  });
  eleventyConfig.addFilter("debug_dump", (value) => JSON.stringify(value));
  eleventyConfig.addFilter("readable_date", (datetime) =>
    new Date(datetime).toLocaleDateString("en-US", localeDateStringConfig)
  );
  eleventyConfig.addFilter("readable_slug", slug => {
    return slug.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  })
  eleventyConfig.addFilter("exclude_flag_in_prod", function (pages, ...flags) {
    if (this.eleventy.env.runMode === "build") {
      return pages.filter((page) => {
        if (!page.data || !page.data.flags) {
          return true;
        }
        let containsExcludedFlag = false;
        for (const flag of page.data.flags) {
          if (flags.includes(flag)) {
            containsExcludedFlag = true;
            break;
          }
        }
        return !containsExcludedFlag;
      });
    }
    return pages;
  });
  eleventyConfig.addFilter("render_title", function (page) {
    let title = page.data.title;

    if (
      this.eleventy.env.runMode !== "build" &&
      page.data.flags &&
      page.data.flags.length > 0
    ) {
      title = `[${page.data.flags.join("][")}] ${title}`;
    }

    return title;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
