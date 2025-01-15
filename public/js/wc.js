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
      connectedCallback() {
        this.innerHTML = /* html */ `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="${this.getAttribute("type")}"
        fill="var(--call-out_icon-color, #000000)"
        height="32"
        role="img"
        viewBox="0 0 256 256"
        width="32"
      >
          ${this.getIcon()}
      </svg>
      <div>
          ${this.innerHTML}
      </div>
        `;
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
  <span role="img" ${label ? `aria-label="${label}"` : `aria-hidden="true"`
          }><slot></slot></span>`;
  
        this.shadowRoot.append(template.content.cloneNode(true));
      }
    }
  );
  
  customElements.define(
    "table-of-contents",
    class TableOfContents extends HTMLElement {
      constructor() {
        super();
      }
  
      connectedCallback() {
        const headings = Array.from(
          document.querySelectorAll("main :is(h2, h3, h4, h5, h6)")
        );
  
        const toc = document.createElement("section");
        toc.id = "table-of-contents";
        const headingTag = this.getAttribute("heading-tag") || "b";
        toc.innerHTML = `<${headingTag}>Table of Contents</${headingTag}>`;
        const ol = document.createElement("ol");
  
        let html = "";
  
        headings.forEach((heading) => {
          const level = parseInt(heading.tagName.slice(1));
          const indent = `${level - 2}rem`;
  
          html += `<li style="margin-inline-start: ${indent}">
    <a href="#${heading.id}">${heading.textContent}</a>
  </li>`;
        });
  
        ol.innerHTML = html;
        toc.append(ol);
  
        this.append(toc);
      }
    }
  );
  