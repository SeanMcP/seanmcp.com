---
title: A quick comparison of JavaScript and Go executables
description:
  Go is the superior for executables based file size and execution time, but Bun
  and Deno offer a competitive option for developers familiar with the
  JavaScript ecosystem
tags:
  - Bun
  - Deno
  - Go
  - JavaScript
pubDate: 2023-06-05T11:34:53.088Z
verse: Psalm 40:5
---

**Background**: Bun and Deno, JavaScript runtimes, provide a native way to
convert your JavaScript code into a single executable file.

- Bun: `bun build --compile my-script.js`
- Deno: `deno compile my-script.js`

To create these executables, Bun and Deno need to include their entire JS
runtime in the executable file. That means all of Apple’s JavaScriptCore for Bun
and Google’s V8 for Deno. But once that is compiles, the executables should work
in any environment that those runtimes support.

I wanted to compare these new JavaScript options and Go to see if JS is a
legitimate option for creating cross-environment executables.

**Setup**: I created a project for a simple command-line utility for reading
`package.json` files from the terminal:
[github.com/seanmcp/rpj](https://github.com/seanmcp/rpj). Then I implemented the
utility in all three environments: Bun, Deno, and Go. I have Bash scripts to
create the executables and then compare the results by two metrics: file size
and execution time.

**The numbers**:

File size

- Bun: 97733752 bytes or 97.7 megabytes
- Deno: 109968928 bytes or 110.0 megabytes
- Go: 2607443 bytes or 2.6 megabytes

Go created the smallest executable (by a wide margin). I ran into issues with
the Deno executable being rejected by GitHub for being too large, and Bun isn’t
far behind.

Execution time

- Bun: 0:00.04 real, 0.02 user, 0.01 sys
- Deno: 0:00.04 real, 0.02 user, 0.01 sys
- Go: 0:00.00 real, 0.00 user, 0.00 sys

The execution time was not a major factor in my example, and my hypothesis is
that most of the difference is due to the startup cost of the JavaScript
runtime. We would need more tests to determine how big the difference in
execution time between these options.

**Takeaway**: Based on these results, Go is still the superior option for
executables based on file size and execution time. However, Bun and Deno
provided a great authoring experience for developers who are familiar with the
JavaScript ecosystem. And the ability to use pre-existing tools and processes
when creating executables might make Bun or Deno the best option for you and
your team.

Personally, I’m excited to see how this feature of JavaScript runtimes develops
over time.

**Afterward**: Node.js does have an experimental feature to create executables,
but at the time of writing
[the steps were too involved](https://nodejs.org/docs/latest-v20.x/api/single-executable-applications.html).
For open-source options for creating Node executables, checkout
[nexe](https://github.com/nexe/nexe) and [pkg](https://github.com/vercel/pkg).
