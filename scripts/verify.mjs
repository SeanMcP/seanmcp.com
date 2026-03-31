import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const APPROVED_CATEGORIES = ["Blog", "Games", "RPGs", "Articles"];
const targetDir = fs.existsSync("src/content") ? "src/content" : "content";

function parseFrontmatter(file) {
  const content = fs.readFileSync(file, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  return yaml.load(match[1]);
}

function validate(data) {
  const issues = [];

  if (!data) {
    issues.push("no frontmatter");
    return issues;
  }

  if (!data.title) issues.push("missing title");
  if (!data.date) issues.push("missing date");
  if (!data.description) {
    issues.push("missing description");
  } else if (!/[.!?]$/.test(data.description)) {
    issues.push("description should end with punctuation");
  }

  const tags = data.tags;
  if (!Array.isArray(tags) || tags.length === 0) {
    issues.push("missing tags");
  } else if (!APPROVED_CATEGORIES.includes(tags[0])) {
    issues.push(`invalid category: ${tags[0]}`);
  }

  return issues;
}

const files = fs.readdirSync(targetDir)
  .filter((f) => f.endsWith(".md"))
  .sort();

let failureCount = 0;

for (const file of files) {
  const filepath = path.join(targetDir, file);
  const data = parseFrontmatter(filepath);
  const issues = validate(data);
  if (issues.length > 0) {
    console.error(`${file}: ${issues.join(", ")}`);
    failureCount++;
  }
}

if (failureCount > 0) {
  console.error(`\n${failureCount} file(s) with issues`);
  process.exit(1);
} else {
  console.log(`All ${files.length} files passed.`);
}
