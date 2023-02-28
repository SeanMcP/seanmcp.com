---
title: Astro components do not merge HTML attributes
description:
  Props are merged, but attributes are not. This is an important rule to know
  when authoring Astro components.
image:
tags:
  - Astro
pubDate: 2022-11-29T15:36:16.192Z
---

Over the past month I have been enjoying working in the
[Astro](https://astro.build) ecosystem recently, and have been working on some
simple community packages.

I've learned that Astro merges component props and element attributes
differently, so I'm writing this short PSA to help myself and other Astro devs
in the future.

First, some terminology:

1. [Props](https://docs.astro.build/en/core-concepts/astro-components/#component-props)
   are the data or properties that we pass to components
2. [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
   are the data that we pass directly to HTML elements

We might think of these interchangeably in most component-based frameworks, but
as we will see here they are different in Astro components.

## Props: left-to-right

For props, **Astro merges from left-to-right**. This means that a prop on the
left-side of a component call will be overwritten by the prop with the same name
on the right:

```astro
<Example side="left" side="right" />
<!-- side: "right" -->
```

The resulting `side` prop within the `Example` component will be "right".

The above example is a little contrived, but you can imagine a scenario where
you are creating a component that allows overriding default values:

```astro
<ElementCard element="Hydrogen" {...Astro.props} />
```

## Attributes: no merging

However, **Astro does not merge attributes on HTML elements**. So if you have
two identical attributes passed to an element, that is what goes to the DOM.
Browsers typically ignore any duplicate attributes, so the prevailing value is
the first from left-to-right:

```astro
<input type="text" type="number" />
<!-- type: "text" -->
```

The resulting `type` attribute for `input` element will be "text".

If you want to create a component that allows overriding default attribute
values, then you need to spread them on _the left-side of the element_:

```astro
<input {...Astro.props} type="text" />
```

This behavior might be the opposite of what you expect. For a counter example,
React merges both props and attributes. But whatever the reason for the
difference, it's important to remember.

## tl;dr

In Astro you should spread props to components on the right, and elements on the
left:

```astro
<Component default="value" {...Astro.props} />
<element {...Astro.props} default="value"></element>
```

[You can see this behavior in action live on StackBlitz](https://stackblitz.com/edit/withastro-astro-eryebq?file=src/pages/index.astro).

---

That's all. Hope it was helpful to you, and memorable for me!

Happy coding!
