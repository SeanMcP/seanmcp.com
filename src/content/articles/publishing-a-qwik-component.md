---
title: Publishing a Qwik component
description:
  The Qwik team has made creating and publish Qwik components a smooth and
  painless process.
tags:
  - Qwik
pubDate: 2023-02-13T07:25-0400
---

After hearing creator Miško Hevery on every front-end podcast that I listen to,
I decided to give his new Qwik library a look. My canonical approach to learning
a new library is creating a `*-emoji` component that wraps emojis with the
appropriate HTML attributes for accessibility.

Using `npm create qwik@latest`, I was able to scaffold a Qwik component library
quickly. Then it was a matter of writing the component using Qwik’s `component$`
function and exporting things in the right places.

To speak nothing of Qwik’s other features, it was a breeze writing my first
component. It looks and feels just like React (thanks JSX!), and I only needed
to reference the documentation one time to confirm how props worked. The project
setup was great, and helped me identify some Qwik-specific TypeScript issues
before I published the library.

Overall, publishing a Qwik component was a smooth and painless process. Kudos to
the Qwik team for making it a great developer experience.

You can checkout my [Qwik emoji library on npm](https://npm.im/qwik-emoji), or
install it yourself with:

```bash
npm i qwik-emoji
```

Onward!
