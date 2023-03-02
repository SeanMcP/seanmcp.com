---
title: Fix trailing whitespace in Astro components
description: There is an issue with the Astro compiler that leaves unwanted whitespace in your elements, and this workaround will solve the problem until it's resolved
tags:
    - Astro
    - Debugging
pubDate: 2023-03-02T11:59:09.565Z
---

- [A closed issue on GitHub](https://github.com/withastro/astro/issues/5737) appears to still be occurring
- Forcing your code onto a single line is a workaround

When your Astro code is formatted onto multiple lines, the resulting markup from the Astro compiler includes a whitespace. This is noticeable when you have a list of links that are underlined:

```html
<a>
  Link 1
</a>
<a>
  Link 2
</a>
```
<!-- Underline in markdown -->

Result: <ins>Link 1 </ins>&nbsp;&nbsp;&nbsp;<ins>Link 2</ins>

But if the markup is on a single line, then the issue goes away:

```html
<a>Link 1</a>
<a>Link 2</a>
```

Result: <ins>Link 1</ins>&nbsp;&nbsp;&nbsp;<ins>Link 2</ins>

I have faked the output for this article, but you can [see a live reproduction](https://stackblitz.com/edit/github-wg8oqd?file=src/pages/index.astro) of this behavior on StackBlitz.

To workaround this issue, you need force your markup onto a single line. Let’s look at a real-world example element with multiple attributes. Your code formatter will spread it over multiple lines:

```jsx
{items.map(item => {
  return (
    <a
      aria-current={Astro.url.pathname === item.url ? "page" : null}
      href={item.url}
    >
      {item.label}
    </a>
  )
})
```

To force this code onto a single line, we need to refactor. Create variables to represent attributes and children with short names, and then pass them to the element:

```jsx
{items.map(item => {
  const a = {
    'aria-current': Astro.url.pathname === item.url ? "page" : null,
    href: item.url
  }
  const c = item.label
  return <a {...a}>{c}</a>
})
```

This code is objectively worse (and might create a TypeScript warning that you need to ignore), but it will fix the whitespace issue. Hopefully the Astro team can fix the issue in the compiler and make this workaround unnecessary.
