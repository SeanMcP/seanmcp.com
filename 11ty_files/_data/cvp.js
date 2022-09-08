const { get } = require("httpie");

module.exports = async function () {
  const { data } = await get(
    "https://raw.githubusercontent.com/SeanMcP/reading/master/consonant-vowel-patterns/lib/short-patterns.json"
  );

  return JSON.parse(data);
};
