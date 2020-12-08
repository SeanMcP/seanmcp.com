---
title: TypeScript without TypeScript
description: TypeScript provides valuable features but complicate the development process. What are some alternatives that provide the features without the headache?
date: 2020-12-08
tags:
    - TypeScript
    - JavaScript
verse: Matthew 22:32
# /img/<IMAGE>.min.jpg
image:
---

As a superset of JavaScript, TypeScript provides a lot of useful features. It's no mystery why it is one of the ["most loved" languages in software engineering](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved). When everything is running smoothly, TypeScript can been a huge boon to productivity.

However, therein lies one of TypeScript's weaknesses: the setup. TS adds a level of overhead that is, in my opinion, prohibitively complex for most of my projects. So while I would love the benefits of working in TypeScript, I don't want to go through the trouble of setting it up.

In searching for a solution to my problem, I came across [_TypeScript without TypeScript -- JSDoc superpowers_](https://fettblog.eu/typescript-jsdoc-superpowers/) by [@ddprrt](https://twitter.com//ddprrt) on fettblog.eu. In it, the author highlights how [JSDoc](https://jsdoc.app/) can provide some of the features of TypeScript without the setup.

I found the ["Defining Objects" section](https://fettblog.eu/typescript-jsdoc-superpowers/#defining-objects) to be particularly helpful. The ability to create "interfaces" for functions and objects in JavaScript is really powerful. If you combine that with [`// @ts-check`](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript) and a TS-centric IDE like VS Code, you'll find yourself in a great position when developing.

Give the article a read and [let me know what you think](https://twitter.com/snmcp).

Happy typing!
