---
title: Fix failed Fastify deploy on Render
description:
  To get a boilerplate Fastify app to deploy on Render.com, you need to read to
  listen on PORT environment variable
tags:
  - Articles
  - Debugging
  - Fastify
  - Render
date: 2023-03-28T17:01-0400
---

To get a boilerplate Fastify app to deploy on Render.com, you need to read to
listen on PORT environment variable.

**Background**: When trying to deploy a basic Fastify app to Render.com, I
received a generic failure method: `Deploy failed for COMMIT_HASH`. The log
indicated that the server started correctly, and there was no information
indicating why the deploy failed.

**The fix**: I couldn’t find docs for running Fastify on
[Render.com](http://Render.com), but there are example repos for other languages
and libraries. The Render example for Express
[included a reference](https://github.com/render-examples/express-hello-world/blob/main/app.js#L3)
to `process.env.PORT`. By adding that to my Fastify app, I was able to
successfully deploy.

**Copy and paste**:

```js
const port = process.env.PORT || 8080;

const server = fastify();

server.listen({ port }, () => "Hello world!");
```

If you’re using TypeScript, you will have to convert the environment variable to
a number:

```ts
// TypeScript
const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;
```

**Read more**:

- [https://www.fastify.io/docs/latest/](https://www.fastify.io/docs/latest/)
- [https://render.com/docs](https://render.com/docs)
- [https://github.com/render-examples/express-hello-world/blob/main/app.js#L3](https://github.com/render-examples/express-hello-world/blob/main/app.js#L3)
