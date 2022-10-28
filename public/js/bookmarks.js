// @ts-check

(() => {
  const storageKey = "com.seanmcp.bookmarks";
  const bookmarks = JSON.parse(localStorage.getItem(storageKey) || "[]");

  const indicator = document.createElement("span");
  indicator.role = "img";
  indicator.setAttribute("aria-label", "bookmarked");
  indicator.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M184,32H72A16,16,0,0,0,56,48V224a8.1,8.1,0,0,0,4.1,7,7.6,7.6,0,0,0,3.9,1,7.9,7.9,0,0,0,4.2-1.2L128,193.4l59.7,37.4a8.3,8.3,0,0,0,8.2.2,8.1,8.1,0,0,0,4.1-7V48A16,16,0,0,0,184,32Z"></path></svg>`;
  indicator.title = "Previously bookmarked content";

  document.querySelectorAll("[data-url]").forEach((node) => {
    if (bookmarks.includes(node.dataset.url)) {
      node.dataset.bookmarked = "true";

      // Notes render their own bookmark toggle, so we don't need an icon
      if (!node.dataset.url.includes("/notes/")) {
        node.appendChild(indicator.cloneNode(true));
      }
    }
  });

  const bookmarkToggles = document.querySelectorAll(
    "input[name=bookmark-toggle]"
  );

  if (bookmarkToggles.length === 0) {
    return;
  }

  bookmarkToggles.forEach((toggle) => {
    const isBookmarked = bookmarks.includes(toggle.dataset.url);
    toggle.dataset.bookmarked = isBookmarked;
    toggle.checked = isBookmarked;
  });

  document.addEventListener("change", (e) => {
    if (!e.target || e.target.name !== "bookmark-toggle") {
      return;
    }

    const toggle = e.target;

    if (toggle.checked) {
      toggle.dataset.bookmarked = "true";
      localStorage.setItem(
        storageKey,
        JSON.stringify([...bookmarks, toggle.dataset.url])
      );
      // Wait for browser to paint before alerting
      setTimeout(() => alert("Bookmarking this content for later"), 0);
    } else {
      toggle.dataset.bookmarked = "false";
      localStorage.setItem(
        storageKey,
        JSON.stringify(bookmarks.filter((url) => url !== toggle.dataset.url))
      );
    }
  });
})();
