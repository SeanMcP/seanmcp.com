---
title: What is Hermes in React Native?
description: Hermes is a JavaScript engine that is designed to run on mobile devices. It helps power React Native on Android – and now iOS – devices.
pubDate: 2021-08-17
tags:
  - Mobile
  - React Native
verse: Acts 14:12
image:
---

React Native is framework for building Android and iOS application using React and native capabilities. It allows developers to write JavaScript code that will interact with platform APIs and native components to build interactive user interfaces.

To accomplish that, React Native needs an engine to run JavaScript code on mobile devices. Apple includes [JavaScriptCore (JSCore) on iOS devices](https://developer.apple.com/documentation/javascriptcore), but [Android does not have a JavaScript engine](https://stackoverflow.com/questions/8374016/how-to-execute-javascript-on-android).

So React Native included a version of JSCore in Android builds to execute JavaScript. This resulted in larger Android application packages (APKs) for React Native apps, and some noticeable performance issues.

In 2019, the [React Native team announced Hermes](https://reactnative.dev/blog/2019/07/17/hermes) as "a new JavaScript engine optimized for React Native." Android apps built with React Native and Hermes were [smaller, interactive faster, and used less memory](https://engineering.fb.com/2019/07/12/android/hermes/).

[React Native version 0.60.1](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#v0601) (2019) replaced JSCore with Hermes for Android builds. Later in version 0.64 (2021), React Native added [support for Hermes on iOS](https://reactnative.dev/blog/2021/03/12/version-0.64). [With one small change to your project's `Podfile`](https://reactnative.dev/blog/2021/03/12/version-0.64#hermes-opt-in-on-ios), you can include Hermes to improve your app's performance:

```ruby
use_react_native!(
   :path => config[:reactNativePath],
   # to enable hermes on iOS, change `false` to `true` and then install pods
   :hermes_enabled => true
)
```

You'll want to do some profiling of iOS apps with JSCore and Hermes before committing to the change, but it is exciting to see more alignment between the two platforms.

To read more information about to use Hermes and how to debug it, [check out the documentation](https://reactnative.dev/docs/hermes).

Happy coding!
