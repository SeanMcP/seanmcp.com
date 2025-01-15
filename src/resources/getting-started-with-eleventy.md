---
layout: page.liquid
title: "Getting started with Eleventy"
description:
  The missing getting-started guide for the Eleventy (11ty) static-site
  generator.
date: 2024-05-27T13:45-0400
verse: Matthew 28:16
---

Eleventy has ["Get Started" documentation](https://www.11ty.dev/docs/) that
shows you how to get from a single markdown file to a built site. That is a nice
"proof of idea", but I haven't found it to be a helpful way to actually get
started with Eleventy. This garden aims to be a better guide for building a
simple Eleventy site from scratch.

## Setup

1. Create a new directory for your project: `mkdir getting-started-eleventy`
2. In that directory, initialize a new project: `npm init -y`
3. Install Eleventy: `npm install @11ty/eleventy@canary --save-exact`[^1]
4. Add `dev` and `build` scripts to your `package.json`:
   ```json
   {
     "scripts": {
       "dev": "eleventy --serve",
       "build": "eleventy"
     }
   }
   ```

At this point you're probably tempted to run the `dev` script, but hold off for
a little bit. We need to add some configuration to keep the project organized.

## Configuration

1. Create a new `src` directory: `mkdir src`
2. Create your first markdown file: `echo "# Hello, world!" > src/index.md`
3. Create a `.eleventy.js` file in the root directory: `touch .eleventy.js`
4. Add the following configuration to `.eleventy.js`:
   ```js
   export default function (eleventyConfig) {
     return {
       dir: {
         input: "src",
         output: "dist", // Or whatever build directory you prefer
       },
     };
   }
   ```

This configuration will tell Eleventy to look for source files in the `src/`
directory, and skip generating webpages for your project `README.md`. You can
stick with the default `_site/` output directory, but I like explicitly setting
the output directory so that you know where they're going.

5. Add a `.gitignore` file to the root directory:
   ```
   node_modules/
   dist/ # Or whatever build directory you chose in .eleventy.js
   ```

At this point, you can run `npm run build` to generate your site. You should see
a single `index.html` file in your build directory. But your site is probably
going to need more than HTML, so we'll configure Eleventy to handle assets.

## Assets

1. Create a new `public/` directory in the root of your project: `mkdir public`
2. Add a line to your `.eleventy.js` configuration to copy the `public/`
   directory to the build directory:

   ```js
   export default function (eleventyConfig) {
     eleventyConfig.addPassthroughCopy({ public: "/" });

     return {
       /* ... */
     };
   }
   ```

   This will copy all of the files within your `public/` directory to the root
   of the build directory. You can test this by adding a CSS files to the
   `public/` directory and running `npm run build`:

```
echo "body { font-family: system-ui }" > public/styles.css
npm run build
ls dist
```

You should see `styles.css` in the build directory, but the styles won't apply
because the CSS files isn't linked to the HTML. To do that, we'll need to create
a layout.

## Layouts

Eleventy supports a bunch of different templating languages for layouts. I don't
like any of them[^2], but JavaScript is good enough.

1. Create a new `_includes/` directory in `src/`: `mkdir src/_includes`
2. Create a new `base.11ty.js` file there: `touch src/_includes/base.11ty.js`

This will serve as our base layout that includes all the HTML boilerplate. In
that file, add the following:

```js
export default class Base {
  render(data) {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${data.title}</title>
          <meta name="description" content="${
            data.metaDescription || "Generic site description"
          }">
          <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
          ${data.content}
        </body>
      </html>
    `;
  }
}
```

This layout will render an HTML document with `title`, `metaDescription`, and
`content` properties. Noticed that we've now linked the CSS file that we copied
in the "Assets" sections. Now we need to configure our markdown file to use this
layout.

3. Update your `index.md` file to use the layout:

```md
---
layout: base.11ty.js
layout: page.liquid
title: Home
metaDescription: The homepage of my site
---

