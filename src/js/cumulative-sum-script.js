(function () {
  const settings = document.getElementById("settings");
  const result = document.getElementById("result");

  settings.addEventListener("submit", (event) => {
    event.preventDefault();
    const x = parseInt(new FormData(event.target).get("x"));
    if (Number.isNaN(x)) {
      return;
    }

    let sum = (x * (x + 1)) / 2;

    result.textContent = sum.toLocaleString();
    result.dataset.hasValue = true;
  });
})();
