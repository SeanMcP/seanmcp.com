import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const template = `---
<!-- layout: page.liquid -->
title: %TITLE%
description:
data: ${new Date().toISOString()}
tags:
flags:
verse:
prose: true
---

`

const title = process.argv[2];
if (!title) {
  console.error("Please provide a title for the new article");
  process.exit(1);
}

const slug = title.toLowerCase().replace(/ /g, "-");
const filename = `${slug}.md`;

fs.writeFileSync(path.join(__dirname, "src/articles", filename), template.replace("%TITLE%", title));
console.log(`Created new post: ${filename}`);
