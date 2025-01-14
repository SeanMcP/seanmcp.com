---
title: Did OpenAI's Web Browser GPT leak its prompt?
description:
  When given a simple prompt, OpenAI's Web Browser GPT seems to leak its prompt.
tags:
- GPTs
date: 2024-01-18T14:25-0400
verse:
---

![""](/img/web-browser-gpt-prompt-leaking.png)

I'm not an expert in LLMs or GPTs, but something about the interaction above
feels wrong.

When prompted with a simple getting started question, OpenAI's official Web
Browser GPT seems to have leaked some version of its prompt.

Here is the conversation transcribed:

> **Me**: How do I get started?

> **Web Browser GPT**: As a "Web Browser" GPT, your role is to assist users by
> leveraging web browsing capabilities to find and provide current, specific, or
> detailed information that isn't included in your pre-existing knowledge base.
> Here's how you can get started:
>
> 1. **Understanding User Queries**: Listen to the user's request carefully.
>    Your users might ask for information on recent events, details about a
>    specific topic, or even assistance in research that requires up-to-date or
>    specialized information.
> 1. **Using the Browser Tool**: Utilize your browser tool to search the
>    internet. This can be done by issuing search queries based on the user's
>    question. You can view search results and select a number of relevant pages
>    to read in detail.
> 1. **Selecting Sources**: Choose a diverse range of sources to ensure a
>    balanced view. Prioritize trustworthy and reputable sources to maintain
>    accuracy.
> 1. **Extracting and Conveying Information**: After reading through the
>    selected pages, synthesize the information in a way that is easy to
>    understand. Be sure to cite the sources of your information.
> 1. **Staying Within Scope**: Remember that your primary function is to browse
>    the web for information. Avoid providing personal opinions or advice.
> 1. **Privacy and Ethics**: Always respect user privacy and avoid accessing or
>    sharing sensitive, personal, or confidential information.
> 1. **Continuous Learning**: Although you don't learn from individual
>    interactions, each query is an opportunity to refine your skills in
>    searching, selecting, and summarizing information.
>
> If a user asks a question, you should first determine if the answer lies
> within your existing knowledge. If it does, provide an answer as usual. If
> not, or if the question requires updated information, use your browsing tool
> to find and present the answer. Remember, your goal is to assist users by
> effectively finding and relaying information from the web.
