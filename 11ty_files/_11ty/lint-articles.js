const fm = require("front-matter");
const fs = require("fs");
const glob = require("glob");

const checks = [requiredFields, imagePathFormatting];

glob("src/articles/!(_)*.md", (err, files) => {
  if (err) {
    throw err;
  }

  let hasErrored = false;

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    const { attributes } = fm(content);

    checks.forEach((check) => {
      try {
        check(file, attributes);
      } catch (error) {
        console.log(error);
        hasErrored = true;
      }
    });
  });

  if (hasErrored) {
    console.error("🔴 Lint checks have failed");
    process.exit();
  } else {
    console.log("✅ Lint checks successful");
  }
});

// Checks

function requiredFields(file, attributes) {
  const messages = [];
  const required = ["date", "description", "title"];

  required.forEach((field) => {
    if (!attributes[field]) {
      messages.push(`missing field \`${field}\``);
    }
  });

  if (attributes.tags.length === 0) {
    messages.push("missing at least one `tag`");
  }

  if (messages.length > 0) {
    throw file + ":\n\t" + messages.join("\n\t");
  }
}

function imagePathFormatting(file, { image }) {
  if (image && image.slice(0, "/img/".length) !== "/img/") {
    throw file + ": image path is invalid";
  }
}
