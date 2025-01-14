---
title: "Use state callbacks in React"
description:
  When you need to reference the previous state, pass a callback function to
  React's setState.
tags:
- React
date: 2024-06-27T21:17-0400
verse: Lamentations 3:22-23
---

When you want to update state in React, you have two options: pass the next
value, or pass a callback function that returns the next value.

```js
const [state, setState] = useState(0);

// Next value
const reset = () => setState(0);
// Callback function
const increment = () => setState((prev) => prev + 1);
```

To choose correctly, you need to ask if the next state depends on the previous.
If so, choose the callback function. Otherwise, you can pass the next value.

The reason for this is that React does not update state until the next render.
So if you have multiple references to `state` in the callstack, all but the
first will be stale. Here's a contrived example:

```js
// ⚠ Buggy code
function loginSuccess(username) {
  setState({ ...state, username });
  // ...
  setState({ ...state, showLoginModal: false });
}
```

When the `loginSuccess` function is called, it first sets the `username`
property while referencing the current `state`. No issues so fare.

But although `setState` has executed, `state` will not change until the next
render. So when the second `setState` is called, it references the stale `state`
value which does not include the updated `username`.

The final `state` is _not_ what we want:

```js
{
    username: undefined, // We wanted this to be updated
    showLoginModal: false
}
```

You can try to avoid this by avoiding multiple `setState` calls in the same
stack. But as your application grows, you will inevitably run into this issue.
And in my experience it's not an easy bug to track down.

The better solution is to **use the callback function every time you need to
reference the previous state**:

```js
// ❌ setState(count + 1)
setState((count) => count + 1);

// ❌ setState(items.filter((item) => item.id !== id))
setState((items) => items.filter((item) => item.id !== id));

// ❌ setState(!isEnabled)
setState((isEnabled) => !isEnabled);

// ❌ setState({ ...user, username: "seanmcp" })
setState((user) => ({ ...user, username: "seanmcp" }));
```

This will ensure that every `setState` call references the latest state,
regardless of where it is in the callstack.
