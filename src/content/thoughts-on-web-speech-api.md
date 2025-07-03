---
title: Thoughts on Web Speech API
description:
  Browser native text-to-speech is neat, but it lacks the polish that most users
  expect
tags:
  - Articles
  - JavaScript
  - Text-to-Speech
date: 2023-11-08T20:52-0400
verse: 2 Corinthians 8:7
---

Last week I spent time working with the
[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
for a hackathon at Khan Academy. Here are some quick lessons learned from my
experience:

**Web Speech is a weird partnership between browser and OS.** There are
similarities across browsers on a single operating system, and across operating
systems with a single browser. Make sure to test as many browser/OS combinations
as you can.

**Voice has a big impact on how text is read.** I was experimenting a lot with
math expressions, and I found some voices would read with correct math
terminology while others would not. For example, on macOS the default voice
(Samantha) reads `3x × 5` as “three times ex five” while Gordon reads it as
“three ex times five”.

**The default voice on Ubuntu was really bad.** Most of the voices on ChromeOS,
macOS, and Windows were fine, but Ubuntu was almost unintelligible. I didn’t
play around with other voice options, but it might be a showstopper if you have
a significant number of Linux users.

**Sometimes `speechSynthesis.getVoices()` returns an empty array.** I couldn’t
find any official documentation about this, but some articles online suggest
that the browser populates that list well after the initial page load. If you
are trying to populate a `select` field with voice options, make the request for
voices as late as possible.

**`speechSynthesis.speak()` and `speechSynthesis.cancel` are unpredictably
asynchronous.** I think this goes back to the weird partnership between browser
and OS, but calling `speak()` doesn’t happen immediately and `cancel()` can
“swallow” subsequent `speak()` calls. I needed to use timeouts with a 100ms
delay in a few areas to ensure that the utterance would speak when expected.

The Web Speech API is neat, but it has a lot of rough edges. It’s unlikely that
a major user-facing feature would use it alone, especially with the rapid
developments in AI text-to-speech. That said, Web Speech provides a solid
foundation to progressively enhance with more power TTS solutions.
