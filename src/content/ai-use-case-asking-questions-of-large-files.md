---
title: "AI use case: Asking questions of large files"
description:
  When file search isn't enough to surface answers, using an LLM to ask
  questions of large files is a valuable use case for AI.
date: 2026-01-07T08:50-0400
tags:
  - Articles
  - AI
  - AI Use Case
  - Copilot
flags:
verse: Matthew 7:7
prose: true
---

Khan Academy
[uses GraphQL](https://blog.khanacademy.org/genqlient-a-truly-type-safe-go-graphql-client/)
to handle all request to query and mutate data. Each service in the system
contributes to the GraphQL schema, and everything is ultimately combined into a
single file. If a developer wants to know what our API can do, the answer is in
that file.

The problem is that **it's over 80,000 lines long**.

Most of the time you can get by searching the file for keywords. If you're
interested in the user or classrooms or a specific feature, you can find
breadcrumbs that lead you to the answer. But sometimes you're dealing with
unfamiliar terms or features old enough to have been renamed over the past
decade. File search alone won't always get the job done.

Yesterday I was in this situation and turned to Copilot in VS Code. I switched
it to "Ask" mode and entered my query: "How can I determine if a user is in a
given district?" The model interpreted by question, read the file in chunks, and
then returned an answer.

Of the options provided, only one included the exact terms that I had in my
query. After inspecting the response, I found that the best option used an old
term that we don't use anymore and I've never heard. I would not have found that
by searching the file by myself. Uncovering the answer was only possible with an
LLM.

I'm generally skeptical of using AI to write production code that matters. But
as a search tool, I'm increasingly convinced that they are a powerful addition
to a developer's toolbox. When file search can't surface the answer, the ability
to ask questions of large files with an LLM is a valuable resource.
