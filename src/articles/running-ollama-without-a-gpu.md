---
title: "Running Ollama without a GPU"
description:
  You can run Ollama on an older device, but the response will be slow and/or
  low quality.
tags:
  - Articles
  - AI
  - LLMs
  - Ollama
date: 2024-02-24T06:48-0400
verse: Proverbs 20:29
---

**tl;dr** You _can_ run Ollama on an older device, but the response will be slow
and/or low quality.

I have successfully run Ollama with a new Macbook M2 and a mid-range gaming PC,
but I wanted to experiment using an older computer. My personal laptop is a 2017
Lenovo Yoga with Ubuntu and no graphics card. Here are some specs:

- CPU: Intel i5-7200U CPU @ 2.50GHz
- RAM: 4GB
- Memory: 128GB SSD

Following the setup instructions for Linux, Ollama installed fine but printed
the following:

```
WARNING: No NVIDIA GPU detected. Ollama will run in CPU-only mode.
```

This was foreshadowing for everything to follow.

I decided to run `mistrel` and sent the model a prompt by the terminal. The
response was streaming in at about one character every four seconds, and my
computer was obviously struggling with the task. I held on for around three
minutes but then had to quit when the response was less than on sentence.

That seemed conclusive enough, but I decided to try with a smaller model. I ran
`tinyllama` and was able to stream responses at a normal rate. However, the
quality of the responses was terrible. I don't have experience with this model
on a more powerful machine, so I can't blame the model. But the responses were
so bad that I wouldn't use it for anything on this device.

These results were disappointing, but the reality is that running LLMs is
resource intensive. So if you want to try running LLMs locally with Ollama, make
sure you have a modern CPU or a dedicated GPU.
