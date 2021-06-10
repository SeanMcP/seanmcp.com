(function darkMode() {
  const darkModeCheckbox = document.getElementById("dark-mode");
  if (!darkModeCheckbox) return console.warn("Could not find input#dark-mode");

  const STORAGE_KEY = "com.seanmcp.theme";

  const storedTheme = localStorage.getItem(STORAGE_KEY) || "default";
  if (storedTheme === "dark") {
    document.body.dataset.theme = storedTheme;
    darkModeCheckbox.checked = true;
  }

  darkModeCheckbox.addEventListener("change", (event) => {
    const nextTheme = event.target.checked ? "dark" : "default";
    localStorage.setItem(STORAGE_KEY, nextTheme);
    document.body.dataset.theme = nextTheme;
  });
})();
