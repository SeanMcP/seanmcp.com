---
title: How to create a render prop component
description: Render props are a popular technique in modern React, but they can be tricky. Here is a brief explanation and guide to creating your own.
pubDate: 2018-10-09
tags:
  - React
  - Patterns
verse: Psalm 116:12
---

It's been a year since Michael Jackson published "Use a Render Prop!", which encouraged using render props instead of higher order components (HOCs). Since then, "render props" has grown into a bigger and bigger buzzword in the React community.

If you are new to React or just new to the concept, the look of a render prop can be a little daunting. [Checkout this example from `react-spring`](https://www.react-spring.io/docs/props/spring)'s documentation:



```js
import { Spring } from 'react-spring'

<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
  {styles => <div style={styles}>i will fade in</div>} // <-- Here
</Spring>
```



If that makes perfect sense to you, awesome 🎉! Skip this article and get back to coding. If not, don't worry; I didn't get it at first either. Stick around, and I'll attempt to break down render props and show you how to make your own.

---

## Background

### What is a render prop?

At its core, render prop is "a simple technique for sharing code between React components using a prop whose value is a function."^[https://reactjs.org/docs/render-props.html] Instead of passing a string or object, you pass a function as a prop.



```js
<Name renderProp={() => "Passing a function as a prop!"} />
```



The code above won't accomplish much - the arrow function just returns a string - but it introduces a new paradigm. What if, within `Name` we pass some data to our `props.renderProp` function?



```js
const Name = (props) => {
  const name = "Sean";
  return props.renderProp(name);
};
```



When `Name` renders, it calls `props.renderProp` and passes some data; in this case, a string with my name.

We have designed our `Name` component with the sole purpose of storing the `name` data and passing it on to the `props.renderProps` function. The is the secret sauce that makes render props so powerful.

Going back to the implementation of `Name`, the function I pass to `renderProp` can look for this data as a parameter:



```js
<Name renderProp={(name) => `Hello, my name is ${name}!`} />
```



When `Nam`e is called, it creates variable `name` with the value 'Sean', then calls the `props.renderProp` function and passes `name`. Finally, it returns a string that reads `Hello, my name is Sean!`.

But we aren't just limited to strings; this is React! You can return JSX in your function to render new elements in the VirtualDOM:



```js
<Name renderProp={(name) => <span>Hello, my name is {name}!</span>} />
```



That's it! Render props provide us a method of passing props from a parent component to a child via function props. Using these same principles, we can create useful and reusable "logic" components to implement in any application.

_Note: I called our prop `renderProp`, but there is nothing special about that name; you can use whatever name you want. I'll give you my recommendation for passing function props later on._

### What does render props replace?

In most use cases, render props will replace HOCs. If we wanted to accomplish the above example with an HOC, we might use something like this:



```js
const withName = (Component) => <Component name="Sean" />;
```



Then our parent component would be passed to `withName`, usually during the export. Once that is done, we could access `props.name` and render our greeting:



```js
const App = (props) => <span>Hello, my name is {props.name}!</span>;

export default withName(App);
```



This works, and certainly has [its use cases](https://medium.com/r/?url=https%3A%2F%2Freact-redux.js.org%2Fdocs%2Fconnect-extracting-data-with-mapstatetoprops), but can introduce issues such as naming collisions. I recommend [Jackson's article for a more detailed dive into render props and HOCs](https://medium.com/r/?url=https%3A%2F%2Fcdb.reacttraining.com%2Fuse-a-render-prop-50de598f11ce).

## How To

_Note: Facebook provides an [introduction to render props in their React documentation](https://medium.com/r/?url=https%3A%2F%2Freactjs.org%2Fdocs%2Frender-props.html). It is a useful resource, but their example was contrived and therefore difficult to reapply to new scenarios. Here I will provide a tried-and-true example that I have utilized in multiple projects._

### Setting up our app

Let's imagine you're creating an application with drawer menu. Most of the time the menu is hidden, but when you hit a toggle button, the menu opens. Within the menu, you want to have an accordion that reveals additional links when open. In order to accomplish this, you might do something like this:



```js
export class App extends React.Component {
  state = {
    menuIsOpen: false,
  };

  render() {
    return (
      <div className="app">
        {this.state.menuIsOpen && <Menu toggle={this.toggle} />}
        <main>
          <button onClick={this.toggle} type="button">
            MENU
          </button>
        </main>
      </div>
    );
  }

  toggle = () => this.setState({ menuIsOpen: !this.state.menuIsOpen });
}
```



We made `App` a stateful component and keep track of a boolean for the menu. Additionally, we added a `toggle` method to open and close the menu.

Now we need to create Menu:



```js
export class Menu extends React.Component {
  state = {
    socialsIsOpen: false,
  };

  render() {
    return (
      <div className="menu">
        <button onClick={this.props.toggle} type="button">
          CLOSE
        </button>
        <h2>Menu</h2>
        <button onClick={this.toggle} type="button">
          SOCIALS {this.state.socialsIsOpen ? "▴" : "▾"}
        </button>
        {this.state.socialsIsOpen && <Socials />}
      </div>
    );
  }

  toggle = () => this.setState({ socialsIsOpen: !this.state.socialsIsOpen });
}
```



Look familiar? We **reused the state from `App`** (🚩 red flag no 1) so that we could keep track of whether or not to display our `Socials` component (just an unordered list of links). `Menu` needed to be toggled too, so we **copy and pasted the method from `App`** (🚩 red flag no. 2).

This works, but there are two main problems:

1. 👎 **Not DRY**: In order to achieve the same function in two different components, I needed to repeat myself by copying and pasting the state and toggle method.
2. 👎 **Not extensible**: Imagine I want to add another toggle feature to my app. What do I need to do? Copy and paste the necessary state and method again, which compounds my problem.

Fortunately, we can solve both of these problems easily with a simple render prop component.

### Creating a render prop

The purpose of our render prop component will be to manage an open and closed state. It will also need a method to toggle the state like the examples above. Then it will take the state and method and pass it as arguments to a prop.

My preference for render props is to use a Component's `children` prop. This allows us to utilize opening and closing tags - a familiar convention in React - and makes indentation a little more manageable.

Our render prop component looks like this:



```js
import React from "react";

export default class Open extends React.Component {
  state = { isOpen: false };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const renderProps = {
      isOpen: this.state.isOpen,
      toggle: this.toggle,
    };

    return typeof this.props.children === "function"
      ? this.props.children(renderProps)
      : this.props.children;
  }
}
```



Just like the previous examples, I am keeping track of an "open" state and toggling it with a method. Here I simplified the name of the boolean in the state to `isOpen` because our component doesn't care what is and is not open. The only thing `Open` cares about is whether or not `isOpen` is true or false.

> Render props components do not care about presentational logic. Their sole purpose is to keep track of simple bits of data and pass it on.

The `toggle` method is the same as previous examples.

Within the `render` method, I create a `renderProps` object with which I can pass on the current value of `isOpen` and my `toggle` method.

Finally I do a quick `typeof` check while returning. If `this.props.children` is a function, as I expect, then it will pass `renderProps` as an argument. If not, then it will fail softly by simply returning `this.props.children`.

You can optionally do some type-checking to ensure that `children` is a function, but I chose not to add an additional library here.

### Implementing our render prop

Now that we have abstracted the open/close logic to `Open`, we can clean up our App component:



```js
export const App = () => (
  <Open>
    {(openProps) => (
      <div className="app">
        {openProps.isOpen && <NewMenu toggle={openProps.toggle} />}
        <main>
          <button onClick={openProps.toggle} type="button">
            MENU
          </button>
          <Welcome />
        </main>
      </div>
    )}
  </Open>
);
```



We pass `Open` a child function that looks for our render props. Now I just need to switch out all references to `this.state.menuIsOpen` and `this.toggle` to refer to `openProps`.

Notice that `App` no longer needs a state; we can convert it to a functional component and let `Open` do all the work.

Next, let's do the same thing with `Menu`:



```js
export const Menu = (props) => (
  <Open>
    {(openProps) => (
      <div className="menu">
        <button onClick={props.toggle} type="button">
          CLOSE
        </button>
        <h2>Menu</h2>
        <button onClick={openProps.toggle} type="button">
          SOCIALS {openProps.isOpen ? "▴" : "▾"}
        </button>
        {openProps.isOpen && <Socials />}
      </div>
    )}
  </Open>
);
```



Likewise, we were able to simplify Menu by converting it to a functional component as well. This may not seem like a big deal now, but it will be increasingly important as an application scales.

> The fewer states and methods that you need to manage, the better.

You can see our render prop live, in all its glory, here on CodeSandbox:

<iframe
     src="https://codesandbox.io/embed/x5j1pl90o?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="How to create a render prop component"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

## Review

The render props technique is a great way to abstract reusable logic into specialized components. These components pass their logic/data/methods as arguments to functions passed as props.

Utilizing render props components solves the two problems above:

1. 👍 **DRY**: The only code repeated is `<Open>`. You'll never have to write another `toggle` method.
2. 👍 **Extensible**: Next time you want to add opening and closing to your app, all you need to add is `Open`.

Now that we've reviewed, let's take a look back at that original example from `react-spring`:



```js
import { Spring } from 'react-spring'

<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
  {styles => <div style={styles}>i will fade in</div>} // <-- Here
</Spring>
```



We can see that this `Spring` component is passed a `this.props.children` function. It then gives some data, in this case a style object, to that function as an argument. Finally, those `styles` are applied to the `div`.

Not bad, right? Now that you've mastered render props, make sure to check out this curated list of awesome render props. In the words of Captain Planet, "The power is yours!"

---

I hope this article helped; I know I learned a lot while writing it. Let me know if you have any [questions about or problems](#comment-link).

Happy coding!
