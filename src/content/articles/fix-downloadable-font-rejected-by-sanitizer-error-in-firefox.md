---
title: "Fix 'downloadable font: rejected by sanitizer' error in Firefox"
description: Make sure that the path to your font is correct before going down the debugging rabbit hole.
pubDate: 2021-04-01
tags:
    - Debugging
    - Error
    - Firefox
verse: Philippians 2:5-11
# /img/<IMAGE>.min.jpg
image:
---

I ran into an issue today when I tried to serve a typeface I downloaded from Google Fonts. When I added the files and `@font-face` rules to my CSS, I got the following error in the Firefox console:

```
downloadable font: rejected by sanitizer
    (font-family: "Inter" style:normal weight:400 stretch:100 src index:0)
    source: http://localhost:8080/fonts/Inter-Regular.ttf
```

The Chrome console had nothing, so I figured this was a Firefox issue. After some searching around, I learned that [Firefox is checking](https://support.mozilla.org/en-US/questions/913498) that a font file is valid before loading it, which can protect you against some attacks.

Inter is a pretty popular typeface, so I ruled out corrupt or malicious font files. Further digging lead me to some solutions, but [they seemed](https://github.com/FortAwesome/Font-Awesome/issues/8078) [situation specific](https://stackoverflow.com/questions/57835543/how-to-fix-downloadable-font-rejected-by-sanitizer).

I was prepared to live with the error, when I gave it one last look. The source url (which I've wrapped here but was broken on two lines in the console) was incorrect. The path to the font files should have been `assets/fonts/Inter-Regular.ttf`. Fixing that path in `@font-face`'s `src` resolved the issue.

If you encounter a similar error, check to make sure that the path to your font file is correct. It would be helpful if the message was more descriptive: "downloadable font: rejected by sanitizer (file not found)".

Happy font serving!
