import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

function forceDigits(number) {
  const string = String(number);
  return string.length === 1 ? "0" + string : string;
}

/**
 * Returns a formatted timestamp in eastern time
 * @returns {string} timestamp
 */
export function getTimestamp(date) {
  // There is probably a better way to do this
  const d = date ? new Date(date) : new Date();

  let s = d.getFullYear();
  s += "-";
  s += forceDigits(d.getMonth() + 1);
  s += "-";
  s += forceDigits(d.getDate());
  s += "T";
  s += forceDigits(d.getHours());
  s += ":";
  s += forceDigits(d.getMinutes());
  s += "-0400";

  return s;
}

const template = `---
title: %TITLE%
description:
date: ${getTimestamp()}
tags:
  - Articles
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

const slug = title
  .toLowerCase()
  .replace(/ /g, "-")
  .replace(/[^a-z0-9-]/g, "");
const filename = `${slug}.md`;

fs.writeFileSync(path.join(__dirname, "src/content", filename), template.replace("%TITLE%", title));
console.log(`Created new post: ${filename}`);
