---
title: "Simplify event delegation with the Element.closest method"
description:
  Event delegation is a useful pattern for managing descendant interactions and
  Element.closest helps with simple and robust code
tags:
  - Articles
  - JavaScript
date: 2024-06-11T21:31-0400
verse: Exodus 18:17-18
---

Let's say you have a list of buttons and want to perform an action when one is
selected. A solution is to add an event listener to each button with a reference
from querying or creating the button.

```js
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("Clicked:", button);
  });
});
```

For a small number of buttons, this is fine. But as the number of buttons grows
or if they are added and removed dynamically, then this solution grows
inefficient and fiddly[^1].

[^1]:
    You have more event listeners in memory and need to manage them all
    manually.

Another option is to delegate the event handling to a parent element. Since most
events bubble in JavaScript, an event that is fired on the `button` child will
trigger the listener callback for the parent.

Here's an example of a delegated event listener in a counter where a parent
contains buttons that increment by different amounts:

```js
let parent = document.querySelector("#increment-buttons");
parent.addEventListener("click", (e) => {
  count += parseInt(e.target.dataset.increment);
});
```

I like this pattern because it enables you to add buttons declaratively in HTML
instead of imperatively in JavaScript. That said, the code above is brittle. If
you add additional markup to the buttons, like an `svg` icon or a `span`, then
the `e.target` will refer to that element instead of the `button`.

To resolve this, we can
[use the `Element.closest` method](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
to walk up the DOM tree to find the nearest element that matches a selector.
`Element.closest` checks the element first before moving to the parent, so we
can use it in our event listener to find the button:

```js
let parent = document.querySelector("#increment-buttons");
parent.addEventListener("click", (e) => {
  let button = e.target.closest("button[data-increment]");
  if (button) {
    count += parseInt(button.dataset.increment);
    // Other rendering logic...
  }
});
```

Now we are free to add children elements to our buttons without breaking our
event listener.

Event delegation is a useful pattern to simplify situations like this where you
have many descendant elements that need similar event listeners. But if you
tried to route all of your events through a single parent like the `document`,
it would grow inefficient and unwieldy too[^2].

[^2]:
    You need to call `Element.closest` and add conditional logic for every event
    interaction.

Reach for the best tool for the job, and when you choose event delegation:
remember `Element.closest`.
