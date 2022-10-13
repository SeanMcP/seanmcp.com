import fs from "fs";
import { execSync } from "child_process";

try {
  execSync("git pull");

  const notes = fs.readdirSync("./src/pages/notes");
  let highest = 0;
  notes.forEach((fileName) => {
    const [name] = fileName.split(".");
    const num = parseInt(name);
    if (!Number.isNaN(num) && num > highest) {
      highest = num;
    }
  });

  const next = highest + 1;
  const fullPath = `./src/pages/notes/${next}.md`;
  fs.writeFileSync(
    fullPath,
    `
---
layout: "@layouts/NoteLayout.astro"
number: ${next}
pubDate: ${new Date().toISOString()}
---


`.trimStart()
  );
  console.log(`🏗 Created Note #${next} at ${fullPath}\n`);

  execSync(`code -g ${fullPath}:7`);
} catch (err) {
  console.error(err);
  process.exit(1);
}
