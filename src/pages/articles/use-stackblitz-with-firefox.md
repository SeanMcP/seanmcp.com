---
layout: "@layouts/ArticleLayout.astro"
title: How to use StackBlitz with Firefox
description: Disable enhanced tracking protections to use StackBlitz with Firefox
pubDate: 2022-08-23
tags:
  - Firefox
  - StackBlitz
verse:
# /img/<IMAGE>.min.jpg
image:
---

StackBlitz is a great tool for rapidly prototyping web applications. In recent weeks, I has been my go-to tool for testing out new web technologies ([CodeSandbox's loss](/notes/42/)). However, when you try to use StackBlitz with Firefox, the preview window gives the following error message:

![Error message reads: Enable Third-Party Cookies. Looks like your browser is blocking our Service Worker. To see this web page, please allow third-party cookies for this site.](/img/stackblitz-firefox-error.png)

> Enable Third-Party Cookies
> Looks like your browser is blocking our Service Worker. To see this web page, [please allow third-party cookies for this site](https://developer.stackblitz.com/docs/platform/third-party-blocker/).

If you follow the link, it leads you to a guide for enabling the feature for Chrome – a great addition to the error message but not helpful for Firefox users.

To enable the StackBlitz preview pane in Firefox, select the shield icon in the URL bar and turn "Enhanced tracking protections" off for this site:

![](/img/stackblitz-firefox-setting.png)

Once that setting is disabled, Firefox will prompt you to reload the page. Once you do that, you should see the shield icon with a line through it to indicate that Firefox is providing no additional protections:

![](/img/stackblitz-firefox-off.png)

But more excitingly, the preview pane is now working! With that setting configured, you should not be able to use StackBlitz's features in Firefox.

![](/img/stackblitz-firefox-working.png)

Happy blitzing!
