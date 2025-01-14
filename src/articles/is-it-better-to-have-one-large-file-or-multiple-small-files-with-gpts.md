---
title: Is it better to have one large file or multiple small files with GPTs?
description:
  Using a single file seems to reduce response times, but there is more to the
  story
tags:
- AI
- GPTs
date: 2023-11-15T10:46-0400
verse:
---

**tl;dr:** Using a single file seems to reduce the likelihood of a
knowledge-base loading and improve response times overall.

**Introduction**: Custom GPTs allow you to upload files that it will reference
when answering questions. In my experience, the response time with these
knowledge-base GPTs is really slow. That lead me to the question:

> Is there a way to improve the response time by altering the number/length of
> files in the knowledge base?

I expected that the single large file would result in a faster response time
than many smaller files, because loading an additional file will take longer
than reading the same additional content from an already opened file.

**Materials and methods**: I uploaded the maximum number of files with dummy
text to a GPT. One file contained a secret: `the secret is: banana bread` (file
6 of 10). I then asked the GPT “what is the secret?” and timed the response with
a stopwatch. In between runs, I removed all of the files and added them back. I
ran it again with single file of approximately equal length that contained the
same secret text.

**Results**:

- Many files (seconds)
  1. 25.24†
  2. 7.82
  3. 33.81†
  4. 5.96
  5. 23.79†
  6. 7.73
  7. 14.19†
  8. 7.76
  9. 5.92
  10. 8.75
- Single file (seconds)
  1. 6.92
  2. 6.53
  3. 7.10
  4. 9.62
  5. 11.78

† Indicates runs where the GPT indicated knowledge-base loading

Mean (seconds):

- Many files (with loading): 14.97
- Many files (without loading): 7.32
- Single file: 8.39

**Discussion**: This experiment was pretty hacky! Using a stopwatch was not
ideal, and it was difficult to decide _when_ to stop with a streaming message.
Response times may have varied significantly due to network connections or
traffic on OpenAI’s servers. We shouldn’t take away any specifics from this
experiment, but we might be able to draw some general insight.

**Conclusion**: When the GPT loads from its knowledge base, the response times
were significantly slower. But when it didn’t, or at least didn’t indicated that
it did, the results were similar between multiple files and single files. Based
on this, my hypothesis was wrong. Generally, the response times did not vary
significantly for multiple files _vs_ a single file.

However, the data seem to show that using multiple files is more likely to
trigger knowledge-base loading. And since that takes a long time, it is
preferable to use fewer files to improve response time.
