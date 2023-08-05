import fs from "node:fs";
import path from "node:path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dirPath = path.join(__dirname, "./content/articles");

const files = fs.readdirSync(dirPath);

function forceTwoDigits(number) {
  const string = String(number);

  if (string.length === 1) {
    return "0" + string;
  }
  return string;
}

/**
 * @param {Date} date
 * @returns
 */
function getTimestamp(date) {
  const dateParts = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ].map(forceTwoDigits);
  const timeParts = [date.getHours(), date.getMinutes()].map(forceTwoDigits);

  return `${dateParts.join("-")}T${timeParts.join(":")}-0400`;
}

/**
 *
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

    fs.writeFileSync(path.join(dirPath, file), nextContent)
  });
