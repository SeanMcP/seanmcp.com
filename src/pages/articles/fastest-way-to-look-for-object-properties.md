---
layout: "@layouts/ArticleLayout.astro"
title: The fastest way to look for object properties
description: 
pubDate: 2019-12-31
tags:
    - JavaScript
    - WIP
---

I manage a library called `onkey-event-manager` that helps users map functions to keyboard actions. Part of the library is a validation step that looks for properties on an object.

To make this step as performant as possible, I wanted to know what the fastest method for checking an object for a given property.

## Contenders

### `Object.hasOwnProperty()`

This is the built-in method for checking an object for properties. The only question is whether this method is more performant than other options.

```js
const obj = {};

console.log(
    obj.hasOwnProperty('test');
    ? 'exists'
    : 'does not'
)
// -> 'does not'
```

### `Object[]`

By referencing the property on the object directly, you can let JavaScript's type coercion to force a boolean.

```js
const obj = {};

console.log(
    obj.test
    ? 'exists'
    : 'does not'
)
// -> 'does not'
```

**Note**: This method for checking a property will fail if the value at the given property is false/falsey (_e.g._ `const obj = { test: false }`). Since I can guarantee that case won't happen, I can still use it.