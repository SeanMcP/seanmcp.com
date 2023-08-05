import fs from "fs";
import slugify from "slugify";
import { execSync } from "child_process";
import { getTimestamp } from "./shared.mjs";

const titleArg = process.argv[2] || "";

if (!titleArg) {
  console.log(
    "🎗  You can provide a title for your draft with:\n      `npm run draft 'My Title'`\n"
  );
}

const title = titleArg.includes('"')
  ? '"' + titleArg.replace(/"/g, '\\"') + '"'
  : titleArg;

const fileName =
  (title ? slugify(title, { lower: true, strict: true }) : "draft") + ".md";
const filePath = new URL(
  "../src/content/articles/" + fileName,
  import.meta.url
);

try {
  const templateData = fs.readFileSync(
    new URL("article-template.md", import.meta.url),
    "utf8"
  );

  const injectedData = templateData
    .replace("%TITLE%", title)
    .replace("%DATE%", getTimestamp());

  fs.writeFileSync(filePath, injectedData, "utf8");

  console.log(
    `🏗  Created draft${titleArg ? ` "${titleArg}"` : ""} at ${filePath}\n`
  );

  execSync(`code -g ${filePath.pathname}:9`);
} catch (error) {
  console.error(error);
  process.exit(1);
}
