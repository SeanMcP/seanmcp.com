---
title: Farewell Create React App
description:
  The React team is looking to transition Create React App from a project
  scaffold to a launcher that includes options other than client-side rendering
tags:
  - Articles
  - React
date: 2023-02-28T11:03-0400
---

- The React team is looking to sunset “Create React App” as a project scaffold
- They are leaning towards turning it into a “launcher” which would suggest a
  list of recommended frameworks
- This is part of a greater shift away from client-side rendered applications

I learned React while attending a coding bootcamp in 2017. With the help of
Create React App, I was able to learn the syntax and features of the library
without needing to understand Webpack or Babel. It was a valuable tool for
learning React, and I’m thankful that it existed.

Today I rarely spin up new React applications – even for pet projects. But if I
did, I would use Vite instead of CRA. The ecosystem for front-end project
scaffolds has changed significantly in the last six years, and CRA hasn’t kept
up with the times. I think that it makes sense for the React team to move on
from it and let the community solutions and frameworks pick up the slack.

[The discussion also mentions](https://github.com/reactjs/reactjs.org/pull/5487#issuecomment-1409720741)
that server-side rendering and static-site generation are two critical areas of
front-end development going forward. The use cases for client-side rendered apps
are limited, and
[the weaknesses are now well documented](https://infrequently.org/2023/02/the-market-for-lemons/).
Instead of the React team having one official approach (CRA) and a bunch of
official ones (Next, Astro, Vite, _etc_.) for using the library, they want to be
more agnostic. This is a good move for the health of the web.

Thank you for your service, Create React App. Enjoy retirement.
