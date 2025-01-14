---
title: See what object properties are accessed in JavaScript
description:
  JavaScript's Proxy object can be used to watch an object and respond whenever
  any of its properties are accessed or reassigned
tags:
- JavaScript
date: 2023-09-28T06:30-0400
verse: 2 Corinthians 5:21
image: /img/see-what-object-properties-are-accessed.png
---

![A magnifying glass that is inspecting a JavaScript object](/img/see-what-object-properties-are-accessed.png)

At work I was mocking an object to be passed to a React context provider. I knew
the type for the object, but I wanted to learn what properties were being
accessed on the object from this point in the component tree.

Thankfully, JavaScript has a native way to "watch" an object and respond
whenever any of its properties are accessed or reassigned:
[a Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

First start with the object that you want to watch:

```js
const user = {
  name: "",
  email: "",
  username: "",
  createdAt: "",
};
```

Then pass your object to the `Proxy` constructor along with a handler object
that determines what you want to do you when a property is get or set:

```js
const userProxy = new Proxy(user, {
  get(target, property) {
    console.log(`Getting ${property} on ${target}`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting ${property} on ${target} to ${value}`);
    target[property] = value;
    return true;
  },
});
```

Now you can use `userProxy` as if it were the original `user` object. I passed
the proxy into the context provider and then watched then checked the console to
see what properties for that object were accessed.

Nice and easy! Let me know if you have any other use cases for a proxy in
JavaScript.
