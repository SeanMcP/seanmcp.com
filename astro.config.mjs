import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

import metadata from "./src/data/metadata.json";

// https://astro.build/config
export default defineConfig({
  site: metadata.url,
  integrations: [mdx(), sitemap(), svelte()],
});
