/**
 * This web component handles all of the logic for fuzzy-searching through a list of data.
 * All of the rendering and styling is delegated to the page that instantiates fuzzy-search.
 */
customElements.define("fuzzy-search", class FuzzySearch extends HTMLElement {
  constructor() {
    super();

    const nodes = this.querySelectorAll("datalist > option")
    const data = []
    nodes.forEach(node => {
      data.push({
        datetime: node.getAttribute("data-datetime"),
        description: node.getAttribute("data-description"),
        label: node.getAttribute("data-label"),
        readableDate: node.getAttribute("data-readable-date"),
        tags: node.getAttribute("data-tags"),
        title: node.getAttribute("data-title"),
        url: node.getAttribute("value")
      })
    })
    this.data = data;
    this.fuse = new Fuse(this.data, {
      keys: ["description", "tags", "title"],
      threshold: 0.2
    });
    this.form = this.querySelector("form");
    this.input = this.querySelector("form input[name=q]")
    this.template = this.querySelector("template");
    this.output = this.querySelector("output");
    this.orderedList = this.querySelector("ol")
  }

  connectedCallback() {
    const usp = new URLSearchParams(location.search)
    const query = usp.get("q");

    this.output.setAttribute("aria-live", "polite");

    if (!query) {
      return;
    }

    if (this.input) {
      this.input.value = query;
    }

    let count = 0
    let orderedListHTML = ""

    this.fuse.search(query).forEach(({ item }) => {
      count++;
      const clone = this.template.cloneNode(true);
      let html = clone.innerHTML.replace("%URL%", item.url)
        .replace("%TITLE%", item.title || item.url)
      if (item.datetime) {
        html = html.replace("%DATETIME%", item.datetime).replace("%READABLE_DATE%", item.readableDate)
      } else {
        // For items without a date, remove the time element
        html = html.replace(/<time .*\/time>/, "")
      }
      orderedListHTML += html;
    })

    this.output.textContent = count === 0
      ? `No results found for "${query}"`
      : `${count} result${count !== 1 ? "s" : ""} found for "${query}"`

    this.orderedList.innerHTML = orderedListHTML;
  }
})
