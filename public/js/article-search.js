(function search() {
  try {
    const options = document.querySelectorAll("#articles-list option");
    const lookup = {};

    options.forEach(({ dataset, value }) => {
      lookup[value] = dataset.url;
    });

    document
      .getElementById("articles-search")
      .addEventListener("input", ({ target: { value } }) => {
        if (value && value.length && lookup.hasOwnProperty(value)) {
          window.location.href = lookup[value];
        }
      });
  } catch (error) {
    console.error("Error in article-search.js", error);
    const searchContainer = document.getElementById("search-container");
    if (searchContainer) searchContainer.hidden = true;
  }
})();
