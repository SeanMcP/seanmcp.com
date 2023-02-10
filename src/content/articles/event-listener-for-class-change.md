---
title: Add event listener for class change
description: How to create a custom event listener for class names using the MutationObserver API
pubDate: 2019-05-10
tags:
    - JavaScript
---

If you're like me and spent some time searching for an event listener for class changes, let me save you some time: **there isn't one**.

However, you can create your own custom event listener using the [`MutationObserver` API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). Let's look at how to create a simple listener for class changes.

`MutationObserver` is a constructor that can allows you to watch any changes to the DOM tree. The constructor takes a callback function that will receive two arguments: a list of [MutationRecords](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord), and a reference to the observer.

First, let's first create a callback that logs its parameters and then construct a new `MutationObserver`:

```js
function callback(mutationsList, observer) {
    console.log('Mutations:', mutationsList)
    console.log('Observer:', observer)
}

const mutationObserver = new MutationObserver(callback)
```

We've constructed basic custom observer, but we need to listen for changes on something. To add our custom event listener, we need to call the created observer's [`observe()` method](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe).

`MutationObserver.observe()` takes two arguments: the DOM node target, and an optional options object. We'll call this method and pass it a node reference and one option:

```js
mutationObserver.observe(
    document.getElementById('main'),
    { attributes: true }
)
```

This set our `MutationObserver` to look for any changes to the `main`'s attributes. If we trigger a change, we can see the two logs from `callback()`:

```
Mutations:
[MutationRecord]

Observer:
MutationObserver
```

On each `MutationRecord` object, there is an `attributeName` property. If that value is equal to 'class', then we know that there has been a change to the element's class name.

Now we can update the `callback` function by adding a condition:

<!-- ```js/0-5 -->
```js
function callback(mutationsList) {
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            alert('Ch-ch-ch-changes!')
        }
    })
}
```

This code will fire an alert if any item in `mutationsList` records a change to `main`'s class attribute.

If you need to stop your custom event listener later, use `MutationObserver`'s `disconnect()` method to remove it like you would a normal event listener:

```js
mutationObserver.disconnect()
```

## Example

Checkout a working example of custom event listener for class change on CodePen:

<iframe height="500" style="width: 100%;" scrolling="no" title="Event listener for class change" src="//codepen.io/SeanMcP/embed/preview/RmWJvV/?height=500&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/SeanMcP/pen/RmWJvV/'>Event listener for class change</a> by Sean McPherson
  (<a href='https://codepen.io/SeanMcP'>@SeanMcP</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Happy coding!