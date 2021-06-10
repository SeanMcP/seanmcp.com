---
title: Should I snapshot my UI components?
description: The temptation is strong, but consider some of the tradeoffs.
date: 2019-09-11
tags:
    - react
    - testing
verse: Hebrews 4:12
---

If you are writing tests for React components in 2019, you will probably find your way to Airbnb's Enzyme testing utilities. The recent industry standard, Enzyme provides you some useful tools for rendering your components.

Often times, folks will turn to snapshot testing with Enzyme because it a) is easy, b) provides significant test coverage, and c) seems like a good idea. I worked for a company where the default test suite for any component was a snapshot, then any additional tests were added to bump coverage to an acceptible level.

However, the ease of use is often a double-edged sword. Here I wanted to outline some common issues that arise from using snapshot tests for your UI components.

## Issue #1: False positives

If you've every worked in a codebase that snapshots UI components, you'll know: snapshot tests fail all the time. This is because snapshots collect a JSON-ified version of the shallow render from Enzyme. Whenever anything changes to the structure of the render, the output is different and therefore the snapshot fails.

Whenever you need to refactor a component, you can be assured that the test will fail because the new snapshot doesn't match the one on record.

Because snapshot tests fail all the time, they become **false positives**: results which incorrectly indicate that a problem is present. You snapshot can fail, even though everything about the component will still function as expected.

If your test can fail when the function still works, **what value is the snapshot test adding**?

I have seen deployments fail because the snapshot encountered an unexpected `div` tag. The "solution" was simple enough: update the snapshot and then deploy again. But that has its own problems.

## Issue #2: Combating false positives

Since failing snapshot tests are so common, it is common to run you rest suite with the `-u, --update-snapshot` flag:

```
npm run test -u
```

This rewrites the snapshot to match the current value instead of comparing it to the previous one. Since the updated snapshot will always match the new value, the test passes. Running the update snapshot flag is kind of like doing this:

```js
let snapshot

// npm test -u
let value = 5
snapshot = value

if (value === snapshot) {
    console.log('Passed!')
}
```

This is a little silly, but I think it illustrates the point. On its own, updating a snapshot will automatically pass a test without providing you any valuable information.

Since failing tests are so common, you will be tempted to add the updated snapshot flag to every test run. I know that I got a little too quick the the `-u` flag.

But as illustrated above, running updated snapshot tests provides no valuable information. So if you need to update the snapshot test every time, **what value is the snapshot test adding**?

If you find yourself backed into this corner, take heart in knowing that it's not your fault. Snapshot testing forces us to focus on structure.

## Issue #3: Structure over function

Snapshot tests value the structure of a component over its functionality. They don't tell you how the component will work in your application; it only tells you how the JSX will look. So you need to ask yourself: Do I want my test suite to care about the structure of my components?

Let's imagine an `IconButton` component that looks something like this:

```js
function IconButton({ children, icon, ...props }) {
    return (
        <button {...props}>
            <Icon icon={icon} />
            <div>{children}</div>
        </button>
    )
}
```

After reviewing with the design team, you determing that it would be better for the button text to be inline with the `Icon`, so you swap the `div` for a `span`:

```js/4
function IconButton({ children, icon, ...props }) {
    return (
        <button {...props}>
            <Icon icon={icon} />
            <span>{children}</span>
        </button>
    )
}
```

After this change, should the test for `IconButton` fail? I'd argue: no.

The functionality of the IconButton hasn't changed; it still renders an `Icon` and passes the `onClick` handler to the `button` element. I and every developer after me should be free to refactor as much as I need so long as the component still functions in the same manner when we're done.

But a snapshot test disagrees and will fail because you changed that tag. You might anticipate the test failing and run it with the update snapshot flag, which has all the problems listed above. So again, **what value is the snapshot test adding**?

## Snapshots are a bad fit for UI testing

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Shallow rendering + snapshot tests. <a href="https://t.co/3TIa4VIhsc">pic.twitter.com/3TIa4VIhsc</a></p>&mdash; Mark Dalgleish (@markdalgleish) <a href="https://twitter.com/markdalgleish/status/1161616241531863045?ref_src=twsrc%5Etfw">August 14, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

In most instances, snapshots provde no additional value for your UI tests. They are easy and feel good to write, but I think they add little confidence to your testing suite for any given component.

You may stumble across scenarios with a highly specialized component, definite structure, and specific attributes that would benefit from a snapshot. But these are an exception to the rule. In general, **avoid snapshot testing for UI components**.

## Another way

Instead of defaulting to snapshots, ask yourself: What does this component **need** to do? Then write a test that ensures the component can do just that.

If you're working with Enzyme, use [`find()`](https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html) to insure that any necessary elements render with the appropriate attributes. Use [`simulate()`](https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html) to interact with your components in a meaningful way, focusing on functionality.

**Your tests should give me the confidence to refactor any component to your heart's content**. They should fail if you change functionality, not structure.

## Further reading
- ["Testing Implementation Details" by Kent C. Dodds](https://kentcdodds.com/blog/testing-implementation-details)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
