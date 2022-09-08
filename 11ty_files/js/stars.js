(function () {
  const starsCheckbox = document.getElementById("stars-checkbox");
  if (!starsCheckbox)
    return console.warn("Could not find input#stars-checkbox");

  const STORAGE_KEY = "com.seanmcp.stars";

  const storedValue = localStorage.getItem(STORAGE_KEY);
  if (storedValue === "disabled") {
    starsCheckbox.removeAttribute("checked");
  } else {
    const stars =
      storedValue && JSON.parse(storedValue || "{}")[window.location.pathname];
    if (stars && stars.length) {
      stars.forEach((coordinates) => createStarNode(...coordinates.split(",")));
    }
    document.addEventListener("click", handleDocumentClick);
  }

  function disableStars() {
    localStorage.setItem(STORAGE_KEY, "disabled");
    document.querySelectorAll("[data-star]").forEach((node) => node.remove());
    document.removeEventListener("click", handleDocumentClick);
  }

  function enableStars() {
    localStorage.setItem(STORAGE_KEY, "{}");
    document.addEventListener("click", handleDocumentClick);
  }

  starsCheckbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      enableStars();
    } else {
      if (confirm("Are you sure you want to disable stars?")) {
        disableStars();
      } else {
        event.target.checked = true;
      }
    }
  });

  function createStarNode(x, y) {
    const el = document.createElement("span");
    el.dataset.star = "true";
    el.style.left = x + "px";
    el.style.top = y + "px";
    document.body.appendChild(el);
  }

  function saveStar(x, y) {
    const allStars = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const stars = allStars[window.location.pathname] || [];
    stars.push(x + "," + y);
    allStars[window.location.pathname] = stars;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allStars));
  }

  function addStar(x, y) {
    createStarNode(x, y);
    saveStar(x, y);
  }

  function removeStar(node) {
    const x = node.style.left.slice(0, -2);
    const y = node.style.top.slice(0, -2);
    const allStars = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const stars = allStars[window.location.pathname] || [];
    allStars[window.location.pathname] = stars.filter(
      (coordinates) => coordinates !== x + "," + y
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allStars));
    node.remove();
  }

  function handleDocumentClick(event) {
    if (event.target.dataset.star) {
      return removeStar(event.target);
    }
    if (!event.metaKey) return;
    if (
      ["A", "BUTTON", "INPUT", "LABEL"].includes(event.target.nodeName) ||
      (event.target.parentNode &&
        ["A", "BUTTON", "INPUT", "LABEL"].includes(
          event.target.parentNode.nodeName
        ))
    ) {
      return;
    }
    addStar(event.pageX, event.pageY);
  }
})();
