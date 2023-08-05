---
title: Filter out premium Medium articles
description: Using a console script to alter the content on a webpage
pubDate: 2019-04-08T12:00-0400
tags:
  - Console Scripting
  - Dev Tools
  - JavaScript
---

Medium has received a lot of flack recently for their push to monetize the platform. And while I don't fault them for moving some of their best articles behind a pay wall, I have no interest in subscribing to their platform.

There is still a lot of high-quality free content on Medium, but you have to navigate around all of the premium content that the platform is pushing.

I wanted to write a console script that would do that filtering work for me.

## Reach for the stars

On Medium, premium articles can be identified on the homepage by their ★ icon. Using the inspector, you can see that the star is an `svg` element nested in a `span` with the class `svgIcon--star`. Bingo!

Now, using the handy `querySelectorAll`-esque selector `$$`, we can find all the stars on the page. Our console script starts out like this:

```js
$$('span.svgIcon--star')
```

Now that we've selected all stars, we need to iterate over them. Since we need to do something for every item in our iterable, we'll use `forEach`:

<!-- ```js/0,2 -->
```js
$$('span.svgIcon--star').forEach(star => {
  // Hide parent element
})
```

Now that we're iterating over the stars, we need to find and hide the appropriate parent element. To do this, we'll use a neat `Element` method called `closest`.

## Finding a parent with `closest`

You may be familiar with the `querySelector` method, which starts with a given element and then searches down the DOM tree and returns the first match.

`closest` works the same way, but in reverse. It starts with an element, then travels **up** the DOM tree. This makes it the perfect method for starting with an element and looking for a specific parent.

Using the inspector again, we can see that articles outside the featured section are `div`s with the class `streamItem`. Using `closest`, we'll grab those elements:

<!-- ```js/1 -->
```js
$$('span.svgIcon--star').forEach(star => {
  star.closest('.streamItem') // Hide element
})
```

I had never used the `closest` method before and was glad to find it. As always, [I read up about it on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) before using it.

We've selected the correct parent element; now we need to hide it.

## Hiding an element

Removing an element in JavaScript is more difficult than it should be. There is no `remove` method on the global `Element`. Instead, you need to jump up to the parent element and then use `removeChild`. The normal strategy looks like this:

```js
const element = document.querySelector('.remove-me')

element.parentElement.removeChild(element)
```

I think this pattern is annoying and try to avoid it whenever possible. But we could use it in our instance by first creating a variable to reference the element to be removed:

<!-- ```js/2,3 -->
```js
// Option 1 - Remove element
$$('span.svgIcon--star').forEach(star => {
  const article = star.closest('.streamItem')
  article.parentElement.removeChild(article)
})
```

This is your best option if you need to remove the element from the DOM.

My preferred method leaves the element in the DOM and applies CSS styles to hide it from view. We'll set the article element's `display` style to `'none'`:

<!-- ```js/2 -->
```js
// Option 2 - Hide element
$$('span.svgIcon--star').forEach(star => {
  star.closest('.streamItem').style.display = 'none'
})
```

Unless you **need** to remove and element from the DOM, the simpler solution is to just hide the element.

## Save for later

Chrome has a handy feature in the "Sources" tab called snippets. Here you can save bits of code for use later.

I created a snippet title "Medium" and saved the above code. Now when I want to filter out premium articles, I just need to run that snippet with <kbd>command</kbd> + <kbd>enter</kbd>.

## Read on

Now the next time I want to find an article to read on Medium, I can run the snippet and filter out premium articles.

For a more reusable solution, we could turn this snippet into a browser extension, but that's the topic of another article.
