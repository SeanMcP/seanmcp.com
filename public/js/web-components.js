customElements.define(
  "bible-verse",
  class BibleVerse extends HTMLElement {
    reference = undefined;
    containerId = undefined;

    constructor() {
      super();

      this.reference = this.textContent;
      this.containerId =
        "container-" + this.reference.replace(/\W/g, "").toLowerCase();
    }

    async connectedCallback() {
      this.render();

      try {
        const result = await fetch(
          `https://labs.bible.org/api/?passage=${this.reference}`
        );
        const html = await result.text();

        this.querySelector(`#${this.containerId}`).innerHTML = html;
      } catch (error) {
        console.debug(error);
      }
    }

    render() {
      this.innerHTML = `
      <style>
        bible-verse:not(:is(:focus-within, :hover)) div {
          clip: rect(0 0 0 0); 
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap; 
          width: 1px;
        }
      </style>
      <a
        aria-describedby="${this.containerId}"
        href="https://netbible.org/bible/${this.reference}"
        target="_blank"
      >
        ${this.reference}
      </a>
      <div id="${this.containerId}"></div>
    `;
    }
  }
);

customElements.define(
  "call-out",
  class CallOut extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      // Maybe https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role ?
      const template = document.createElement("template");
      template.innerHTML = /* html */ `
<style>
    :host {
      display: block;
    }
    
    section {
        align-items: center;
        border: 0.125em solid hsla(0, 0%, 0%, 0.1);
        display: flex;
        gap: 1rem;
        padding: 1rem;
    }

    section[data-type="check"] {
        background-color: hsl(126, 57%, 75%, 0.25);
    }

    section[data-type="error"] {
        background-color: hsl(4, 100%, 72%, 0.25);
    }

    section[data-type="info"] {
        background-color: hsl(208, 100%, 74%, 0.25);
    }

    section[data-type="warn"] {
        background-color: hsl(28, 100%, 67%, 0.25);
    }

    section[data-type="wave"] {
        background-color: hsl(269, 100%, 83%, 0.25);
    }

    ::slotted(*:first-child) {
        margin-block-start: 0;
    }

    ::slotted(*:last-child) {
        margin-block-end: 0;
    }

    svg {
        fill: currentColor;
        opacity: 0.5;
        width: 44px;
    }
</style>
<section data-type="${this.getAttribute("type")}">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
        ${this.getIcon()}
    </svg>
    <div>
        <slot></slot>
    </div>
</section>
      `;

      this.shadowRoot.append(template.content.cloneNode(true));
    }

    getIcon() {
      const type = this.getAttribute("type");
      switch (type) {
        case "check": {
          return `<path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>`;
        }
        case "error": {
          return `<path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z">`;
        }
        case "info": {
          return `<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>`;
        }
        case "warn": {
          return `<path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path>`;
        }
        case "wave": {
          return `<path d="M220.2,100l-18-31.18a28,28,0,0,0-47.3-1.92L139.56,40.31a28,28,0,0,0-48.12-.63,28,28,0,0,0-43,34.78l3.34,5.79a28,28,0,0,0-22,41.92l38,65.82a87.46,87.46,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3A88,88,0,0,0,220.2,100Zm-6.67,62.63A72,72,0,0,1,81.63,180l-38-65.82a12,12,0,0,1,20.79-12l22,38.1a8,8,0,1,0,13.85-8l-38-65.81a12,12,0,0,1,13.5-17.59,11.9,11.9,0,0,1,7.29,5.59l34,58.89a8,8,0,0,0,13.85-8l-26-45h0a12,12,0,0,1,20.78-12L160,107.78a48.08,48.08,0,0,0-11,61,8,8,0,0,0,13.86-8,32,32,0,0,1,11.71-43.71,8,8,0,0,0,2.93-10.93l-10-17.32a12,12,0,0,1,20.78-12l18,31.18A71.49,71.49,0,0,1,213.53,162.62ZM184.27,29.93a8,8,0,0,1,9.8-5.66c15.91,4.27,29,14.11,36.86,27.73a8,8,0,0,1-13.86,8c-5.72-9.92-15.36-17.12-27.14-20.27A8,8,0,0,1,184.27,29.93ZM80.91,237a8,8,0,0,1-11.24,1.33c-11-8.69-20.11-19.58-28.6-34.28a8,8,0,0,1,13.86-8c7.44,12.88,15.27,22.32,24.65,29.72A8,8,0,0,1,80.91,237Z"></path>`;
        }
      }
    }
  }
);