The "body" of markdown files becomes `content` in layouts.
```

Now when you run your build again, you should see your `index.html` file with
the additional markup including applied styles.

When you want to chain a layout in JavaScript, you need to refer to the parent
layout in the `class`'s `data` method:

```js
export default class Page {
  data() {
    return {
      layout: "base.11ty.js",
    };
  }

  render(data) {
    return `
      <main>
        <h1>${data.title}</h1>
        ${data.content}
      </main>
    `;
  }
}
```

This new `Page` layout will render within the `Base` layout, giving you the
power of composition when building pages. I typically have a base layout and
then 2-3 other layouts that I use for different types of pages.

The next thing you'll probably want are UI "components" that you can reuse
across your site, and for that we'll turn to Eleventy's "shortcodes".

## Shortcodes

You could organize this section however you want. I'm going to show you one way
that works well for smaller projects.

1. Create a directory for shortcodes in `_includes/`:
   `mkdir src/_includes/shortcodes`
2. Create your first shortcode file: `touch src/_includes/shortcodes/emoji.js`
3. Add the following to `emoji.js`:
   ```js
   /** An accessible emoji shortcode */
   export default function emojiShortcode(emoji, label) {
     let attributes = [
       "role=img",
       label ? `aria-label=${label}` : "aria-hidden=true",
     ];
     return `<span ${attributes.join(" ")}>${emoji}</span>`;
   }
   ```
4. Add the shortcode in your `.eleventy.js` config file:

   ```js
   import emojiShortcode from "./src/_includes/shortcodes/emoji";

   export default function (eleventyConfig) {
     eleventyConfig.addShortcode("emoji", emojiShortcode);

     return {
       /* ... */
     };
   }
   ```

5. Use the new shortcode in your markdown file:

{% raw %}

```md
---
layout: page.11ty.js
layout: page.liquid
title: Home
---

{% emoji "👋" "Waving hand" %} Hi there!
```

{% endraw %}

6. Use the new shortcode in your layout file:

   ```js
   export default class Page {
     data() {
       return {
         layout: "base.11ty.js",
       };
     }

     render(data) {
       return `
          <main>
            <h1>${data.title}</h1>
            ${data.content}
            ${this.emoji("👋", "Waving hand")} Thanks for visiting!
          </main>
        `;
     }
   }
   ```

Build your site and you should see the emoji rendering with the appropriate
markup.

## Syntax highlighting

Eleventy will format inline code and code blocks correctly, but you need a plugin for syntax highlighting.

1. Install the official plugin: `pnpm i @11ty/eleventy-plugin-syntaxhighlight`
2. Add the plugin to the `.eleventy.js` config:

```js
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    /* ... */
  };
}
```

3. Now the generated markup will have token classes. To style those differently, you can either create your own theme or [download a Prism theme](https://github.com/PrismJS/prism-themes/tree/master).
4. Link those styles in your base or page template and syntax highlighting will work for code blocks. (You may want to tweak the styles to apply to inline code too.)

## Footnotes

Eleventy does not have an official plugin for markdown footnotes, but the markdown parser it uses does.

1. Install the markdown-it plugin: `pnpm i markdown-it markdown-it-footnote`
2. Add the config to `.eleventy.js`:

```js
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";

export default function (eleventyConfig) {
  eleventyConfig.setLibrary("md", markdownIt().use(markdownItFootnote));

  return {
    /* ... */
  };
}
```

3. Configure the plugin to meet your needs: [`markdown-it-footnote` documentation](https://github.com/markdown-it/markdown-it-footnote?tab=readme-ov-file#customize)

## Conclusion

There is a lot more that we could do, but at this point you are definitely
started. With this little bit of organization and configuration, you're now on
your way to building real sites with Eleventy.

[^1]:
    I'm recommending the canary release here because it includes ECMAScript
    module support. This is the future of JavaScript and Eleventy, so might as
    well get on board now.

[^2]:
    I've been spoiled by composition patterns in JSX, Svelte, and Astro. I find
    it difficult to build UI in the way that my mind wants to think using
    templating languages like Nunjucks or Liquid.
