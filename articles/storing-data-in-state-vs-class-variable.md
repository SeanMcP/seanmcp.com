---
title: Storing data in state vs. class variable
description:
date: 2019-04-12
tags:
  - react
layout: article
---

Outline:

- Intro
- Variables
- State
- Example

This past week I was working with a coworker who has previous experience but is new to React. After picking up a few syntax cues, he started writing class components in a familiar way to him: storing information as class variables in the constructor.

The constructor from one of his components looked like this:

```js
constructor(props) {
  super(props)

  props.value
    ? (this.value = props.value)
    : (this.value = 'default')
}
```

Later on, when he wanted to update the value stored on the object, he did with a simple reassignment:

```js
this.value = 'new value'
```

After reviewing his code, I tried to explain the "correct" pattern for storing data in React. I said (something like):

> I see that you're using class variables to store information on your React component. That's not a common pattern. Instead, we use a state object that is referenced with `this.state.whatever`. When we want to update the data, we call `this.setState` and pass the new information.

He naturally asked why that was the case, because his code was working as is. I went into a mealy-mouthed explanation with gem quotes like "classes in React aren't _true_ classes", and "state isn't _actually_ stored in the component". None of what I stumbled through answered his original question.

Realizing what I was doing mid explanation, I stopped and offered a more honest: "Actually, I don't really know." Then I turned to Google to find the answer.

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

```js/14
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