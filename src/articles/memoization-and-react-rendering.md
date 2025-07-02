---
title: Memoization and React rendering
description:
date: 2025-06-17T13:43-0400
tags:
  - Articles
  - React
  - Performance
flags:
verse:
prose: true
---

React is a library for rendering user interfaces. It is concerned with what to
render and when. React developers need to understand how React makes those
decisions when building applications.

When a component re-renders, all of its children re-render as well. State is the
source of truth. The UI updates to reflect the current state.

There are two concerns that we need to balance: stale state and performance. Out
of the box, React tries to resolve the former. Every state change triggers a
re-render of the component and all of its children. This ensures that the UI
always reflects the latest state.

Problems with this approach arise as your application grows. It's easy for a
page-level component to have a lot of state necessary to function. When any of
that state changes, the entire subtree re-renders.

```
Parent (count)
  ├── Child1
  ├── Child2
  └── Child3
```
