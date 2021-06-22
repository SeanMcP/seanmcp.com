---
title: Count class methods in JavaScript
description: Although JS treats them like object, finding the methods of a class programmatically is trickier than I thought.
date: 2021-06-21
tags:
  - javascript
verse: Psalm 147:4-5
# /img/<IMAGE>.min.jpg
image:
---

If you have a class in JavaScript and want to know the number of methods it contains, there are a few steps that you need to follow.

Let's say we have a class like the following:

```js
class Pet {
  constructor(name) {
    this.name = name;
  }

  call() {
    console.log(this.name + ' comes running');
  }
}
```

We don't have handy tools like `Object.keys()` for classes, so to count the number of methods in our `Pet` class, we need to first create an instance:

```js
const abby = new Pet('Abby')
```

Now we can pass our instance to two `Object` methods that will grab the methods for us:

```js
Object.getOwnPropertyNames(
  Object.getPrototypeOf(abby)
)
```

This returns an array of property names for the prototype of `abby`, which is the following:

```js
['constructor', 'call']
```

If you're dealing with a simple class like the example above, you can add a `.length` to the end of the returned array and be done.

However, if you are dealing with subclasses, you may want to go a little deeper.

Let's update the example so that the class who's methods you want to count extends another:

```js
class Pet {
  constructor(name) {
    this.name = name;
  }

  call() {
    console.log(this.name + ' comes running');
  }
}

class Dog extends Pet {
  pet() {
    console.log(`${this.name} wags its tail`)
  }
}
```

Now if we try the following code with `abby` the `Dog`, we get a different answer:

```js
const abby = new Dog('Abby')
Object.getOwnPropertyNames(
  Object.getPrototypeOf(abby)
)
// ['constructor', 'pet']
```

We lost the methods on the parent `Pet` class. To grab those too, we can create a reusable function to dive through the prototype chain:

```js
function countClassMethods(_class) {
  const methods = new Set()
  let keepDiving = true
  let prototype = Object.getPrototypeOf(_class)
  
  while (keepDiving) {
    Object.getOwnPropertyNames(prototype).forEach(name => methods.add(name))
    prototype = Object.getPrototypeOf(prototype)
    
    if (!prototype.__proto__) keepDiving = false
  }
  
  return methods.size
}
```

This function takes a class and grabs its prototype. Then in a `while` loop, it iterates through the prototype's property names and adds them to a set. It then looks ahead to the next prototype to determine whether it should continue. If the next prototype's `__proto__` property is falsy, then leave the loop and return the size of the set.

If you want to see a list of the methods, you could rename the function and return `[...methods]` or do something with `method.values()`.

Now when I call my function with an instance of the `Dog` class, I get the answer that I'm expecting:

```js
const abby = new Dog('Abby')
countClassMethods(abby) // 3
// Values: ['constructor', 'pet', 'call']
```

This is a pretty niche scenario, but I hope that is helpful for someone else.

Happy counting!