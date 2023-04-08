const LINKS = {
  abby: {
    description: "A page about my three-legged dog",
    label: "Abby",
    url: "/abby/",
  },
  articles: {
    description: "Read articles about programming",
    label: "Articles",
    url: "/articles/",
  },
  notes: {
    description: "A feed of short notes, thoughts, or ideas",
    label: "Notes",
    url: "/notes/",
  },
  tags: {
    description: "All of the tags for my articles",
    label: "Tags",
    url: "/tags/",
  },
  talks: {
    description: "Outlines of talks I've given and workshops I've lead",
    label: "Talks",
    url: "/talks/",
  },
  bookshelf: {
    description: "A running list of books that I have read",
    label: "Bookshelf",
    url: "/bookshelf/",
  },
  about: {
    description: "Learn more about me and my work",
    label: "About",
    url: "/about/",
  },
  feed: {
    description: "Subscribe to my blog with your favorite RSS reader",
    label: "Feed",
    url: "/rss.xml",
  },
  map: {
    description: "A detailed site map",
    label: "Map",
    url: "/map/",
  },
  series: {
    description: "Articles organized into series",
    label: "Series",
    url: "/series/",
  },
  soccer: {
    description: "Read articles about soccer from a dedicated fan",
    label: "Soccer",
    url: "/soccer/",
  },
  tools: {
    description:
      "A library of tools to help make your life easier. Okay, there are some games too – but they're educational!",
    label: "Tools",
    url: "/tools/",
  },
  uses: {
    description: "A curated list of tools and technology that I use",
    label: "Uses",
    url: "/uses/",
  },
};

export default {
  header: [LINKS.articles, LINKS.about, LINKS.notes, LINKS.tools, /*{ ...LINKS.map, label: "More" }*/],
  map: [
    LINKS.about,
    LINKS.articles,
    LINKS.bookshelf,
    LINKS.notes,
    LINKS.series,
    LINKS.tags,
    LINKS.talks,
    LINKS.tools,
    LINKS.uses,
  ],
  all: Object.values(LINKS),
};
