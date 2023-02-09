import type { CollectionEntry } from "astro:content";
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
    article.data.tags &&
      article.data.tags.forEach((tag) => {
        if (article.data.draft && import.meta.env.PROD) {
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

function sortByPubDate<
  T extends CollectionEntry<"articles"> | CollectionEntry<"notes">
>(a: T, b: T) {
  return (
    new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );
}

export const sortCollection = {
  articles(articles: CollectionEntry<"articles">[], count?: number) {
    return articles
      .filter((entry) => {
        // Ignore article drafts in production
        if (import.meta.env.PROD && entry.data.draft) {
          return false;
        }
        return true;
      })
      .sort(sortByPubDate)
      .slice(0, count);
  },
  notes(notes: CollectionEntry<"notes">[], count?: number) {
    return notes.sort(sortByPubDate).slice(0, count);
  },
};

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