customElements.define(
  "em-bed",
  class EmBed extends HTMLElement {
    connectedCallback() {
      const anchor = this.querySelector("a");
      if (!anchor) {
        throw new Error("em-bed missing required anchor child");
      }
      const { href } = anchor;

      if (href.includes("youtube.com")) {
        this.handleYouTube(href);
      } else if (href.includes("codepen.io")) {
        this.handleCodePen(href);
      } else if (href.includes("stackblitz.com")) {
        this.handleStackBlitz(href);
      }
    }

    getIframe(src, title, type) {
      const iframe = document.createElement("iframe");

      iframe.setAttribute("allowfullscreen", "true");
      iframe.setAttribute("frameborder", "0");
      iframe.src = src;
      iframe.title = title;
      if (type) {
        iframe.dataset.type = type;
      }

      return iframe;
    }

    getStyle() {
      const style = document.createElement("style");
      style.textContent = `
em-bed,
:host {
  display: block;
}

iframe {
  aspect-ratio: 4 / 3;
  width: 100%;
}

iframe[data-type="youtube"] {
  aspect-ratio: 16 / 9;
}
`;
      return style;
    }

    handleCodePen(url) {
      const { pathname } = new URL(url);
      const [user, _, id] = pathname.slice(1).split("/");

      const wrapper = document.createElement("p");
      wrapper.dataset.slugHash = id;
      wrapper.dataset.user = user;
      wrapper.dataset.height = "500";
      wrapper.dataset.defaultTab = this.getAttribute("data-cp-tab") || "result";
      wrapper.innerHTML = `<a href=${url}>View on CodePen</a>`;
      wrapper.classList.add("codepen");

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js";

      this.innerHTML = wrapper.outerHTML;
      this.append(this.getStyle(), script);
    }

    handleStackBlitz(url) {
      const iframe = this.getIframe(url, "StackBlitz editor");

      this.attachShadow({ mode: "open" });
      this.shadowRoot.append(iframe, this.getStyle());
    }

    handleYouTube(url) {
      const id = new URL(url).searchParams.get("v");

      const iframe = this.getIframe(
        `https://www.youtube-nocookie.com/embed/${id}`,
        "YouTube video player",
        "youtube"
      );

      this.attachShadow({ mode: "open" });
      this.shadowRoot.append(iframe, this.getStyle());
    }
  }
);

customElements.define(
  "e-moji",
  class EMoji extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      const template = document.createElement("template");

      const label = this.getAttribute("label");

      template.innerHTML = /* html */ `
<span role="img" ${
        label ? `aria-label="${label}"` : `aria-hidden="true"`
      }><slot></slot></span>`;

      this.shadowRoot.append(template.content.cloneNode(true));
    }
  }
);

customElements.define(
  "like-button",
  class LikeButton extends HTMLElement {
    storeKey = "com.seanmcp.likes";
    slug = undefined;

    constructor() {
      super();

      this.slug = location.pathname;

      this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
      const attrSlug = this.getAttribute("slug");
      if (attrSlug) {
        this.slug = attrSlug;
      }

      const response = await fetch("/fn/likes?slug=" + this.slug);
      let count;
      if (response.ok) {
        const data = await response.json();
        count = data.count;
      }

      const isLiked = this.getIsLiked();

      const template = document.createElement("template");
      template.innerHTML = /* html */ `
      <style>
        :host {
          align-items: center;
          display: inline-flex;
        }

        button {
          align-items: center;
          background: transparent;
          border: none;
          color: var(--anchor-color);
          display: flex;
          justify-content: center;
          padding: 10px;
          transition: all 100ms ease-in-out;
        }

        button:is(:focus, :hover) {
          transform: scale(1.15);
        }

        button > svg {
          width: 24px;
        }

        button[aria-disabled="true"] > svg > path {
          fill: currentColor;
        }

        span:empty {
          display: none;
        }
      </style>
      <form action="/fn/like">
        <input type="hidden" name="slug" value="${this.slug}">
        <button
          ${isLiked ? "aria-disabled=true" : ""}
          aria-label="${isLiked ? "Liked" : "Like"}"
          class="center() focusable()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"/>
            <path d="M128,216S24,160,24,94A54,54,0,0,1,78,40c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,160,128,216,128,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
          </svg>
        </button>
      </form>
      <span>${count || ""}</span>
`;

      this.shadowRoot.append(template.content.cloneNode(true));

      const form = this.shadowRoot.querySelector("form");

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const button = this.shadowRoot.querySelector("button");
        if (button.getAttribute("aria-disabled")) {
          return;
        }

        const formData = new FormData(form);
        const searchParams = new URLSearchParams(formData);

        const url = form.action + "?" + searchParams.toString();

        const response = await fetch(url);
        if (response.ok) {
          const { count } = await response.json();
          this.setIsLiked();
          button.setAttribute("aria-disabled", "true");
          button.setAttribute("aria-label", "Liked");
          this.shadowRoot.querySelector("span").textContent = count;
        }
      });
    }

    getIsLiked() {
      const store = JSON.parse(localStorage.getItem(this.storeKey) || "[]");
      return store.includes(this.slug);
    }

    setIsLiked() {
      const stored = JSON.parse(localStorage.getItem(this.storeKey) || "[]");
      stored.push(this.slug);
      localStorage.setItem(this.storeKey, JSON.stringify(stored));
    }
  }
);
