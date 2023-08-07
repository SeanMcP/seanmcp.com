---
title: When to use React's memo HOC
description: The memo higher-order component can prevent your component for re-rendering unnecessarily, but you should use caution before using it
pubDate: 2022-04-28T12:00-0400
tags:
  - React
  - Performance
---

When React wants to render a component, it renders all of the components in the tree from that point. So if you have a parent component with two child components, a re-render (↻) of the parent will include re-rendering both children.

```
Parent ↻
├── ChildA ↻
└── ChildB ↻
```

Since data typically flows down the tree, this is the behavior that you probably want for the UI to reflect the current state of the application.

However, there may be instances when you do not want a component to re-render when its ancestor re-renders. Let's imagine a similar scenario with two children. One of the components is presentational while the other has a deep tree of its own.

```
Parent
├── BasicChild
└── ComplexChild
    ├── GrandChildA
    └── GrandChildB
        └── GreatGrandChild
```

Just like before, any changes (✴) to the parent will result in re-rendering all if its children – including the complex subtree. Depending on the depth of the tree or the complexity of the render, this could be a time-consuming render cycle.

```
Parent ✴↻
├── BasicChild ↻
└── ComplexChild ↻
    ├── GrandChildA ↻
    └── GrandChildB ↻
        └── GreatGrandChild ↻
```

We want to prevent `ComplexChild` from re-rendering unnecessarily to improve the performance of our application.

Thankfully, React has some features to accomplish this.

## Class components

Class components have [a `shouldComponentUpdate` lifecycle method](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) that allow you to determine whether a component should re-render based on props and state.

```js
class PreventRerender extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value;
  }
}
```

[`PureComponent` goes one step further](https://reactjs.org/docs/react-api.html#reactpurecomponent) by implementing `shouldComponentUpdate` with a shallow prop and state comparison. When you component extends `PureComponent`, it will only re-render if its props or state have changed.

```js
class PreventRerender extends React.PureComponent {}
```

## Function components

For modern function components with no lifecycle methods, we need a different solution. [React exports a `memo` higher-order component](https://reactjs.org/docs/react-api.html#reactmemo) (HOC) that takes a function component and returns a wrapped component that will only re-render if a shallow comparison of props indicates a change.

```js
const PreventRerender = React.memo(function PreventRerender(props) {});
```

For more customization, you can pass an optional compare function to `React.memo` as a second argument that determines whether to render based on previous and next props.

Any of the strategies above to prevent unnecessary re-renders come at a small cost, so make sure to implement them only when necessary. You can use the React DevTools' Profiler panel to determine which areas of the React tree are good candidates for performance improvements.

In our example above, we could wrap our complex component with `React.memo` in order to prevent re-rendering when the props are unchanged:

```js
export default React.memo(ComplexChild);
```

We would not need to do anything to the basic child component, as any memoization or lifecycle checks would probably be more expensive than the cost of re-rendering.

With that change in place, a change within the parent component would only result in re-renders for `Parent` and `BasicChild` – the expensive tree in `ComplexChild` would not change.

```
Parent ✴↻
├── BasicChild ↻
└── ComplexChild
    ├── GrandChildA
    └── GrandChildB
        └── GreatGrandChild
```

I hope that helps explain when and how to use React's `memo` HOC.

Happy memoizing!
