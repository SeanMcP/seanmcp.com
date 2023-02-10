---
title: Storing data in state vs. class variable
description: Why do we store data in state as opposed to on the class?
pubDate: 2019-04-12
tags:
  - React
---

This past week I was working with a new coworker who has previous experience developing but is new to React. After picking up a few syntax cues, he started writing class components in what was a familiar manner for him: storing information as class variables in the constructor.

The constructor from one of his components looked like this:

```js
constructor(props) {
  super(props)

  this.value = 'default'
}
```

Later on, when he wanted to update the value stored on the object, he did with a simple reassignment:

```js
this.value = "new value";
```

After reviewing his code, I tried to explain the "correct" pattern for storing data in React. I said (something like):

> I see that you're using class variables to store information on your React component. That's not a common pattern. Instead, we use a state object that is referenced with `this.state.whatever`. When we want to update the data, we call `this.setState` and pass the new information.

He naturally asked why that was the case, because his code was working as is. I went into a mealy-mouthed explanation with gem quotes like "classes in React aren't _true_ classes", and "state isn't _actually_ stored in the component". None of what I stumbled through answered his original question.

Realizing that I was talking out of ignorance, I stopped and offered a more honest: "Actually, I don't really know." Then I turned to Google to find the answer.

## Class variables

I thought that storing class variables was almost always a bad idea. The only use cases that I had personally encountered before were:

- Setting and clearing timeouts
- Storing frequently-referenced values

However, my colleague's work showed that class variables can be used to manage and update data.

Here's an example of using class variables to create a counter:

```js
class VariableCounter extends React.Component {
  count = 0;

  render() {
    return (
      <div>
        <p>The count is: {this.count}</p>
        <button onClick={this.increment}>Add one</button
      </div>
    );
  }

  increment = () => {
    this.count = this.count + 1;
  };
}
```

When the component is initiated, a class variable named `count` is set to `0`. When the `increment` method is called, it updates `count` by adding one to the previous value. The rest of the component is pretty standard.

After writing up this simple example, I thought this code would work. But I was wrong. You can click the button as much as you want, but the `count` value displayed in the component will never change.

If you throw a breakpoint or add a `console.log` to `increment()`, you'd see that the method is indeed called and the value of `this.count` is incremented, but the component never reflects the change.

**That's because React components will only re-render when there are changes to `props` or `state`.**

Updating the class variable involves neither, so it does not trigger a re-render. This explains why the `count` changes in our example, but the displayed value never updates.

In order to use class variables, we need to take the responsibility of triggering the re-render when our data changes. To do that, we need to add a line to our example:

<!-- ```js/14 -->
```js
class VariableCounter extends React.Component {
  count = 0;

  render() {
    return (
      <div>
        <p>The count is: {this.count}</p>
        <button onClick={this.increment}>Add one</button
      </div>
    );
  }

  increment = () => {
    this.count = this.count + 1;
    this.forceUpdate();
  };
}
```

React class components have a `forceUpdate` method that triggers the `render` method. By calling `this.forceUpdate()` after incrementing our class value, we can get our displayed value to update.

I had never heard of this method before, and there is a reason why: the React team doesn't recommend using it. Here's a line from [the React documentation on `forceUpdate`](https://reactjs.org/docs/react-component.html#forceupdate):

> Normally you should try to avoid all uses of `forceUpdate()` and only read from `this.props` and `this.state` in `render()`.

In some instances you may receive data from other sources, but otherwise **try to avoid manually managing a component's render**.

The alternative to using class variables and forcing updates is leveraging React's component state.

## Component State

Instead of setting our count as a class variable, let's instead create a state object on our class and store the data there.

We only need to make a few modifications to the `VariableCounter` for our new component:

<!-- ```js/1-3,8,15-17 -->
```js
class StateCounter extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <p>The count is: {this.state.count}</p>
        <button onClick={this.increment}>Add one</button
      </div>
    );
  }

  increment = () => {
    this.setState(
      prevState => ({ count: prevState.count + 1 })
    )
  };
}
```

While instantiating a state object might look like the previous example using a class variable, `state` is a protected keyword in React that refers to stored component data.

You can access data from state with normal object dot or bracket notation, so the current count can be referenced with `this.state.count`.

The major difference between using class variables and state is updating data. Instead of manually reassigning the variable, you call `this.setState()` and pass it an object or a function that returns an object.

When you call `this.setState()`, React merges the passed object into the current state to create a new state object. Then it compares this new state to the previous state. If there is a change, React re-renders the component, resulting in the updated `count` value displayed on the screen.

**By using `this.setState()`, you let React handle the logic of whether to re-render the component.** This is a feature of React and one of the reasons it has become so popular.

## Example

I created a CodeSandbox example of the components discussed above. There are working state and class variable counters; with a bonus functional component using `React.useState()`, and a broken class variable counter without `this.forceUpdate()`. Check it out:

<iframe src="https://codesandbox.io/embed/n40x05xy8l?fontsize=14" title="React State vs. Class Variables" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Summary

Contrary to what I initially thought, it's okay to store component data as a class variable. However, if you're going to render that data, you should instead store it in state so that any changes trigger a re-render. **Ninety-five percent of the time, you'll store data in state.**

Now that you know the difference between storing data in state and class variables, you can be more helpful than I was to your fellow developers.

Happy coding!
