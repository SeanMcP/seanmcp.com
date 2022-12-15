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

export function platypus(nav = navigator) {
  if (typeof nav === "undefined") {
    throw new Error(
      "Platypus assumes a global navigator object; did you call it outside of a browser environment?"
    );
  }
  return {
    /**
     * Check if the userAgent appears to be macOS or iPhoneOS
     */
    isMac() {
      return nav.userAgent.includes("Mac");
    },
    /**
     * Check if the userAgent appears to be mobile
     */
    isMobile() {
      return nav.userAgent.includes("Mobile");
    },
    /**
     * Checks if command key is pressed on Mac or control key is pressed on
     * other platforms
     */
    commandOrControl(keyboardEvent: KeyboardEvent) {
      return this.isMac() ? keyboardEvent.metaKey : keyboardEvent.ctrlKey;
    },
  };
}
