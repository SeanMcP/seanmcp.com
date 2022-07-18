---
title: Adding accessibility checks to your React app
description: A few tools to help you build more accessible React applications
date: 2019-03-04
update: 2019-03-09
tags: [react, a11y]
layout: article
---

**Updated - 3/9/19**^[This article was initially released with a reference to a third tool for React accessibility checking: `react-a11y`. Since publication, that library has been deprecated. The article has been updated to reflect that change.]

Whether you are working for a startup, non-profit, or Fortune 500 company, accessibility is a critical component of your product. Not only it is a legal requirement in many countries^[[Web accessibility: Web accessibility legislation](https://en.wikipedia.org/wiki/Web_accessibility#Web_accessibility_legislation) on Wikipedia], but creating accessible applications maximizes the number of potential users. And it often has a positive impact on all users ([read about the "Curb Cut Effect"](https://ssir.org/articles/entry/the_curb_cut_effect)).

As React developers, we have a responsibility to avoid hiding in the virtual DOM and work to ensure that the components we craft are going to work for everyone. Fortunately for us, React has [React has accessibility features built into the platform](https://reactjs.org/docs/accessibility.html) to make our jobs easier.

In this article, we're going to look at two additional tools than can help React developers create awesome and accessible applications for all.

## Setup

To demonstrate these features, I'm going to bootstrap a new project with React's [Create React App](https://facebook.github.io/create-react-app/). It's a great way to spin up a new project and works nicely with the accessibility checks we're going to implement.

If you're looking to add these checks to a current project, the only dependency is ESLint, which we'll look at later in this article. Now, let's jump in!

## React-axe

Create React App already has wonderfully helpful console messages, and react-axe is an out-of-the-box solution that adds accessibility checking to your console.

React-axe is developed by Deque, the makers of the fantastic accessibility tools like the [Axe browser extension](https://www.deque.com/axe/) (which I highly recommend). Install it in the usual way:

```
yarn add --dev react-axe
```

Once installed, we'll check for a development environment before requiring and calling react-axe's `axe` function and passing certain parameters.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(<App />, document.getElementById('root'))
```

The final parameter for `axe` is "a timing delay in milliseconds that will be observed between each component change and the time the analysis starts" ([source](https://github.com/dequelabs/react-axe/#initialize-the-module)). We'll set it to 1000ms, or one second.

Now if I give an element an invalid role (_e.g._ `role="Test"`), I'm met with the following console message:

```
▸ critical: ARIA roles used must conform to valid values
https://dequeuniversity.com/rules/axe/3.1/aria-roles?application=axeAPI
```

Expanding the message provides a reference to the original document, and a file and line reference to fix the issue. The console errors are helpful without being overwhelming and provide all the information and resources you need to fix the issue.

Console warnings are great, but let's add another tool to help catch mistakes before they make it to the browser.

## Jsx-a11y

Jsx-a11y is an ESLint plugin that looks over your code for some key accessibility considerations. If you don't have ESLint added to your project yet, follow their [get started guide](https://eslint.org/docs/user-guide/getting-started).

If you bootstrapped your React app with `create-react-app` like I did, it already has ESLint and some of jsx-a11y's accessibility checking included. For the sake of this article, we're going to add the full set of rules, so we'll need to install the plugin library:

```
yarn add --dev eslint-plugin-jsx-a11y
```

Then modify the ESLint configs in your `package.json` to match the following:

```json
{
  "eslintConfig": {
    "plugins": ["jsx-a11y"],
    "extends": ["react-app", "plugin:jsx-a11y/recommended"]
  }
}
```

Now if we make a change that reduces our app's accessibility, like removing the `alt` attribute for an `<img>`, we're met with the following lint warning:

```
./src/components/App/App.js
    Line 10:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
```

For more customization over which rules jsx-a11y uses, refer to [the official documentation](https://github.com/evcohen/eslint-plugin-jsx-a11y#eslint-plugin-jsx-a11y).

If you are using a text editor like VS Code that features in-line linting, you can identify and fix potential accessibility issues before you even save.

With these tools in place, you're well on your way to creating more accessible React applications!

## A11y-react-starter

I created [`a11y-react-starter`](https://github.com/seanmcp/a11y-react-starter), a lightly-configured create-react-app with both of the above accessibility tools baked in. Check it out for a reference or use it as a starting point for your next app.

## Conclusion

By enabling these accessibility features, you're adding the wisdom and knowledge of the many developers who have gone before you. With their help, and a little bit of learning, anyone can create accessible applications that work for all users.

Happy coding!