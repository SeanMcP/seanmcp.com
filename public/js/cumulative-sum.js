customElements.define("cumulative-sum", class extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const template = document.createElement("template");
        template.innerHTML = /* html */`
<style>
    :host {
        border: 1px solid var(--off-background);
        display: block;
    }

    form {
        align-items: center;
        display: flex;
        gap: var(--space-xs);
        padding: var(--space-s);
    }
    
    input {
        background: transparent;
        border: 1px solid var(--off-background);
        color: var(--text-color);
        flex: 1;
        font: inherit;
        padding: var(--space-2xs);
    }
    
    button {
        background: var(--off-background);
        border: 0;
        color: var(--text-color);
        font: inherit;
        padding-block: var(--space-2xs);
        padding-inline: var(--space-xs);
    }

    output:not(:empty) {
        background-color: var(--off-background);
        display: block;
        font-size: 2em;
        font-weight: bold;
        overflow-x: auto;
        padding: var(--space-s);
        text-align: center;
    }
</style>
<form>
    <label for="num">Number</label><input id="num" type="number" name="number" required value="30" />
    <button>Calculate</button>
</form>
<output aria-live="polite"></output>
`;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);
            const number = parseInt(formData.get("number"));

            if (isNaN(number)) {
                return;
            }

            const output = this.shadowRoot.querySelector("output");
            output.textContent = (number * (number + 1)) / 2;
        });
    }
});
