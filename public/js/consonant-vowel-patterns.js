customElements.define("consonant-vowel-patterns", class extends HTMLElement {
    constructor() {
        super();

        this.form = this.querySelector("form");
        this.select = this.querySelector("select");
        this.output = this.querySelector("output");

        this.form.setAttribute("inert", "true");
        this.output.innerHTML = "Loading..."

        const usp = new URLSearchParams(location.search);
        const pattern = usp.get("pattern");

        fetch("https://unpkg.com/consonant-vowel-patterns@1.0.0/lib/all.json")
            .then(res => res.json())
            .then(data => {
                this.data = data;

                this.form.removeAttribute("inert");
                this.setupSelect();
                this.renderOptions(pattern);
                this.output.innerHTML = "";
                this.renderResults(pattern);
            })
            .catch((e) => {
                console.error("consonant-vowel-patterns e:", e);
                this.output.innerHTML = "Uh oh! There was an error loading the data."
            });
    }

    renderOptions(pattern) {
        let html = "<option>Select a consonant-vowel pattern</option>";
        Object.keys(this.data).forEach(key => {
            html += `<option value="${key}" ${key === pattern ? "selected" : ""}>${key}</option>`
        })
        this.select.innerHTML = html;
    }

    renderResults(pattern) {
        if (!pattern) return;

        const data = this.data[pattern];

        let resultsHTML = ""
        data.forEach(word => {
            resultsHTML += `<li>${word}</li>`;
        });

        this.output.innerHTML = `
            <span>${data.length} results found for "${pattern}"</span>
            <ul>${resultsHTML}</ul>
        `;
    }

    setupSelect() {
        this.select.addEventListener("change", e => {
            const pattern = e.target.value;

            const url = new URL(window.location);
            url.searchParams.set("pattern", pattern);
            window.history.pushState({}, '', url);

            this.renderResults(e.target.value);
        });
    }
})