---
layout: page.liquid
title: The Void
tagline: Ephemeral messages. Here today; maybe gone tomorrow.
description: A page of ephemeral messages. Here today; maybe gone tomorrow.
readme:
  Add entries in REVERSE-CHRONOLOGICAL ORDER separated by a `---`. NO FOOTNOTES.
head: >-
  <style>content hr { margin-block: 3em; }</style>
---

**Jan 11, 2025** — I'm starting to rethink how I combined notes/gardens into
articles (classic). I think I only did that because of how my site was
architected in Astro. Now that I'm moving back to Eleventy, I don't see a good
reason why I couldn't have those separate sections again.

_[Several hours later...]_ I moved all of notes out of articles and into
[the void](/void). I think that's a better place for them.

---

**June 28, 2024** —
[MDN distinguishes](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API#concepts_and_usage)
between two different "popover" UI patterns:

1. **Modals**: prevent interaction with overlapped elements, use `dialog`
   element
2. **Non-modals**: allow interaction with overlapped elements, use Popover API
   Conceptually this is helpful, but I wish we had more consensus across
   engineering and design on these terms.

---

**June 27, 2024** — Maybe if I have a nice script for creating notes then I'll
write more of them.

---

**May 17, 2024** — There are some days when writing for this website comes so
easily, and other days where it is a chore. I don't know the difference between
the two. Today things are coming easily.

---

**February 1, 2024** — It's easy to complain about things, and too often I find
myself taking the easy road. We have enough of that in the world: let's pick a
different path.

---

**January 12, 2024** — <e-moji>🕶️</e-moji>
[`color-scheme` is a CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme)
that affects the "theme" of a website. You can use it to quickly switch a page
to dark mode with:

```css
html {
  color-scheme: dark;
}
```

It's pretty neat, but it only applies to certain elements. You can use it on
`html` to set the scheme for the entire page, and on some form control elements
like `input` and `select`.

---

**January 12, 2024** — I added notes to this site in 2021, but I don't think
I've ever settled on _what_ a note is. For what purpose do notes exist? I'm
going to meditate on that this year. Maybe I will come up with something that is
useful for me and anyone else who stumbles upon them.

---

**November 25, 2023** — I've been digging into web components recently and
open-sourced two components today:

- [dark-mode-toggle](https://github.com/SeanMcP/dark-mode-toggle-web-component)
- [nav-search](https://github.com/SeanMcP/nav-search-web-component) (still a
  WIP) Both of them follow the
  ["HTML web component" pattern](https://adactio.com/journal/20618) of adding
  interactivity to their children without touching the shadow DOM. I think there
  is a lot of potential in this pattern, so I'm excited to explore it with more
  components.

---

**August 7, 2023** — I just landed a PR that standardizes all of the dates in my
content. Based on my testing, there should only be a few older articles affected
by this change. My hope is that the new format provides a more accurate
indication of when content was published or updated.

---

**July 25, 2023** — After a four-month hiatus, I got my website running on
Windows again.
[The `runtime: out of memory` error that I encountered](https://github.com/withastro/compiler/issues/761)
went away after I installed a larger solid-state drive. I'm glad to have the
issue resolved, but it's crazy to me that **memory** could be the reason why a
static-site generator falls over. I guess this is the world that we live and
work in now.

---

**July 13, 2023** — I have to update two Chrome extensions, but I'm dragging my
feet because the release process is so involved. I've been spoiled by services
like Netlify that handle all of that for you.

---

**July 6, 2023** — I created a [Threads](https://threads.net) account yesterday
in the ongoing pursuit of finding a Twitter-like experience that is a net
positive for me. The app looks neat and works fine, but there are two big
issues:

1. There is no way to surface content from non-verified users (_i.e._ normal
   people)
2. There is no way to view only posts from accounts you follow In its current
   iteration, Threads is an app for eavesdropping on Instagram influences,
   celebrities, and brands. I don't see how that provides lasting value to most
   people after the launch excitement fades.

---

**June 8, 2023** — This morning I updated Astro from `v2.0.9` to `v2.6.1` and
all other Astro packages without any issues.
[You can see the full diff here](https://github.com/SeanMcP/seanmcp.com/pull/56/files#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519).
[The Astro team announced improvements to images](https://astro.build/blog/images/)
in a recent blog post, and I'm interested in checking those out. It's been on my
todo list to improve how I handle images on this site.

---

**May 24, 2023** — I added a new [gardens](/gardens) section to the site. This
will contain evergreen resources on a particular topic that are organized by how
recently they've been updated. This seemed a more natural solution than updating
old articles and tampering with the RSS feed. Let me know what you think!

---

**May 6, 2023** — [pnpm](https://pnpm.io/) doesn't run pre- and post-scripts by
default. You need to explicitly enable this behavior by
[configuring `enable-pre-post-scripts`](https://pnpm.io/cli/run#enable-pre-post-scripts):

```shell
pnpm config set enable-pre-post-scripts true
```

This updates the [local or global pnpm config file](https://pnpm.io/cli/config).
You can
[read more about pnpm's decision](https://pnpm.io/cli/run#differences-with-npm-run).

---

**April 18, 2023** — I released a new design for 2023 this morning. I don't
think there is enough for a full write up, but I'm going with a new "less is
more" philosophy. If you have any feedback, feel free to reach out:
sean@seanmcp.com

---

**March 15, 2023** — I ran into an issue this morning where Astro stopped
working on my Windows machine. `2.0.9` is working on MacOS but gives the
following error in Windows:

```
runtime: out of memory: cannot allocate 4194304-byte block (4030464 in use)
fatal error: out of memory
```

I don't think this is an Astro issue, since nothing has changed since it was
last working. I don't know of anything that changed in my enviroment, but maybe
there is a memory leak somewhere causing me to run out?

---

**February 25, 2023** — My wife has informed me that "Up the INSERT_NOUN" is not
a common phrase. I first heard it in my
[folk-punk days](https://www.youtube.com/watch?v=yeBpMVSSuvQ), and I had assumed
that it was more common. Live and learn! **Update**: She has since told me that
she thought it sounded like a vulgarity.

---

**January 6, 2023** — There was an interesting Slack thread at work today
discussing how to meet and make friends as an adult. A lot of folks chimed in
and shared their experience and some things that have worked for them. As a
Christian who is active in a church community, I've never encountered these
challenges. But I'm empathetic towards those who have: meaningful in-person
relationships are necessary and increasingly difficult to find.

---

**November 22, 2022** — Reflecting on the recent situation at Twitter,
[Dave Rupert wrote](https://daverupert.com/2022/11/silos/):

> Now we are barn-less. Silo-less. Wandering open pastures for the next watering
> hole. Wherever you end up I want to offer an idea; you are the value. Your
> ideas, your insights, your compassion, your ability to help someone in need,
> your dumb puns and dank memes; that’s what’s valuable. That's encouraging to
> me, because I have the autonomy to choose a platform or build one that suits
> my needs. This site is an example of that. But what about the folks who are
> unable? Even if they realize they are the value, where are they to go? I'm
> afraid the options are limited; they're stuck trading a frog for a toad.

---

**November 3, 2022** — YouTube is rolling out handles for their channels, and I
was able to snag [@seanmcp](https://youtube.com/@seanmcp). There are a lot of
Sean McPs in the world, so it always feels like a victory when I get to a handle
first. Is that petty? 😅

---

**October 13, 2022** — For a long time I avoided using the `.mjs` extension with
Node.js because it felt odd. But after years of fiddling with package `type`s
and CLI arguments to get it to run ES Modules, I've come around to "Michael
Jackson Script". I'm looking forward to the day when ESM are the default in
Node.js, but until then: _viva la `.mjs`_.

---

**October 13, 2022** — I've added a bookmarking feature to the site! When you're
looking at an article or note, you'll see a little bookmark icon to the top
right. If you toggle that, it will save the page in `localStorage` and highlight
it whenever you browse [articles](/articles) or [notes](/notes). I know that I'm
going to find this useful, and I hope that you do too! 🔖

---

**October 6, 2022** — This morning I spent some time trying out
[SvelteKit](https://kit.svelte.dev/) for the first time, and... it did not go
well 🙈 I say this as a big Svelte fan, but it feels like Kit was designed to be
unpleasant to use. Complicated patterns at every turn, and an undecipherable
build for the uninitiated. My hope was that SvelteKit would be a great tool to
build projects in Svelte (that _is_ what it says on the tin), but I guess I'll
need to look elsewhere.

---

**August 3, 2022** — I﻿'ve been a big fan of CodeSandbox.io since it released.
However, recently I noticed that when you want to convert a sandbox to a GitHub
repository, it requires access to your organizations too. I'm happy to give them
access to my GitHub account, but I do not want to give them permissions to edit
repos at Khan Academy. This seems like strange oversight from the CodeSandbox
team. 🤔

---

**July 14, 2022** — I spent some time this morning looking into
[`zx`, Google's tool for writing shell scripts in JavaScript](https://github.com/google/zx).
They have a lot of neat features baked in, but one of the coolest I saw was the
ability to
[execute scripts from a Markdown file](https://github.com/google/zx/blob/main/docs/markdown.md).
That's a much more approachable way to document scripts than code comments! ✨

---

**July 13, 2022** — This is the first note created by Netlify CMS in production
🚀

---

**July 13, 2022** — Today I added Netlify CMS to the site in order to make it
easier to add [notes](/notes). I may expand the feature for articles in the
future. The most difficult part of the process was the limited control over file
slugs. Notes are numbered and incremented, but there wasn't a good way to do
that with Netlify CMS without adding a new field. Oh well. Hopefully the ease of
use will trump the annoyance of unnecessary data.

---

**July 12, 2022** — Today I learned about TypeScript's non-null assertion
operator: `!`. It's a nice way to let the TS compiler know that the value cannot
be `null` or `undefined`, which is a pretty common use case in my experience.
[This StackOverflow question and answer helped unpack things for me](https://stackoverflow.com/questions/42273853/in-typescript-what-is-the-exclamation-mark-bang-operator-when-dereferenci),
and
[you can reference the documentation here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator).
❗️

---

**June 28, 2022** — I've needed to look up how to use React Testing Library to
test that a component with particular props multiple times. Today I found a
helpful answer on StackOverflow: https://stackoverflow.com/a/58634377/8486161

---

**June 24, 2022** — I added a new feature to the site called "stars." When it is
enabled, you can add a little star anywhere on the site by tapping. I'm planning
to write an article about why I wrote it, but in the meantime let me know if you
have any feedback on the feature: sean@seanmcp.com

**Edit**: Stars are dead. [Long live bookmarks](/notes/44)!

---

**April 21, 2022** — This week I gave a talk titled _React Bug Catcher: Tools
and strategies for debugging React apps_ at
[React Global 2022](https://events.geekle.us/react2/). It was a good experience,
but I _really_ underestimated (again) how much time it takes to prepare a
conference talk. ⌛️

---

**March 25, 2022** — _LEGO Bricktales_ looks so good! It's like an open-ended
[_LEGO Island_](https://en.wikipedia.org/wiki/Lego_Island), a favorite from my
childhood. Hopefully the real game turns out like the trailer 🧱

<em-bed>

https://www.youtube.com/watch?v=YJQjQ-nfJRY

</em-bed>

---

**March 24, 2022** — Requesting data _before_ rendering the user interface is
putting the horse before the cart. It's great to see tools like React Router
moving in that direction. 🐎 https://remix.run/blog/remixing-react-router

---

**March 23, 2022** — I started watching Brian Vaughn's
[_Deep dive with the React DevTools profiler_](https://www.youtube.com/watch?v=nySib7ipZdk)
to learn more about using the React Profiler, but there are a bunch of general
tips for creating more performant React applications as well. Watching it was a
good use of 37 minutes!

---

**March 18, 2022** — In doing research on debugging, I've found
[Diomidis Spinellis' _Effective Debugging_](https://www.spinellis.gr/debugging/)
to be really insightful. It's chock-full of helpful tips and real-world examples
that illustrate the recommendations well. If you are looking for a general book
on debugging, then I highly recommend it.

---

**March 16, 2022** — In
[_Deep dive into React Native’s New Architecture_](https://medium.com/coox-tech/deep-dive-into-react-natives-new-architecture-fb67ae615ccd),
Atharva Patil does a great job of summarizing all of the changes that are coming
to React Native in 2022. Definitely worth the 7-minute read.

---

**March 11, 2022** —

> I have enjoyed working with React for the past few years; it always felt like
> the right level of abstraction from working with the actual DOM. That being
> said, I have also become wary of how error-prone React hooks code often
> becomes. Solid.js feels like it uses a lot of the ergonomic parts of React
> while minimizing confusion and errors. – Nick Scialli in
> [_Solid.js feels like what I always wanted React to be_](https://typeofnan.dev/solid-js-feels-like-what-i-always-wanted-react-to-be/)

---

**January 20, 2022** — Today marks the end of a chapter and the start of a new
adventure. Onward and upward! 🦄

---

**January 18, 2022** — I was able to update `@11ty/eleventy` for this site from
version `0.12.0` to `1.0.0` ~~without any issues~~
[only one hiccup](/articles/upgrading-an-eleventy-site-to-1-0-0). Kudos to Zach
Leatherman & co. on
[the 1.0 release](https://github.com/11ty/eleventy/releases/tag/v1.0.0)!

---

**October 8, 2021** —
[_20 Things I’ve Learned in my 20 Years as a Software Engineer_](https://www.simplethread.com/20-things-ive-learned-in-my-20-years-as-a-software-engineer/)
by Justin Etheredge of Simple Thread made it to the top of Hacker News, and
there were some interesting insights from the article.

> There is no “right” architecture, you’ll never pay down all of your technical
> debt, you’ll never design the perfect interface, your tests will always be too
> slow. This isn’t an excuse to never make things better, but instead a way to
> give you perspective. Worry less about elegance and perfection; instead strive
> for continuous improvement and creating a livable system that your team enjoys
> working in and sustainably delivers value.

> [Watch out for the 0.1x programmer] who wastes time, doesn’t ask for feedback,
> doesn’t test their code, doesn’t consider edge cases, etc… We should be far
> more concerned with keeping 0.1x programmers off our teams than finding the
> mythical 10x programmer.

> If you are using your tools, and you don’t love or hate them in a myriad of
> ways, you need to experience more. You need to explore other languages,
> libraries, and paradigms. There are few ways of leveling up your skills faster
> than actively seeking out how others accomplish tasks with different tools and
> techniques than you do.

> Good written communication is one of the most important skills for any
> software engineer to master.

The article is worth the read (warning: a few vulgarities).

---

**July 30, 2021** — Every time I use [esbuild](https://esbuild.github.io/), I'm
impressed with its simplicity and speed. This new generation of JS tooling is
really exciting!

---

**July 15, 2021** — Google Chrome has been crashing on me without warning the
past two weeks, so I'm going to give Microsoft Edge another try. Nice to see
that there are more extensions available in Edge Add-on store.

---

**June 24, 2021** — **Pop quiz**: What does the following evaluate to in
JavaScript?

```
Object.keys('hmm...').length
```

**Answer**: `6`. Here JS treats the string as a type of array which itself is a
type of object. Who knew!

---

**June 1, 2021** — WebAssembly sounds neat and has real potential, but the setup
for a "Hello World" programming is pretty complex:
https://wasmbyexample.dev/examples/hello-world/hello-world.assemblyscript.en-us.html

---

**April 29, 2021** —
[In the article _How I Built My Blog_](https://www.joshwcomeau.com/blog/how-i-built-my-blog/),
Josh Comeau walks through the tech stack behind his lovely personal site. It's
neat to see the choices that he made and the reasoning behind them.

---

**April 28, 2021** — Netlify is moving their React UI component library to
Tailwind CSS:

> what started with organised PostCSS gradually grew to become a complex and
> entangled global CSS architecture with a lot of specificity and overrides. ...
> the added tech debt it introduces makes it difficult to keep shipping fast
> without adding any regressions. Besides, as the number of frontend developers
> contributing to the codebase also grows, this kind of CSS architecture becomes
> even more difficult to work with. To accomplish this, they set a deadline,
> divided the work across their front-end guild, and tracked their progress on
> GitHub. They added some internal tooling for visual-regression tests and to
> make building class lists easier, especially for conditional cases.

[Read more about Netlify's adoption of Tailwind CSS here](https://www.netlify.com/blog/2021/03/23/from-semantic-css-to-tailwind-refactoring-the-netlify-ui-codebase/)

---

**April 15, 2021** — If you wait until you are feeling productive, you will
never be.

---

**March 18, 2021** — One of the things I miss most about Windows when working on
macOS is the window management. I've tried a few window management apps in the
past, and today I'm giving [Rectangle](https://rectangleapp.com/) a spin. So
far, the keyboard shortcuts feel logical and the app isn't trying to do too
much. We'll see how it goes!

---

**March 16, 2021** — This morning I added a new page with an embedded emoji
picker: https://www.seanmcp.com/sm/emoji-picker/ It embeds
[Nolan Lawson's `emoji-picker` web component](https://www.webcomponents.org/element/@@npm/emoji-picker-element)
in a webpage and prompts you to copy when selecting an emoji. You can see the
[source code here](https://github.com/SeanMcP/seanmcp.com/blob/master/src/sm/emoji-picker.njk).
I'll use this when doing computer activities with my three-year-old son, but
others may find it useful as well.

---

**March 15, 2021** — I enjoyed reading
[_Hacker Christianity_](https://aliensintheapple.com/2013/12/22/hacker-christianity/)
by [Ben Hoyt](https://benhoyt.com/). It's nice to ready perspectives from the
intersection of Christianity and programming. I'll be on the lookout for more
like this.

---

**March 4, 2021** — Today I learned that in Vim `:w` stands for "write" and is
not a weird alias for "save." That's much easier to remember.

---

**February 16, 2021** — I added a [/uses](/uses) page to keep track of the
extensions and programs that I use everyday. Nothing is revolutionary, but there
are a few extensions and user scripts that I find helpful.

---

**February 10, 2021** — [`github1s`](https://github.com/conwnet/github1s) is the
coolest thing that I have seen in a while. By changing the url of any GitHub
repository, you can open the repo in a VS Code browser. This is begging for a
userscript to add a link to every GitHub repo <e-moji symbol="🤔"></e-moji>

---

**February 8, 2021** — When I was teaching, teachers had a popular aphorism:
"You really know something until you have to teach it." Today I learned that
this idea was given the term "the illusion of explanatory depth" (IOED) by
psychologists in 2002. Further reading:
[[0]](http://www.meteo.mcgill.ca/~huardda/articles/rosenblit02.pdf),
[[1]](https://cogsci.mindmodeling.org/2016/papers/0185/paper0185.pdf),
[[2]](https://www.edge.org/response-detail/27117),
[[3]](https://behavioralscientist.org/to-fight-polarization-ask-how-does-that-policy-work/),
[[4]](https://www.npr.org/sections/13.7/2015/07/06/420513593/what-you-really-know-about-bicycles)

---

**February 4, 2021** — I tried for a long time to find this resource, so I'm
going to save it here:
[_Add DuckDuckGo-powered search to your website_](https://marcamos.com/journal/add-duckduckgo-search/)
You can add site-wide search to any static site using an HTML `form` and a few
fields. Pretty cool!

---

**February 3, 2021** — To find the date a file was created in Node, you can use
the `fs.stat` or `fs.statSync` methods and look for `birthdate`.
[See this answer on StackOverflow](https://stackoverflow.com/a/28886086). This
might work differently based on your operating system, so your mileage may vary.

---

**February 2, 2021** — Max Böck has
[a guide for persisting files inbetween Netlify builds](https://mxb.dev/blog/persistent-build-folders-netlify/)
using a custom plugin. It looks pretty straightforward, so I'm going to file
that away for later 🗄

---

**February 2, 2021** — The W3C has a
[feed validator](https://validator.w3.org/feed/) that is pretty handy when you
are working on generating RSS/XML feeds.

---

**February 1, 2021** —
[_10 bad TypeScript habits to break this year_](https://startup-cto.net/10-bad-typescript-habits-to-break-this-year/)
was shared on the latest edition of
[JavaScript Weekly](https://javascriptweekly.com/). There are a few useful
tidbits in there, but I'm particularly interested in using
`class Foo implements Bar` to mock data for tests (6) and using descriptive
names for generics (7).

---

**February 1, 2021** — I added a new section to the site called
["Bookshelf"](https://seanmcp.com/bookshelf). This was modelled after
[David Rupert's bookshelf](https://daverupert.com/bookshelf), with the
additional ability to include notes for each book. I'm really enjoying the
ability to add features to my site as needed.

---

**January 30, 2021** — 🚀 I
[released a new version](https://npm.im/eleventy-plugin-emoji) of
`eleventy-plugin-emoji` this morning. Two minor changes: 1) the filter now
supports a label, and 2) the default class name is now `eleventy-emoji`.

---

**January 30, 2021** — Nunjucks and Liquid have different methods for passing
arguments to a filter. In Nunjucks, it's: {% raw %}

```
{{ 'value' | filter('arg') }}
```

{% endraw %} In Liquid, it's: {% raw %}

```
{{ 'value' | filter: 'arg' }}
```

{% endraw %}

---

**January 29, 2021** — Each note is a simple markdown file. All the data
necessary to render on the screen is set at a higher level, so it's super
simple.

**Edit**: Okay, I needed to add a date field. My favorite part of this setup is
that I can commit a new note through GitHub, which automatically triggers a
Netlify build.

---

**January 29, 2021** — Why messages? I really like the idea of preserving
content that would otherwise be shared on social media on my own site. It's
definitely not the most popular option (in fact, I doubt anyone else will read
these), but I think it's the right decision in the long run.

---

**January 29, 2021** — Hello world!
