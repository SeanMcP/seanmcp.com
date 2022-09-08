---
title: Get innerHTML of Enzyme wrapper
description: Writing a little helper function to grab the HTML of all children of a shallow wrapper in Enzyme
date: 2021-07-12
tags:
    - enzyme
    - javascript
    - testing
verse: 1 Samuel 16:7
# /img/<IMAGE>.min.jpg
image:
---

In Enzyme, wrapper's have a handle `.html()` method that will return the `outerHTML` for that element in the tree. It's handy in the rare instance when the markup that your code outputs needs to be precise. You can [read more about in the documentation](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/html.html).

However, there isn't a method that returns the `innerHTML`. A use case I came across for this was caring about the children of an element, but not caring about the element itself. I didn't want this test to fail if I needed to add an attribute to the parent element, only if the children changed.

So I wrote this little helper function to grab the `innerHTML` of a shallow wrapper in Enzyme:

```js
function getInnerHTML(node) {
    return node.children().reduce((string, node) => {
        // A text node's html method doesn't return
        // anything, so we use text instead.
        return string + node.html() || node.text()
    }, '')
}
```

There might be other strategies using some of Enzyme's built-in methods like `.reduce()` or `.forEach()`, so let me know if you come up with a better alternative.

Happy testing!
