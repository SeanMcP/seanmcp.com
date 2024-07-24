const LINKS = {
  abby: {
    description: "A page about my three-legged dog",
    label: "Abby",
    url: "/abby/",
  },
  about: {
    description: "Learn more about me and my work",
    label: "About",
    url: "/about/",
  },
  articles: {
    description: "Read articles about programming",
    label: "Articles",
    url: "/articles/",
  },
  boardGames: {
    description: "My favorite board games",
    label: "Board Games",
    url: "/board-games/",
  },
  faith: {
    description: "A personal statement of faith",
    label: "Faith",
    url: "/faith",
  },
  feed: {
    description: "Subscribe to my blog with your favorite RSS reader",
    label: "RSS",
    url: "/rss.xml",
  },
  map: {
    description: "A detailed site map",
    label: "Map",
    url: "/map/",
  },
  mission: {
    description: "A personal mission statement",
    label: "Mission",
    url: "/mission",
  },
  notes: {
    description: "A feed of short notes, thoughts, or ideas",
    label: "Notes",
    url: "/notes/",
  },
  randomArticle: {
    description: "Navigate to a random article from my blog",
    label: "Random Article",
    url: "/fn/random-article",
  },
  search: {
    description: "Search my blog for articles or topics",
    label: "Search",
    url: "/search/",
  },
  series: {
    description: "Articles organized into series",
    label: "Series",
    url: "/series/",
  },
  soccer: {
    description: "About my love of soccer and my favorite teams",
    label: "Soccer",
    url: "/soccer/",
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
  home: {
    description: "The homepage of seanmcp.com",
    label: "Home",
    url: "/",
  },
};

export default {
  header: [
    // LINKS.home,
    LINKS.search,
    LINKS.articles,
    // LINKS.notes,
    LINKS.about,
    // LINKS.tools /*{ ...LINKS.map, label: "More" }*/,
    LINKS.feed,
  ],
  map: [
    LINKS.about,
    LINKS.articles,
    LINKS.notes,
    LINKS.series,
    LINKS.tags,
    LINKS.talks,
    LINKS.tools,
    LINKS.uses,
  ],
  all: Object.values(LINKS),
};
