import fs from "fs";
import slugify from "slugify";

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
const filePath = "./src/pages/articles/" + fileName;
const date = new Date().toISOString();

fs.readFile("./src/article-template.md", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  const injectedData = data.replace("%TITLE%", title).replace("%DATE%", date);

  fs.writeFile(filePath, injectedData, "utf8", (err) => {
    if (err) throw err;
    console.log(
      `✅  Draft${titleArg ? ` "${titleArg}"` : ""} created at \`${filePath}\``
    );
  });
});
