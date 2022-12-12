import { execSync } from "child_process";
import fs from "fs";
import sharp from "sharp";

const IMAGES_DIRECTORY = "public/images";
const WIDTH = 640;
let count = 0;

/** Will force generate new images; useful if you change the sharp configuration */
const forceWrite = process.argv.includes("--force");

/** Will skip git add/commit; useful for testing or running in CI/CD */
const skipGit = process.argv.includes("--skip-git");

const savedWidth = Number(
  fs.readFileSync(`${IMAGES_DIRECTORY}/width.txt`, "utf8")
);

const images = fs.readdirSync(IMAGES_DIRECTORY).filter((filename) => {
  if (filename === ".DS_Store") {
    fs.rmSync(`${IMAGES_DIRECTORY}/.DS_Store`);
    return false;
  }
  if (filename.endsWith(".txt")) {
    return false;
  }
  return true;
});

images.forEach((filename) => {
  if (filename.includes(".original.")) {
    return;
  }
  const [originalFilename, originalFullPath] = getOriginalFilename(filename);
  if (savedWidth === WIDTH || forceWrite) {
    // WIDTH matches savedWidth, so save originals of new files and resize

    if (fs.existsSync(originalFullPath)) {
      return;
    }
    saveOriginal(filename);
    resize(filename);
  } else {
    // WIDTH does not match savedWidth, so resize all images

    if (fs.existsSync(originalFullPath)) {
      // If the original file exists, use that to generate a new image
      resize(originalFilename, filename);
    } else {
      // If not, copy the current file to the original file and then resize
      saveOriginal(filename);
      resize(filename);
    }

    fs.writeFileSync(`${IMAGES_DIRECTORY}/width.txt`, WIDTH.toString());
  }
});

console.log(`Resized ${count} images`);

if (count > 0 && !skipGit) {
  execSync(`git add ${IMAGES_DIRECTORY}`);
  execSync(`git commit -m "[🤖] Add, resize images"`);
}

// UTILS

function resize(input, output = input) {
  count++;
  console.log(`Resizing ${input}`);
  sharp(fs.readFileSync(`${IMAGES_DIRECTORY}/${input}`))
    .resize(WIDTH)
    .toFile(`${IMAGES_DIRECTORY}/${output}`);
}

function saveOriginal(filename) {
  const [originalFilename] = getOriginalFilename(filename);
  fs.copyFileSync(
    `${IMAGES_DIRECTORY}/${filename}`,
    `${IMAGES_DIRECTORY}/${originalFilename}`
  );
}

function getOriginalFilename(filename) {
  const parts = filename.split(".");
  const extension = parts.pop();
  const name = parts.join(".");
  const originalFilename = `${name}.original.${extension}`;
  return [originalFilename, `${IMAGES_DIRECTORY}/${originalFilename}`];
}
