---
title: How to get the browser and version in JavaScript
description: A brief journey into the dangerous world of user agent sniffing
pubDate: 2020-05-19
tags:
    - JavaScript
verse: Ephesians 5:2
---

For a recent project, I wanted to display the browser and version on the screen. I figured that this would be possible in JavaScript, so I went searching around.

This led me to the [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent), ["sniffing"](https://en.wikipedia.org/wiki/User_agent#User_agent_sniffing), and its [wild and crazy history](https://www.w3.org/community/webed/wiki/Optimizing_content_for_different_browsers:_the_RIGHT_way#A_brief_history_of_browser_sniffing). I also read a bunch of articles on why serving different content to different browsers is a bad idea. [I'll link them at the bottom of this article](#additional-reading).

I just want to display the browser and version, so the referencing the user agent is a fine enough solution ([even if temporary](https://css-tricks.com/freezing-user-agent-strings/)). **But you should definitely think twice before you go user agent sniffing**.

## Accessing the user agent

You can access the user agent from the read-only [global `Navigator` interface](https://developer.mozilla.org/en-US/docs/Web/API/Navigator). That's as simple as writing:

```js
console.log(navigator.userAgent)
```

Depending on your browser, you should see a few different outputs:

```js
// Firefox
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:77.0) Gecko/20100101 Firefox/77.0

// Chrome
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36

// Edge (Chromium)
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 Edg/81.0.416.77

// Safari
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15
```

These are fascinating, but for this article we are only interested in the differences. If we just look at the tail for each, we get:

- Firefox: `"Firefox/77.0"`
- Chrome: `"Chrome/81.0.4044.138 Safari/537.36"`
- Edge (Chromium): `"Chrome/81.0.4044.138 Safari/537.36 Edg/81.0.416.77"`
- Safari: `"Version/13.1 Safari/605.1.15"`

With this, we know have enough information to parse the string.

## Sniffing logic

Chrome, Edge, and Safari all identify as "Safari", so let's start our logic with the simplest user agent: Firefox. After that, it's a process of determining who has a unique string to search for:

```js
const { userAgent } = navigator

if (userAgent.includes('Firefox/')) {
    // Firefox
} else if (userAgent.includes('Edg/')) {
    // Edge (Chromium)
} else if (userAgent.includes('Chrome/')) {
    // Chrome
} else if (userAgent.includes('Safari/')) {
    // Safari
}
```

Once you can identify the browser from the user agent, it's just a matter of using your favorite string parsing method to grab the version. Here's the code for Firefox:

```js
if (userAgent.includes('Firefox/')) {
    // Firefox
    console.log(`Firefox v${userAgent.split('Firefox/')[1]}`)
}
```

If you know of a better way, please [tweet me your solution](https://twitter.com/intent/tweet?text=.@snmcp ) and I'll give you a shoutout here.

Happy coding!

## Additional reading

- [_Browser detection using the user agent_](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent) on MDN
- [_Browser Detection is Bad_](https://css-tricks.com/browser-detection-is-bad/) by Chris Coyier on CSS-Tricks
- [_History of the browser user-agent string_](https://webaim.org/blog/user-agent-string-history/) by Aaron Andersen on WebAIM
- [_Optimizing content for different browsers: the RIGHT way § 2.2_](https://www.w3.org/community/webed/wiki/Optimizing_content_for_different_browsers:_the_RIGHT_way) on W3