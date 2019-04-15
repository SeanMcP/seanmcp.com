---
title: Convert class components to functions with React Hooks
description: A step by step guide to converting old components to modern React
date: 2019-02-06
tags: [react]
layout: article
---

Last year, the React team announced hooks, a feature to more easily abstract logic into reusable components. On the day of the announcement, [I wrote and article](https://medium.com/@seanmcp/refactoring-a-render-prop-with-hooks-fc22ed537199) explaining how to refactor a render prop component with hook.

Starting this week with release of [React v16.8](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html), **you can now add hooks in your projects**!

Today, I want to look at a typical class component and demonstrate how you can covert it into a functional component with React hooks. Let's jump in.

## Terminology

_**Note**: Skip this section if you're familiar with class and functional React components._

I'm going to use the terms "class" and "functional" components to refer to the modern options for creating components. A class component looks something like this:

```js
class ClassExample extends React.Component {
  state = { greeting: 'Hello' }
  render() {
    return (
      <span>
        {this.state.greeting}, {this.props.name}!
      </span>
    )
  }
}
```

Class components have access to internal state; default, custom, and lifecycle methods; and a `this` to reference. These components have been the powerhouses of React development throughout its history.

The aptly named functional components are functions that return JSX. Here's a typical example:

```js
const FunctionalExample = props => {
  const greeting = 'Howdy'
  return (
    <span>
      {greeting}, {props.name}!
    </span>
  )
}
```

Functional components lack an internal state, methods, and `this`. In order to access passed props, we refer to the `props` parameter.

Because they contain less internal logic, functional components are sometimes referred to as "dumb" or "presentational" components.

Although different in composition, class and functional components are used in the same manner. Let's reference both examples from above in a hypothetical parent component:

```js
return (
  <section>
    <ClassExample name="Sean" />
    <FunctionalExample name="partner" />
  </section>
)
```

From the parent's perspective, the two types of components are identical. To understand how React internally understands and processes these two different types of components, I recommend Dan Abramov's ["How Does React Tell a Class from a Function?"](https://overreacted.io/how-does-react-tell-a-class-from-a-function/).

These are simplified definitions and examples, but they will provide us with a good basis for the rest of the article.

## Class component

I have a component that makes an API request on mount, stores the response in state, then renders some JSX based on the data. Here's the code:

```js
class ClassComponent extends React.Component {
  state = {
    url: null
  }
  componentDidMount() {
    fetch('https://random.dog/woof.json')
      .then(raw => raw.json())
      .then(res => this.setState(res))
  }
  render() {
    return (
      <section>
        <h2>Doggo!</h2>
        {this.state.url ? (
          <img src={this.state.url} alt="A cute dog" />
        ) : (
          <p>Fetching</p>
        )}
      </section>
    )
  }
}
```

_**Note**: To create this example, I looked through Todd Motto's awesome list of ["Public APIs"](https://github.com/toddmotto/public-apis). Check it out and give it a star if you find it useful._

I used the fetch library to keep the example straight forward (and it seemed fitting for an app that displays dog photos), but I recommend using a more robust option like [Axios](https://github.com/axios/axios) with better error handling for your applications.

## Functional Component

Using React Hooks, we can create the same example from above using a functional component.

### Setup

First, we'll create a new file for our functional code and set up a basic function. Then copy the `return` from our class component and remove all references to `this.state`. We need to declare a variable to prevent reference errors, so let's call it `url`.

```js/2,4-7
const FunctionalComponent = props => {
  const url // We'll change this later
  return (
    <section>
      <h2>Doggo!</h2>
      {url ? <img src={url} alt="A cute dog" /> : <p>Fetching</p>}
    </section>
  )
}
```

### useEffect

In our class component, we make an AJAX request when the component mounted and stored that data in state. `componentDidMount` and the other lifecycle methods are limited to classes. However, the React team was able to implement those features with the `useEffect` hook.

`useEffect` is a method that takes two parameters: 1) a function to call on mount, and 2) an array of variables to watch for updating.

For the first parameter, we'll pass an anonymous function that calls fetch, processes the data, and logs the response. The second argument just be an empty array for now.

```js/3-7
const FunctionalComponent = props => {
  const url
  React.useEffect(() => {
    fetch('https://random.dog/woof.json')
      .then(raw => raw.json())
      .then(res => console.log(res))
  }, [])
  return (
    <section>
      <h2>Doggo!</h2>
      {url ? <img src={url} alt="A cute dog" /> : <p>Fetching</p>}
    </section>
  )
}
```

If you are coding along, you should see something like the following in your console when the component mounts:

```
{ "url": "https://random.dog/867580b3d005.jpg" }
```

This shows us that our API call is working, but logging the response isn't our goal; we need to store the data for later. Let's revisit the `url` variable that we created.

### useState

Now that we have the response from our API, we need to be able to capture and reference that value. In our class component, we used its state and the `setState` method to remember that data.

React's `useState` hook gives us access to a similar API without using a class. When calling the function and optionally passing a default value, we receive two returned variables: 1) a reference to the value, and 2) a function to update that value, respectively.

Using array destructuring, we can grab those variables and assign a name according to the convention: `x` and `setX`. For our example, we'll call the value `url` and the setter function `setUrl`.

We'll replace our old `url` with the results from `useState`:

```js/2
const FunctionalComponent = props => {
  const [url, setUrl] = React.useState(null)
  React.useEffect(() => {
    fetch('https://random.dog/woof.json')
      .then(raw => raw.json())
      .then(res => console.log(res))
  }, [])
  return (
    <section>
      <h2>Doggo!</h2>
      {url ? <img src={url} alt="A cute dog" /> : <p>Fetching</p>}
    </section>
  )
}
```

Using `useState`, we can quickly add basic state to our functional component.

In the code above, we're just logging the response from our API. Now we want to use the `setUrl` function to set the value or url in our component's state.

```js/6
const FunctionalComponent = props => {
  const [url, setUrl] = React.useState(null)
  React.useEffect(() => {
    fetch('https://random.dog/woof.json')
      .then(raw => raw.json())
      .then(res => setUrl(res.url))
  }, [])
  return (
    <section>
      <h2>Doggo!</h2>
      {url ? <img src={url} alt="A cute dog" /> : <p>Fetching</p>}
    </section>
  )
}
```

Now let's take a second to revisit the second parameter passed to `useEffect`. Remember, it contains a list of variables that will trigger the effect to run again on change.

Our effect depends on one outside variable: `setUrl`. This function is generated once by `useState`, and adding it to the array will ensure that our fetch call isn't fired repeatedly.[^1]

```js/7
const FunctionalComponent = props => {
  const [url, setUrl] = React.useState(null)
  React.useEffect(() => {
    fetch('https://random.dog/woof.json')
      .then(raw => raw.json())
      .then(res => setUrl(res.url))
  }, [setUrl])
  return (
    <section>
      <h2>Doggo!</h2>
      {url ? <img src={url} alt="A cute dog" /> : <p>Fetching</p>}
    </section>
  )
}
```

That's it! Checkout the [live example](https://codesandbox.io/s/wwvmq1v407) on CodeSandbox to see the two components side-by-side.

## Comparison

Let's take a moment and consider our two components. The new functional component is a little shorter than the original class component, and the variables are shorter and easier to reference.

Those are nice benefits, but I don't find either a convincing reason to go back and convert all my class components.

More important to me is the fact that **you can now use a functional component for nearly everything in your application**. Since every component is functional, it makes the process of bringing in or removing state and lifecycle effects much easier.

## Embrace the class-less future

For those reasons and others, the future of React is class-less. And that's a good thing. Hooks provide more flexibility when creating and managing components, to say nothing of [custom hooks](https://reactjs.org/docs/hooks-custom.html).

But don't panic and convert all your class components right now; ["they'll be supported for a looooong time"](https://twitter.com/dan_abramov/status/1026839679197437953). However, when you have the opportunity to refactor a class component going forward, consider converting it into a functional component with hooks.

Happy coding!

[^1]: A big thanks to [Hung Tran Van](https://medium.com/@hungtrn75) on Medium for [highlighting a previous issue with this article](https://medium.com/@hungtrn75/an-infinite-loop-when-u-set-url-state-in-useeffect-efc4426ef4ce). While fixing my mistake, I found [_How the useEffect Hook Works_](https://daveceddia.com/useeffect-hook-examples/) by David Ceddia to be super helpful.
