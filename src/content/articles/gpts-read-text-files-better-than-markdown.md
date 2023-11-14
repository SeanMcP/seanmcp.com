---
title: GPTs read text files better than markdown
description: Use text files instead of markdown with OpenAI’s custom GPTs
tags:
    - AI
    - GPTs
pubDate: 2023-11-14T06:23-0400
verse: Luke 4:21
---

**tl;dr:** Use text files instead of markdown with OpenAI’s custom GPTs

I conducted an experiment to see if the file type of uploaded content had an impact on how GPTs could read the information.

I created two files with the following content:

- `secret.md`: `the secret is: bananas foster`
- `secret.txt`: `the secret is: banana split`

Then I uploaded one file to a GPT and then asked the question: “What is the secret?”

With the markdown file, the GPT consistently had no clue what I was asking for and refused to or hallucinated an answer. I tried to help by providing some instructions to look at the uploaded file for the answer. My goal was to provide a kind of “table of contents” for the GPT to reference.

Here are some of the iterations:

- `"the secret" is in secret.md`
- `"the secret" is in secret.md. Read that file before answering.`
- `"the secret" is in secret.md. Load the contents of that file.`
- With other permutations

The only success with the markdown file was after selecting “Code interpreter”, where the GPT wrote (and ran?) a Python script to read and print the contents of `secret.md`. Pretty cool, but definitely not ideal.

With the text file, it just worked. I uploaded the file and with no instructions the GPT was able to supply the new secret.

Based on these results, it is better to use text files with custom GPTs as opposed to markdown.
