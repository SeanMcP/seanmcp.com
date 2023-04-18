---
title: 5 Lessons from 10k open-source downloads
description:
  A few things I've learned from managing a modestly popular open-source
  package.
pubDate: 2019-11-25
tags:
  - Open Source
  - Package
verse: Gen 1:27
---

In April of 2018, I wrote an article
["How to use emojis in React"](https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7).
At the time, the default eslint configuration for Create React App would flash
an error if you put an emoji in a rendered string.

The answer was to wrap the emoji in a `span` with some appropriate attributes to
notify screen readers that it was being used as an image. Since it was React
specific, I included a component that handles all the attribute logic for you.

The article gained some traction and, thanks to Medium's SEO, remains the first
page on
[a Google search for "use emojis react"](https://www.google.com/search?q=use+emojis+in+react&oq=how+to+use+emojis+in+react).
Later that same year, I decided to create and release a package for the included
React component. Thus, [`a11y-react-emoji`](https://npm.im/a11y-react-emoji) was
born.

Twelve months and 17 versions later, and my little package has
[10,000 downloads from the npm registry](https://www.npmjs.com/package/a11y-react-emoji).
Beyond that, the repo has
[15 stars on GitHub](https://github.com/SeanMcP/a11y-react-emoji) and is used by
[61 other projects](https://github.com/SeanMcP/a11y-react-emoji/network/dependents?package_id=UGFja2FnZS0yODIxNzMzNDE%3D).

There have been some maintainer highs and lows in that time, so here are the
five biggest lessons I learned along the way.

## 1. Packages can be simple

Before stepping into the world of open source, I thought of packages as a black
box. But I've since learned that they are much simpler than they appear.

In the JavaScript world, a package is just four files:

1. A `package.json` with a few fields,
2. an `index.js`,
3. a `README.md`,
4. and a `LICENSE`

And the last two are optional. Once I got over the hurdle of
[publishing my first package](https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/),
the curtain of mystery fell away.

Take a moment and look through the `node_modules/` of you next project, and
you'll see a bunch of directories with those files mentioned above. Not too
scary!

## 2. Dependencies can get tricky

If you're publishing a basic utility, you may not need to worry about
dependencies. But the more complex your library becomes, the more tricky it
becomes to manage your dependencies.

`a11y-react-emoji` was a shared React component written in TypeScript, which
meant I needed to manage React and TypeScript dependencies. I wanted the
component to be fully tested, so add Jest and Babel to the mix. Error checking?
Add ESLint. Consistent formatting? Bring Prettier along.

Before long, your dependency tree can grow really big. Keep something in mind
when creating a package: every dependency you add is another dependency that you
have to be willing to manage. That can add a maintenance work to your package.

## 3. Security is a hassle

I'm not an expert on security. So when GitHub flags one of my packages for
potential security risks, I still feel a chill run down my spine.

When I first created the `a11y-react-emoji`, I was quick to address every
security risk highlight, merge the changes, and release a new version of the
package. Every time it felt like I was just a few clicks in front of the next
Equifax data breach.

But after a few months at the helm, I stopped caring so much. Part of that is
how the project is structured: `a11y-react-emoji` has no dependencies, which
means that no flagged security issues present a risk in production.

Every potential issue is within the dev dependency tree, which isn't a big deal
to the package user.

However, keeping a large-scale library with tons of dependency ahead of all
security risks would be a nightmare. That's not something I'm chomping at the
bit to do in my spare time.

## 4. Leverage the community

Earlier this year,
[@bdbaraban filed an issue](https://github.com/SeanMcP/a11y-react-emoji/issues/3)
with `a11y-react-emoji` concerning its types. I was just learning TypeScript
when I wrote the library, and his suggestion was an improvement to the existing
code.

I asked him if he wanted to open a pull request to make the change but quickly
got antsy and did it myself.

That was a mistake. The beauty of open-source is the community; it's the product
of our collective intelligence. It didn't matter that the current types for the
package were limited. What would have been more important would be to wait and
give someone else the opportunity to contribute.

To encourage more community involvement, you should include the following:

- An
  [`ISSUE_TEMPLATE.md`](https://help.github.com/en/github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository)
  to standardize issues,
- labels for
  [`good-first-issue`](https://help.github.com/en/github/building-a-strong-community/helping-new-contributors-find-your-project-with-labels)
  and [`first-timers-only`](https://www.firsttimersonly.com/),
- and contact information in the `README.MD`

When someone reaches out or files an issue, give them a few days to respond.
Security bugs should be fixed immediately; features and small fixes can wait.

## 5. Don't lose yourself

There is an undeniable high that comes from seeing your code used by someone
else in the wild or stars the project on GitHub. I'm not immune; I've found
myself getting caught up in that ever-growing download count since releasing the
package.

It's important to remember that your worth is not determined by the number or
popularity of your open-source contributions. It has nothing to do with how many
Twitter followers you have, claps you've received on Medium, or unique traffic
to your personal website.

You are infinitely valuable for just being you.

If you want to publish packages because you think it's fun or you want to help
other people, then open source is a great way to contribute. But don't lose
sight of that motivation.

---

I hope those were helpful. If you have any questions about open source or want
to share some tips of your own, [please let me know](#comment-link).
