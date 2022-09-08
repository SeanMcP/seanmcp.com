(() => {
  const patternForm = document.getElementById("pattern-form");
  const resultsList = document.getElementById("results-list");

  patternForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const pattern = fd.get("pattern");

    let innerHTML = "";

    try {
      const URL = `https://raw.githubusercontent.com/SeanMcP/reading/master/consonant-vowel-patterns/lib/${pattern}.json`;

      const response = await fetch(URL);
      const json = await response.json();

      innerHTML = `<li value="0">${json.length} result${
        json.length === 1 ? "" : "s"
      } found for "${pattern}"<a href="${URL}" target="_blank">View the full list</a></li>`;

      json.forEach((word) => {
        innerHTML += `<li>${word}</li>`;
      });
    } catch (error) {
      innerHTML =
        'Uh oh! Something went wrong. Try again or <a href="mailto:sean@seanmcp.com">contact me</a>.';
      console.error("Error fetching pattern data", error);
    }
    resultsList.innerHTML = innerHTML;
  });
})();
