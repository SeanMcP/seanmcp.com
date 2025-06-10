import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const text = process.argv[2];

if (!text) {
  console.error("Please provide text to write to a file");
  process.exit(1);
}

const date = new Date().toLocaleDateString("en-US", {
  day: "numeric",
  month: "long",
  timeZone: "America/New_York",
  year: "numeric",
});

const voidContent = fs.readFileSync(
  path.join(__dirname, "src/void.md"),
  "utf-8"
);
const newEntry = `\n**${date}** — ${text}\n`;
const startOfMostRecentEntry = voidContent.indexOf("\n**");
const nextContent =
  voidContent.slice(0, startOfMostRecentEntry) +
  newEntry +
  "\n---\n" +
  voidContent.slice(startOfMostRecentEntry);

// Log newEntry and confirm before moving on
console.log(newEntry);
console.log("Send? (y/n)");
process.stdin.once("data", (data) => {
  if (data.toString().trim() === "y") {
    fs.writeFileSync(path.join(__dirname, "src/void.md"), nextContent);

    execSync("git pull");
    execSync("git add src/void.md");
    execSync("git commit -m 'New void entry'");
    execSync("git push");

    console.log("New entry sent to the void");
  } else {
    console.log("Cancelled");
  }
  process.exit();
});
