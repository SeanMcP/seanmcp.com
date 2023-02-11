---
title: Make a web component
description: How to make a custom web component with only a few lines of code
pubDate: 2022-01-14
tags:
  - JavaScript
  - Web Components
verse:
# /img/<IMAGE>.min.jpg
image:
---

To make a web component, you need to create a new class. You can extend an existing component class if you want to preserve some semantic behavior, but we'll go with the default `HTMLElement`:

```js
class HelloWorld extends HTMLElement {}
```

Next, we need to add a `constructor` method and call the `super` function to ensure that our component is initialized with all the necessary information:

```js
class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }
}
```

Now we need a DOM to build on. Web components use [a shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM), which we'll create by calling our class's `attachShadow` method:

```js
class HelloWorld extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
  }
}
```

With our shadow DOM declared, we can create a new element. Let's go with a span element with the content "Hello world!" and append it to our shadow:

```js
class HelloWorld extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const span = document.createElement("span");
    span.textContent = "Hello world!";

    shadow.appendChild(span);
  }
}
```

The last thing we need to do is define our custom web component with:

```js
class HelloWorld extends HTMLElement {
  /* Collapsed for brevity */
}

customElements.define("hello-world", HelloWorld);
```

Finally, references your new element in the HTML:

```html
<hello-world></hello-world>
```

Congratulations, you just made your first web component!

Happy coding!
