---
title: Use multiple Chrome Profiles when debugging
description:
  With specialized profiles, you can help identify issues without messing with
  your favorite settings.
pubDate: 2022-06-06T12:00-0400
tags:
  - Debugging
  - Chrome
  - Dev Tools
---

Awhile back, I read about using separate Chrome profiles[^1] for debugging. The
idea is to have specific environments that are specially configured to debug
different kinds of issues.

While the article mentioned many different profiles for different users and
scenarios, I’ve found myself settling on three: my main profile, the guest
profile, and a DevTools profile.

The main profile is where I am signed into Google with my personal or work email
address. If you use Google Chrome regularly and have a Google account, you
probably have a profile setup already. This is where I do most of my development
and debugging work. I have a selection of extensions installed and a few
resources like bookmarks and snippets to help my workflow. The first step when
debugging is to use my current setup – if I can get things reproducing here,
great! But if I have to alter settings or clear data, then I reach for something
else.

The next option is the default Guest profile in Chrome. When switching to a
guest profile, you lose the session and any information stored in the browser.
It's a clean slate. This is helpful when you want to reproduce the bug in a
particular scenario but don’t want to logout or toggle feature flags on your
main profile. Guest profiles have full access to the browser’s DevTools but do
not support extensions. For that, I have a third option.

Finally, I have a profile specifically for DevTool extensions. Here I have the
React DevTools installed, and any additional else that would be helpful when
debugging. If I know that I am investigating a React issue, I will switch over
to this profile and then explore the tree with the Components panel or run tests
in the Profiler. Any created profile will save site data, so I make a point of
frequently resetting everything to ensure a clean environment for reproducing
bugs.

With these three profiles, I find that I'm better able to identify and fix
issues that I encounter when developing. Give it a try and let me know how it
works for you.

Happy debugging!

[^1]:
    Read Vitaly Friedman’s
    [_DevTools Debugging Tips And Shortcuts_](https://www.smashingmagazine.com/2021/02/useful-chrome-firefox-devtools-tips-shortcuts/)
