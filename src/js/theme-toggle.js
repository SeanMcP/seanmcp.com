(function darkMode() {
  const darkModeCheckbox = document.getElementById("dark-mode");
  if (!darkModeCheckbox) return console.warn("Could not find input#dark-mode");

  const STORAGE_KEY = "com.seanmcp.theme";

  function lightsOff() {
    document.body.dataset.theme = "dark";
    darkModeCheckbox.checked = true;
  }

  const storedTheme = localStorage.getItem(STORAGE_KEY);
  if (storedTheme) {
    if (storedTheme === "dark") lightsOff();
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    lightsOff();
  }

  darkModeCheckbox.addEventListener("change", (event) => {
    const nextTheme = event.target.checked ? "dark" : "default";
    localStorage.setItem(STORAGE_KEY, nextTheme);
    document.body.dataset.theme = nextTheme;
  });
})();
