document.addEventListener("keydown", (event) => {
  if (!(event.metaKey || event.ctrlKey)) return;

  switch (event.key) {
    case "h":
      event.preventDefault();
      location.href = "/";
      break;
    case "k":
      event.preventDefault();
      location.href = "/search";
      break;
  }
});
