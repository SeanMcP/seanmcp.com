(function () {
  const xEl = document.getElementById("x");
  const yEl = document.getElementById("y");
  const calculate = document.getElementById("calculate");
  const result = document.getElementById("result");

  calculate.addEventListener("click", () => {
    const x = parseInt(xEl.value);
    const y = parseInt(yEl.value);

    if (Number.isNaN(x) || Number.isNaN(y)) {
      return;
    }

    let sum = 0;

    for (let i = 1; i <= x; i += y) {
      sum += i;
    }

    result.textContent = sum.toLocaleString();
    result.dataset.hasValue = true;
  });
})();
