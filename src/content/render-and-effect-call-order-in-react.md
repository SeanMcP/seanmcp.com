---
title: "Render and effect call order in React"
description: Renders are called top-down, but effects are called bottom-up.
tags:
  - Articles
  - React
date: 2024-05-17T20:43-0400
verse: Exodus 20:12
---

**Setup**: Let's say I have a React tree like this:

```jsx
function Parent() {
  console.log("Parent render");
  useEffect(() => {
    console.log("Parent effect");
  }, []);
  useLayoutEffect(() => {
    console.log("Parent layout effect");
  }, []);

  return <Child />;
}

function Child() {
  console.log("Child render");
  useEffect(() => {
    console.log("Child effect");
  }, []);
  useLayoutEffect(() => {
    console.log("Child layout effect");
  }, []);

  return null;
}

ReactDOM.createRoot(/* ... */).render(<Parent />);
```

What order would you expect the logs to fire in? If you were like me, you'd
probably have some mental model of how React works and be able to make an
educated guess. But I was wrong.

Then I asked this question to a handful of seasoned React developers, and they
all got it wrong.

Because the real answer is unexpected:

```
Parent render
Child render
Child layout effect
Parent layout effect
Child effect
Parent effect
```

**Try it yourself**:
[Here's a StackBlitz in case you don't believe me.](https://stackblitz.com/edit/vitejs-vite-7n9w8p?file=src%2Fmain.tsx)

**Attempting an explanation**: When rendering a tree, React calls the components
from the top of the tree downward. So because `Parent` is at the top of the
tree, its render log is called before `Child`. So far, so good.

Effects are a different story. React effectively queues effects from the bottom
of the tree upward, so `Child`'s effects are called before `Parent`'s. Plus
there is the additional layer that `useLayoutEffect` is called before
`useEffect` (which, to be fair, does make sense but is one more thing to think
about).

I ran into this issue at work when a child had code running on render that was
occurring before the parent's `useLayoutEffect` ran. There were several layers
of components between the two, and finding the cause was not fun.

**Takeaway**: I don't expect you or me or anyone else to remember this order.
But if you can remember that the order is unexpected, then that will put you on
the right path.
