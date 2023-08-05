import fs from "node:fs";
import path from "node:path";
import { getTimestamp } from "./shared.mjs";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dirPath = path.join(__dirname, "./content/notes");

const files = fs.readdirSync(dirPath);

/**
 * Validates that a date is not on a Sunday
 * @param {Date} date
 */
function valiDate(date) {
  if (date.getDay() === 0) {
    console.log("Uh oh! That is a Sunday");
    throw Error(date.toISOString());
  }
}

files
  .filter((file) => file.slice(0, 3) !== "000")
  .forEach((file) => {
    const contents = fs.readFileSync(path.join(dirPath, file), "utf8");

    const nextContent = contents.replace(/pubDate: (.*)\n/, (_, pubDate) => {
      const date = new Date(pubDate);

      if (!pubDate.includes("T")) {
        // It's one of the date-only timestamps
        date.setHours(12);
        date.setUTCDate(date.getUTCDate() + 1);
        valiDate(date);
        return `pubDate: ${getTimestamp(date)}\n`;
      }

      if (pubDate.includes("Z")) {
        // UTC time!
        valiDate(date);
        return `pubDate: ${getTimestamp(date)}\n`;
      }

      // The few that already have a timezone
      let nextPubDate = pubDate.slice(0, pubDate.lastIndexOf(".") - 3);
      nextPubDate += "-0400";
      valiDate(new Date(nextPubDate));
      return `pubDate: ${nextPubDate}\n`;
    });

    fs.writeFileSync(path.join(dirPath, file), nextContent);
  });
