---
title: MagnoliaJS 2020 conference notes
description: Some notes from the talks that I was able to attend
pubDate: 2020-04-16T12:00-0400
tags:
    - Conferences
verse: Isaiah 40:8
---

MagnoliaJS was thrown a COVID-19-sized curve ball for it's second annual conference. But that didn't stop the organizer's from hosting Mississippi's only technical conference: they cut the price and pivoted online with Zoom.

Niche graciously "sent" me to this two-day remote conference and here are some of my notes:

## Day 1

### Keynote: _I'm Techie and I Know It_

**Speaker**: Nashlie Sephus | @phenomenashlie

- Find the area that you are most passionate about, and look for problems in that space
- With that problem in mind, look for ways to use technology to solve it
- There are ethnic disparities in data samples that negatively impact the products we create
- We need to make a concerted effort to gather representative data
- Good data in; good data out. Garbage in; garbage out.
- Everybody has a responsibility to give back to the community that helped create them

### _ES8, ES9, ES10+… Let’s explore JavaScript’s exciting new features_

**Speaker**: Tyler Clark | @iamtylerclark

[**Slides**](https://github.com/twclark0/magnoliajs-2020/blob/master/deck.mdx)

- In 2015 after a long quiet period, the largest release of JavaScript dropped
    - This was ES6, and it was too much
- Since then, there have been smaller, yearly releases
- ES2016
    - `Array.includes()` replaced `['foo'].indexOf('foo') > -1`
        - `Array.includes()` has an optional second argument for starting point
    - `**` operator replaced `Math.pow()`
    - Tagged template literals allow you to pass strings and values to functions
        - This pattern is used by libraries like `styled-components`
- ES2017
    - `Promise.finally()` allows you to write one cleanup step for promises
- ES2019
    - `Array.flat()` combines nested arrays into a single array
        - To flatten recursively, you can pass an `Infitity` argument
    - `Object.fromEntries()` convert an array into an object
- ES2020
    - Dynamic imports: Global `import()` that returns a promise that resolves with the module
    - Nullish coalescing: `??` checks for null or undefined
        ```js
        0 || 'fallback' // 'fallback'
        0 ?? 'fallback' // 0
        ```
    - Optional chaining: `?.` will returned undefined if any layer of an object doesn't exist
        - Works with dynamic properties: `props?.data?.[props.name]`
    - `Promise.allSettled`: Like `Promise.all()` but fulfills even on rejection
- Future
    - `Promise.any()`: First promise that is a success or when all are rejected
    - Private class methods and fields: `#`
    - Top-level await: `await` does not need to be in wrapped in an `async`
    - Renamed exports: `export foo as bar from './file'`
    - Logical assignments: Assign variable based on logical conditions
        - Examples `||=`, `&&=`, `??=`


### _Static generated sites === great performance. What are you waiting for?_ 

**Speaker**: Debbie O'Brien | @debs_obrien

[**Slides**](https://noti.st/debbie/8qdhog/static-generated-sites-great-performance-what-are-you-waiting-for)

- Static is the new dynamic (which was the new static)
- You can mix and match static sites and single-paged applications
    - It's not "all or nothing"
- Next/Nuxt are great options for walking the line
- Performance tips:
    - Audit your site for performance regularly
    - Uses a service to optimize your images
        - Quality and format
    - Reduce your CSS bundle with smart classes
    - Send modern JavaScript to modern browsers
    - Split your code
    - Lazy-load as much as possible
    - Audit your webpack build with the `-a` flag
- Jamstack is worth it

### _Design Systems & CSS Variables: 2 Design 2 Systems_ 

**Speaker**: Scott Tolinski | @stolinski

[**Slides**](https://github.com/stolinski/Design-Systems-CSS-Variables)

- CSS variables are also known as CSS custom properties
    - Not supported in IE
- Declare a variable in a scope, and then reference it with the `var()` function
    - First thought it was a liability
    - After further reflection: scoping is a great feature
- Reassign variables based on any selector: classes, media queries, _etc_.
- Design systems comprise: Color, Type, Spacing, Character, Elevation
- Pay attention to vertical spacing and font size
- Margins are tricky: stick with `margin-bottom`
- Styled Components allow you to scope CSS when you want it and embrace the cascade when you don't
    - You can reference CSS variables insided `styled` components
- Elements should be: simple, obvious, hard to break, and extensible
    - Make components that can't be goofed up
- You don't need a grid system: use CSS grid or flex box
- Frameworks need to be taught
    - Write only what you need, and use variables as the backbone
        - Colors, typography, and spacing

### _Vintage Bundles: Modern JavaScript for Modern Browsers_ 

**Speaker**: Sia Karamalegos | @TheGreenGreek

[**Slides**](https://gist.github.com/siakaramalegos/3ae7bdd2398ef75b5d621ee1101bec1e)

- Transpiling to older versions of JavaScript increases the side of our code
- `<script type="module">` is an indicator whether the browser supports ES2015+
- You can save 24-70% in JS bundle sizes
- Reduce load AND parse/eval time
    - Translates to real business gains
- Balance speed and support with differential serving
    - Generate a modern bundle and a legacy bundle
    - A main bundle that loads a polyfill on older browsers
- Module scripts are supported by 90%+ of browsers by usage

### _Twitter Driven Development, Redux_

**Speaker**: Justin Samuels | @ThugDebugger

- Three keys of asking a good question in a tweet:
    1. Ask: Is this a relevant question? Is it clear? Is it concise?
        - People have stuff to do, minimize the amount of time they need to take to help you
    2. Pour: Share with others the knowledge that has been shared with you
        > A candle doesn't lose it's intensity by lighting another
        - Offer to help other people
    3. Effort: This is the hardest part
        - Don't make excuses; do the thing
- Another acronym, ATL: ask the question, teach others, and learn new things

### _Create Dynamic Web Apps With Serverless and the Jamstack_

**Speaker**: Jason Lengstorf | @jlengstorf

[**Demo**](https://magnolia-serverless.netlify.app/)

- We still need servers
- "Serverless" just means someone else's servers
    - Managed infrastructure
    - Let the experts (AWS, Microsoft, Google) do the heavy lifting
- Serverless lets us focus on logic, not infrastructure
    - It's hard, because it's a lot (and it's repetitive)
- Live demo of [Netlify Functions](https://www.netlify.com/products/functions/)
    - A way to add severless actions to static sites on Netlify
    - Pretty cool

---

## Day 2

### _Which Database? How to Choose the Best Place for your JSON Documents_

**Speaker**: Suphatra Rufo | @skprufo

1. Database overview
    - Relational databases developed by IBM back in the 1970s
    - Non-relational databases respond better to unexpected events
        - Instagram spikes at New Years handled better by non-relational dbs
    - JSON is the _de facto_ way to communicate data
2. Key value
    - Dictionary data structure
        - Pros: simple, ess memory, better performance, partiionable, horizontal scaling
        - Cons: no query language, key management is vital, freeform search impossible
    - AWS DynamoDB
3. Document-oriented databases
    - A better way to store JSON
4. Multi-modes
    - Support and mange different models
    - Couchbase can normalize and denormalize documents
    - SQL querying with NQL

### _Thar Be Dragons: Rebuilding Native UIs on the Web_

**Speaker**: Chance Strickland | @chancethedev

[**Slides**](https://tender-stonebraker-e2b443.netlify.app/)

- The web started as a platform for sharing documents
- As it grew, we started to develop more interactive elements
- Today, we have complex HTML elements for rich interactions
    - Why don't we use them?
- Reasons why we build custom controls: appearance, functionality, browser differences, accessibility issues
- Libraries can only do so much to recreate native UI elements
- Takeaways
    1. Use HTML
    1. Identify good primitives
    1. Understand the full scope

### _Svelte and the Great Space Elevator_

**Speaker**: Shawn Wang | @swyx

[**Slides**](https://docs.google.com/presentation/d/1fTdTyCVdiHC7PvyYRzmessS09TfLFDXEk50aRhb-JRM/edit) | [**Talk**](https://youtu.be/atOIxTHylF8)

- How do we get into space?
    - There is a tradeoff between the amount of fuel you need (to carry valuable payload) and the weight from that additional fuel
- How do we make the web?
    - The web wasn't designed for everything that we use it for
    - This is especially true for mobile web (low powered, slow connections)
    - JavaScript is really heavy
    - The framework that you choose has a big impact on the ultimate weight
    - The tyranny of run-time frameworks:
        - Choose two:
            - Ship more features
            - Write less code
            - Send less JavaScript
- A way out
    - Put up a rope!
    - A space elevator is a big upfront investment, but a low per use cost
- Compilers as the future
    - Tom Dale's _Compilers are the new Frameworks_
    - Frameworks are shifting towards smart compiling to reduce bundles
    - Svelte
        - Write less code: learn extra syntax, but it will be worth the time
            - Personal experience: 20% less code, 93% smaller bundle
        - No virtual DOM: it's as close to writing vanilla JS as possible
            - _Compile Svelte in Your Head_ by Tan Li Hau
        - Truly reactive: Reponds to changes with `$` syntax
    - Lighter tooling that only makes it to the build when used

### _Progressive Enhancement in React_

**Speaker**: Kayla Sween | @_kaylasween

[**Slides**](https://github.com/kaylasween/accessibility/blob/master/PEforReact-MagnoliaJS2020.pdf)

- Spectrum of delivery: HTLM > CSS > JavaScript
    - Structure it with HTML
    - Make it pretty with CSS
    - Add behavior with JavaScript
- Why Progressive Enhancement?
    - Enhanced accessibility and performance
- Start with core functionality and choose the simplest technologies to make it work
- Then you can sprinkle on optional features

### _Building JAMstack CMS: A Full Stack CMS for the Modern Age_

**Speaker**: Nader Dabit

[**Slides**](https://www.dropbox.com/sh/bhdci4t3z4qupiv/AAC7fQO6IfwUfvIkFiv_eg6Qa?dl=0)

- A Wordpress alternative with all jamstack technologies
- More information: https://github.com/jamstack-cms

### _Handling Data with React Query_

**Speaker**: Domitrius Clark | @domitriusclark

[**Slides**](https://slides.com/domitrius/react-query/fullscreen) | [**Course**](https://egghead.io/playlists/use-react-query-s-hooks-to-query-and-mutate-data-in-your-react-components-64d6?af=4roogg)

- I accidentally missed this!

### _Canvas: The Final Escape Hatch_

**Speaker**: Ken Wheeler | @ken_wheeler

[**Slides**](https://drive.google.com/open?id=1OdDF3VZwuBmRQWRPhN-sWzl7PQJw3mQd)

- Canvas is a browser API to draw 2D graphics
- WebGL: alternative, high performance API for drawing on the `canvas` element with the GL language
- For games, data vizualization, high-performance graphics, granular control over rendering
- Drawbacks: No layouts, no z-index, bad a11y, with a strange imperative API
- Drawing methods
    - Immediate: Redraws the entire canvas every time
        - Tough on CPU
    - Patching: Only redraw pars that have changed
        - Hard to handle full draws
    - Compositing: Layering convases
- Events: All events are listening to the parent `canvas`
    - Use a spacial index with a library like RBush
- Scroll: Let the browser and DOM help you
    - Using overflow and elements porportional to the content
-     - You can use a layout solution like Yoga (`yoga-layout`)
- Plug: `react-blazing`
- Other libraries: Skia, Lottie, PixiJS

### _How to Supercharge Teams with Carefully Crafted Conventions_

**Speaker**: Chris Ball | @cball_

[**Slides**](https://speakerdeck.com/cball/how-to-supercharge-teams-with-carefully-crafted-conventions)

- Every good scalable system relies on process and automation
    - How you develop, your workflows, how you do things
- Process is built by conventions
- How to be your best dev:
    - Play to your strengths
    - Understand what slows you down
    - Eliminate decision fatigue
- Examples in the wild
    - Next.js: leans in to standardized conventions in React
    - GraphQL: a system for requesting data and documenting
    - Utility css frameworks
    - Semantic versioning
- Crafting your own
    - Find a base and build on it
        - If you're disabling everything, it means that you are following the wrong convention
    - Create a plugin for your team
    - Add a PR checklist
        - Screenshots (GIFs)
        - Automated tests
- Leverage generators
    - Hygen templates that live alongside the code
- How to perfect process
    - Synchronization: Understand the vision with RFCs
        - Summary, motivation, examples, how to teach, how to enforce, drawbacks, and questions
    - Repitition: Continually refining with retros

---

## Reflection

I enjoyed having a single track of JS-focused talks. The remote conference had it's own technical issues, but overall I think it was a great content delivery method for these types of topics.

Some of the talks were prerecorded, which might sound like a let down, but the speakers were presents in the chat and willing to answer questions live. That was a neat feature that other conferences cannot offer.

Whether it's remote or in-person in 2021, I recommend checking out MagnoliaJS Conference.
