customElements.define(
  "consonant-vowel-patterns",
  class extends HTMLElement {
    constructor() {
      super();

      this.vowels = ["a", "e", "i", "o", "u", "y"];
      this.form = this.querySelector("form");
      this.input = this.querySelector("input");
      //   this.select = this.querySelector("select");
      this.output = this.querySelector("output");

      this.form.setAttribute("inert", "true");
      this.output.innerHTML = "Loading...";

      const usp = new URLSearchParams(location.search);
      const urlPattern = usp.get("pattern");
      const pattern = this.urlPatternToPattern(urlPattern);
      const filename = this.patternToFilename(pattern);
      this.input.value = pattern || "";

      fetch("https://unpkg.com/consonant-vowel-patterns@1.0.0/lib/all.json")
        .then((res) => res.json())
        .then((data) => {
          this.data = data;

          this.form.removeAttribute("inert");
          this.setupSelect();
          this.renderOptions(filename);
          this.output.innerHTML = "";
          this.renderResults(filename, pattern);
        })
        .catch((e) => {
          console.error("consonant-vowel-patterns e:", e);
          this.output.innerHTML = "Uh oh! There was an error loading the data.";
        });
    }

    renderOptions(pattern) {
      //   let html = "<option value=''>Select a pattern</option>";
      //   Object.keys(this.data).forEach((key) => {
      //     html += `<option value="${key}" ${key === pattern ? "selected" : ""}>${key}</option>`;
      //   });
      //   this.select.innerHTML = html;
    }

    renderResults(filename, pattern) {
      if (filename == null) return;
      if (filename === "") {
        return (this.output.innerHTML = "");
      }

      const data = this.data[filename];

      if (!data) {
        return (this.output.innerHTML = `No results found for "${pattern || filename}"`);
      }

      let resultsHTML = "";
      let count = 0;
      data.forEach((word) => {
        if (pattern && this.testWord(word, pattern) === false) {
          return;
        }
        count++;
        resultsHTML += `<li>${word}</li>`;
      });

      this.output.innerHTML = `
            <span>${count} results found for "${pattern || filename}"</span>
            <ul>${resultsHTML}</ul>
        `;
    }

    setupSelect() {
      //   this.select.addEventListener("change", (e) => {
      //     const pattern = e.target.value;
      //     const url = new URL(window.location);
      //     url.searchParams.set("pattern", pattern);
      //     window.history.pushState({}, "", url);
      //     this.renderResults(e.target.value);
      //   });
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        const pattern = this.input.value;
        const url = new URL(window.location);
        const filename = this.patternToFilename(pattern);
        url.searchParams.set("pattern", pattern);
        window.history.pushState({}, "", url);
        this.renderResults(filename, pattern);
      });
    }

    patternToFilename(pattern) {
      if (pattern.toLowerCase() === "cvce") {
        // This is a special case in the data that we want to handle.
        return "cvce";
      }
      const filename = pattern.split("").map((char) => {
        const lower = char.toLowerCase();
        if (lower === "v" || lower === "c") {
          return lower;
        }
        if (this.vowels.includes(lower)) {
          return "v";
        } else {
          return "c";
        }
      });
      return filename.join("");
    }

    urlPatternToPattern(urlPattern) {
      // For historical reasons, URL patterns used to be all lowercase.
      // If a URL pattern is all lowercase c's and v's, then we assume
      // that it's a pattern from the old system and capitalize it.
      if (urlPattern === "cvce") {
        // This is a special case in the data that we want to handle.
        return "CVCe";
      }
      const isLowercasePattern = urlPattern
        .split("")
        .every((char) => char === "c" || char === "v");
      if (isLowercasePattern) {
        return urlPattern.toUpperCase();
      }
      return urlPattern;
    }

    testWord(word, query) {
      for (let i = 0; i < word.length; i++) {
        const wordChar = word[i];
        const patternChar = query[i];
        if (patternChar === "V") {
          // Match any vowel
          if (this.vowels.includes(wordChar)) {
            continue;
          }
          return false;
        } else if (patternChar === "C") {
          // Match any consonant
          if (!this.vowels.includes(wordChar)) {
            continue;
          }
          return false;
        } else {
          // Match the exact character
          if (wordChar === patternChar) {
            continue;
          }
          return false;
        }
      }
      return true;
    }
  },
);
