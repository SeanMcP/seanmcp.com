---
title: What happened to @react-native-community packages?
description: Why you won't be installing any community packages on your next React Native project
date: 2021-10-05
tags:
    - mobile
    - react-native
verse:
# /img/<IMAGE>.min.jpg
image:
---

When React Native was first released, it included extra modules that were helpful for mobile development like `WebView`, `NetInfo`, and `AsyncStorage`. Later in 2018, [the RN team made the decision](https://github.com/react-native-community/discussions-and-proposals/issues/6) to deprecate those internal modules and hand them off to the community to maintain.

This spawned [the `@react-native-community` organization on GitHub](https://github.com/react-native-community) and a number of community-maintained packages like `react-native-webview` and `react-native-netinfo`. If you were working in React Native in the late 20-teens, you probably remember adding these dependencies and switching out imports.

In most cases, the community proved capable to maintain current packages and continue development. However, some packages were abandoned as requirements changes or maintainers moved on. Alternative options popped up and gained the support of the community, driven by individual developers or those at different organizations like Expo, Wix, Callstack, or Software Mansion.

Developers who were new to React Native might defer to `@react-native-community` packages, not because they were better than those alternatives but because they appeared to be "the approved solution" from the community. That wasn't ideal for developers, which might end up with unmaintained projects, nor for the greater React Native community that was driving things forward.

At the end of 2019, the [`@react-native-community` decided to move modules out of the organization](https://github.com/react-native-community/discussions-and-proposals/issues/176) and into individual project organizations. In [the words of one maintainer](https://github.com/react-native-community/discussions-and-proposals/issues/176#issuecomment-719172928):

> These modules aren't being maintained by fewer people, and aren't any less supported. But now perception can match the reality.

As a result, scoped packages like `@react-native-community/async-storage` moved to `react-native-async-storage/async-storage`. But besides the name, little to nothing else changed about how they were maintained.

By offloading packages, `@react-native-community` is free to focus on higher-level goals for the community, like tools to discover and maintain high-quality React Native packages. Two projects still owned by the community organization are [`upgrade-helper`](https://github.com/react-native-community/upgrade-helper) and [React Native Directory](https://reactnative.directory/), both exemplifying its new focus.

So while you won't be adding `@react-native-community` packages to your projects going forward, that is ultimately for the best. Instead, use resources like [React Native Directory](https://reactnative.directory/) or [`awesome-react-native`](https://github.com/jondot/awesome-react-native) to find the best solution for you and your application.

## Further reading

- [Learn Core (2018)](https://github.com/react-native-community/discussions-and-proposals/issues/6)
- [What packages belong in react-native-community (2019)](https://github.com/react-native-community/discussions-and-proposals/issues/176)
- [Organization repository policy](https://github.com/react-native-community/discussions-and-proposals/blob/master/partners/0001-organization-repository-policy.md)