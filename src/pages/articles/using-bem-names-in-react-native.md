---
layout: "../../layouts/ArticleLayout.astro"
title: Using BEM names in React Native
description: A quick how-to without committing to whether it's a good idea or not
date: 2021-09-10
tags:
  - CSS
  - Mobile
  - React Native
verse: Exodus 17:15
# /img/<IMAGE>.min.jpg
image:
---

When writing CSS classes, I prefer BEM's naming system. The pattern is clear to read and names are easy to generate. I believe the unwieldy length of some names is offset by the benefits.

React Native doesn't use CSS but [JSON-based stylesheets that are applied directly to elements](https://reactnative.dev/docs/style). This system has some advantages, notably [co-locating concerns](https://kentcdodds.com/blog/colocation) within the component file.

But you still have to name things within you style objects, and I find myself reaching for BEM even when removed from CSS.

For a quick overview of BEM, [checkout the official documentation](http://getbem.com/introduction/). The page is pretty short and summarizes the system with images. Okay, 1... 2... 3... I'm going to assume you're familiar with BEM.

To be fair, this is perfectly valid JavaScript and works out of the box:

```js
const styles = StyleSheet.create({
    message: {},
    'message--warning': {},
    message__text: {},
})

<View style={[ styles.message, type === 'warning' && styles['message--warning'] ]}>
    <Text style={styles.message__text}>{text}</Text>
</View>
```

Here I'm following the pattern from BEM of naming blocks at the top level, using underscores for elements within a block, and hyphens for modifiers. And again, this works fine.

But I _really_ dislike using strings as properties for an object. They're annoying to create and even worse to reference. And when we use hyphens to create modifier names, we're stuck with `styles['message--warning']`. I just want to use BEM without the added discomfort of string keys. What are our alternatives?

Turns out, there aren't many options. The underscore is taken, and most special characters are not valid in object properties. Numbers are an option, but none of them seemed to fit. The only other option on my keyboard was, perhaps surprisingly, the dollar sign: `$`. (Side note: Are all currency symbols valid for object properties?)

jQuery and Svelte both use the `$` symbol for JavaScript, so why not here in React Native? If we swap double hyphens for double dollar signs in the previous snippet, we get:

```js
const styles = StyleSheet.create({
    message: {},
    message$$warning: {},
    message__text: {},
})

<View style={[ styles.message, type === 'warning' && styles.message$$warning ]}>
    <Text style={styles.message__text}>{text}</Text>
</View>
```

Not bad. And I'd much rather use a slightly foreign symbol in a familiar system than string properties.

What do you think: good idea or bad idea? Or should I just use styled components already? Or maybe something else entirely? [Let me know](#comment-link).

Until then, happy naming!
