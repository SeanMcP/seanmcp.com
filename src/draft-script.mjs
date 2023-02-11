import fs from "fs";
import slugify from "slugify";
import { execSync } from "child_process";

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
const filePath = "./src/content/articles/" + fileName;
const date = new Date().toISOString();

try {
  const templateData = fs.readFileSync("./src/article-template.md", "utf8");

  const injectedData = templateData
    .replace("%TITLE%", title)
    .replace("%DATE%", date);

  fs.writeFileSync(filePath, injectedData, "utf8");

  console.log(
    `🏗  Created draft${titleArg ? ` "${titleArg}"` : ""} at ${filePath}\n`
  );

  execSync(`code -g ${filePath}:13`);
} catch (error) {
  console.error(error);
  process.exit(1);
}
