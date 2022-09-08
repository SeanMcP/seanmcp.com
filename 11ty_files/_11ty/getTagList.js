const fs = require("fs");

module.exports = function (collection) {
  const tagsAndCount = {};
  collection.getAll().forEach(function (item) {
    if ("tags" in item.data) {
      let tags = item.data.tags;

      tags = tags.filter(function (item) {
        switch (item) {
          // this list should match the `filter` list in tags.njk
          case "all":
          case "article":
          case "articles":
            return false;
        }

        return true;
      });

      for (const tag of tags) {
        tagsAndCount[tag] = tagsAndCount[tag] ? tagsAndCount[tag] + 1 : 1;
      }
    }
  });

  const allTags = Object.keys(tagsAndCount).sort();

  fs.writeFileSync(
    "./all-tags.json",
    JSON.stringify(
      allTags.reduce((acc, current) => {
        acc[current] = tagsAndCount[current];
        return acc;
      }, {}),
      null,
      2
    )
  );

  // returning an array in addCollection works in Eleventy 0.5.3
  return allTags;
};
