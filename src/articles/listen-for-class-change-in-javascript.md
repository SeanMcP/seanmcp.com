---
title: Listen for class change in JavaScript
description:
  There isn’t an event for class list changes, but you can write a function that
  listens for class changes on an element with the MutationObserver API
tags:
- JavaScript
date: 2023-03-09T07:00-0400
foot:
  <script async
  src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
---

There isn’t an event for class list changes, but you can write a function that
listens for class changes on an element with the
[MutationObserver API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

**Copy & paste**:

```jsx
function onClassChange(node, callback) {
  let lastClassString = node.classList.toString();

  const mutationObserver = new MutationObserver((mutationList) => {
    for (const item of mutationList) {
      if (item.attributeName === "class") {
        const classString = node.classList.toString();
        if (classString !== lastClassString) {
          callback(mutationObserver);
          lastClassString = classString;
          break;
        }
      }
    }
  });

  mutationObserver.observe(node, { attributes: true });

  return mutationObserver;
}
```

**Step by step**:

1. The function accepts two parameters: a reference to a DOM node to watch and
   the callback to execute when the class has changed.
2. Within the function, we store a reference to the class list as a string that
   we will use for comparison later.
3. Create a new `MutationObserver` instance with a callback that listens for
   class changes.
   1. Inside that callback, we loop through the mutation list and look for any
      changes to the `class` attribute.
   2. If we find one, then we compare the current class list as a string to the
      reference declared above.
    - This comparison is necessary to prevent false class change positives,
        _e.g_ adding the same class twice.
   3. If the class strings do not match, invoke the callback and update the
      class string reference.
   4. Break out of the loop if we have detected a change.
4. Observe the passed node with the new mutation observer instance and configure
   it to fire on attribute changes.
5. Return the mutation observer for later clean up

**Try it out:**

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="VwGzxQb" data-user="SeanMcP" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/SeanMcP/pen/VwGzxQb">
  Function to listen for class change</a> by Sean McPherson (<a href="https://codepen.io/SeanMcP">@SeanMcP</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

**Takeaway:** It would be nice if there was a standard method for listening to
class changes, but it is nice to know that you can write your own with a
`MutationObserver`.

**Read more:**

- [https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
- [https://www.seanmcp.com/articles/event-listener-for-class-change/](https://www.seanmcp.com/articles/event-listener-for-class-change/)
