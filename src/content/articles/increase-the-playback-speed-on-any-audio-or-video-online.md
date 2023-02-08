---
layout: "@layouts/ArticleLayout.astro"
title: Increase the playback speed on any audio or video online
description: Since audio and video are native HTML elements, you can change the playing speed with a quick console script
pubDate: 2020-12-15
tags:
    - Console Scripting
    - Dev Tools
    - JavaScript
verse: Deuteronomy 6:4
# /img/<IMAGE>.min.jpg
image:
---

I like learning from audio and video, from podcasts to YouTube videos. My favorite applications let you alter the playback speed of the audio and video so that you can consume the content faster (or slower).

I find this particularly useful for unscripted podcasts or coding videos and will usually increase the speed to 2x (or more). At that rate, I can get through a 60 minute podcast in half the time!

However, I sometimes find myself on websites where they do not allow you to change the playback speed. Recently I was watching a coding tutorial on Vimeo and was stuck at the normal speed. Not a good use of my time.

Since online audio and video are played through native HTML elements, we have the ability to customize their behavior with the developer console.

First [open the dev tools with your favorite method](./how-to-open-dev-tools), and click on the "Console" tab. Then enter and run the following script^[[`$$` is a shorthand for `document.querySelectorAll()`](https://developers.google.com/web/tools/chrome-devtools/console/utilities#queryselectorall) and works in all modern browsers]:

```js
$$('audio,video').forEach(n => n.playbackRate = 2.0)
```

This grabs all of the `audio` and `video` elements from the DOM, loops over each node, and sets the playback rate to `2.0` or 2x. If you prefer a different rate, you will only need to edit that last number.

If you are working on an application that plays audio or video, make sure to give the user the ability to change the playback rate. That way everyone can listen at the speed that is best for them^[For some light reading on the subject, checkout [this paper on _Human Listening Rates_](https://homes.cs.washington.edu/~reinecke//Publications_files/Bragg_CHI2018.pdf) by the University of Washington CS department].

Happy listening/watching!
