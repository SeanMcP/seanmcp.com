---
title: Reasons to use prop-types
description:
date: 2019-06-27
tags:
  - react
  - wip
layout: article
---

I work in an environment where we have dozens of developers across multiple locations and countries working on a few central applications. This requires a level of organization and coordination to ensure that the team is working collaboratively and efficiently.

One of the ways we can encourage efficient collaboration is by type checking in our React applications with the `prop-types` library.

Here are two reasons why you should be using `prop-types` in your React applications.

## Catch errors

The most immediate benefit to using prop-types is that you can catch and diagnose errors quickly while working on your application. If you instantiate a component and pass invalid props or forget to pass required props, the library will send you a console warning that details each mistake.

Let's say you have a `OrderedList` component that renders children based on an array of `items` passed as a prop. It might look like this:


```jsx
import React from 'react'

function OrderedList(props) {
  return (
    <ol>
      {props.items.map(item => (
        <Item key={item.meta.id}>{item.value}</Item>
      ))}
    </ol>
  )
}

export default OrderedList
```


Now what would happen if instantiated this component without passing it an array of items? React will throw an error:

```
TypeError

props.items is undefined
```

We could probably resolve the issue from that message, but what would happen if `OrderedList` was passed an array, but the items were strings, or numbers, or objects with different properties?

```
TypeError

item.meta is undefined
```

## Document components

When you are working on a larger code base with multiple users, it is easy to lose track of the available components. When you want to use a component that you didn't create or haven't look at in a while, it can be difficult to determine what props that component requires.

Take for example the this `LoginForm` component using [`Formik`](https://npmjs.com/package/formik). Try to quickly determine what props this component requires:


```jsx
const LoginForm = props => {
  const Heading = `h${props.headingLevel}`
  return (
    <div>
      <Heading>Login</Heading>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, actions) => {
          await props.login(values)
          actions.resetForm()
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <Input name="email" label="Email" />
            <Input name="password" label="Password" type="password" />
            <Button type="submit">Login</Button>
          </form>
        )}
      />
    </div>
  )
}
```


You could do it, but it is time consuming and can be a nightmare for larger class components. Now imagine we had the same component above with the following prop-types declared below:



```jsx
const LoginForm = props => {
  // ...
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired
}
```


Now at a glance we can determine that this component needs two props, `level` and `login`, and what their types and restrictions are. When I want to use `LoginForm`, I know I need to pass it a `headingLevel` (from 1-6) and a `login` function. Nice and easy.
