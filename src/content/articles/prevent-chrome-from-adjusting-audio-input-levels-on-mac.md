---
title: Prevent Chrome from adjusting audio input levels on Mac
description: A clever extension can prevent Google Meet from muting your bluetooth microphone
pubDate: 2022-01-11T12:00-0400
tags:
  - Bug
  - Chrome
  - macOS
---

Starting Fall of 2021, I noticed that my bluetooth headphones would periodically mute me while I was speaking during video chats on Google Meet. I tried multiple sets of bluetooth headphones, and they all had the same issue.

I learned last week that macOS will automatically mute an audio input when the input level is set to zero. While in meetings, I kept an eye on the level in System Preferences > Sound > Input and noticed that it would decrease as I spoke. As soon as the level reached zero, my headset would notify me that it had been muted.

There are no settings in Google Chrome (on in my case, the new Microsoft Edge) nor Google Meet to disable those input level adjustments, and there is [an unanswered help question](https://support.google.com/chrome/thread/7542181/chrome-is-auto-adjusting-the-microphone-level?hl=en)) with a lot of folks experiencing the same issue.

[One of the responders](https://support.google.com/chrome/thread/7542181/chrome-is-auto-adjusting-the-microphone-level?hl=en) came up with a solution: [a Chrome extension](https://chrome.google.com/webstore/detail/disable-automatic-gain-co/clpapnmmlmecieknddelobgikompchkk) that prevents certain domains from changing the input levels.

After installing that from the Chrome Web Store, I navigated to Google Meet, activated the extension, and gave it permissions on that domain. The page refreshed, and the issue was resolved: no more adjusted input levels and no more unwanted muting.

It’s great that there are creative solutions like this available, h/t [Joey Watts](https://github.com/joeywatts), but its frustrating that issues like this can go unresolved for so long on popular projects like Google Chrome.

Happy resolving!
