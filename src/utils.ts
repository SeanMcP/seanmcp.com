import { CollectionEntry, getCollection } from "astro:content";
import _slugify from "slugify";
import { Art } from "./content/_art";

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
        if (
          import.meta.env.PROD &&
          (article.data.flags?.includes("DRAFT") ||
            article.data.flags?.includes("RSS-ONLY"))
        ) {
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

export function sortByPubDate<
  T extends CollectionEntry<"articles"> | CollectionEntry<"notes">
>(a: T, b: T) {
  return (
    new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );
}

export function getArticleTitle(data: CollectionEntry<"articles">["data"]) {
  let prefix = "";
  if (import.meta.env.DEV) {
    if (data.flags?.includes("DRAFT")) {
      prefix = "[DRAFT] ";
    } else if (data.flags?.includes("RSS-ONLY")) {
      prefix = "[RSS-ONLY] ";
    }
  }
  return prefix + data.title;
}

export async function getArticles(options?: {
  count?: number;
  excludeRSSOnlyInProd?: boolean;
}) {
  const { count, excludeRSSOnlyInProd } = options || {};
  const articles = await getCollection("articles");
  return articles
    .filter((entry) => {
      if (
        import.meta.env.PROD &&
        entry.data.flags?.includes("RSS-ONLY") &&
        excludeRSSOnlyInProd
      ) {
        return false;
      }
      // Ignore drafts in production
      if (import.meta.env.PROD && entry.data.flags?.includes("DRAFT")) {
        return false;
      }
      return true;
    })
    .sort(sortByPubDate)
    .slice(0, count);
}

export async function getGardens() {
  const gardens = await getCollection("gardens");
  gardens.sort((a, b) =>
    a.data.tendedDates[0] > b.data.tendedDates[0] ? -1 : 1
  );
  return gardens;
}

export function normalizeGardens(
  gardens: CollectionEntry<"gardens">[],
  date: "FIRST" | "MOST_RECENT"
) {
  return gardens.map((garden) => ({
    ...garden,
    data: {
      ...garden.data,
      pubDate:
        date === "FIRST"
          ? garden.data.tendedDates.slice(-1)[0]
          : garden.data.tendedDates[0],
    },
  }));
}

export async function getNotes(count?: number) {
  const notes = await getCollection("notes");
  return notes.sort(sortByPubDate).slice(0, count);
}

export function normalizeNotes(notes: CollectionEntry<"notes">[]) {
  return notes.map((note) => ({
    ...note,
    data: {
      ...note.data,
      title: `Note #${note.slug}`,
    },
  }));
}

export function normalizeArt(art: Art) {
  return art.map(([date, , title, description]) => ({
    collection: "art",
    data: {
      description,
      pubDate: date,
      title,
    },
    slug: `#${slugify(title)}`,
  }));
}

export function readableDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    timeZone: "America/New_York",
    year: "numeric",
  });
}

export function urlsMatch(a: string, b: string) {
  // force trailing slash
  let u1 = a.slice(-1) === "/" ? a : a + "/";
  let u2 = b.slice(-1) === "/" ? b : b + "/";
  return u1 === u2;
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
