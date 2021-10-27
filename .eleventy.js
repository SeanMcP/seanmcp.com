const { DateTime } = require("luxon");
const fs = require("fs");
const CleanCSS = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(require("eleventy-plugin-emoji"));
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("article", "layouts/article.njk");
  eleventyConfig.addLayoutAlias("outline", "layouts/outline.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat("DD");
  });

  eleventyConfig.addFilter("log", (value) => {
    console.log(value);
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat("yyyy-LL-dd");
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addFilter("capitalize", (string, separator = "-") => {
    switch (string) {
      case "npm": {
        return string;
      }
      case "cli":
      case "css":
      case "js":
      case "til":
      case "ux":
      case "wip":
      case "yaml":
        return string.toUpperCase();
      case "edtech": {
        return "EdTech";
      }
      case "ios":
        return "iOS";
      case "javascript":
        return "JavaScript";
      case "macos":
        return "macOS";
      case "node-js":
        return "Node.js";
      case "typescript":
        return "TypeScript";
      case "youtube":
        return "YouTube";
      default:
        return string
          .split(separator)
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ");
    }
  });

  eleventyConfig.addFilter(
    "cssmin",
    (code) => new CleanCSS({}).minify(code).styles
  );

  eleventyConfig.addShortcode("currentYear", function () {
    return String(new Date().getFullYear());
  });

  eleventyConfig.addShortcode("youtube", (videoURL, title) => {
    const url = new URL(videoURL);
    const id = url.searchParams.get("v");
    return `
<iframe class="yt-shortcode" src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player${
      title ? ` for ${title}` : ""
    }" frameborder="0" allowfullscreen></iframe>
  `;
  });

  eleventyConfig.addPairedShortcode(
    "note",
    function (content, date, url, edited = false) {
      return `<article class="note">
      <header class="note__header">
        <b>Sean McPherson</b>
        <a href="${url}"><time datetime="${date}">${DateTime.fromJSDate(date, {
        zone: "America/New_York",
      }).toFormat("t · DD")}</time></a>${
        edited ? "<small>(Edited)</small>" : ""
      }
      </header>
      <div class="note__body --clear-child-margins">${content}</div>
    </article>`;
    }
  );

  eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList"));
  eleventyConfig.addCollection("books", (collections) =>
    collections.getFilteredByGlob("./src/books/*.md")
  );
  eleventyConfig.addCollection("notes", (collections) =>
    collections.getFilteredByGlob("./src/notes/*.md")
  );

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  /* Markdown Plugins */
  const markdownIt = require("markdown-it");
  const mdiOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
    quotes: "“”‘’",
  };
  const mdiAnchorOptions = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
  };

  const mdi = markdownIt(mdiOptions)
    .use(require("markdown-it-anchor"), mdiAnchorOptions)
    .use(require("markdown-it-footnote"));

  mdi.renderer.rules.footnote_block_open = () =>
    `<hr />
    <section class="footnotes --clear-child-margins">
        <h2>Footnotes</h2>
        <ol>
    `;

  eleventyConfig.setLibrary("md", mdi);

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("_site/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
